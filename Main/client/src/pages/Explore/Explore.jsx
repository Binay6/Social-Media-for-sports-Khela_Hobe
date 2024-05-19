import React, { useContext, useEffect, useState } from 'react';
import moment from "moment";
import { AuthContext } from "../../context/AuthContext";
import "./explore.css"
import { getUserData} from "../../utils/api/api"



const Explore = ({post, loadingPost}) => {

  const [user, setUser] = useState({});
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const res = await getUserData(post.userId);
        setUser(res.data.userInfo);
      } catch (error) {
        console.log(error);
      }
    };
    getUserInfo();
  }, [post.userId, loadingPost]);

  return (
    <div className="middle">
      

      <div className="main-content">
        <div className="content">
          <img
            src={ user.profilePicture }
            alt="img"
          />
          <p>
           <h4> <b> {post.desc} </b> </h4>
          </p>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTnMLcqLFUZ5kz52VfOz_ZudiQhnqFKAblIg&usqp=CAU"
            alt="img"
          />
        </div>
        <div className="cont-detail">
          <p className="duration">{moment(post.createdAt).fromNow()} 🟡</p>
          <p className="contact">CONTACT</p>
        </div>
      </div>

    </div>
  );
}

export default Explore;
