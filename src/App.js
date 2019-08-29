import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Banner from './Pages/LandingPage/Banner'
import Breadcrumb from './Pages/LandingPage/Breadcrumb'
import Participation from './Pages/LandingPage/Participation/Participation'
import Register from './Pages/LandingPage/BannerRegister'
import RegisterPrograming from './Pages/LandingPage/RegisterPrograming'
import Contact from './components/Contact/Contact';
import LevelItem from './Pages/LandingPage/LevelItem'
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
        <Banner />
        <Breadcrumb />
        <RegisterPrograming/>
        <LevelItem/>
        <Participation/>
        <Register />
  
        <Contact />
  
        <footer className="footer">&copy; Copyright 2019 i-Gen. All rights reserved.</footer>
      </div>
    );
  }
}

export default App;
