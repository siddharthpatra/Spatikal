import React from 'react'
import {NavLink} from 'react-router-dom'

import '../../resources/css/footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="column">
                            <NavLink exact to ="/" className="nav-logo-footer">
                                <h2>Spatikal</h2>
                            </NavLink>
                            <ul className="list-unstyled">
                                <li>Shanti Nagar</li>
                                <li>Bhilai</li>
                                <li>Chattisgarh- 769850</li>
                            </ul>
                        </div>
                        <div className="column">
                            <NavLink exact to ="/contact" className="nav-logo-footer">
                            <h3> Contact</h3>
                            </NavLink>
                            <ul className="list-unstyled">
                                <li>Direct</li>
                                <li>Facebook</li>
                                <li>Instagram</li>
                            </ul>
                        </div>
                        <div className="column">
                            <NavLink exact to="/about" className="nav-logo-footer">
                                <h3>About Us</h3>
                            </NavLink>
                            <ul className="list-unstyled">
                                <li>Shanti Nagar</li>
                                <li>Bhilai</li>
                                <li>Chattisgarh- 769850</li>
                            </ul>
                        </div>
                        <div className="column">
                            <h3>
                                Follow us at
                            </h3>
                            <ul className="list-unstyled">
                                <li>Shanti Nagar</li>
                                <li>Bhilai</li>
                                <li>Chattisgarh- 769850</li>
                            </ul>
                        </div>
                    </div>
                    <hr/>
                    <div className="row terms">
                        <p className="col-sm">
                            &copy;{new Date().getFullYear()} Spatikal | All rights reserved | Terms of Service | Privacy
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer