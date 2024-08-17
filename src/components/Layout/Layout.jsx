import React from 'react'
import Navbar from './../Navbar/Navbar';
import Footer from './../Footer/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
<>
<Navbar/>
<div className='mt-[92px] min-h-screen'>
<Outlet></Outlet>
</div>
<Footer/>
</>
)
}
