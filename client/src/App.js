import CompleteProfile from "./Components/Form/CompleteProfile";

import Signup from "./Components/Form/Signup";
import Login from "./Components/Form/Login";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import PageNotFound from "./Pages/Error/PageNotFound";



function App() {
  return (
   <Router>
   <Routes>
     <Route path="/signup" element={<Signup/>} />
     <Route path="/complete-profile" element={<CompleteProfile/>} />
     <Route path="/login" element={<Login/>} />
     <Route path="/" element={<Home/>} />
     <Route path="/about" element={<About/>} />
     <Route path="*" element={<PageNotFound/>} />


   </Routes>
   
   </Router>
  );
}

export default App;
