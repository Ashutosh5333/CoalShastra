import React from 'react'
import {Routes ,Route } from "react-router-dom"
import Formvali from './pages/Formvali';
import Home from './pages/Home';

const AllRoutes = () => {


  return (
    <Routes>
     <Route  path="/" element={<Formvali/>} />
     <Route  path="/dash" element={<Home/>} />
    </Routes>
  )
}

export default AllRoutes