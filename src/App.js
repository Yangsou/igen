import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from './routes'
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
    var showRoutes = (routes) => {
      var result = '';
      result =  routes.map((route, index) => {
        return (
          <Route key={index} exact={route.exact} path={route.path} component={route.main?route.main:route.component} />
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
    
          <footer className="footer">&copy; Copyright 2019 i-Gen. All rights reserved.</footer>
        </Router>
    );
  }
}

export default App;
