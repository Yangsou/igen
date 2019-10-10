import React, { Component, Fragment } from 'react';

import Home from './../../components/Home/Home';
import AboutUs from "./../../components/AboutUs/AboutUs";
import ProgramStudy from './../../components/ProgramStudy/ProgramStudy';
import MethodStudy from './../../components/MethodStudy/MethodStudy';
import RegisterProcess from './../../components/RegisterProcess';
import Participation from './../../components/Participation/Participation';
import Sponser from './../../components/Sponser/Sponser';
class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <Home />
                <AboutUs />
                <ProgramStudy />
                <MethodStudy />
                <RegisterProcess />
                <Participation />
                <Sponser />
            </Fragment>   
        );
    }
}
export default HomePage;



