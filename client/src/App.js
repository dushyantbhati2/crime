import React from "react";
import CompleteProfile from "./Components/Form/CompleteProfile";
import Signup from "./Components/Form/Signup";
import Login from "./Components/Form/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import PageNotFound from "./Pages/Error/PageNotFound";
import Layout from "./Pages/Layout/Layout";
import Mapp from "./Mapp";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home/>}/>
      <Route path="signup" element={<Signup />} />
      <Route path="complete-profile" element={<CompleteProfile />} />
      <Route path="login" element={<Login />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/map" element={<Mapp/>}/>
      </Route>
    
  )
);

function App() {
  return (
    // <Router>
    // <Routes>
    //   <Route path="/signup" element={<Signup/>} />
    //   <Route path="/complete-profile" element={<CompleteProfile/>} />
    //   <Route path="/login" element={<Login/>} />
    //   <Route path="/" element={<Home/>} />
    //   <Route path="/about" element={<About/>} />
    //   <Route path="*" element={<PageNotFound/>} />

    // </Routes>

    // </Router>
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
