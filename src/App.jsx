import React from 'react'
import MockTest from '../components/MockTest'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<MockTest/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
