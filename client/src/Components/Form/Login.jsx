import React, { useState } from "react";
import Input from "../input_Button/Input";
import { Link } from "react-router-dom";
import image2 from "../../assets/black signup2.jpeg.jpg";
import TooglePassword from "./TooglePassword";
import axios from 'axios'


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const [
    passwordType,
    confirmPasswordType,
    visiblePasswordIcon,
    visibleConfirmPasswordIcon,
    togglePasswordVisibility,
  ] = TooglePassword();

  

    const handleSubmit = async(e) => {
      e.preventDefault();
      console.log(email,password)
  // try {
    
  //   const response= await fetch('http://127.0.0.1:8000/api/token/',
  //   {
  //     method:'POST',
  //     headers:{
  //       'Content-Type':'application/json'
  //     },
  //     body:JSON.stringify({'username':email,'password':password})
  //   });
  
  //   const data= await response.json();
  //   console.log(data)
  
       
  
  // } catch (error) {
  //      console.log(error)
  // }
  
  
  
      
   
  
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/token/', {
        'email': email,
        'password': password
      });
      const data =await response.data;
      console.log(data);
      localStorage.setItem('token',JSON.stringify(data))
    } catch (error) {
      console.error(error.response.data);
    }
  };
  return (
    <div className="font-Poppins min-h-screen flex items-center justify-center lg:justify-start lg:gap-36 lg:px-12 w-full lg:bg-[#FDFDF5]  ">
      <div className="hidden lg:flex w-1/2">
        {" "}
        <img src={image2} alt="" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="  bg-tertiary/20 text-textBlack shadow-lg rounded-lg px-8 py-6 max-w-md  w-[340px] md:w-96 md:h-[500px]"
      >
        <h1 className="text-3xl font-bold text-center mb-4 ">Sign In</h1>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          type="text"
          placeholder="Email"
          name="Email"
          htmlFor="email"
        />
        <Input
          changeVisibility={() => togglePasswordVisibility("password")}
          type={passwordType}
          icon={visiblePasswordIcon}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          name="Password"
          htmlFor="password"
        />

        <a className="py-2 font-medium " href="/login">
          {" "}
          Forgot password ?
        </a>

        <div className=" flex items-center pb-4 pt-2 ">
          <p className=" ">
            New to Website?{" "}
            <Link to="/" className=" underline text-indigo-700 font-semibold">
              Sign Up
            </Link>
          </p>
        </div>
        <button
          type="submit"
          className="w-full  flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm  font-medium text-white bg-[#000A1E] hover:bg-slate-900  focus:outline-none mt-10"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
