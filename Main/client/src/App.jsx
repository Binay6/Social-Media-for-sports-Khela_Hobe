import "./App.css";
import Home from "./pages/Home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Notification from './pages/Notification/Notification'
import MainTrending from "./pages/Trending/MainTrending";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MainExplore from "./pages/Explore/MainExplore";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={user ? <Home /> : <Login />} />
        <Route path="/home" element={user ? <Home /> : <Login />} />

        <Route path="/explore" element={user ? <MainExplore /> : <Register />} />

        <Route path="/trending" element={user ? <MainTrending /> : <Register />} />

        <Route path="/profile/:username" element={<Profile />} />
        <Route
          path="/register"
          element={user ? <Navigate to={"/home"} /> : <Register />}
        />
        <Route path='/notification' element={<Notification />} />

        <Route
          path="/login"
          element={user ? <Navigate to={"/"} /> : <Login />}
        />
      </Routes>
    </>
  );
}

export default App;
