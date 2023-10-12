import React from 'react'
import './ProfileInfo.css'
import profile2 from '../../assets/profile2.png'
import clock from '../../assets/clock.svg'
import lock from '../../assets/lock.svg'
import user from '../../assets/user.svg'
import notification from '../../assets/notification.svg'
function ProfileInfo() {
    return (
        <>
        <div className='profileinfo-maindiv'>
            <div>
            <div className='profileinfo-topcard'>
                <div id='profileinfo-Pfofile'>
                    <img src={profile2} alt="Karmadev" className='profileinfo-Profile'/>
                </div>
                <div className='profileinfo-profile2'>
                    <div className='profileinfo-username'><h3>Steven Mallet</h3> </div>
                    <div className='profileinfo-usermail'> <p>amanda@gmail.com</p></div>
                    <button className='profileinfo-Button'>Edit</button>
                </div>
            </div>
            
                <hr></hr>
    <div className='profileinfo-bottomcard'>
                    <div className='profileinfo-bottomcards'><img src={user} alt="karmadev" className='profileinfo-user'/> <p>Update My Profile</p></div>
                    <div className='profileinfo-bottomcards'><img src={clock} alt="karmadev"className='profileinfo-clock'/><p>My Time Sheets</p></div>
                    <div className='profileinfo-bottomcards'><img src={lock} alt="karmadev"className='profileinfo-lock'/><p>Update Password</p></div>
             </div>
<hr></hr>
<p className='profileinfo-logout'>Logout</p>
        </div>  </div></>   
    )
}

export default ProfileInfo