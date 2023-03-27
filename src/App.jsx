import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Works from './components/Works';
import Tech from './components/Tech';
import Contact from './components/Contact';
import { StarsCanvas } from './components/canvas';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-home-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar/>
          <Home/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <div className='relative z-0'>
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
