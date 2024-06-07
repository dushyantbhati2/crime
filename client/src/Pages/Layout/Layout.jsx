import React from 'react'
import Header2 from '../../Components/Header/Header2'
import Footer from '../../Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Header2/>
    <Outlet/>
    <Footer/>
    </>
      
  )
}

export default Layout
