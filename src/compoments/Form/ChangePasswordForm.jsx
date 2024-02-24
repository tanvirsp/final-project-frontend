import { useState } from "react";
import toast from "react-hot-toast";
import UserStore from "../../store/UserStore";
import { useNavigate } from "react-router-dom";


const ChangePasswordForm = () => {
    const {ResetPasswordRequest} = UserStore();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate()


    const handlePassword = (e) =>{
        setPassword(e.target.value);
    };


    const handleConfirmPassword = (e) =>{
        setConfirmPassword(e.target.value);
    }  
    
    
    
    const handleSubmit = async(e)=>{
        e.preventDefault();

        if(password ===confirmPassword){
            const result = await ResetPasswordRequest(password);
            if(result["status"] ==="success"){
                toast.success("Password  changed successfully");
                navigate("/")
            }

        } else {
           toast.error("Password is not same");
        }
       

    }


    
    return (
        <section className='login-form-section'>
        <div className='login-form '>
            <div  className="animate__animated animate__fadeInUp">
                <form onSubmit={handleSubmit}>
                    <label> New Password</label>
                    <input onChange={handlePassword } className='form-control p-3' type="password" 
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"  
                        title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"    />

                    <label className="mt-3">Confirm New Password</label>
                    <input onChange={handleConfirmPassword } className='form-control p-3 ' type="password"   />
                
                    <input className='btn btn-success w-100 p-3 mt-3 animate__animated animate__fadeInUp' type="submit" value="Change Password" />
                </form>
            </div>
        </div>
    </section>
    );
};

export default ChangePasswordForm;