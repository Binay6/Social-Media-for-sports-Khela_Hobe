import React, { useContext, useEffect, useState } from "react";
// import UploadPost from "../UploadPost/UploadPost";
// import Post from "../Post/Post";
// import { Posts } from "../../data/dummyData";
// import axios from "axios";
import { getAllExplore, getAllPosts, getTimeLinePost } from "../../utils/api/api";
import Explore from "./Explore";
import UploadExplore from "./UploadExplore";
import { useParams } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";
//  import  SlideShow  from "./SlideShow.jsx" ;
 
const ExploreFeed = () => {

  const [loadingPost, setLoadingPost] = useState(false) ;
  const [posts, setPosts] = useState([]);
  const { username } = useParams();
//   const { user } = useContext(AuthContext);
  


  useEffect(() => {
    const explorePosts = async () => {
      try {
        const res = await getAllExplore();
        setPosts(res.data.explores);
        console.log(posts);
        
      } catch (error) {
        console.log(error);
      }
    };
    explorePosts();
  }, [loadingPost]);

  

  return (
    <div>
      
      <div style={{ flex: 5.5 }} className="p-[10px]">
        {(!username || username === user?.username) && (
            <UploadExplore loadingPost = {loadingPost} setLoadingPost = {setLoadingPost} />
        )}
        {posts.map((post) => (
          <Explore loadingPost = {loadingPost} key={post._id} post={post} />
        ))}
      </div>
      </div>

  );
};

export default ExploreFeed;
