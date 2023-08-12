import React from "react";
import { useState } from "react";
import { NavigationTab } from "./Home";
import home from "../Images/home.png";
import {FaEye, FaEyeSlash} from 'react-icons/fa'

// updating password
const UpdatePass=(e)=>{
e.preventDefault();
window.location.href='/updatepassword';
}


export const ImageLogo=()=>{
  return (
    <div className="imageLogin">

    <img src={home} alt="This is the time to enjoy with others" />
    </div>
  )
}


//to sign in page
const HandleSigning=(e)=>{

    e.preventDefault();
    window.location.href='/sign';
}
//this is the login in foprm
function LoginForm() {
     const [inputs, setInputs] = useState({
      email:"",
      password:""
    });

  
    //this is the function to hide or showpassword
    const [showpassword,setShowpassword]=useState(false);

    //function to handle change
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs((values) => ({ ...values, [name]: value }));
    };

    //to feth data from login page
    const FetLogin = async(event)=>{
      event.preventDefault();
 
      try{

      const response=await fetch("http://localhost:5500/sign/login",{
        method:"POST",
        headers:{
        "Content-Type":"application/json",  
        },
        body:JSON.stringify(inputs)

      });

      //to check is the response is ok
      if(response.ok){
        const users=await response.json();

        //To take information from the backend
        const Lastname=users.lastname;
        const Id=users.id;
        const Image=users.imageUrl;
        localStorage.setItem('lastname', Lastname);
        localStorage.setItem('id', Id);
        localStorage.setItem('imageUrl',Image);

      

      // Update the response data using the updateResponseData function
   
     setInputs({
      email:"",
      password:""
     });
     
     //this to navigate to profiles
     window.location.href='/profile';
      }
      else{

        //to get error from the backend
        const ResponseError=await response.json();
        throw new Error(ResponseError.error);
        
      }
  

    }catch (error){
      console.log(error);

    alert(error);
    
    }
  }

 

  //The fields of login formm
    return (
        <>
        <NavigationTab />
        <ImageLogo />
        <h1 className="headerlo">Login</h1>
      <div className="form1">

        {/* onsubmit we will invoke the function called FetLogin*/}
        
        <form onSubmit = {FetLogin}>
          <label>
            Email
            <br />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              required
              value={inputs.email || ""}
              onChange={handleChange}
              className="email1"
            />
          </label>
          <br />
          <label>
            Password
            <br />
            <input
              type={showpassword ? 'text':'password'}
              name="password"
              id="password"
              placeholder="Enter Your password"
              required
              value={inputs.password || ""}
              onChange={handleChange}
            />
            {showpassword ? (
              <FaEyeSlash
              className="pass-iconl"
              onClick={()=>setShowpassword(false)}
              />
            ):(
              <FaEye 
              className="pass-iconl"
              onClick={()=>setShowpassword(true)}
              />
            )}
          </label>
          <br />
          <button type="submit" className="logobutton">Login</button>
        </form>
        <br/><br/>
        <h1><span className="Ask">Forget your password? </span><button onClick={UpdatePass} className="buttons">Reset</button>
        </h1> 
        <h1> <span className="Ask">New Here ?</span><button onClick={HandleSigning} className="buttons">SignUp</button></h1>
           
      </div>
  
      </>
    );
  }
  
  export default LoginForm;

