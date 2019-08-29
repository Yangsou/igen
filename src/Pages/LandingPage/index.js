import React, { Component, Fragment } from 'react';
import Banner from './Banner'
import Breadcrumb from './Breadcrumb'
import Participation from './Participation'
import Register from './BannerRegister'
import RegisterPrograming from './RegisterPrograming'
import LevelItem from './LevelItem'
class LandingPage extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <Breadcrumb />
                <RegisterPrograming/>
                <LevelItem/>
                <Participation/>
                <Register />
            </Fragment>
        );
    }
}

export default LandingPage;