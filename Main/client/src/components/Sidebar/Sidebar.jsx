import React, { useContext, useState } from 'react'
import "../Sidebar/sidebar.css"
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineSearch} from "react-icons/ai"
import {FiTrendingUp} from "react-icons/fi"
import { Link } from 'react-router-dom';
import {BsBookmark} from "react-icons/bs"
import {RiFileListLine} from "react-icons/ri"
import {FiSettings} from "react-icons/fi"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { AuthContext } from "../../context/AuthContext";

import Profile from "../../assets/profilepic.jpg"


const Sidebar = ({profileImg,
               modelDetails, setExploreActive 
              }) => {

  const [btnActive,setBtnActive] =useState("#")
  const [logOutExit,setLogOutExit] =useState(false)
  const { user } = useContext(AuthContext);

  const LogOut = ()=>{
    localStorage.removeItem('user') ;
    window.location.href = '/login' ;
  }


  return (
    <div className="L-features">
      <Link to="/home" style={{textDecoration:"none",color:"black"}}>
        <div onClick={()=>setBtnActive("#")} id='L-box' className={btnActive === "#" ? "active" : ""} >
          <AiOutlineHome className='margin'/>
          <span>Home</span>
        </div>
      </Link>
    
      <Link id='L-box' to="/explore" onClick={() => setBtnActive("#explore")} className={btnActive === "#explore" ? "active" : ""}>
        <AiOutlineSearch className='margin'/>
        <span>Explore</span>
      </Link>

          
      <Link id='L-box' to="/trending" onClick={()=>setBtnActive("#trending")} className={btnActive === "#trending" ? "active" : ""}>
       <h1 className='notifi'>
          <FiTrendingUp 
           className='margin'/>
        </h1> 
        <span>Trending</span>
      </Link>

      <div id='L-box' onClick={()=>setBtnActive("#lists")} className={btnActive === "#lists" ? "active" : ""}>
        <RiFileListLine
        className='margin'/>
        <span>Lists</span>
      </div>

      <div id='L-box' onClick={()=>setBtnActive("#saved")} className={btnActive === "#saved" ? "active" : ""}>
        <BsBookmark
         className='margin'/>
        <span>Saved</span>
      </div>

      <div id='L-box' onClick={()=>setBtnActive("#settings")} className={btnActive === "#settings" ? "active" : ""}>
        <FiSettings 
        className='margin'/>
        <span>Settings</span>
      </div>

      <div className="left-user">
        <Link to="/profile" style={{textDecoration:"none",color:"black"}}>
          <div className="user-name-userid">
            <img src={user.profilePicture ? user.profilePicture : userPic}
            alt="" />
              <div className='L-user'>
                <h1>{user.username}</h1>
            </div>
          </div>
        </Link>
        <MoreHorizIcon onClick={()=>setLogOutExit(!logOutExit)} className='vert'/>
          
          {logOutExit && (
            <div className="logOutExitContainer">
              {/* <button>Add an existing account</button> */}
              <Link to="/login" style={{width:"100%"}}><button onClick={LogOut}>Log out </button></Link>
            </div>
          )}
      </div>

    </div>
  )
}

export default Sidebar;