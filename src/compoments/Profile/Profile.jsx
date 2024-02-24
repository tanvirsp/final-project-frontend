import './Profile.css';
import UserStore from '../../store/UserStore';
import avater from "../../assets/images/avater.jpg"
import ChangePasswordFromProfile from './ChangePasswordFromProfile';
import { useRef } from 'react';
import toast from 'react-hot-toast';

const Profile = () => {
    const {Profile, ProfileUpdateService, ProfileRequest} = UserStore();
    const pictureRef = useRef()

    if(Profile === null){
        return <p>Loading...</p>

    }

    const handleProfilePictureUpdate = async()=>{
        const picUrl = pictureRef.current.value
        const updateData = {picture: picUrl }

        const result = await ProfileUpdateService(updateData);
        if(result["status"] === 'success'){
            toast.success("Profile picture has been changed");
            await ProfileRequest()
        }

    }
    
    return (
        <section>
            <div className="container">
                <div className='profile-banner'>
                    <h3>Profile</h3>
                    <h5>Hello, {Profile?.name}</h5>
                    
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <div className="profile-section">
                            <div className='profile-img'>
                                <img src={Profile["picture"]? Profile["picture"]: avater   } alt="Avater" />
                            </div>
                            <div>
                                <label className='mt-3'>Profile Picture URL</label>
                                <input ref={pictureRef} type="text" className='form-control p-3 my-1' />
                                <button onClick={handleProfilePictureUpdate} className='btn btn-success p-2 mt-2'>Set Profile Picture</button>
                            </div>
                            <div>
                                <label className='mt-3' >Your Name</label>
                                <input disabled type="text" className='form-control p-3 my-1' 
                                value={Profile["name"]} readOnly/>
                            </div>
                            <div>
                                <label className='mt-3'>Your Email</label>
                                <input disabled type="text" className='form-control p-3 my-1' 
                                value={Profile["email"]} readOnly />
                            </div>
                            <div>
                                <label className='mt-3'>Your Mobile</label>
                                <input disabled type="text" className='form-control p-3 my-1'
                                value={Profile["mobile"]} readOnly />
                            </div>
                        </div>

                    </div>
                    <div className="col-md-5">
                        <ChangePasswordFromProfile />

                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Profile;