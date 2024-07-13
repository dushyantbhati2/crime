import React, { useEffect, useState } from "react";
import Input from "../input_Button/Input";
import { toast } from "react-toastify";

import { Link } from "react-router-dom";
import image2 from "../../assets/black signup2.jpeg.jpg";
import TooglePassword from "./TooglePassword";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../01Redux/Service/auth.js";

const Signup = () => {

  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const [
    passwordType,
    confirmPasswordType,
    visiblePasswordIcon,
    visibleConfirmPasswordIcon,
    togglePasswordVisibility,
  ] = TooglePassword();

  const [ register ,{isLoading}] = useRegisterMutation()


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password)

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        const res = await register({
          'email': email,
          'username': username,
          'password': password,
          'cnfpassword': confirmPassword
        }).unwrap();
        // dispatch(setCredentials({ ...res }));
        navigate("/")
        toast.success("User successfully registered");
      } catch (err) {
        console.log(err);
        toast.error(err);
      }
    }
    // try {
    //   const response = await axios.post('signup/',
    //  {
    //     'email': email,
    //     'username':username,
    //     'password': password,
    //     'cnfpassword':confirmPassword
    //   });
    //   const data =await response.data;
    //   console.log(data)

    //   setAuth({
    //     ...auth,
    //     user:data.user,

    //   })

    //   navigate("/complete-profile")

    // } catch (error) {
    //   console.error(error);
    // }



  };



  return (
    <div className="font-Poppins min-h-screen flex items-center justify-center lg:justify-start lg:gap-36 lg:px-12 w-full lg:bg-[#FDFDF5]">
      <div className="hidden lg:flex w-1/2">
        <img src={image2} alt="" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-tertiary/20 text-textBlack shadow-md rounded-lg px-8 py-6 max-w-md w-[360px] md:w-96 md:min-h-[500px]"
      >
        <h1 className="text-3xl font-bold text-center mb-4">Sign Up</h1>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          type="email"
          placeholder="Email"
          name="Email"
          htmlFor="email"
        />
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          id="username"
          type="text"
          placeholder="Username"
          name="Username"
          htmlFor="username"
        />
        <Input
          changeVisibility={() => togglePasswordVisibility("password")}
          type={passwordType}
          icon={visiblePasswordIcon}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          placeholder="Password"
          name="Password"
          htmlFor="password"
        />

        <Input
          changeVisibility={() => togglePasswordVisibility("confirmPassword")}
          type={confirmPasswordType}
          icon={visibleConfirmPasswordIcon}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          id="confirmPassword"
          placeholder="Confirm Password"
          name="Confirm Password"
          htmlFor="confirmPassword"
        />
        <div className="flex items-center py-4">
          <p className="">
            Already have an Account?{" "}
            <Link
              to="/login"
              className="font- underline text-blue-700"
            >
              Sign In
            </Link>
          </p>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm font-medium text-white bg-[#000A1E] hover:bg-slate-900 focus:outline-none"
        >
          Sign Up
        </button>

      </form>
    </div>
  );
};

export default Signup;
