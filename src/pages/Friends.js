import React from "react";
import { FirstsideBar } from "./HeaderWork";
import Header from "./HeaderWork";


export const Friends=()=>{

    return(
        <div>
            <FirstsideBar/>
            <Header/>
            <FriendCont/>
        
        </div>
    )
}

const FriendCont=()=>{
    return(
        <div className="users">
          <h1>Friends</h1>
        </div>
    )
}