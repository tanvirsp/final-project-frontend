import './ShippingBanner.css';
import { FaShippingFast } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";



const ShippingBanner = () => {
    return (
        <div className="container">
            <div className="row shipping-banner">
                <div className="col-md-3">
                    <div className="banner-item first-banner">
                        <p><FaShippingFast /></p> 
                        <div>
                            <h6>Free shipping</h6>
                            <small>When you spend $80 or more</small>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="banner-item">
                        <p><AiFillMessage /></p> 
                        <div>
                            <h6>We are available 24/7</h6>
                            <small>Need help? contact us anytime</small>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="banner-item">
                        <p><FaArrowRotateLeft /></p> 
                        <div>
                            <h6>Satisfied or return</h6>
                            <small>Easy 30-day return policy</small>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="banner-item">
                        <p><MdOutlinePayment /></p> 
                        <div>
                            <h6>100% secure payments</h6>
                            <small>Visa, Mastercard, Stripe, PayPal</small>
                        </div>
                    </div>
                </div>
            
            
            </div>
        </div>
    );
};

export default ShippingBanner;