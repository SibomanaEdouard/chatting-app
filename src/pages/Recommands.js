import React, { useState } from "react";
import { FirstsideBar } from "./HeaderWork";
import Header from "./HeaderWork";
import axios from "axios";

//This is the components to get All users 
export const RecommendedFriends=()=>{
const [Information,setInformation]=useState([]);
 const FetUsers=async()=>{
    const Response= await axios.get('http://localhost:5500/sign/recommends')
    .then((Response=>{
      setInformation(Response.data);
    }))
    .catch(error=>{
        console.error(Response.error)
    })

}
FetUsers();
return(
    <div className="users">
        <h1>People you may know </h1>
        {Information.length > 0 ?(
            
            <ul>
                {Information.map((eddy)=>(
                    <li>
<div>
 <h3>{eddy.lastname}</h3> 
 <p>mutual friends</p>
 </div>
 <div className="recommandPro">
 <h3>View profile</h3>
 <p>Add Friend</p>
 <p>message</p>
 </div>

</li>
                ))}

            </ul>
        ):(
            <h1>No Friends are found</h1>
        )}

    </div>
   
)
}

export const Recommends=()=>{

    return(
        <div className="recommendsCont">
            <FirstsideBar/>
            <Header/>
           <RecommendedFriends/>
        </div>
    )
}