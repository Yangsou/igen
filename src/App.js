import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import ProgramStudy from './components/ProgramStudy/ProgramStudy';
import MethodStudy from './components/MethodStudy/MethodStudy';
import Participation from './components/Participation/Participation';
import Sponser from './components/Sponser/Sponser';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">

      <Header />

      <Home />

      <AboutUs />

      <ProgramStudy />

      <MethodStudy />

      <Participation />

      <Sponser />

      <Contact />

      <footer className="footer">&copy; Copyright 2019 i-Gen. All rights reserved.</footer>
    </div>
  );
}

export default App;
