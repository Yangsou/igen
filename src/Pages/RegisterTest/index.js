import React, { Component, Fragment } from 'react';
import Banner from './Banner'
import Breadcrumb from './Breadcrumb'
import InfoTest from './InfoTest'
import PrepareTest from './PrepareTest'
import ProgramStydy from './ProgramStudy'
class RegisterTest extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <Breadcrumb />
                <PrepareTest/>
                <InfoTest />
                <ProgramStydy />
            </Fragment>
        );
    }
}

export default RegisterTest;