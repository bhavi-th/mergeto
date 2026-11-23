import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Buy from './pages/Buy'

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/search" element={<Search />} />
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/buy" element={<Buy />} />
    </Routes>
    </>
  )
}

export default App
