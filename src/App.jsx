import React, {useEffect} from 'react'
import { Navbar, Hero, About, Featuredpost, Gallery, Testimonial, Donate, Footer } from './component';
import AOS from 'aos';
import 'aos/dist/aos.css';


const App = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, [])

  return (
    <div className='w-[100%]'>
      <Navbar />
      <Hero />
      <About />
      <Featuredpost />
     <Gallery />
      <Testimonial />
     <Donate />
     <Footer /> 
    </div>
  )
}

export default App