
import { useState } from "react";
 import React from "react";
import { RiMessage3Fill } from "react-icons/ri";
import { RiSettings2Fill } from "react-icons/ri"
import {BiLogOut} from "react-icons/bi"
import {TbMessageCircle2Filled} from "react-icons/tb"
import {RiUserReceivedFill} from "react-icons/ri"
import {RiPhoneCameraFill} from "react-icons/ri"
import{RiAdvertisementFill} from "react-icons/ri"
import {RiArrowLeftSLine} from "react-icons/ri"
import {BsFillSendFill} from 'react-icons/bs'
import {RiThumbUpFill} from 'react-icons/ri'
import {RiDiscussFill} from 'react-icons/ri'
import axios from "axios";


const Id=localStorage.getItem('id');
// const Image=localStorage.getItem('image');
const username=localStorage.getItem("lastname");

//this is for account
const Myaccount=(e)=>{

    e.preventDefault();
window.location.href='/account'

}

//this is for friends
const Myfriend=(e)=>{
    e.preventDefault();
window.location.href='/friends'


}
//this is for messages
const Mymessages=(e)=>{
    e.preventDefault();
window.location.href='/messages'


}
//this is for recommends
const Myrecommends=(e)=>{
    e.preventDefault();
window.location.href='/recommends'
}
//this is for setting
const Mysettings=(e)=>{
    e.preventDefault();
window.location.href='/settings'
}
//this is for logout
const MyLogout=(e)=>{
    e.preventDefault();
alert(" Are you sure you want to logout? ");
window.location.href='/'


}
//this is for post
export const MyPosts=(e)=>{
    e.preventDefault();
window.location.href="/profile"

}

//This the function to return The Header
const Header=()=>{

    const [image ,setImage]=useState(null);
    //let me get  the data from the backend
const getData=async()=>{
    
    try{
    //this is to get the id of the user from local storage
    const user=localStorage.getItem('id');
    const response=await axios.post("http://localhost:5500/sign/datum",{user});
    if(response.status===200){
        const data=await response.data;
        setImage(data.imageUrl);
    }else{
        throw new Error(response.error)
    }
}
catch(error){
    console.log(error);

}
}

//this is to invoke the function
getData();

    return(
<div className="firstHeader row d-flex" 
style={{ backgroundColor: "#A0BDFF"}}>
  <div className="d-inline p-4 col-md-6">  
    <span>
      <RiMessage3Fill className="fs-2" />
    </span>
    <span className="fw-bold p-2">TALKNET</span>
  </div>
  <div className="username col-md-6" style={{ padding: "0.3%" }}>
    <img
      src={`http://localhost:5500/sign/uploads/${image}`}
      alt="Profile"
      style={{
        width: "8vh",
        height: "8vh",
        borderRadius: "50%",
      }}
    />
    <span className="p-3 fw-bold">{username}</span>
  </div>
</div>
    )

}


export const FirstsideBar=()=>{
    const [image ,setImage]=useState(null);
//let me get  the data from the backend
const getData=async()=>{

try{
//this is to get the id of the user from local storage
const user=localStorage.getItem('id');
const response=await axios.post("http://localhost:5500/sign/datum",{user});
if(response.status===200){
    const data=await response.data;
    setImage(data.imageUrl);
}else{
    throw new Error(response.error)
}
}
catch(error){
console.log(error);
alert("Something went wrong please try again latter");
}
}

//this is to invoke the function
getData();
const [isCollapsed,setIsCollapsed]=useState(true);
const changeCollapse=()=>{
    setIsCollapsed(!isCollapsed);
    console.log(isCollapsed);
}
    return(

 <div className= {`firstsidebar ${isCollapsed ? 'collapsed' : ''}`} > 


    <div className="acc mt-5" onClick={Myaccount}>
{isCollapsed ? (<>
    <img
      src={`http://localhost:5500/sign/uploads/${image}`}
      alt="Profile"
      style={{
        width: "8vh",
        height: "8vh",
        borderRadius: "50%",
      }}
    />
   <span>My account</span> 
</>):(
    <img
    src={`http://localhost:5500/sign/uploads/${image}`}
    alt="Profile"
    style={{
      width: "8vh",
      height: "8vh",
      borderRadius:"50%",
    }}
  /> 
)}
</div>

{/* This is for friends */}
<div onClick={Myfriend}>

    {isCollapsed?(<>
        <RiUserReceivedFill className="fs-4" />
        <span>
        Friends
        </span>
    </>):(
        <RiUserReceivedFill className="fs-4" />
    )}
</div>

{/* This is for mesages */}
<div onClick={Mymessages}>
    {isCollapsed?(<>
        < TbMessageCircle2Filled className="fs-4" />
        <span>Messages</span>
    </>):(
        < TbMessageCircle2Filled className="fs-4" />
    )}
</div>
<div onClick={MyPosts}>
    {isCollapsed?(<>
<RiPhoneCameraFill className="fs-4" />
<span>Posts</span>
    </>):(
 
<RiPhoneCameraFill className="fs-4" />
    )}
</div>

{/* This is for recommands */}
<div  onClick={Myrecommends}>
   
    {isCollapsed?(<>
        <RiAdvertisementFill className="fs-4"/>
        <span> Recommend</span>
    </>):(
        <RiAdvertisementFill className="fs-4"/>
    )}
</div>
{/* This is for setting */}
<div  onClick={Mysettings}>
    {isCollapsed?(<>
        <RiSettings2Fill className="fs-4"/>
        <span> Settings</span>
    </>):(<RiSettings2Fill className="fs-4"/>)}

   

</div>
<hr color="black"/>
<br/>
<br/>
<br/>
{/* This is for logout */}
<div  onClick={MyLogout}>
   
    {isCollapsed?(
        <>
 <BiLogOut className="fs-4"/>
 <span> Logout</span> 
 </>
    ):(<BiLogOut className="fs-4"/>)}
</div>
<div onClick={changeCollapse}>
    {isCollapsed?(
        <>
   <RiArrowLeftSLine className="fs-4"/>
 <span> Collapse</span> 
 </>
    ):(  <RiArrowLeftSLine className="fs-4"/>)}
 
</div>
</div>

// </div>

    )
} 


