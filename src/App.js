import React from 'react';
import NavBar from './components/NavBar';
import './index.css'
import Hero from './components/Hero';
import Cards from './components/Cards';
import Footer from './components/Footer';
function App() {
  return (
    <div >
     <NavBar/>
     <Hero/>
     <Cards/>
     <Footer/>
    </div>
  );
}

export default App;
