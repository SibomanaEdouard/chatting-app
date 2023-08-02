import React from "react";
import { useRef,useState } from "react";
import axios from "axios";
import {BsCameraFill} from "react-icons/bs"
import { FirstsideBar } from "./HeaderWork";
import Header from "./HeaderWork";

const userId=localStorage.getItem('id');

//this is the header for the account
const AccountHeader=()=>{ 

  const [image,setImage]=useState(null); 
  const [username,setUsername]=useState(""); 
   //this is to update image
const fileInputRef = useRef(null);

const handleButtonClick = () => {
  fileInputRef.current.click();
};

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
      
        try {
          const formData = new FormData();
          formData.append('image', file);
          formData.append('userId',userId)
      
          const response = await axios.put('http://localhost:5500/sign/updateImage', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            data: {
              userId: userId
            }
          });
      console.log(Image);
          const imageUrl = response.data.imageUrl;
      
          // Save the image URL to MongoDB or perform any other necessary actions
          console.log('Image URL:', imageUrl);
        } catch (error) {
          console.error('Image upload failed:', error);
        }
      };


      const getData=async()=>{
        try{
        //this is to get the id of the user from local storage
        const user=localStorage.getItem('id');
        const response=await axios.post("http://localhost:5500/sign/datum",{user});
        if(response.status===200){
            const data=await response.data;
            setImage(data.imageUrl);
            setUsername(data.lastname);
        
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
        <div className="accPrNav">

            <div className="AccProf">
<h1>Abba</h1>
<div className="text-start m-3">
<img src={`http://localhost:5500/sign/uploads/${image}`} 
alt="profile"
style={{width:"10%",borderRadius:"50%"}}
/>
<span className="text-white p-3">{username}</span>
</div>
<div  onClick={handleButtonClick} className="text-white">
  <BsCameraFill/>
<span className="text-white">
Edit cover photo
</span>
</div>
</div>
            <div className="accNav p-3 mb-4 mt-0">
           
            <div onClick={handleButtonClick} className="text-start " style={
              {
                marginLeft:"7%"
              }
            } >
            <BsCameraFill/>
        <span className="p-2">Edit profile photo</span>
      
      </div>
<div className="row">
<div className="col-md-4">
            <GoAbout/>
            </div>
            <div className="col-md-4">
            <GoPosts/>
            </div>
<div className="col-md-4">
            <GoFriends/>  
            </div> 
            </div>
            </div>

        </div>
    )
}

//the following are navigation bar
const GoAbout=()=>{
//this is to orient the user to about her or him
const about=()=>{
window.location.href="/account"
}
    return(
        <div onClick={about}>
            <h1>About</h1>
            </div>
    )

}
const GoPosts=()=>{
//this is to orient the user to the posts
  const posts=()=>{
    window.location.href="/posts"
    }
    return(
        <div onClick={posts}>
<h1>Posts</h1>

        </div>
    )
    
}

const GoFriends=()=>{
  //this is to orient the user to the friends
  const friends=()=>{
    window.location.href="/friends"
    }
    return(
        <div onClick={friends}>
            <h1>Friends</h1>
        </div>
    )
    
}

//this is about content
const About=()=>{

  //let me get the user information before edit them
  const [phone,setPhone]=useState('');
  const [school,setSchool]=useState('');
  const [home,setHome]=useState('');
  const [link,setLink]=useState('');
  const [hobby,setHobby]=useState('');
  const [work,setWork]=useState('');

  //the function to fetch data from the backend before being edited
const userData=async()=>{
const user=localStorage.getItem('id');
try{
const response=await axios.post("http://localhost:5500/sign/datum",{user});

if(response.status===200){
const data=await response.data;

//let me distribute data
setPhone(data.phone);
setSchool(data.school);
setHome(data.home);
setLink(data.link);
setHobby(data.hobby);
setWork(data.work);
}else{
  throw new Error(response.error);
}
}catch(error){
  console.log(error);
  alert(error)
}
}

//let invoke the function to display the data
userData();
const changeSchool=(e)=>{
  e.preventDefault();
  setSchool(e.target.value);

}

    return(<div className="aboutcontent">

        <h1 className="text-start m-4 pt-1">About</h1>
        <form>
<div className="row text-start p-4">
<div className="col-md-6">
<span className="fw-bold">work<br/>
<input 
value={work}
type="text"
onChange={(e)=>(e.target.value)}
name="work"
className="border-0"
style={{backgroundColor:"#D9D9D9"}}
/>
</span>
</div>

<div className="col-md-6">
<span className="fw-bold">Hobbies and interest<br/>
<input 
value={hobby}
type="text"
onChange={(e)=>(e.target.value)}
name="hobby"
className="border-0"
style={{backgroundColor:"#D9D9D9"}}
/>
</span>
</div>

<div className="col-md-6">
<span className="fw-bold">Add school<br/>
<input 
value={school}
type="text"
onChange={changeSchool}
name="school"
className="border-0"
style={{backgroundColor:"#D9D9D9"}}
/>
</span>
</div>

<div className="col-md-6">
<span className="fw-bold">phone<br/>
<input 
value={phone}
type="text"
onChange={(e)=>(e.target.value)}
name="phone"
className="border-0"
style={{backgroundColor:"#D9D9D9"}}
/>
</span>
</div>

<div className="col-md-6">
<span className="fw-bold">Home<br/>
<input 
value={home}
type="text"
onChange={(e)=>(e.target.value)}
name="work"
className="border-0"
style={{backgroundColor:"#D9D9D9"}}
/>
</span>
</div>

<div className="col-md-6">
<span className="fw-bold">instagram link<br/>
<input 
value={link}
type="text"
onChange={(e)=>(e.target.value)}
name="work"
className="border-0"
style={{backgroundColor:"#D9D9D9"}}
/>
</span>
</div>
</div>
</form>
    </div>)
}

//this is to render account content
export const Account=()=>{
    return(
        <div>
            <FirstsideBar/>
            <Header/>
            <AccountHeader/>
            <About/>
        </div>
    )
}

