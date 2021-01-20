import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import '../resources/css/Navbar.css'


const Navbar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                     Spatikal
                    </NavLink>
                    <div className="nav-search">
                        <div className="nav-searchicon">
                            <i class="fa fa-search" aria-hidden="true"></i>
                        </div>
                        <input className="nav-searchinput" placeholder="Search…"/>
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink exact to="/about" activeClassName="active" className="nav-links" onClick={handleClick}>
                                About Us
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/contact" activeClassName="active" className="nav-links" onClick={handleClick}>
                                Contact Us
                            </NavLink>
                        </li>
                        <li className="nav-item"> 
                            <NavLink exact to="/login" activeClassName="active" className="nav-links" onClick={handleClick}>
                            <span>
                                Login
                                <i className="fa fa-sign-in" aria-hidden="true"></i>
                            </span>
                            </NavLink>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar