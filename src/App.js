import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import ProgramStudy from './components/ProgramStudy/ProgramStudy';

function App() {
  return (
    <div className="App">

      <Header />

      <Home />

      <AboutUs />

      <ProgramStudy />
    </div>
  );
}

export default App;
