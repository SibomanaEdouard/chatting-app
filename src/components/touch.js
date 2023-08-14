import { useState } from "react";
import React from "react";
import { NavigationTab } from "./Home";


//function to display the input

const Touch=()=>{
    const[input,setInputs]=useState({
        Name:"",
        Email:"",
        Message:""
    })

    //this is the function to update the inputs
    const HandleInputs=(e)=>{
// const name=e.target.name;
// const value=e.target.value;
setInputs(e.target.value)
    }
    return(
        <div className="allcontact">
            <NavigationTab />
    <div >
        
        <form className="formContact">
<label>Name</label>
<br/><br/>

<input
name="name"
type="textarea"
value={input.Name}
onChange={HandleInputs}
placeholder="Enter name"
/><br/><br/>

<label>Email</label><br/>
<input
name="name"
type="email"
value={input.Email}
onChange={HandleInputs}
placeholder="Enter Email"
/><br/><br/>

<label>Message</label><br/>
<textarea
rows={4}
cols={17}
name="name"
type="text"
value={input.Message}
onChange={HandleInputs}
placeholder="Feedback"
/>

</form>

<h1 className="GetIntouch  fw-bold mt-5" style={{}}>Get in touch</h1>
    </div>
    </div>
    )
}

export default Touch;