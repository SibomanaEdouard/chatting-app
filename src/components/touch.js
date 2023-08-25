// import { useState } from "react";
// import React from "react";
// import { NavigationTab } from "./Home";


// //function to display the input

// const Touch=()=>{
//     const[input,setInputs]=useState({
//         name:"",
//         email:"",
//         message:""
//     })

//     //this is the function to update the inputs
//     const HandleInputs=(e)=>{
// // const name=e.target.name;
// // const value=e.target.value;
// setInputs(e.target.value)
//     }

//     //this is the function to submit the data to the backend
//     const handleSubmit= async()=>{
//         try{
//         const response=await fetch("http://localhost:5500/contact",{
// method:"POST" ,       
//           headers:{"Content-Type":"application/json"},
//           body:JSON.stringify(input)
//         })
//         if(response.ok){
// const data=await response.json();
// alert(data.message)
//         }else{
// throw new Error(response.error)
//         }
//     }catch(error){

//     }

//     }
//     return(
//         <div className="allcontact">
//             <NavigationTab />
//     <div >
        
//         <form className="formContact" onSubmit={handleSubmit}>
// <label>Name</label>
// <br/><br/>

// <input
// name="name"
// type="textarea"
// value={input.name}
// onChange={HandleInputs}
// placeholder="Enter name"
// /><br/><br/>

// <label>Email</label><br/>
// <input
// name="email"
// type="email"
// value={input.email}
// onChange={HandleInputs}
// placeholder="Enter Email"
// /><br/><br/>

// <label>Message</label><br/>
// <textarea
// rows={4}
// cols={17}
// name="message"
// type="text"
// value={input.message}
// onChange={HandleInputs}
// placeholder="Feedback"
// />

// </form>

// <h1 className="GetIntouch  fw-bold mt-5" onClick={handleSubmit}>Get in touch</h1>
//     </div>
//     </div>
//     )
// }

// export default Touch;


import { useState } from "react";
import React from "react";
import { NavigationTab } from "./Home";

const Touch = () => {
    const [input, setInputs] = useState({
        name: "",
        email: "",
        message: ""
    });

    const HandleInputs = (e) => {
        const { name, value } = e.target; // Destructure name and value from the input element
        setInputs((prevInputs) => ({
            ...prevInputs,
            [name]: value
        }));
    }

    const handleSubmit = async () => {
        try {
            const response = await fetch("https://talknet-k4ku.onrender.com/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(input)
            });

            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                setInputs({
                    name: "",
                    email: "",
                    message: "" 
                })
            } else {
                throw new Error(response.error);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="allcontact">
            <NavigationTab />
            <div>
                <form className="formContact" onSubmit={handleSubmit}>
                    <label>Name</label>
                    <br /><br />

                    <input
                        name="name"
                        type="textarea"
                        value={input.name}
                        onChange={HandleInputs}
                        placeholder="Enter name"
                    /><br /><br />

                    <label>Email</label><br />
                    <input
                        name="email"
                        type="email"
                        value={input.email}
                        onChange={HandleInputs}
                        placeholder="Enter Email"
                    /><br /><br />

                    <label>Message</label><br />
                    <textarea
                        rows={4}
                        cols={17}
                        name="message"
                        value={input.message}
                        onChange={HandleInputs}
                        placeholder="Feedback"
                    />

                </form>

                <h1 className="GetIntouch fw-bold mt-5" onClick={handleSubmit}>Get in touch</h1>
            </div>
        </div>
    );
}

export default Touch;
