import React from 'react'
import "../Notification/Notification.css"
import img1 from "../../assets/users/userImage1.jpg"
import img2 from "../../assets/users/userImage2.jpg"
import img3 from "../../assets/users/userImage3.jpg"
import img4 from "../../assets/users/userImage4.jpg"
import {AiOutlineHome} from "react-icons/ai"
import ProfileImg from "../../assets/profilepic.jpg"

import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from 'react-router-dom'

const Notification = () => {
  
  const { user } = useContext(AuthContext);

  return (
    <div className="noti-overall">
      <div className='nav-section'>
        <Link to="/home" style={{textDecoration:"none"}} className='noti-div'><AiOutlineHome className='noti-Home-Icon'/></Link>
        <Link to={`/profile/${user?.username}`} style={{textDecoration:"none"}}><img src={user.profilePicture ? user.profilePicture : ProfileImg} alt="" /></Link>
      </div>

    <div className="notification-group">
      <h1>notification</h1>
      <div className="notification-section">
        <div className="notification-msg">
            <img src={img1} alt="" />
            <p>Mike Tysion liked <span className='noti-like'>your profile picture</span><small><br />10 mins ago</small></p>
        </div>

        <div className="notification-msg">
            <img src={img2} alt="" />
            <p>Violet liked <span className='noti-like'> your profile picture</span><br /><small>1 day ago</small></p>
        </div>

        <div className="notification-msg">
            <img src={img2} alt="" />
            <p>violet liked <span className='noti-like'>your cover picture</span><br /><small>20s ago</small></p>
        </div>

        <div className="notification-msg">
            <img src={img3} alt="" />
            <p>Brandon liked <span className='noti-like'>your profile picture</span><br /><small>5h ago</small></p>
        </div>

        <div className="notification-msg">
            <img src={img4} alt="" />
            <p>Camille liked <span className='noti-like'>your profile picture</span><br /><small>1 min ago</small></p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Notification ;