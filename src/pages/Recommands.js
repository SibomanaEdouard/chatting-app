import React, { useState,useEffect } from "react";
import { FirstsideBar } from "./HeaderWork";
import Header from "./HeaderWork";
import axios from "axios";

//This is the components to get All users 
export const RecommendedFriends=()=>{
const [Information,setInformation]=useState([]);
const sender=localStorage.getItem('id');

 const FetUsers=async()=>{
    const Response= await axios.get('http://localhost:5500/sign/recommends')
    .then((Response=>{
      setInformation(Response.data);
    }))
    .catch(error=>{
        console.error(Response.error)
    })

}
FetUsers();

//function to addFriend
const AddFriends=async(sender,receiver)=>{
    try{
        const response=await axios.post("http://localhost:5500/sign/addFriend",{sender,receiver});     
alert(response.data);
    }catch(error){
console.log(error);
alert(error);
    }

}

//messages
const messages=()=>{
    window.location.href='/messages'
}

return(
    <div className="users container">
        <h1>People you may know </h1>
        <div className="row">
        {Information.length > 0 ?(
            
            <ul className="row">
                {Information.map((eddy)=>(
                    <li className="col-md-4 border border-0 p-2 m-2" style={{listStyle:"none",backgroundColor:'#F6F6F6'}}>
<div className="ml-0">
 <h3>{eddy.lastname}</h3> 
 <p style={{color:"#888686"}}>mutual friends</p>
 <img src={eddy.imageUrl} className="" alt="Profile"  style={{    
}}/>
 </div>
 <div className="recommandPro">
 <p onClick={()=>AddFriends(sender,eddy._id)}>Add Friend</p>
 <p onClick={()=>messages()}>message</p>
 <h3>View profile</h3>
 </div>
</li>
                ))}

            </ul>
        ):(
            <h1>There is no suggesions for you</h1>
        )}

    </div>
    </div>
)
}

export const Recommends=()=>{

    return(
        <div className="recommendsCont">
            <FirstsideBar/>
            <Header/>
           <RecommendedFriends/>
        </div>
    )
}
// This is the components to display the friends of the user
export const GetFriends = () => {
    // This is to get id from localStorage
    const sender = localStorage.getItem('id');
    const [friend, setFriend] = useState([]);
  
    // This is the function to display the friends
    const displayFriends = async () => {
      try {
        // This is the function to send the request to the backend server
        const response = await fetch('http://localhost:5500/sign/friends', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ sender }),
        });
  
        if (response.ok) {
          const friendInfo = await response.json();
          setFriend(friendInfo);
        } else {
          throw new Error('Error fetching friends data');
        }
      } catch (error) {
        alert('Something went wrong. Please try again later!');
        console.log(error);
      }
    };
  
    useEffect(() => {
      displayFriends();
    });
  
    // Let me destroy the friendship
    const deleteFriend = async (receiverId) => {
      try {
        const response = await axios.delete('http://localhost:5500/sign/deleteFriend', {
          data: { sender, receiver: receiverId },
        });
  
        if (response.status === 200) {
          // Filter out the friend with the given receiverId from the state
          setFriend((prevFriends) => prevFriends.filter((friend) => friend._id !== receiverId));
          alert(response.data.message);
        } else {
          throw new Error(response.data.error);
        }
      } catch (error) {
        console.error(error);
        alert('An error occurred while deleting the friendship. Please try again later.');
      }
    };
  
    const message = (e) => {
      e.preventDefault();
      window.location.href = '/messages';
    };
  
    return (
      <div className="" style={{marginLeft:"15%"}}>
        <div className="row">
          <h1 className="text-start fs-3">Friends</h1>
          {friend.length > 0 ? (
            <ul className="row">
              {friend.map((chanta) => (
                <li
                  key={chanta._id}
                  className="col-md-4 border border-0 p-2 m-2 text-start"
                  style={{ listStyle: 'none', backgroundColor: '#F6F6F6', width: '40%' }}
                >
                  <span className="fw-bold">{chanta.lastname}</span>
                  <br />
                  <span style={{ color: '#888686' }}>mutual friends</span>
                  <img
                    src={`http://localhost:5500/sign/uploads/${chanta.imageUrl}`}
                    style={{ width: '15%', height: '10vh', marginLeft: '48%' }}
                    className="text-end"
                    alt="profile"
                  />
                  <br />
                  <div style={{ backgroundColor: '#D9D9D9', marginButton: '0%' }}>
                    <span className="text-danger" onClick={() => deleteFriend(chanta._id)}>
                      Remove friend
                    </span>
                    <span className="text-center" style={{ color: '#407BFF', marginLeft: '4%' }} onClick={message}>
                      Message
                    </span>
                    <span className="fw-bold" style={{ marginLeft: '30%' }}>
                      View profile
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <h4>No friend found</h4>
          )}
        </div>
      </div>
    );
  };

//this is to display the freinds without additional elements
export const GetFriendsOnly=()=>{
    //this is the function to send the request to the backend server
    const sender=localStorage.getItem("id");
    const [friend,setFriend]=useState([]);
    const displayFriends=async()=>{
        try{
        const response=await fetch("http://localhost:5500/sign/friends",{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({sender})
        });
        if(response.ok){
            const friendInfo=await response.json();
            setFriend(friendInfo);
        }
        else{
    alert("Check internet connection and try again");
        }
    }catch(error){
    alert("something went wrong please try again latter!");
    console.log(error);
    }
    }
    
    displayFriends();

    return(
        <div className="text-start">
  <div className="row">
    <h1 className="text-start">Friends</h1>
    {friend.length > 0 ? (
      <ul className="list-unstyled d-flex flex-wrap">
        {friend.map((chanta) => (
          <li key={chanta._id} className="text-start m-2" style={{ flexBasis: '50%', maxWidth: '50%' }}>
            <img
              src={`http://localhost:5500/sign/uploads/${chanta.imageUrl}`}
              style={{ width: '10%', height: 'auto', borderRadius: '50%' }}
              alt=""
              className="m-2"
            />
            <span className="m-2">{chanta.lastname}</span>
          </li>
        ))}
      </ul>
    ) : (
      <h4>No friend found</h4>
    )}
  </div>
</div>
    )
}
