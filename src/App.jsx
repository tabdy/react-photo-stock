// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

import React from "react"
import { Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"

function App() {    
  return (
      <div>
          <Header />

          <Routes>
            <Route path="/" element={<Photos />} />           
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <h1>Home Page</h1>
      </div>
  )
}


export default App