import { FaEye,FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import React from "react";
import { ImageLogo } from "./Login";
import { NavigationTab } from "./Home";


function loHandle(e){
    e.preventDefault();
    window.location.href='/sign/login';
}


function SignInForm(){

 

    const [inputs,setInputs]=useState({
        firstname:"",
        lastname:"",
        email:"",
        phone:"",
        password:""
    });

    const handleChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setInputs((values)=>({...values,[name]:value}));
    }
  
    const FetchData=async(event)=>{
        event.preventDefault();
        try{
            const response=await fetch("https://talknet-k4ku.onrender.com",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(inputs)
            });
            if(response.ok){
                alert("WELCOME TO US ");
                setInputs({
email:"",
firstname:"",
lastname:"",
password:"",
phone:""

});
   window.location.href='/sign/login';
            }
            else{
                
                const ResponseError=await response.json();
                throw new Error(ResponseError.error);
            }
        }catch (error){
            console.log(error);
            alert(error.message);
        }
    };
//function to hide or show passsword
const [showpassword,setShowpassword]=useState(false);
    return(
        <div>
            <NavigationTab/>
            <div className="row">
                
            <div className="Logos col-md-6 mt-5">
            <ImageLogo/>
            </div>

            <div className="forms col-md-6"> 
            <h1 className="text-center fs-2"  style={{color:"#407BFF", fontFamily:'inter'}}>Sign Up</h1>
                <form onSubmit={FetchData}>
                    <label>FirstName</label><br/>
                    <input type="text" 
                           name="firstname" 
                           id="firstname"
                           required
                           value={inputs.firstname}
                           onChange={handleChange}
                           placeholder="Enter firstname"
                           className="p-2 form-control"
                    /><br/>

                    <label>LastName</label><br/>
                    <input type="text"
                           name="lastname"
                           id="lastname"
                           required
                           value={inputs.lastname}
                           onChange={handleChange}
                           placeholder="Enter lastname"
                           className="p-2 form-control"
                    /><br/>

                    <label>Email</label><br/>
                    <input type="email" 
                           name="email"
                           value={inputs.email}
                           onChange={handleChange}
                           id="email"
                           required
                           placeholder="Enter email"
                           className="p-2 form-control"
                    /><br/>

                    <label>Phone</label><br/>
                    <input type="tel"
                           name="phone"
                           id="phone"
                           required
                           value={inputs.phone}
                           onChange={handleChange}
                           placeholder="Enter phone number"
                           className="p-2 form-control"
                    /><br/>
<label>Password</label><br/>
<div className="input-group">
                    <input type={showpassword ? 'text':'password'}
                           name="password"
                           id="password"
                           value={inputs.password}
                           onChange={handleChange}
                           placeholder="Enter password"
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
                    <button className="signupb mt-3">Sign Up</button>
                </form>
                <p className="h1s">Already have account ? 
                    <button onClick={loHandle}>LOGIN</button>
            
                </p>
            </div>
        </div>  
        </div>
    )
}

export default SignInForm;
