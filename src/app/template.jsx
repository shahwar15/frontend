'use client';
import React, { useEffect } from 'react'
import Navbar from './navbar';
import "bootstrap/dist/css/bootstrap.min.css";
const Template = ({children}) => {

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.min.js');
  })
  return (
    <div> 
    <Navbar/>
    {children}
    </div>
  )
}

export default Template;
