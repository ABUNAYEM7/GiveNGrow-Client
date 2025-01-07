import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
const MainLayout = () => {
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <header>
        <Navbar/>
      </header>
      <main className='min-h-[550px] '>
        <Outlet/>
      </main>
      <footer className='w-full'> 
        <Footer/>
      </footer>
    </div>
  )
}

export default MainLayout
