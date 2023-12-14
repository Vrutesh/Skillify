import "./Footer.css"
import React from "react"
import { Link } from "react-router-dom"

function Footer(){
    return(
        <>
        <footer>
            <div className="footer-logo">
             <Link to={"/"}>
                <h1>SKILLIFY</h1></Link>
            </div>
            <div className="footer-social">
            <i class="bi bi-instagram"></i>
            <i class="bi bi-twitter-x"></i>
            <i class="bi bi-facebook"></i>
            </div>
            <div className="footer-copyrights">
            <p>© Copyright 2023. All Rights Reserved by Vrutesh & Ahmed.</p>
            </div>

        </footer>
        </>
    )
}

export default Footer