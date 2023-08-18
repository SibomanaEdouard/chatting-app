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
    <div>
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
        localStorage.setItem('lastname', Lastname);
        localStorage.setItem('id', Id);
      
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
        <div>

        <NavigationTab />

 <div className="row d-flex">
  <div className="col-md-8">
        <ImageLogo />    
        </div>

      <div className="form1 text-start align-items-start justify-content-start col-md-4 mt-5">

      <p className="text-center fs-1 " style={{color:"#407BFF"}}>Login</p>

        {/* onsubmit we will invoke the function called FetLogin*/}
        <form onSubmit = {FetLogin} className="m-4">
          <label for="email">
            Email
            </label>            
            <br/>            
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              required
              className="p-3 form-control"
              value={inputs.email || ""}
              onChange={handleChange}
            />     
          <br/>       

        <label>Password</label>
<div className="input-group">
<input
              type={showpassword ? 'text':'password'}
              name="password"
              id="password"
              placeholder="Enter  password"
              required
              value={inputs.password || ""}
              onChange={handleChange}
              className="form-control"
            />
  <div className="input-group-append">
    <span
      className="input-group-text fs-1 p-2"
      onClick={() => setShowpassword(!showpassword)}
      style={{ backgroundColor: "#D9D9D9", cursor: "pointer" }}
    >
      {showpassword ? <FaEyeSlash key="password-icon" /> : <FaEye key="password-icon" />}
    </span>
  </div>
</div>
          <br/>
          <br/>
          <button type="submit" className="logobutton btn-start fw-bold fs-3">Login</button>
        </form>
        <br/><br/>

        <span className="Ask text-start p-2" onClick={UpdatePass}>Forget your password? </span>
        <button onClick={UpdatePass} className="buttons btn btn-white">Reset</button>     
<br/>
         <span className="Ask text-start p-2" onClick={HandleSigning}>New Here ?</span>
         <button onClick={HandleSigning} className="buttons btn btn-white">SignUp</button>
      </div>
      </div> 
      </div>
    );
  }  
  export default LoginForm;

