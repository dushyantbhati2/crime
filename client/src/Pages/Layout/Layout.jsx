import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Layout = () => {
  const location = useLocation();
  const hideHeader = location.pathname === '/login' || location.pathname === '/signup'||location.pathname === "/complete-profile"||location.pathname === "/community";
  
  return (
    <>
      {hideHeader ? (
       ""
      ) : (
        <Header />
      )}
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default Layout;