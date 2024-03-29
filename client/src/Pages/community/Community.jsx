import React from 'react'
import SidebarMob from '../../Components/SideBar/SidebarMob'
import SidebarPc from '../../Components/SideBar/SidebarPc'
import HeaderNew from '../../Components/Header/HeaderNew'
import Container from './MessageContainer/MsgContainer'

const Community = () => {
  return (
    <div>
      <SidebarMob/>
      <HeaderNew/>
      <SidebarPc/>
      <Container/>
    </div>
  )
}

export default Community
