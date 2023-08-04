const directMessages=require("../models/directMessages");

//this is the logic to get the received messages
const ReceiverMessages=async(req,res)=>{
    const {receiver}=req.body;
try{
const isMessages=await directMessages.find({receiver});
if(isMessages!=null){
res.status(200).json(isMessages);
}else{
    res.status(404).json({error:"No received messages"});
}
}catch(error){

    }
} 

//this is the logic to get sent messages
const SentMessages=async(req,res)=>{
    const {sender}=req.body;
try{
const isMessages=await directMessages.find({sender});
if(isMessages!=null){
res.status(200).json(isMessages);
}else{
    res.status(404).json({error:"No sent messages found"});
}
}catch(error){

    }
} 
module.exports={
    ReceiverMessages,
    SentMessages
}