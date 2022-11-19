import React from "react";
import "../styles/app.scss"
import Nav from "./Nav"
import Home from "./Home"
import Article from "./Article"
import Footer from"./Footer"
export default function () {
    return (<>
        <Nav />
        <Home/>
        <Article/>
        <Footer/>
        </>
    )
}

