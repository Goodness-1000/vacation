import React from 'react'
import Hero from '../components/content/Hero'
import About from '../screens/About'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Newsletter from '../components/content/Newsletter'
import ContactUs from '../screens/ContactUs'

const Home = () => {
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

export default Home