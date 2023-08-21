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
const response=await fetch("https://talknet-k4ku.onrender.com",{
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
        <NavigationTab/>
        <div className='row d-flex'>
          <div className='col-md-6 mt-5'>
      <ImageLogo/>
      </div>
      <div className='formup col-md-6 mt-5'>
      <h1 className='resetheader text-center'>Reset password</h1>
     
      <form onSubmit={FetchUpdate} className='m-5'>
        <label>Email</label><br/>
        <input
          type="email"
          name="email"
          required
          value={inputs.email}
          onChange={HandleChangePassword}
          className='form-control p-3'
          placeholder='Type email'
        /><br/>
        <label>Password</label>
<div className="input-group">
  <input
    type={showPassword ? 'text' : 'password'}
    name="password"
    required
    value={inputs.password}
    onChange={HandleChangePassword}
    className="form-control"
    placeholder="Type new password"
  />
  <div className="input-group-append ">
    <span className="input-group-text fs-1 p-2" onClick={() => setShowPassword(!showPassword)}
    style={{backgroundColor:"#D9D9D9"}}
    >
      {showPassword ? (
        <FaEyeSlash key="password-icon" />
      ) : (
        <FaEye key="password-icon" />
      )}
    </span>
  </div>
</div>

<label>Confirm Password</label>
<div className="input-group">
  <input
    type={showConfirmPassword ? 'text' : 'password'}
    name="confirmPassword"
    required
    value={inputs.confirmPassword}
    onChange={HandleChangePassword}
    className="form-control"
    placeholder="Re-Type new password"
  />
  <div className="input-group-append">
    <span
      className="input-group-text fs-1 p-2"
      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
      style={{ backgroundColor: "#D9D9D9", cursor: "pointer" }}
    >
      {showConfirmPassword ? <FaEyeSlash key="password-icon" /> : <FaEye key="password-icon" />}
    </span>
  </div>
</div>

        <button className='buttonup mt-5'>Change</button>
      </form>
      </div>
    </div>
    </div>
  );
};
export default UpdatePassword;
