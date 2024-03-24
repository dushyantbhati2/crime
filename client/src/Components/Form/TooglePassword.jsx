import React from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa6";




const TooglePassword = () => {
    const [visiblePassword, setVisiblePassword] = React.useState(false);
    const [visibleConfirmPassword, setVisibleConfirmPassword] = React.useState(false);
  
    const togglePasswordVisibility = (field) => {
      if (field === 'password') {
        setVisiblePassword(!visiblePassword);
      } else if (field === 'confirmPassword') {
        setVisibleConfirmPassword(!visibleConfirmPassword);
      }
    };
  
    const passwordType = visiblePassword ? "text" : "password";
    const confirmPasswordType = visibleConfirmPassword ? "text" : "password";
  
    const visiblePasswordIcon = visiblePassword ? <IoEyeOutline/> : <FaRegEyeSlash/>;
    const visibleConfirmPasswordIcon = visibleConfirmPassword ? <IoEyeOutline/> : <FaRegEyeSlash/>;
  
    return [
      passwordType,
      confirmPasswordType,
      visiblePasswordIcon,
      visibleConfirmPasswordIcon,
      togglePasswordVisibility,
    ];
  };
  
  export default TooglePassword;
  