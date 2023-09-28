import React from 'react'
import { Navbar, Hero, About, Featuredpost, Gallery, Testimonial, Donate, Footer } from './component'


const App = () => {
  return (
    <div>
      {/*just trying sth*/}
    <Navbar />
    <Hero />
    <About />
   <Featuredpost />
     {/*<Gallery />*/}
    <Testimonial />
    <Donate />
    <Footer /> 
    </div>
  )
}

export default App