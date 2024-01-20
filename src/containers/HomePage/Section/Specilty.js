import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specilty.scss'
import { FormattedMessage } from 'react-intl'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import speciltyImg from "../../../assets/images/Specilty/Medicalspecialties.jpg"

class Specilty extends Component {


    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            // nextArrow: <SampleNextArrow />,
            // prevArrow: <SamplePrevArrow />

        };
        return (
            <>
                <div className='section-specilty'>
                    <div className='specilty-container'>
                        <div className='specilty-header'>
                            <div className='specilty-header-body'>
                                <span>Chuyên khoa phổ biến</span>
                                <button >Xem thêm</button>
                            </div>

                        </div>
                        <div className='specilty-body'>
                            <Slider {...settings}>
                                <div className='img-customize'>
                                    <img src={speciltyImg}></img>
                                    <h4>Cơ sương khớp 1</h4>
                                </div>
                                <div className='img-customize'>
                                    <img src={speciltyImg}></img>
                                    <h4>Cơ sương khớp 2</h4>
                                </div >
                                <div className='img-customize'>
                                    <img src={speciltyImg}></img>
                                    <h4>Cơ sương khớp 3</h4>
                                </div>
                                <div className='img-customize'>
                                    <img src={speciltyImg}></img>
                                    <h4>Cơ sương khớp 4</h4>
                                </div>
                                <div className='img-customize'>
                                    <img src={speciltyImg}></img>
                                    <h4>Cơ sương khớp 5</h4>
                                </div>
                                <div className='img-customize'>
                                    <img src={speciltyImg}></img>
                                    <h4>Cơ sương khớp 6</h4>
                                </div>
                                <div className='img-customize'>
                                    <img src={speciltyImg}></img>
                                    <h4>Cơ sương khớp 7</h4>
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

export default Specilty;
