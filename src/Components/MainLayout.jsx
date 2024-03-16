import React from 'react'
import { Outlet } from 'react-router-dom'
import NavList from '../pages/NavList'

export default function MainLayout() {
  return (
    <div>
      <NavList />
      <Outlet />
    </div>
  )
}
