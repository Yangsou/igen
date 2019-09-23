import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { loadReCaptcha } from 'react-recaptcha-google'
import routes from './routes'
class App extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     isLoaded : false
  //   }
  // }
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
  changeStatusLoad = (value) => {
    this.setState({
      isLoaded: value
    })
  }
  componentDidMount() {
    this.lazyLoad();
    window.addEventListener('scroll', this.lazyLoad, false);
    loadReCaptcha();
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.lazyLoad, false);
  }
  setDisplayNone = () => {
    return window.location.href.split('/').pop() === 'coming-soon'?'display-none':'';
  }
  render() {
    var showRoutes = (routes) => {
      var result = '';
      result =  routes.map((route, index) => {
        return (
          <Route key={index} exact={route.exact} path={route.path} component={route.main?route.main:route.component} />
          // <Route key={index} exact={route.exact} path={route.path} render={(props)=> <route.component {...props} />} />
        )
      })
      return result;
    }
    return (
        <Router className="App">
          <Header />
          
            <Switch>
              {showRoutes(routes)}
            </Switch>
              <Contact />
          <footer className={`footer ${this.setDisplayNone()}`}>&copy; Copyright 2019 i-Gen. All rights reserved.</footer>
        </Router>
    );
  }
}

export default App;
