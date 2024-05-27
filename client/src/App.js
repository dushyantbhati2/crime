import React from "react";
import CompleteProfile from "./Components/Form/CompleteProfile";
import Signup from "./Components/Form/Signup";
import Login from "./Components/Form/Login";
import CrimeMap from "./Pages/crimeMap/CrimeMap"
import PrivateRoute from "./auth/PrivateRoute";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import PageNotFound from "./Pages/Error/PageNotFound";
import Layout from "./Pages/Layout/Layout";
import ChatGpt from "./Pages/ChatGpt/ChatGpt";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
        {/* Public Routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/complete-profile" element={<CompleteProfile />} />
        <Route path="/login" element={<Login />} />
        
        {/* Private Routes */}
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/map" element={<CrimeMap />} />
          <Route path="/chat" element={<ChatGpt />} />

        {/* 404 Route */}
        <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
