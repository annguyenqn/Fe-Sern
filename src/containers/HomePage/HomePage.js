import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Specilty from './Section/Specilty';
import MedicalFacilities from './Section/MedicalFacilities'
import Doctors from './Section/Doctors'
import HomeFooter from './HomeFooter/HomeFooter';
import Header from './Section/Header';
import './HomePage.scss'
class HomePage extends Component {

    render() {
        return (
            <>
                <div className='home'>
                    <Header />
                    <HomeHeader />
                    <Specilty />
                    <MedicalFacilities />
                    <Doctors />
                    <HomeFooter />
                </div>
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
