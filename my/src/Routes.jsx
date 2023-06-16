import React from 'react'
import {Routes ,Route } from "react-router-dom"
import Home from './pages/Home';
import Brand from './pages/Brand';
import { Market } from './pages/Market';
import Inbox from './pages/Inbox';
import Listing from './pages/Listing';

const AllRoutes = () => {


  return (
    <Routes>
    
     <Route  path="/" element={<Home/>} />
     <Route  path="/brand" element={<Brand/>} />
     <Route  path="/market" element={<Market/>} />
     <Route  path="/inbox" element={<Inbox/>} />
     <Route  path="/list" element={<Listing/>} />
   
    </Routes>
  )
}

export default AllRoutes