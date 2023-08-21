import React, { useEffect } from "react";
import Header from "./HeaderWork";
import {BsCameraVideoFill} from 'react-icons/bs'
import {FaRegImage} from "react-icons/fa"
import {BsFillSendFill} from 'react-icons/bs'
import { useState} from "react";
import {RiEmotionNormalLine} from "react-icons/ri"
// import { Friends } from "./Friends";
import { GetFriendsOnly } from "./Recommands";
import axios from "axios";


//this is sidebar for messages
const FriendBar=()=>{
return<div id="sidebar" className=""  style={{backgroundColor:"#D9D9D9", 
height: "100vh", 
marginBottom: "0%",
marginTop: "10vh",
 display: "flex",
  flexDirection: "column",  
  wordWrap: "break-word",
  width:"11vw",
  position:"fixed"
  
  }}>
<div className="p-3">
  <div className="d-flex justify-content-between align-items-center">
    <button
      type="button"
      id="sidebarCollapse"
      className="btn btn-light d-md-none"
      data-bs-toggle="collapse"
      data-bs-target="#friendsCollapse"
      aria-expanded="false"
      aria-controls="friendsCollapse"
    >
      <i className="bi bi-people"></i>
    </button>
  </div>
</div>
<div className="collapse show" id="friendsCollapse">
  <GetFriendsOnly/>
</div>
</div>

};

//this is the form to be used in sending the messages
const MessageForm = () => {
  const friendId = localStorage.getItem('friendId');
  const userId = localStorage.getItem('id');

  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const sendMessage = async (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log(input , "friend id is "+friendId)
    try {
      const response = await axios.post('https://talknet-k4ku.onrender.com/sendirectmessage', {
        content: input,
        sender: userId,
        receiver: friendId,
      });

      if (response.status === 200) {
        alert(response.data.message);
        window.location.reload();
     setInput("");
      } else {
        throw new Error(response.data.error);
      }
    } catch (error) {
      console.log(error);
      window.location.reload();
      // alert(error);
    }
  };

  return (<div className="messagesfield" >
      <form onSubmit={sendMessage}>
        <BsCameraVideoFill className="rithumIcon  fs-1" />
        <FaRegImage className="ridiscicon  fs-1 m-2" />
        <input
          type="text"
          value={input}
          name="post"
          onChange={handleChange}
          placeholder="Type the message here"
        />       
        <RiEmotionNormalLine className="fs-1"/>
       <button type="submit" className="bsend2 btn border-0">
  <BsFillSendFill className="text-center fs-2"/>
</button>
      </form>
    </div>
  );
};


//this is to display received and sent messages
export const Messages = () => {
  const [rMessage, setReceivedMessages] = useState([]);
  const [sMessage, setSentMessages] = useState([]);

  // Get the id of the clicked user from localStorage
  const friend = localStorage.getItem('friendId');
  
  // Get the user id
  const user = localStorage.getItem('id');

  //this is the received messages
  const receivedMessages = async () => {
    try {
      const response = await fetch("https://talknet-k4ku.onrender.com/receivedmessages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sender: friend, receiver: user })
      });

      if (response.ok) {
        const data = await response.json();
        setReceivedMessages(data);
      } else {
        const errorResponse = await response.json();
        console.log(errorResponse.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //this is sent messages
  const sentMessages = async () => {
    try {
      const response = await fetch("https://talknet-k4ku.onrender.com/sentmessages", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sender: user, receiver: friend })
      });

      if (response.ok) {
        const data = await response.json();
        setSentMessages(data);

      } else {
        const errorResponse = await response.json();
        throw new Error(errorResponse.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //this is to invoke sent and received functions
  useEffect(() => {
    sentMessages();
    receivedMessages();
  });

  return(
<div className="messages">
  {/* <div className="row"> */}
    <Header />
  {/* </div> */}
    <div className="d-flex">
      <div className="">
    <FriendBar />
    </div>

    {/* Sent conversation */}
    <div className="p-3 text-start mt-5 d-block"
    style={{marginLeft:"10%"}}
    >
        {sMessage.length > 0 ? (
          <ul className="mt-5">
            {sMessage.map((sentMessages) => (
              <li
                key={sentMessages._id}
                style={{ backgroundColor: "#A0BDFF",borderRadius:"5px",display:"block" }}
                className="m-3 p-5 d-block w-100"
              >
                {sentMessages.content}<br/>
                <p className="text-end">{sentMessages.time}</p>
              
              </li>
            ))}
          </ul>
        ) : (
          <div className="d-flex align-items-center justify-content-center pt-5 mt-5">
            <p className="text-center m-0 pt-5">No message sent to this person</p>
          </div>
        )}
      </div>


      <div className="text-start p-3 mt-5">
        {rMessage.length > 0 ? (
          <ul className="mt-5">
            {rMessage.map((receivedMessages) => (
              <li
                key={receivedMessages._id}
                className="m-3 p-5 d-block"
                style={{ backgroundColor: "#D9D9D9", borderRadius:"5px"}}
              >
                {receivedMessages.content}<br/>
                <p className="text-end">
                {receivedMessages.time}
                </p>
             
              </li>
            ))}
          </ul>
        ) : (
          <div className="d-flex align-items-center justify-content-center pt-5 mt-5">
            <p className="text-center m-0 pt-5">No message received from this person</p>
          </div>
        )}
      </div>

      </div>
  <div className="row d-flex">
    <div className="col-md-10">
    <MessageForm />
    </div>
  </div>
</div>
  )
}