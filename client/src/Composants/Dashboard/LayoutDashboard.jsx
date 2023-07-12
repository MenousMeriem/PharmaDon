import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

function LayoutDashboard() {
  return (
    <div className='flex'>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default LayoutDashboard