import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FaMicroscope, FaTooth } from "react-icons/fa";
import './HomeHeader.scss'
import { FormattedMessage } from 'react-intl'
import { LANGUAGES } from '../../utils'
import { changeLanguageApp } from '../../store/actions'

class HomeHeader extends Component {

    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language)
    }
    render() {
        let language = this.props.language;
        // console.log('check langues', this.props);

        return (
            <>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <i className='fas fa-bars bar  '></i>
                            <div className='header-logo'>
                                <img className='logo-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR6bmpNVMvOinIbwHSOJpZYGYLS9Ki1bQdMA&usqp=CAU" alt="Logo" />
                            </div>
                        </div>
                        <div className='center-content'>
                            <div className='child-content'>
                                <div className='' ><b><FormattedMessage id="homeheader.speciality" /></b></div>
                                <div className=''><FormattedMessage id="homeheader.childspeciality" /></div>

                            </div>
                            <div className='child-content'>
                                <div className='' ><b><FormattedMessage id="homeheader.healthfacilities" /></b></div>
                                <div className=''><FormattedMessage id="homeheader.childhealthfacilities" /></div>
                            </div>
                            <div className='child-content'>
                                <div className='' ><b><FormattedMessage id="homeheader.doctors" /></b></div>
                                <div className=''><FormattedMessage id="homeheader.childdoctors" /></div>
                            </div>
                            <div className='child-content'>
                                <div className='' ><b><FormattedMessage id="homeheader.medicalpackage" /></b></div>
                                <div className=''><FormattedMessage id="homeheader.childmedicalpackage" /></div>
                            </div>

                        </div>
                        <div className='right-content'>
                            <div className='support'><i className='fas fa-question'></i><FormattedMessage id="homeheader.support" /></div>
                            <div className={language === LANGUAGES.VI ? 'language-vi active' : 'language-vi'}><span onClick={() => this.changeLanguage(LANGUAGES.VI)}>VN</span></div>
                            <div className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'}><span onClick={() => this.changeLanguage(LANGUAGES.EN)}>EN</span></div>
                        </div>
                    </div>
                </div >
                <div className='home-header-banner'>
                    <div className='content-up'>
                        <div className='title1'><FormattedMessage id="banner.title1" /></div>
                        <div className='title2'><FormattedMessage id="banner.title2" /></div>
                        <div className='search1'>
                            <i className='fas fa-search'></i>
                            <input type='text' placeholder='Tìm bác sĩ khám bệnh' />
                        </div>
                    </div>
                    <div className='content-down'>
                        <div className='option'>
                            <div className='option-child'>
                                <div className='icon-child'><i className='far fa-hospital'></i></div>
                                <div className='text-child'><FormattedMessage id="banner.childcontent1" /></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className='fas fa-mobile-alt'></i></div>
                                <div className='text-child'><FormattedMessage id="banner.childcontent2" /></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className='fas fa-procedures'></i></div>
                                <div className='text-child'><FormattedMessage id="banner.childcontent3" /></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><FaMicroscope /></div>
                                <div className='text-child'><FormattedMessage id="banner.childcontent4" /></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className='fas fa-user-md'></i></div>
                                <div className='text-child'><FormattedMessage id="banner.childcontent5" /></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><FaTooth /></div>
                                <div className='text-child'><FormattedMessage id="banner.childcontent6" /></div>
                            </div>


                        </div>
                    </div>
                </div>
                {/* <div className='section1'>
                </div> */}


            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
