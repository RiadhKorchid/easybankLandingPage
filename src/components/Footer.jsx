import React from "react";
import logo from "../images/logo.svg"
import { FaFacebook } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaPinterest } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
export default function () {
    return (
        <footer>
            <div className="footer-left">
                <img src={logo} className="logo" />
                <div className="icons">
                    <FaFacebook className="icon" />
                    <FaYoutube className="icon" />
                    <FaTwitter className="icon" />
                    <FaPinterest className="icon" />
                    <FaInstagram className="icon" />
                </div>
            </div>
            <div className="spacebetween">
            <div className="footer-center">
                <ul>
                    <li>About us</li>
                    <li> Contact</li>
                    <li> Blog</li>
                    <li> Careers</li>
                    <li> Support</li>
                    <li> Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-right">
                <button>Request Invite</button>
                <p>&copy; Easybank. All Rights Reserved</p>
            </div>
            </div>
        </footer>
    )
}