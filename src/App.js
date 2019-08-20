import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <div className="App">

      <Header />

      <Home />

      <AboutUs />
    </div>
  );
}

export default App;
