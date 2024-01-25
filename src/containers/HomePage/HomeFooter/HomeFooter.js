import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeFooter.scss'
import { FormattedMessage } from 'react-intl'
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
class HomeFooter extends Component {


    render() {

        return (
            <>
                <div className='home-footer'>
                    <div className='logo-footer'>
                        <div className='logo'><BsFacebook /></div>
                        <div className='logo'><BsGithub /></div>
                        <div className='logo'><BsLinkedin /></div>
                    </div>
                    <div className='content-footer'>Info Support Marketing</div>
                    <p>&copy; 2024 ComprehensiceCare.com</p><a href='https://github.com/annguyenqn'>More Infomation, please visit my github</a>
                </div>

            </>
        );
    }

}

// const mapStateToProps = state => {
//     return {
//         isLoggedIn: state.user.isLoggedIn,
//         language: state.app.language,
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
//     };
// };

export default HomeFooter;
