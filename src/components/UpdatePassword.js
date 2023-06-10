import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import React from 'react';
import { ImageLogo } from './Login';
import { NavigationTab } from './Home';
const UpdatePassword = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  // function  to handle changes
  const HandleChangePassword = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  // function to show and hide password;
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  //function to fetch data

  const FetchUpdate=async(e)=>{
    e.preventDefault();
    
    try{
const response=await fetch("http://localhost:5500/sign",{
method:"PUT",
headers:{
 "Content-Type":"application/json"
},
body:JSON.stringify(inputs)
})
if(response.ok){
    setInputs({
        email:"",
        password:"",
        confirmPassword:""
    })
    window.location.href='/sign/login'
}
else{
    const ResponseError=await response.json();
    throw new Error(ResponseError.error);
}
    }catch (error){
        alert(error)

    }
  }

  return (
    <div>
      <ImageLogo/>
      <div className='formup'>
      <h1 className='resetheader'>Reset password</h1>
     
      <form onSubmit={FetchUpdate}>
        <label>Email</label><br/>
        <input
          type="email"
          name="email"
          value={inputs.email}
          onChange={HandleChangePassword}
        /><br/>
        <label>Password</label><br/>
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          value={inputs.password}
          onChange={HandleChangePassword}
        />
        {showPassword ? (
          <FaEyeSlash
            key="password-icon"
            className="password-icon"
            onClick={() => setShowPassword(false)}
          />
        ) : (
          <FaEye
            key="password-icon"
            className="password-icon"
            onClick={() => setShowPassword(true)}
          />
        )}<br/>
        <label>Confirm Password</label><br/>
        <input
          type={showConfirmPassword ? 'text' : 'password'}
          name="confirmPassword"
          value={inputs.confirmPassword}
          onChange={HandleChangePassword}
        />
        {showConfirmPassword ? (
          <FaEyeSlash
            key="confirmPassword-icon"
            className="password-icon1"
            onClick={() => setShowConfirmPassword(false)}
          />
        ) : (
          <FaEye
            key="confirmPassword-icon"
            className="password-icon1"
            onClick={() => setShowConfirmPassword(true)}
          />
        )}<br/><br/>
        <button className='buttonup'>Change</button>
      </form>
      </div>
      <NavigationTab/>
    </div>
  );
};


export default UpdatePassword;
