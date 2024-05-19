import Navbar from "../../components/Navbar/Navbar";
import Rightbar from "../../components/Rightbar/Rightbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Trending from "./Trending";

const MainTrending = () => {
    return(
        <div>
            <Navbar/>

            <div className="flex">
            <Sidebar />
            <Trending />
            <Rightbar />
          </div>

        </div>

    )

};

export default MainTrending ;