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
            const response=await fetch("http://localhost:5500/sign",{
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
            <div className="Logos">
            <ImageLogo/>
            </div>
            <h1 className="signhead">Sign Up</h1>
            <div className="forms"> 
                <form onSubmit={FetchData}>
                    <label>FirstName</label><br/>
                    <input type="text" 
                           name="firstname" 
                           id="firstname"
                           required
                           value={inputs.firstname}
                           onChange={handleChange}
                           placeholder="Enter firstname"
                    /><br/>

                    <label>LastName</label><br/>
                    <input type="text"
                           name="lastname"
                           id="lastname"
                           required
                           value={inputs.lastname}
                           onChange={handleChange}
                           placeholder="Enter lastname"
                    /><br/>

                    <label>Email</label><br/>
                    <input type="email" 
                           name="email"
                           value={inputs.email}
                           onChange={handleChange}
                           id="email"
                           required
                           placeholder="Enter email"
                    /><br/>

                    <label>Phone</label><br/>
                    <input type="tel"
                           name="phone"
                           id="phone"
                           required
                           value={inputs.phone}
                           onChange={handleChange}
                           placeholder="Enter phone number"

                    /><br/>

                    <label>Password</label><br/>
                    <input type={showpassword ? 'text':'password'}
                           name="password"
                           id="password"
                           value={inputs.password}
                           onChange={handleChange}
                           placeholder="Enter password"
                    />
                 {showpassword ? (
                    <FaEyeSlash
                    
                    className="pass-icons"
                    onClick={()=>setShowpassword(false)}
                    />
                 ):(
                    <FaEye
                    onClick={()=>setShowpassword(true)}
                    className="pass-icons"
                    />
                 )}
                    <br/>

                    <button className="signupb">Sign Up</button>
                </form>

                <p className="h1s">Already have account ? 
                    <button onClick={loHandle}>LOGIN</button>
            
                </p>
            </div>
        </div>  
    )
}

export default SignInForm;
