import React, { useEffect } from "react";
import Header from "./HeaderWork";
import {RiThumbUpFill} from 'react-icons/ri'
import {RiDiscussFill} from "react-icons/ri"
import {BsFillSendFill} from 'react-icons/bs'
import { useState} from "react";
// import { Friends } from "./Friends";
import { GetFriendsOnly } from "./Recommands";
import axios from "axios";


//this is sidebar for messages
const FriendBar=()=>{

  //this is  where to put js codes   

return<div id="sidebar" className="col-4"  style={{backgroundColor:"#D9D9D9", height: "95vh", marginBottom: "0%", display: "flex", flexDirection: "column",  wordWrap: "break-word",}}>
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
      const response = await axios.post('http://localhost:5500/sign/sendirectmessage', {
        content: input,
        sender: userId,
        receiver: friendId,
      });

      if (response.status === 200) {
        alert(response.data.message);
     setInput("");
      } else {
        throw new Error(response.data.error);
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <div className="messagesfield">
      <form onSubmit={sendMessage}>
        <RiThumbUpFill className="rithumIcon" />
        <RiDiscussFill className="ridiscicon" />
        <input
          type="text"
          value={input}
          name="post"
          onChange={handleChange}
          placeholder="Type the message here"
        />       
       <button type="submit" className="bsend2 btn border-0">
  <BsFillSendFill className="text-center"/>
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
      const response = await fetch("http://localhost:5500/sign/receivedmessages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sender: friend, receiver: user })
      });

      if (response.ok) {
        const data = await response.json();
        setReceivedMessages(data);
        console.log("The received messages: ", data);
      } else {
        const errorResponse = await response.json();
       
        console.log(errorResponse.error);
      }
    } catch (error) {
      console.log(error);
      // alert(error.message);
    }
  };

  //this is sent messages
  const sentMessages = async () => {
    try {
      const response = await fetch("http://localhost:5500/sign/sentmessages", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sender: user, receiver: friend })
      });

      if (response.ok) {
        const data = await response.json();
        setSentMessages(data);
        console.log("The sent messages are: ", data);
      } else {
        const errorResponse = await response.json();
        throw new Error(errorResponse.error);
      }
    } catch (error) {
      console.log(error);
      // alert(error.message);
    }
  };

  //this is to invoke sent and received functions
  useEffect(() => {
    sentMessages();
    receivedMessages();
  });

  return(
<div>
  <div className="row">

    <Header />
  </div>
    {/* Received conversation */}
    <div className="row d-flex">
      <div className="col-md-4">
    <FriendBar />
    </div>
    {/* Sent conversation */}
    <div className="col-md-3 sentMessages">
        {sMessage.length > 0 ? (
          <ul className="mt-5">
            {sMessage.map((sentMessages) => (
              <li
                key={sentMessages._id}
                style={{ backgroundColor: "#A0BDFF" }}
                className=""
              >
                {sentMessages.content}
              </li>
            ))}
          </ul>
        ) : (
          <div className="d-flex align-items-center justify-content-center">
            <p className="text-center m-0 p-0">No message sent to this person</p>
          </div>
        )}
      </div>
      <div className="col-md-3 receivedMessage">
        {rMessage.length > 0 ? (
          <ul>
            {rMessage.map((receivedMessages) => (
              <li
                key={receivedMessages._id}
                className="receivedList m-2"
                style={{ backgroundColor: "#D9D9D9" }}
              >
                {receivedMessages.content}
              </li>
            ))}
          </ul>
        ) : (
          <div className="d-flex align-items-center justify-content-center ">
            <p className="text-center m-0 p-3">No message received from this person</p>
          </div>
        )}
      </div>

      
    </div>
  {/* </div> */}
  <div className="row">
    <div className="col">
    <MessageForm />
    </div>
  </div>
</div>
  )
  
}