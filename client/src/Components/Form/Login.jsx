import React, { useEffect, useState } from "react";
import Input from "../input_Button/Input";
import { Link, useLocation } from "react-router-dom";
import image2 from "../../assets/black signup final.jpeg";
import TooglePassword from "./TooglePassword";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../01Redux/Service/auth.js";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../../01Redux/features/authFeature.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false); // Changed initial loading state to false
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation()
  const { userInfo } = useSelector((state) => state.auth);

  const [
    passwordType,
    confirmPasswordType,
    visiblePasswordIcon,
    visibleConfirmPasswordIcon,
    togglePasswordVisibility,
  ] = TooglePassword();


  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";
  
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);

    try {

      const res = await login({
        email: email,
        password: password,
      }).unwrap()

      console.log(res)
      dispatch(setCredentials({ ...res }));

      toast.success("User successfully Logged In");

      // navigate("/")

    } catch (error) {
      console.log(error)
      toast(error)
    }

    // try {
    //   const response = await axios.post("token/", {
    //     email: email,
    //     password: password,
    //   });
    //   const data = await response.data;
    //   console.log(data.user);
    //   console.log(data.refresh);
    //   console.log(data.access);
    //   setAuth({
    //     ...auth,
    //     user: data.user,
    //     refToken: data.refresh,
    //     accToken: data.access,
    //   });
    //   console.log(auth);

    //   localStorage.setItem("token", JSON.stringify(data.access));

    //   setLoading(false); // Set loading to false after successful login

    //   navigate("/"); // Navigate to home route after successful login
    // } catch (error) {
    //   console.error(error.response.data);
    // }
  };

  return (
    <div className="font-Poppins min-h-screen bg-gray-900 flex items-center justify-center lg:justify-start lg:gap-36 lg:px-12 w-full ">
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
            <Link
              to="/signup"
              className="underline text-indigo-700 font-semibold"
            >
              Sign Up
            </Link>
          </p>
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm font-medium text-white bg-[#000A1E] hover:bg-slate-900 focus:outline-none mt-10"
        disabled={isLoading} // Disable button when loading is true
        >
          {isLoading ? "Signing In..." : "Sign In"}
        </button>
      </form>
    </div>
  );
};

export default Login;
