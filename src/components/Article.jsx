import React from "react";
import currency from "../images/image-currency.jpg"
import restaurant from "../images/image-restaurant.jpg"
import plane from "../images/image-plane.jpg"
import confetti from "../images/image-confetti.jpg"

export default function () {
    return (
        <section className="article-section">
            <div className="header"><h1>Latest Articles</h1></div>
            <div className="articles">
                <div className="article">
                    <img src={currency} alt="" />
                    <div className="author">By Claire Robinson</div>
                    <h1>Recieve money in any currency with no fees</h1>
                    <p>The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>
                </div>
                <div className="article">
                    <img src={restaurant} alt="" />
                    <div className="author">by Wilson Hutton</div>
                    <h1>Treat yourself without worrying about money</h1>
                    <p>Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …</p>
                </div>
                <div className="article">
                    <img src={plane} alt="" />
                    <div className="author">By Wilson Hutton</div>
                    <h1>Take your Easybank card wherever you go We want</h1>
                    <p>We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you ...</p>
                </div>
                <div className="article">
                    <img src={confetti} alt="" />
                    <div className="author">By Claire Robinson</div>
                    <h1>Our invite-only Beta accounts are now live!</h1>
                    <p>After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...</p>
                </div>
            </div>
        </section>
    )
}