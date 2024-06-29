import React from 'react'
import Header2 from '../../Components/Header/Header2'
import Footer from '../../Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Header3 from '../../Components/Header/Header3'

const Layout = () => {
  return (
    <>
    <Header3/>
    <Outlet/>
    <Footer/>
    </>
      
  )
}

export default Layout
