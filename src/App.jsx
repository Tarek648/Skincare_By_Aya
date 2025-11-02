import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Footer from './components/Footer'
import About from './components/About'
import Process from './components/process'
import Pricing from './components/Pricing'
import BeforeAfter from './components/Before&After'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Pricing />
        <Process />
        <Services />
        <BeforeAfter />
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default App
