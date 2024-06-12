import React, { useState } from "react";
import Input from "../input_Button/Input";
import { Link } from "react-router-dom";
import image2 from "../../assets/black signup final.jpeg";
import TooglePassword from "./TooglePassword";
// import axios from "../../axios/axiosDefaults.js";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.js";
import {useLoginUserMutation} from "../../services/login.js"

const Login = () => {
  const [email, setEmail] = useState("");
  // const [loading, setLoading] = useState(false); // Changed initial loading state to false
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const [auth, setAuth] = useAuth();
  const [loginUser,{data,error,isLoading}]=useLoginUserMutation();

  const [
    passwordType,
    confirmPasswordType,
    visiblePasswordIcon,
    visibleConfirmPasswordIcon,
    togglePasswordVisibility,
  ] = TooglePassword();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      const User={
        username:email,
        password:password
      }
      const resp=await loginUser(User);
      console.log(resp);
      navigate("/");
    } catch (err){
      console.error(err);
    }
  };

  return (
    <div className="font-Poppins min-h-screen flex items-center justify-center lg:justify-start lg:gap-36 lg:px-12 w-full lg:bg-white">
      <div className="hidden lg:flex w-1/2">
        <img src={image2} alt="" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-[#CACACA]/20 text-textBlack shadow-lg rounded-lg px-8 py-6 max-w-md w-[340px] md:w-96 md:h-[500px]"
      >
        <h1 className="text-3xl font-bold text-center mb-4">Sign In</h1>
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

        <a className="py-2 font-medium" href="/login">
          Forgot password?
        </a>

        <div className="flex items-center pb-4 pt-2">
          <p>
            New to Website?{" "}
            <Link to="/signup" className="underline text-indigo-700 font-semibold">
              Sign Up
            </Link>
          </p>
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm font-medium text-white bg-[#000A1E] hover:bg-slate-900 focus:outline-none mt-10"
          disabled={isLoading} // Disable button when loading is true
        >
          {isLoading ? 'Signing In...' : 'Sign In'} {/* Show appropriate text based on loading state */}
        </button>
      </form>
    </div>
  );
};

export default Login;
