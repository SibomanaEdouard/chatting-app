const directMessages=require("../models/directMessages");

//this is the logic to get the received messages
const ReceiverMessages=async(req,res)=>{
    const {receiver,sender}=req.body;
try{
const isMessages=await directMessages.find({receiver,sender}).select('content');
if(isMessages.length>0){
res.status(200).json(isMessages);
}else{
    res.status(404).json({error:"There is no conversation with this person! Please start conversation"});
}
}catch(error){
console.log(error);
res.status(500).json({error:"something went wrong"});
    }
} 

//this is the logic to get sent messages
const SentMessages=async(req,res)=>{
    const {sender,receiver}=req.body;
try{
const isMessages=await directMessages.find({sender,receiver}).select('content');
if(isMessages.length>0){
res.status(200).json(isMessages);
}else{
    res.status(404).json({error:"There is no conversation with this person! Please start conversation"});
}
}catch(error){
    console.log(error);
    res.status(500).json({error:"something went wrong"});
    }
} 

module.exports={
    ReceiverMessages,
    SentMessages
}
