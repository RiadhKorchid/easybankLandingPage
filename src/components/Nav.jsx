import React from "react";
import logo from "../images/logo.svg"
import hamburger from "../images/icon-hamburger.svg"
export default function () {
    function show() {
        document.querySelector(".image").classList.toggle("clicked");
        document.querySelector(".mobile-list").classList.toggle("show");
    }
    return (
        <nav>
            <img src={logo} alt="" />
            <div className="center">
                <ul className="desktop-list">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Blog</li>
                    <li>Careers</li>
                </ul>

            </div>
            <div className="right">
                <div className="image" onClick={show}></div>
                <button>Request Invite</button>
            </div>

         <ul className="mobile-list">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Blog</li>
                <li>Careers</li>
            </ul>
            
        </nav>
    )
}