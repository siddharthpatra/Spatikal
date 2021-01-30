import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import '../../resources/css/Navbar.css'


const Navbar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                     <h2>Spatikal</h2>
                    </NavLink>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink exact to="/about" activeClassName="active" className="nav-links" onClick={handleClick}>
                                <span>About Us</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/blog" activeClassName="active" className="nav-links" onClick={handleClick}>
                                <span>Blog</span>
                            </NavLink>
                        </li>
                        {/* <li className="nav-item"> 
                            <NavLink exact to="/login" activeClassName="active" className="nav-links" onClick={handleClick}>
                            <span>
                                Login
                                <i className="fa fa-sign-in" aria-hidden="true"></i>
                            </span>
                            </NavLink>
                        </li> */}
                        <li className="nav-search nav-item">
                            <i className="fa fa-search" aria-hidden="true" onFocus={handleClick}></i>
                            {click ? <input className="nav-searchinput" placeholder="Search…"/> : null}
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