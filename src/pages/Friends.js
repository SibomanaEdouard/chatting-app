import React from "react";
import { FirstsideBar } from "./HeaderWork";
import Header from "./HeaderWork";
import { GetFriends } from "./Recommands";


export const Friends=()=>{
    return(
        <div>
            <FirstsideBar/>
         
            <Header/>
            <GetFriends/>
         
        </div>
    )
}
