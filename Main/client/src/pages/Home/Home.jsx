import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import NewsFeed from "../../components/NewsFeed/NewsFeed";
import Rightbar from "../../components/Rightbar/Rightbar";
import './style.css'


const Home = () => {
  return (
    <div>
      <Navbar />
    <div className="home">
      
      <div className="flex">
        <Sidebar />
        <NewsFeed />
        <Rightbar />
      </div>
    </div>
    </div>
  );
};

export default Home;
