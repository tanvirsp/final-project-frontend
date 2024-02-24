import {create} from 'zustand';
import axios  from "axios";
import Cookies from "js-cookie";
import {setEmail, getEmail} from '../utility/utility'




const UserStore = create( (set) =>({

    OtpProcessing: false,


    isLogin:()=>{
        return !!Cookies.get('token');
    },


    LoginRequest: async(data) =>{
        const res = await axios.post(`http://localhost:5000/api/v1/login`, data, {withCredentials: true});
        return res["data"]

    },

    SignUpRequest: async(data) =>{
      
        set({OtpProcessing: true})
        const res = await axios.post(`http://localhost:5000/api/v1/register`, data);
        setEmail(data["email"]);
        if(res.data.status==="success"){
            set({OtpProcessing: false});
            return res["data"]
        } else {
            set({OtpProcessing: false});
            return res["data"]
        }
       
    },
    
    OtpVerifyRequest: async(otp) =>{
        const email = getEmail()
        const res = await axios.get(`http://localhost:5000/api/v1/verify-otp/${email}/${otp}`, {withCredentials: true}  );
        return res["data"]

    }, 

    EmailVerifyRequest: async(email) =>{
        set({OtpProcessing: true});
        setEmail(email)
        const res = await axios.get(`http://localhost:5000/api/v1/sendOtp/${email}`, );
        set({OtpProcessing: false});
        return res["data"]
    },

    ResetPasswordRequest: async(newPassword) =>{
        //taking email from local store
        const email = getEmail()

        const data = {newPassword, email}

        const res = await axios.post(`http://localhost:5000/api/v1/reset-password`, data );
        return res["data"]
    },


    ChangePasswordRequest: async(data) =>{
        const res = await axios.post(`http://localhost:5000/api/v1/change-password`, {data}, {withCredentials: true} );
        return res["data"]
    },

    


    Profile: null,
    ProfileRequest: async() =>{
        const res = await axios.get(`http://localhost:5000/api/v1/profile`, {withCredentials: true} );
        set({Profile: res["data"]["data"][0]})
        

    },

    ProfileUpdateService: async(data) =>{
        const res = await axios.post(`http://localhost:5000/api/v1/profile`, data,  {withCredentials: true} );
        return res["data"]

    },


    LogoutRequest: async() =>{
        const res = await axios.get(`http://localhost:5000/api/v1/logout`,  {withCredentials: true}  );
        return res["data"]

    },

  






}));



export default UserStore;