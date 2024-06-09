import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import Cards from "./Cards";
import MainCard from "./MainCard";


export default function Home() {
  return (
   <div className="bg-community">
    <MainCard/>
    <Cards/>    
   </div>

  
  );
}
