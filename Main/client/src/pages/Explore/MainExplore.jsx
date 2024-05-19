import Navbar from "../../components/Navbar/Navbar";
import Rightbar from "../../components/Rightbar/Rightbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Explore from "./Explore";
import ExploreFeed from "./ExploreFeed";

const MainExplore = ()=>{
    return (
        <div>
          <Navbar />
        <div className="home">
          
          <div className="flex">
            <Sidebar />
            <ExploreFeed />
            <Rightbar />
          </div>
        </div>
        </div>
      );
}

export default MainExplore;