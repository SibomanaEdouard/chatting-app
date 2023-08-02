import React from "react";
import { FirstsideBar } from "./HeaderWork";
import Header from "./HeaderWork";
import { GetFriends } from "./Recommands";


export const Friends=()=>{
    return(
        <div>
            <FirstsideBar/>
         
            <Header/>
            <h1 className="text-start"
            style={{
              marginLeft:"12%"  
            }}
            >Friends</h1>
            <GetFriends/>
            {/* <FriendCont/>        */}
        </div>
    )
}

//this is the  next 
// const FriendCont=()=>{

    // return(
        // <div className="users">
        //   <h1>Friends</h1>
        // </div>
    // )
// }