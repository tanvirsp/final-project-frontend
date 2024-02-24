import { useNavigate } from "react-router-dom";
import UserStore from "../../store/UserStore";
import { useState } from "react";
import toast from "react-hot-toast";



const ResetForm = () => {

    const {EmailVerifyRequest, OtpProcessing} = UserStore();
    const nagivate = useNavigate();

    const [userEmail, setUserEmail] = useState("")

    const handleLoginData = (e)=>{
        setUserEmail(e.target.value);
        
    }



    const handleSubmit = async(e)=>{
        e.preventDefault();
      
        const result = await EmailVerifyRequest(userEmail);
        if(result["status"] ==="success"){
            toast.success("Check your Email")
            nagivate("/reset-verify-otp")
        }
  
    }


    return (
        <section className='login-form-section'>
            <div className='login-form  '>
                <input type="email" onBlur={ handleLoginData }   className="form-control p-2" placeholder="Enter Your User Email"/>
                {
                    OtpProcessing ?  <button className="btn btn-success w-100 mt-2" type="button " disabled>
                                        <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                                        <span role="status">Processing...</span>
                                    </button>:
                                    <input className='btn btn-success w-100 p-2 mt-2 ' onClick={handleSubmit} type="submit" value="Verify Email" />
                }
            </div>
       
        </section>
    );
};

export default ResetForm;