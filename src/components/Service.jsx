import React from "react";
import online from "../images/icon-online.svg"
import onboarding from "../images/icon-onboarding.svg"
import budgeting from "../images/icon-budgeting.svg"
import api from "../images/icon-api.svg"

export default function () {
    return (
        <section className="services-section">
            <h1>Why chose Easybank ?</h1>
            <h2>we leverage Open Banking to turn yout bank account into your financial hub .
                Control your finances like never before .</h2>
            <div className="services">
                <div className="service">
                    <img src={online} />
                    <h1>Online Banking
                    </h1>
                    <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                </div>
                <div className="service">
                    <img src={budgeting} />
                    <h1>Simple Budgeting
                    </h1>
                    <p>Simple Budgeting See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits</p>
                </div>
                <div className="service">
                    <img src={onboarding} />
                    <h1>Fast onboarding
                    </h1>
                    <p>Fast Onboarding We don’t do branches. Open your account in minutes online and start taking control of your finances right away</p>
                </div>
                <div className="service">
                    <img src={api} />
                    <h1>Open API
                    </h1>
                    <p>Open API Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
                </div>

            </div>

        </section>
    )
}