import React from "react";
import logo from "../images/logo.svg"
export default function (){
    return(
        <nav>
            <div className="left">
            <img src={logo} alt="" />                
            </div>
            <div className="center">
             <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Blog</li>
                <li>Careers</li>
             </ul>
            </div>
                <button>Request Invite</button>
       
        </nav>
     )
}