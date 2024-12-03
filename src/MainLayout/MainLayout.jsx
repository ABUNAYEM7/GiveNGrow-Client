import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <header  className='w-full'>
        <Navbar/>
      </header>
      <main className='max-w-screen-xl min-h-[550px] mx-auto border-2'>
        <Outlet/>
      </main>
      <footer className='w-full border-2'> 
        Footer
      </footer>
    </div>
  )
}

export default MainLayout
