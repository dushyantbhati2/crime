import React, { useState } from "react";
import Select from "react-select";
import image2 from "../../assets/black signup2.jpeg.jpg";
import { useNavigate } from "react-router-dom";
import axios from "../../axios/axiosDefaults.js";
import { useAuth } from "../../context/AuthContext";

const CompleteProfile = () => {
  const [gender, setGender] = useState(null);
  const [occupation, setOccupation] = useState(null);
  const navigate =useNavigate()
  // const [auth, setAuth] =useAuth()

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      
      navigate("/login")
      
    } catch (error) {
      console.error(error.response);
    }
  };

  const genderOptions = [
    {
      value: "Male",
      label: "Male",
    },
    {
      value: "Female",
      label: "Female",
    },
    {
      value: "Other",
      label: "Other",
    },
  ];

  const occupationOptions = [
    {
      value: "Student",
      label: "Student",
    },
    {
      value: "Professional",
      label: "Professional",
    },
    {
      value: "Others",
      label: "Others",
    },
  ];

  return (
    <div className="font-Poppins min-h-screen flex items-center justify-center lg:justify-start lg:gap-36 lg:px-12 w-full lg:bg-[#FDFDF5]  ">
      <div className="hidden lg:flex w-1/2">
        <img src={image2} alt="" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-tertiary/20 text-textBlack shadow-lg rounded-lg px-8 py-6 max-w-md w-[360px] md:w-96 md:min-h-[500px] "
      >
        <h1 className="text-2xl font-semibold text-center mb-8">
          Complete Your Profile
        </h1>
       
        <div>
          <label className="" htmlFor="gender">
            Gender
          </label>
          <Select
            options={genderOptions}
            value={gender}
            onChange={(selectedOption) => setGender(selectedOption)}
            className="my-2 shadow-sm rounded-md"
          />
        </div>
        <div>
          <label className="" htmlFor="occupation">
            Occupation
          </label>
          <Select
            options={occupationOptions}
            value={occupation}
            onChange={(selectedOption) => setOccupation(selectedOption)}
            className="mt-2 shadow-sm rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full mt-12 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm font-medium text-white bg-[#000A1E] hover:bg-slate-900 focus:outline-none"
        >
          Complete
        </button>
      </form>
    </div>
  );
};

export default CompleteProfile;
