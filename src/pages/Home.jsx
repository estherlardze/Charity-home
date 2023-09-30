import React,  {useEffect, useRef}  from 'react';
import { Navbar, Hero, About, Featuredpost, Gallery, Testimonial, Donate, Footer } from '../component/index';
import AOS from 'aos';
import 'aos/dist/aos.css';

 
const Home = () => {

    useEffect(() => {
        AOS.init({duration: 1500});
      }, [])

    const galleryClick = useRef(null)
    const aboutClick = useRef(null)

    const scrollToGallery = () => {
      galleryClick.current?.scrollIntoView({ behavior: 'smooth'});
     }


    const scrollToAbout = () => {
     aboutClick.current?.scrollIntoView({behavior: 'smooth' })  
  }

    
  return (
       <div className='w-[100%]'>
        <Navbar onGalleryClick={scrollToGallery} scrollToAbout={scrollToAbout} />
        <Hero />
        <div ref={aboutClick}>
          <About/>
        </div>
         <Featuredpost />
         <div ref={galleryClick}>
           <Gallery/>
         </div>      
        <Testimonial />
        <Donate />
       <Footer /> 
    </div>
  )
}

export default Home
