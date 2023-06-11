const express=require('express');
const bcrypt=require("bcrypt");
const Routed=express();
const Users=require('../models/users');
const Messages=require("../models/messages")


//this is to insert the user in database

Routed.post('/', async (req, res) => {
  const saltRound = 10;
  const { firstname, lastname, email, phone, password } = req.body;
  try {
    const checkingAvail = await Users.findOne({ email });
    const checkingPhone = await Users.findOne({ phone });
    if (!checkingAvail || !checkingPhone) {
      console.log("The user " + lastname + " was created!");
      const salt = await bcrypt.genSalt(saltRound);
      const hashedPassword = await bcrypt.hash(password, salt);
      const newUsers = new Users({
        firstname,
        lastname,
        email,
        phone,
        password: hashedPassword,
      });
      await newUsers.save();
      res.status(201).json({ message: "The data was saved successfully" });
    } else {
      const error =
        "The email or phone number you entered is already found in the system. Please change phone or email and try again!";
      res.status(400).json({ error });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "The email or phone number you entered is already found in the system. Please change phone or email and try again!" });
  }
});

//To validate the user
Routed.post('/login',async(req,res)=>{
const {email,password}=req.body;

try{
const findUser= await Users.findOne({email});
if(findUser){
const storedPassword=findUser.password;

//compare the stored password and entered password;
  const comparePasswords=await bcrypt.compare(password,storedPassword);
  if(comparePasswords){
    console.log(findUser._id)
    const result={
      id:findUser._id,
      lastname:findUser.lastname
    }
    res.status(200).json(result);
  } 
  else{
    res.status(400).json({error:"Invalid email or password ! Please check and try again!"})
 
  }

}
else{
  res.status(404).json({error:"Invalid email or password ! Please check and try again!"});

}
//this is to catch errors from the backend
}catch(error){ 
  console.log(error);
  res.status(400).json({error:" Sorry something went wrong. Please try again later "});

}

})


//to update password

Routed.put('/', async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  try {
    // Check if the user exists in the database
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(400).json("Invalid email");
    }

    // Compare the passwords
    if (password !== confirmPassword) {
      return res.status(400).json("The passwords do not match");
    }

    // Update the password in the database
    const newPassword =await bcrypt.hash(password,10);
    const result = await Users.updateOne(
      { email: email },
      { $set: { password: newPassword } }
    );
    
      if(result){
      return res.send({message:"Password updated successfully"});
    } else {
      return res.status(400).json("Failed to update password");
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json("Something went wrong, please try again later!");
  }
});

//this is to save the message in the database
Routed.post('/posts',async(req,res)=>{

try{

  const {content,sender,type}=req.body;
  const confirmUser=await Users.findById(sender);
  if(!confirmUser){
    res.status(404).json({error:"You are not found in our system"});
  } 
const Newmessage=await new Messages({
  content,
  sender,
  type
})

//this is to save message to database
if(!Newmessage.content){
 return res.status(400).json({error:"Please Insert the message before send."})
  
}
const saveUser=await Newmessage.save();

if(saveUser){

 res.status(200).json(saveUser.content)
}else{


  res.status(400).json({error:"Failed to send the message. Please try again later"})
}
}catch(error){
  console.log(error);
  res.status(400).json({error:"sorry something went wrong! Please Try again later"});
  
}
})

//this is the route to retrieve data from the backend to the frontend
Routed.get('/posts',async(req,res)=>{
  try{
  const allPosts=await Messages.find().select(' content , sender , time ');
  if(allPosts.length <= 0){
    res.status(404).json("No post  found on this place !")
  }
  const senderId=allPosts.map(posts=>posts.sender)

  const usernames=await Promise.all(senderId.map(async(userId)=>{
    const user=await Users.findById(userId).select('lastname')
    return user ? user.lastname:'unknown';
  }))

  //combine the name from users with the messages
const MessageWithOwner=allPosts.map((post,indes)=>({
sender:usernames[indes],
content:post.content,
time:post.time
}))
  res.status(200).json({MessageWithOwner});
  }catch(error){
console.log(error)
res.status(400).json({error:"sorry something went wrong! Please try again latter"})
  }
}) 

//this is for recommandations
Routed.get('/recommends',async(req,res)=>{

try{
  const users= await Users.find().select('lastname , _id');
  if(users){

  console.log(users);
  res.status(200).json(users);
  }
  else{
    res.status(404).json({error:"No person is found on this page"});
  
  }
}catch(error){
  console.log("Sorry something went wrong");
  res.status(400).json({error:"Sorry something went wrong"});

}
})
module.exports=Routed;