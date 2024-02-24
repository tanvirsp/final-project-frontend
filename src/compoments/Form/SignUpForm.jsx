import { Link, useNavigate } from 'react-router-dom';
import './LoginForm.css';
import UserStore from '../../store/UserStore';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { VscEyeClosed } from "react-icons/vsc";
import { BiShowAlt } from "react-icons/bi";

const SignUpForm = () => {
    const {SignUpRequest, OtpProcessing} = UserStore();
    const nagivate = useNavigate();
    const [data, setData] = useState({});
    const [showPassword, setShowPassowrd] = useState(false);

    const handleLoginData = (name, value)=>{
        setData({
            ...data,
            [name]:value
        })
    }



    const handleSubmit = async(e)=>{
        e.preventDefault();
        const result = await SignUpRequest(data);
        if(result["status"] ==="success" ){
            nagivate("/otp-form");
        } else {
            toast.error(result.message)
        }

    }



    return (
        <section className='login-form-section'>
            
        <div className='login-form  '>
            <h3 className='text-center mb-4 display-6'>Create an account</h3>
            <form onSubmit={handleSubmit}>
                <input  onBlur={ (e)=>handleLoginData("name", e.target.value) }  type="text" placeholder='Name' required 
                     className='form-control p-3 my-2 animate__animated animate__fadeInUp' />

                <input  onBlur={ (e)=>handleLoginData("email", e.target.value) } className='form-control p-3 my-2 animate__animated animate__fadeInUp' 
                    type="email" placeholder='Email' required />

                <input  onBlur={ (e)=>handleLoginData("mobile", e.target.value) } className='form-control p-3 my-2 animate__animated animate__fadeInUp' 
                    type="tel" placeholder='Mobile' pattern="^(((\+|00)?880)|0)(\d){10}$" 
                    title="Enter a valid mobile number" required />

                <div className='password-field animate__animated animate__fadeInUp'>
                    <input  onBlur={ (e)=>handleLoginData("password", e.target.value) } className='form-control my-2 p-3 ' 
                        type={showPassword ? "text" : "password"} placeholder="Password" required
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"  />
                    <span onClick={()=>setShowPassowrd(!showPassword)} className='password-icon'> {showPassword ? <BiShowAlt />   :  <VscEyeClosed />  } </span>
                </div>
                
                {
                    OtpProcessing ?  <button className="btn btn-success w-100" type="button" disabled>
                                        <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                                        <span role="status">Processing...</span>
                                    </button>:
                                    <input className='btn btn-success w-100 p-3 animate__animated animate__fadeInUp' type="submit" value="Create an account" />
                }
                
                
            </form>
            <p className='mt-2 animate__animated animate__fadeInUp'>Already have an account? <Link to="/login">Login</Link> </p>
            
        </div>
    </section>
    );
};

export default SignUpForm;