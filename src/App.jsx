import React, { useState } from 'react'
import Navbar from './components/Navbar'
import ThemeToggle from './components/ThemeToggle'
import Hero from './components/Hero'
import Cards from './components/Cards'
import Services from './components/Services'
import Products from './components/Products'
import Partners from './components/Partners'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0);
  React.useEffect(() => {
    
  }, []);

  return (
    <>
      <Navbar/>
      <Hero/>
      <Cards/>
      <Services/>
      <Products/>
      <Partners/>
      <Footer/>



    </>
  )
}

export default App
