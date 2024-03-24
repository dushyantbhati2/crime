import React, { useState } from "react";
import Input from "../input_Button/Input";
import { Link } from "react-router-dom";
import image2 from "../../assets/black signup2.jpeg.jpg";
import TooglePassword from "./TooglePassword";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [
    passwordType,
    confirmPasswordType,
    visiblePasswordIcon,
    visibleConfirmPasswordIcon,
    togglePasswordVisibility,
  ] = TooglePassword();

  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log("email: ", email);
    console.log("password: ", password);
    console.log("confirmPassword: ", confirmPassword);
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
              className="font-semibold underline text-indigo-700"
            >
              Sign In
            </Link>
          </p>
        </div>
        <Link to="/complete-profile">
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm font-medium text-white bg-[#000A1E] hover:bg-slate-900 focus:outline-none"
          >
            Sign Up
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Signup;
