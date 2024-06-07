import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import Header from "../../Components/Header/Header";
import CommunityHero from "../community/CommunityHero";

import CardSection from "../../Components/Header/CardSection";

export default function Home() {
  return (
   <>
   <CommunityHero/>
    <CardSection/>
   </>

  
  );
}
