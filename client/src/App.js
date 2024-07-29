import React,{useEffect} from "react";
import Signup from "./Components/Form/Signup";
import Login from "./Components/Form/Login";
import CrimeMap from "./Pages/crimeMap/CrimeMap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import PageNotFound from "./Pages/Error/PageNotFound";
import Layout from "./Pages/Layout/Layout";
import ChatGpt from "./Pages/ChatGpt/ChatGpt";
import Community from "./Pages/community/Community";
import PostSection from "./Components/comments/PostSection";
import Sample from "./Components/Sample.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./Components/Form/PrivateRoutes.jsx";
import { useGetAllPostsQuery } from "./01Redux/Service/Post";
import { useSelector } from "react-redux";
import Collaboration from "./Pages/Collaboration/Collaboration.jsx";
import Profile from "./Pages/community/userProfile/Profile.jsx";


function App() {
  // const { userInfo } = useSelector((state) => state.auth);


  const { data: posts, isLoading, isError } = useGetAllPostsQuery();

  return (
    <>
    <ToastContainer/>
    <Router>
      <Routes>
      <Route path="/" element={<Layout />}>
                <Route path="/signup" element={<Signup />} />
X          <Route path="/login" element={<Login />} />

          {/* Public Routes */}

          <Route path="" element={<PrivateRoute/>}>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />



          <Route path="/map" element={<CrimeMap />} />
          <Route path="/chat" element={<ChatGpt />} />
          <Route path="/community" element={<Community />} 
          
          
          
          />






          <Route path="/post/:id" element={<PostSection />} />
          <Route path="/community/:username" element={<Profile />} />
          <Route path="/sample" element={<Sample/>} />
          <Route path="/collab" element={<Collaboration/>}/>
          </Route>

          {/* 404 Route */}
          <Route path="*" element={<PageNotFound />} />
          </Route>
      </Routes>
    </Router></>
  );
}

export default App;