// This is to post on general 
 export  const Thought=()=>{
    const [messages,setMessage]=useState({
        content:"",
        sender:Id
        
    });
    
    const ChangeHandl=(e)=>{
      const name=e.target.name;
      const value=e.target.value;
      setMessage((values)=>({...values,[name]:value}))
    }
    const HandleSubmit=async()=>{
        try{
        const Response=await fetch("http://localhost:5500/sign/posts",{
            method:"POST",
            headers:{
               "Content-Type":"application/json" 

            },
            body:JSON.stringify(messages)
        })
        if(Response.ok){
           
            setMessage({
                content:"",
                sender:Id
            })
        
        }

        else{
        const ResponseError=await Response.json();
        throw new Error(ResponseError.error)
    
        }
    }catch(error){
        console.log(error);
        alert(error);
       
    }
    
     

    }
    return(
        <div>
  <form onSubmit={HandleSubmit} className="form-control p-3" style={{backgroundColor:"#A0BDFF",width:"55vw",borderRadius:"10px"}}>
      <input
        type="text"
        value={messages.content}
        name="content"
        onChange={ChangeHandl}
        placeholder="Publish your thought"
        className="border-0"
        style={{backgroundColor:"#A0BDFF"}}
      /> 
       <BsFillSendFill className="fs-2" onClick={HandleSubmit}/>
  </form>
        </div>
    )
}

//this is the field for commentc
const Comments=()=>{
    const [input,setInput]=useState("");
    const ChangeHandle=(e)=>{
        e.preventDefault();
     setInput(e.target.value);
    
    }
    

return(
 <div className="postsfield">
            <form>
                <RiThumbUpFill className="fs-1 text-start m-2"/>
                <RiDiscussFill className="fs-1 text-start m-2"/>
                 <input 
                 type="text" 
                 value={input}
                 name="post"
                onChange={ChangeHandle}
               placeholder="comment"
               className="p-2"
                 />
                   <BsFillSendFill className="fs-1 text-end m-2"/>
            </form>
          
        </div>    
) 
}

//this is  To retrieve the posts from the backend and post them on the frontend
const GetPost=()=>{

    const [post,setPost]=useState([]);
    const HandleMessage=async()=>{
        try{
        const Response=await fetch("http://localhost:5500/sign/posts",{
            method:"GET",
            headers:{
               "Content-Type":"application/json" 

            },
        
        })
        if(Response.ok){          
      const MessagesFromBack=await Response.json();
   
 //This is to display the message
 const data=MessagesFromBack.MessageWithOwner;
setPost(data)
 }
else{
        //this is to take the error from the backend
        const ResponseError=Response.json();
        throw new Error(ResponseError.error)
        }
    }catch(error){
        console.log(error);
        alert("Failed to send the message please try again letter");
    }
    }

HandleMessage();

return(
    <div className="PostsMessages ">
    {post.length >0 ?( 
       <ul className="mt-5">
        {post.map((mess)=>(
            <li className="">
                <div className="text-start align-items-start justify-content-start w-100 p-5" style={{paddingRight:"2%"}}>
                <div className="">
             <img
      src={`http://localhost:5500/sign/uploads/${mess.userImage}`}
      alt="Profile"
      style={{
        width: "8vh",
        height: "8vh",
        borderRadius: "50%",
      }}
    />
<span className="p-2 fw-bold">{mess.sender}</span>
</div>
<p>{mess.content}</p>
<h5 className="text-end">{mess.time}</h5>
</div>
<br/>

<Comments/>
<br/>
            </li>
        ))}
       </ul>
    ):(
        <h1>No post found</h1>
    )}
    </div>
)
}
export  const Post=()=>{
     
    
    return(
        <div className="d-flex justify-content-center align-items-center w-100">
  <div className="text-center">
    <GetPost />
  </div>
</div>

    )
}

export const UserImage=()=>{

    const [image ,setImage]=useState(null);
    
    //let me get  the data from the backend
const getData=async()=>{
    try{
    //this is to get the id of the user from local storage
    const user=localStorage.getItem('id');
    const response=await axios.post("http://localhost:5500/sign/datum",{user});
    if(response.status===200){
        const data=await response.data;
        setImage(data.imageUrl);
        console.log(data.imageUrl);
    }else{
        throw new Error(response.error)
    }
}
catch(error){
    console.log(error);
    alert("Something went wrong please try again latter");
}
}
getData();
    return(
<div>
 
  <div className="username col-md-6" style={{ padding: "0.3%" }}>
    <img
      src={`http://localhost:5500/sign/uploads/${image}`}
      alt="Profile"
      style={{
        width: "8vh",
        height: "8vh",
        borderRadius: "50%",
      }}
    />
    <span className="p-3 fw-bold">{username}</span>
  </div>
</div>
    )

}

export default Header;