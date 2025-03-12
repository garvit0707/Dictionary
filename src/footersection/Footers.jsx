import React from "react";
import "./Footers.css";
import logo from "../assets/iconss.png"

const Footers = () => {
    return (
        <footer className="footer">
            <div className="footerContainer">
                <div className="column">
                    <h4 className="title">Unwinnd</h4>
                    <p className="link">About</p>
                    <p className="link">Contact us</p>
                    <p className="link">Careers</p>
                </div>
                <div className="column">
                    <h4 className="title">Services</h4>
                    <p className="link">Psychologists</p>
                    <p className="link">Psychiatrists</p>
                    <p className="link">Neurologists</p>
                    <p className="link">General physician</p>
                    <p className="link">Rehabilitation centre</p>
                    <p className="link">Radiology</p>
                    <p className="link">Medicine</p>
                    <p className="link">Pediatrician</p>
                </div>
                <div className="column">
                    <h4 className="title">Resources</h4>
                    <p className="link">Blog</p>
                    <p className="link">Community</p>
                    <p className="link">Events</p>
                    <p className="link">Help centre</p>
                    <p className="link">Tutorials</p>
                </div>
                <div className="column">
                    <h4 className="title">Support</h4>
                    <p className="link">For doctor</p>
                    <p className="link">For patient</p>
                    <p className="link">Help</p>
                </div>
                <div className="column">
                    <h4 className="title">Social</h4>
                    <p className="link">Twitter</p>
                    <p className="link">LinkedIn</p>
                    <p className="link">Facebook</p>
                </div>
                <div className="column">
                    <h4 className="title">Legal</h4>
                    <p className="link">Terms</p>
                    <p className="link">Privacy</p>
                    <p className="link">Cookies</p>
                    <p className="link">Licenses</p>
                    <p className="link">Settings</p>
                    <p className="link">Contact</p>
                </div>
            </div>
            <div className="bottomText">Grow with us</div>
            <div className="footer">
                <div className="footerContainer2">
                    <div className="logoBox">
                        <img src={logo} alt="Unwinnd Logo" className="logo" />
                        <div>
                            <h3 className="brandName">Unwinnd</h3>
                            <p className="tagline">Connecting emotions</p>
                        </div>
                    </div>
                    <p className="copyright">© 2025 Unwinnd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footers;
