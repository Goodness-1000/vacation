import React from 'react'
import Hero from './components/content/Hero'
import About from './components/content/About'
import Newsletter from './components/content/Newsletter'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import "./App.css"

const App = () => {
  return (
    <main className='main-contianer'>
      <Header/>
      <div>
        <Hero/>
        <About/>
        <Newsletter/>
      </div>
      <Footer/>
    </main>
  )
}

export default App