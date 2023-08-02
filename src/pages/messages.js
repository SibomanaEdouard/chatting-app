import React from "react";
import Header from "./HeaderWork";
import {RiThumbUpFill} from 'react-icons/ri'
import {RiDiscussFill} from "react-icons/ri"
import {BsFillSendFill} from 'react-icons/bs'
import { useState } from "react";
import { Friends } from "./Friends";
import { GetFriends, GetFriendsOnly } from "./Recommands";

//this is sidebar for messages
const FriendBar=()=>{
    
    return(
        <div className="firstsidebar">
            <h1>Friends</h1>
          <GetFriendsOnly/>

        </div>
    )
}
//this is the input field of message
const MessageForm=()=>{
    const [input,setInput]=useState("");
    const ChangeHandle=(e)=>{
        e.preventDefault();
     setInput(e.target.value);
    
    }
    

return(
 <div className="messagesfield">
            <form>
                <RiThumbUpFill className="rithumIcon"/>
                <RiDiscussFill className="ridiscicon"/>
                 <input 
                 type="text" 
                 value={input}
                 name="post"
                onChange={ChangeHandle}
               placeholder="Type the message here"
                 />
                   <BsFillSendFill className="bsend2"/>
            </form>
          
        </div> 
    
) 
}
//this Receivedmessages
const ReceivedPersonMess=()=>{

    return(
        <div className="receivedMess">
            <div>

            <h1>This  is the received messages</h1>
            </div>
        </div>
    )
}
//this is the sent messages
const SentPersonMess=()=>{

    return(
        <div className="sentMess">

            <h1>This is the sent messages</h1>
        </div>
    )
}
//this is for messages
export const Messages=()=>{
    return(
        <div>
            <Header />
            <FriendBar/>
            <MessageForm/>
            <ReceivedPersonMess/>
            <SentPersonMess/>
        </div>
    )
}