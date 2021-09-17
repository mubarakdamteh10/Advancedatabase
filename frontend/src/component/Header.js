import React from "react"
import { Link } from "react-router-dom"

export default class Header extends React.Component{
    render(){
        return(
        <header class="header">
        <div class="container">
            <div class="row">
                <div class="col-lg-2">
                    <div class="header__logo">
                        <Link to="/">
                            <img src="img/logo.png" alt=""/>
                        </Link>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="header__nav">
                        <nav class="header__menu mobile-menu">
                            <ul>
                                <li class="active"><Link to="/">Homepage</Link></li>
                                <li><Link to="/categories">Categories <span class="arrow_carrot-down"></span></Link>
                                    <ul class="dropdown">
                                        <li><Link to="/categories.html">Categories</Link></li>
                                        <li><Link to="/animeDetail">Anime Details</Link></li>
                                        {/* <li><Link to="./anime-watching.html">Anime Watching</Link></li> */}
                                        {/* <li><Link to="./blog-details.html">Blog Details</Link></li> */}
                                        <li><Link to="/register">Sign Up</Link></li>
                                        <li><Link to="/login">Login</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="./blog.html">Our Blog</Link></li>
                                <li><Link to="#">Contacts</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="header__right">
                        <Link to="#" class="search-switch"><span class="icon_search"></span></Link>
                        <Link to="/login"><span class="icon_profile"></span></Link>
                    </div>
                </div>
            </div>
            <div id="mobile-menu-wrap"></div>
        </div>
    </header>
        )
    }
}