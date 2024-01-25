import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Doctor.scss'
import { FormattedMessage } from 'react-intl'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import DoctorsImg from "../../../assets/images/Doctors/doctor.jpg"

class Doctors extends Component {


    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
        };
        return (
            <>
                <div className='section-Doctors'>
                    <div className='Doctors-container'>
                        <div className='Doctors-header'>
                            <div className='Doctors-header-body'>
                                <span>Bác sĩ nổi bật</span>
                                <button >Xem thêm</button>
                            </div>

                        </div>
                        <div className='Doctors-body'>
                            <Slider {...settings}>
                                <div className='img-customize'>
                                    <div className='doctor-img'>
                                        <img src={DoctorsImg}></img>
                                        <h4>Giáo sư tiến sĩ Văn An</h4>
                                        <h5>Thần kinh</h5>
                                    </div>
                                </div>
                                <div className='img-customize'>
                                    <div className='doctor-img'>
                                        <img src={DoctorsImg}></img>
                                        <h4>Giáo sư tiến sĩ Văn An</h4>
                                        <h5>Thần kinh</h5>
                                    </div>

                                </div >
                                <div className='img-customize'>
                                    <div className='doctor-img'>
                                        <img src={DoctorsImg}></img>
                                        <h4>Giáo sư tiến sĩ Văn An</h4>
                                        <h5>Thần kinh</h5>
                                    </div>
                                </div>
                                <div className='img-customize'>
                                    <div className='doctor-img'>
                                        <img src={DoctorsImg}></img>
                                        <h4>Giáo sư tiến sĩ Văn An</h4>
                                        <h5>Thần kinh</h5>
                                    </div>

                                </div>
                                <div className='img-customize'>
                                    <div className='doctor-img'>
                                        <img src={DoctorsImg}></img>
                                        <h4>Giáo sư tiến sĩ Văn An</h4>
                                        <h5>Thần kinh</h5>
                                    </div>

                                </div>
                                <div className='img-customize'>
                                    <div className='doctor-img'>
                                        <img src={DoctorsImg}></img>
                                        <h4>Giáo sư tiến sĩ Văn An</h4>
                                        <h5>Thần kinh</h5>
                                    </div>
                                </div>
                                <div className='img-customize'>
                                    <div className='doctor-img'>
                                        <img src={DoctorsImg}></img>
                                        <h4>Giáo sư tiến sĩ Văn An</h4>
                                        <h5>Thần kinh</h5>
                                    </div>

                                </div>
                            </Slider>
                        </div>

                    </div>
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

export default Doctors;
