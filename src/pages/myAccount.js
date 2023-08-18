import React from "react";
import { useRef,useState,useEffect } from "react";
import axios from "axios";
import {BsCameraFill} from "react-icons/bs"
import { FirstsideBar } from "./HeaderWork";
import Header from "./HeaderWork";
import {BiUser} from "react-icons/bi"
import {AiOutlineCamera} from "react-icons/ai"
import {FiSmartphone} from "react-icons/fi"
import {BiHeart}from "react-icons/bi"
import {AiOutlinePlus} from "react-icons/ai"
import {GiWorld} from "react-icons/gi"
import {AiOutlineCheck} from "react-icons/ai"

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
          window.location.reload();
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
<h1 className="text-white pt-5">Abba</h1>
<div className="text-start m-3">
<img src={`http://localhost:5500/sign/uploads/${image}`} 
alt="profile"
style={{width:"10%",height:"10vh",borderRadius:"50%"}}
/>
<span className="text-white p-3">{username}</span>
</div>
<div  onClick={handleButtonClick} className="text-white text-end">
  <AiOutlineCamera className="bg-white"/>
<span className="text-white p-2">
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
            <input
        type="file"
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={handleFileChange}
      />
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
    window.location.href="/profile"
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

//this is the component about
const About = () => {
  const [phone, setPhone] = useState("");
  const [school, setSchool] = useState("");
  const [home, setHome] = useState("");
  const [link, setLink] = useState("");
  const [hobby, setHobby] = useState("");
  const [work, setWork] = useState("");
  const [image, setImage] = useState(null);

  const userData = async () => {
    const user = localStorage.getItem("id");
    try {
      const response = await axios.post("http://localhost:5500/sign/datum", {
        user,
      });

      if (response.status === 200) {
        const data = await response.data;
        setPhone(data.phone);
        setSchool(data.school);
        setHome(data.home);
        setLink(data.link);
        setHobby(data.hobby);
        setWork(data.work);
        setImage(data.imageUrl);
      } else {
        throw new Error(response.error);
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  useEffect(() => {
    userData();
  }, []);

  const changeWork = (e) => {
    setWork(e.target.value);
  };

  const updateInfo = async () => {
    try {
      //send the request to the backend
      const response = await axios.put("http://localhost:5500/sign/updateinfo", {
        user: localStorage.getItem("id"),
        home,
        hobby,
        school,
        work,
        link,
        phone,
      });
      if (response.status === 200) {
        alert(response.data.message);
        window.location.reload();
      } else {
        throw new Error(response.data.error);
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <div className="aboutcontent">
      <h1 className="text-start m-4 pt-1">About</h1>
      <form onSubmit={updateInfo}>
        <div className="row text-start p-4">
          <div className="col-md-6">
            <img
              src={`http://localhost:5500/sign/uploads/${image}`}
              alt="profile"
              style={{ width: "5%", borderRadius: "50%" }}
            />
            <span className="fw-bold p-2">
              work
              <br />
              <input
                value={work}
                type="text"
                onChange={changeWork}
                name="work"
                className="border-0"
                style={{ backgroundColor: "#D9D9D9", marginLeft: "5.5%" }}
              />
            </span>
          </div>
          <div className="col-md-6">
            <BiHeart
              style={{
                borderRadius: "50%",
                backgroundColor: "#A0BDFF",
                padding: "1%",
              }}
              className="fs-2"
            />
            <span className="fw-bold p-2">
              Hobbies and interest
              <br />
              <input
                value={hobby}
                type="text"
                onChange={(e) => setHobby(e.target.value)}
                name="hobby"
                className="border-0"
                style={{ backgroundColor: "#D9D9D9", marginLeft: "5.5%" }}
              />
            </span>
          </div>
          <div className="col-md-6">
            <AiOutlinePlus
              style={{
                borderRadius: "50%",
                backgroundColor: "#A0BDFF",
                padding: "1%",
              }}
              className="fs-2"
            />
            <span className="fw-bold p-2">
              Add school
              <br />
              <input
                value={school}
                type="text"
                onChange={(e) => setSchool(e.target.value)}
                name="school"
                className="border-0"
                style={{ backgroundColor: "#D9D9D9", marginLeft: "5.5%" }}
              />
            </span>
          </div>
          <div className="col-md-6">
            <FiSmartphone
              style={{
                borderRadius: "50%",
                backgroundColor: "#A0BDFF",
                padding: "1%",
              }}
              className="fs-2"
            />
            <span className="fw-bold p-2">
              phone
              <br />
              <input
                value={phone}
                type="text"
                onChange={(e) => setPhone(e.target.value)}
                name="phone"
                className="border-0"
                style={{ backgroundColor: "#D9D9D9", marginLeft: "5.5%" }}
              />
            </span>
          </div>
          <div className="col-md-6">
            <GiWorld className="fs-2" />
            <span className="fw-bold p-2">
              Home
              <br />
              <input
                value={home}
                type="text"
                onChange={(e) => setHome(e.target.value)}
                name="home"
                className="border-0"
                style={{ backgroundColor: "#D9D9D9", marginLeft: "5.5%" }}
              />
            </span>
          </div>
          <div className="col-md-6">
            <BiUser
              style={{
                borderRadius: "50%",
                backgroundColor: "#A0BDFF",
                padding: "1%",
              }}
              className="fs-2"
            />
            <span className="fw-bold p-2">
              instagram link
              <br />
              <input
                value={link}
                type="text"
                onChange={(e) => setLink(e.target.value)}
                name="link"
                className="border-0"
                style={{ backgroundColor: "#D9D9D9", marginLeft: "5.5%" }}
              />
            </span>
          </div>
        </div>
        <div>
          <button type="submit">
            <AiOutlineCheck />
          </button>
        </div>
      </form>
    </div>
  );
};

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

