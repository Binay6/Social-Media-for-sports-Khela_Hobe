import React, { useContext, useEffect, useState } from "react";
import UploadPost from "../UploadPost/UploadPost";
import Post from "../Post/Post";
import { Posts } from "../../data/dummyData";
import axios from "axios";
import { getAllPosts, getTimeLinePost } from "../../utils/api/api";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
 import  SlideShow  from "./SlideShow.jsx" ;
 
const NewsFeed = ({ userPosts }) => {

  const [loadingPost, setLoadingPost] = useState(false) ;
  const [posts, setPosts] = useState([]);
  const { username } = useParams();
  const { user } = useContext(AuthContext);
  


  useEffect(() => {
    const timelinePosts = async () => {
      try {
        const res = userPosts
          ? await getTimeLinePost(username)
          : await getAllPosts();
        setPosts(res.data.posts);
        
      } catch (error) {
        console.log(error);
      }
    };
    timelinePosts();
  }, [username, loadingPost]);

  

  return (
    <div>
      { userPosts ? " ":<SlideShow/>}
      <div style={{ flex: 5.5 }} className="p-[10px]">
        {(!username || username === user?.username) && (
            <UploadPost loadingPost = {loadingPost} setLoadingPost = {setLoadingPost} />
        )}
        {posts.map((post) => (
          <Post loadingPost={loadingPost} key={post._id} post={post} />
        ))}
      </div>
      </div>

  );
};

export default NewsFeed;
