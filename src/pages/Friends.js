import React from "react";
import { FirstsideBar } from "./HeaderWork";
import Header from "./HeaderWork";
import { GetFriends } from "./Recommands";


export const Friends=()=>{
    return(
        <div>
              <Header/>
              <div className="">
              <div className="">
              <FirstsideBar/>
              </div>
        
         
            <div className="">
            <GetFriends/>
            </div>
        
            </div>
        </div>
    )
}
