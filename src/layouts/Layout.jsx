import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className='w-full min-h-screen bg-homeBg overflow-y-hidden'>
      <div className='max-w-6xl mx-auto flex flex-col lg:flex-row items-start'>
        
        {/* SIDEBAR: This is the critical part */}
        <aside className='w-full lg:w-64 lg:h-screen lg:fixed shrink-0 bg-bg z-50'>
          <Navbar />
        </aside>

        {/* MAIN CONTENT: This side will scroll normally */}
        <main className='flex-1 max-w-196.5 mx-auto w-screen lg:ml-70'>
          <Outlet />
        </main>

      </div>
    </div>
  )
}

export default Layout;
