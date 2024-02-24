import { Link, useLocation, useNavigate } from 'react-router-dom';
import './LoginForm.css';
import { useState } from 'react';
import UserStore from '../../store/UserStore';
import toast from 'react-hot-toast';
import { VscEyeClosed } from "react-icons/vsc";
import { BiShowAlt } from "react-icons/bi";

const LoginForm = () => {
    const {LoginRequest, ProfileRequest} = UserStore();
    const navigate = useNavigate();
    const [showPassword, setShowPassowrd] = useState(false);

    //user  router location before login
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";


    
    const [data, setData] = useState({})

    const handleLoginData = (name, value)=>{
        setData({
            ...data,
            [name]:value
        })
    }



    const handleSubmit = async(e)=>{
        e.preventDefault();
        const result = await LoginRequest(data);
        if(result["status"] ==="success"){
            await ProfileRequest()
            toast.success('Successfully login');  
            navigate(from, { replace: true });

        }else {
            toast.error(result["message"])
        }

    }




    return (
        <section className='login-form-section'>
            <div className='login-form'>
                <form onSubmit={handleSubmit}>
                    <input onBlur={ (e)=>handleLoginData("email", e.target.value) } className='form-control p-3 animate__animated animate__fadeInUp' type="email" placeholder='Your Email'  />
                    <div className='password-field '>
                        <input onBlur={ (e)=>handleLoginData("password", e.target.value) } 
                            className='form-control my-2 p-3 animate__animated animate__fadeInUp'
                            type={showPassword ? "text" : "password"}  placeholder="Password" />
                        <span onClick={()=>setShowPassowrd(!showPassword)} className='password-icon'> {showPassword ? <BiShowAlt />   :  <VscEyeClosed />  } </span>
                    </div>

                    <input className='btn btn-success w-100 p-3 animate__animated animate__fadeInUp' type="submit" value="LOGIN" />
                </form>
                <p className='mt-2 animate__animated animate__fadeInUp'> <Link to="/reset-password">Forget password?</Link> </p>
                <p className='mt-2 animate__animated animate__fadeInUp'>Need an account? <Link to="/signup">Sign Up</Link> </p>
                
            </div>
        </section>
    );
};

export default LoginForm;