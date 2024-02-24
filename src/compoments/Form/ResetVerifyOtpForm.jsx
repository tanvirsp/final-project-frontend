import { useNavigate } from "react-router-dom";
import UserStore from "../../store/UserStore";
import { useState } from "react";

const ResetVerifyOtpForm = () => {
    const {OtpVerifyRequest, } = UserStore();
    const nagivate = useNavigate();

    
    const [otp, setOtp] = useState()


    const handleOtp = (e)=>{
        setOtp(e.target.value);
    }

  


    const handleSubmit = async(e)=>{
        e.preventDefault();
        const result = await OtpVerifyRequest(otp);
        if(result["status"] ==="success" ){
          
            //navigate user to change password
            nagivate("/change-password-form");
        }
        
    }



    return (
        <section className='login-form-section'>
             <div className='login-form  '>
                <input type="text" onBlur={ handleOtp }  className="form-control p-2" placeholder="Your OTP code"/>
                <input type="submit" onClick={handleSubmit} value="Verify" className="btn btn-info w-100 mt-2 p-2" />
                
            </div>
            
        </section>
    );
};

export default ResetVerifyOtpForm;