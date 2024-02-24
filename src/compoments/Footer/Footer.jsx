import './Footer.css';
import { FaSquareXTwitter,FaLinkedin , FaSquareInstagram,  FaSquareFacebook  } from "react-icons/fa6";
import logo from "../../assets/images/logo_white.png";
import payment from "../../assets/images/payment.webp"

const Footer = () => {
    return (
        <div>
             <div>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={logo} className="logo" alt="" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae adipisci  </p>
                            <ul className="social-icons">
                                <li> <a href="#"><FaSquareFacebook /> </a> </li>
                                <li> <a href="#"><FaSquareXTwitter /> </a> </li>
                                <li> <a href="#"><FaLinkedin /> </a> </li>
                                <li> <a href="#"><FaSquareInstagram /> </a> </li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h5>Quick Link</h5>
                            <ul className="quick-link">
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Shop</a></li>
                                <li><a href="#">Terms and Conditions</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h5>My Account</h5>
                            <ul className="quick-link">
                                <li><a href="#">My Account</a></li>
                                <li><a href="#">Cart</a></li>
                                <li><a href="#">Terms and Conditions</a></li>
                                <li><a href="#">FAQs</a></li>
                            </ul>
                            
                        </div>
                        <div className="col-md-3">
                            <h5>Contact Info</h5>
                            <ul className="quick-link">
                                <li>Address: Your Address Goes Here</li>
                                <li>Phone: +88012345689</li>
                                <li>Email: demo@example.com</li>
                            </ul>
                            
                            
                        </div>


                    </div>
                
                </div>
            </footer>
            <div className="copyright">
                <div className="container">
                    <div className="copyright-text">
                        <p>© 2022 Onlineshop Made With  By Ostad .</p>
                        <div><img src={payment} alt="Payment Icon" /></div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Footer;