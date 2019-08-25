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

class App extends React.Component {
  // lazy load when scroll
  lazyLoad = () => {
    var element = document.getElementsByClassName('lazy-load');
    for (var i = 0; i < element.length; i++){
      var elementPosition = element[i].getBoundingClientRect();
      // alert(elementPosition.top);
      if(elementPosition.top < window.innerHeight / 1.5
        && elementPosition.top + element[i].clientHeight >= window.innerHeight / 2
      ){
        element[i].classList.add('active');
      }

    }
  }

  componentDidMount() {
    this.lazyLoad();
    window.addEventListener('scroll', this.lazyLoad, false);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.lazyLoad, false);
  }
  render() {
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
}

export default App;
