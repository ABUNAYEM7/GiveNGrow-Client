import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
const MainLayout = () => {
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <header  className='w-full'>
        <Navbar/>
      </header>
      <main className='max-w-screen-xl min-h-[550px] mx-auto'>
        <Outlet/>
      </main>
      <footer className='w-full'> 
        <Footer/>
      </footer>
    </div>
  )
}

export default MainLayout
