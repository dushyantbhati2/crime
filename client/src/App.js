import CompleteProfile from "./Components/Form/CompleteProfile";
import Signup from "./Components/Form/Signup";
import Login from "./Components/Form/Login";
import {BrowserRouter as Router, Routes,Route, Link} from "react-router-dom"



function App() {
  return (
   <Router>
   <Routes>
     <Route path="/" element={<Signup/>} />
     <Route path="/complete-profile" element={<CompleteProfile/>} />
     <Route path="/login" element={<Login/>} />

   </Routes>
   
   </Router>
  );
}

export default App;
