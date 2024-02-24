import './Profile.css';
import UserStore from '../../store/UserStore';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { VscEyeClosed } from "react-icons/vsc";
import { BiShowAlt } from "react-icons/bi";
import { useState } from 'react';


const ChangePasswordFromProfile = () => {
    const {ChangePasswordRequest, LogoutRequest} = UserStore();

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const navigate = useNavigate()

    const [showOldPassword, setShowOldPassowrd] = useState(false);
    const [showNewPassword, setShowNewPassowrd] = useState(false);

    const handleOldPassword = (e) =>{
        setOldPassword(e.target.value);
    };


    const handleNewPassword = (e) =>{
        setNewPassword(e.target.value);
    }  
    
    
    //Change password
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const data = {oldPassword, newPassword }
        const result = await ChangePasswordRequest(data);
        if(result["status"] ==="success"){
            toast.success("Password  changed successfully");
            handleLogout()
        }
        if(result["status"] ==="fail"){
            toast.error(result["message"]);
        }

    };


    //Logout 
    const handleLogout = async()=>{
        const result = await LogoutRequest();
        if(result.status ==="success"){
          sessionStorage.clear();
          localStorage.clear();
          navigate("/");
          toast.success("Logout Successfully");
        }
    }
  

    

   

    return (
        <div className='profile-section-2'>
            <h4 className='mb-3'>Change Your Passowrd</h4>
            <form onSubmit={handleSubmit}>
                <label> Old Password</label>
                <div className='password-field '>
                    <input onChange={handleOldPassword } className='form-control p-3' type={showOldPassword ? "text" : "password"}  />
                    <span onClick={()=>setShowOldPassowrd(!showOldPassword)} className='password-icon'>  
                        {showOldPassword ? <BiShowAlt />   :  <VscEyeClosed />  }
                    </span>
                </div>


                <label className="mt-3">New Password</label>
                <div className='password-field '>
                    <input onChange={handleNewPassword } className='form-control p-3 ' type={showNewPassword ? "text" : "password"} 
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"/>
                    <span onClick={()=>setShowNewPassowrd(!showNewPassword)} className='password-icon'>  
                        {showNewPassword ? <BiShowAlt />   :  <VscEyeClosed />  }
                    </span>
                </div>
            
                <input className='btn btn-dark w-100 p-3 mt-3 ' type="submit" value="Change Password" />
            </form>


        </div>
    );
};

export default ChangePasswordFromProfile;