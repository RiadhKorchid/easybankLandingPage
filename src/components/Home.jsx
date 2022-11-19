import React from "react";
import bgintro from "../images/bg-intro-desktop.svg"

export default function(){

    return (
        <section className="home">
        <div className="home-left">
            <h1>Next generation digital banking </h1>
            <p> take your financial life online . Your Easybank account will be a one-stop-shop spending , saving, budgeting, investing, and much more .</p>
            <button> Request Invite</button>
        </div>
        <div className="home-right">
            <img src={bgintro}/>
        </div>
        </section>
    )
}