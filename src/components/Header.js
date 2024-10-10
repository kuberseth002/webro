import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <div class="parentnav">
        <div class="main">
        <div class="header">
            <div class="logo">
                <div class="logoimg">
                    <img class="lo" src="./images/Shape 1.png" alt="" />
                </div>
                <div class="logotext">
                    <a href=""> <img src="./images/WebPro.png" alt="" /></a>
                    <p style={
                        {
                            fontFamily : "sans-serif",
                            paddingLeft : "5.59px"
                        }
                    }>TAGLINE HERE</p>

                </div>

            </div>
        </div>

        <div class="icon-container">
            <div class="icon">
                <a href="https://www.facebook.com/" class="pp"><img src="images/fav.png" alt="" /></a>
                <a href="https://twitter.com/" class="pp"><img src="images/twit.png" alt="" /></a>
                <a href="https://www.skype.com/en/" class="pp"><img src="images/skype.png" alt="" height="25px" /></a>
                <a href="" class="pp"><img src="images/icons8-linkedin-50.png " alt="" height="25px" /></a>
            </div>
        </div>
        <div class="menu-container">
            <div class="menu">
                <li><a href="#home">
                    <Link to="/">
                       Home
                    </Link>
                </a></li>
                <li><a href="">
                   <Link to="about">
                       About
                    </Link>
                    </a></li>
                <li><a href="">
                <Link to="blog">
                       Blog
                    </Link>
                    </a></li>
                <li><a href="">
                <Link to="service">
                       Services
                    </Link>
                    </a></li>
                <li><a href="">
                <Link to="pages">
                       Pages
                    </Link>
                    </a></li>
                <li><a href="">
                <Link to="contact">
                       Contact Us
                    </Link>
                </a></li>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Header