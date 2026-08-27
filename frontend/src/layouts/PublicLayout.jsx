import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header';

function PublicLayout() {
  return (
    <>
    <Header/>
    <main>
    <Outlet></Outlet>
    </main>
    </>
    
  )
}

export default PublicLayout;