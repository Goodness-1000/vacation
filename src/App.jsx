import React from 'react'
import Hero from './components/content/Hero'
import About from './screens/About'
import Newsletter from './components/content/Newsletter'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import ContactUs from './screens/ContactUs'

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
      </Routes>
    </Router>
    </>
    
  )
}

export default App