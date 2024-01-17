import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FaMicroscope, FaTooth } from "react-icons/fa";
import './HomeHeader.scss'
class HomeHeader extends Component {

    render() {


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
                            <div className='childe-content'>
                                <div className='' ><b>Chuyên khoa</b></div>
                                <div className=''>Tìm bác sĩ theo chuyên khoa</div>

                            </div>
                            <div className='childe-content'>
                                <div className='' ><b>Cơ sở y tế</b></div>
                                <div className=''>Chọn bệnh viện phòng khám</div>
                            </div>
                            <div className='childe-content'>
                                <div className='' ><b>Bác sĩ</b></div>
                                <div className=''>Chọn bác sĩ giỏi</div>
                            </div>
                            <div className='childe-content'>
                                <div className='' ><b>Gói khám</b></div>
                                <div className=''>Khám sức khỏe tổng quát</div>
                            </div>

                        </div>
                        <div className='right-content'>
                            <div className='support'><i className='fas fa-question'></i>Hỗ trợ</div>
                            <div className='flag'>VN</div>
                        </div>

                    </div>
                    <div className='home-header-banner'>
                        <div className='title1'></div>
                        <div className='title2'></div>
                        <div className='search'></div>
                        <div className='option'></div>


                    </div>
                </div >
                <div className='home-header-banner'>
                    <div className='content-up'>
                        <div className='title1'>NỀN TẢNG Y TẾ</div>
                        <div className='title2'>CHĂM SÓC SỨC KHỎE TOÀN DIỆN</div>
                        <div className='search1'>
                            <i className='fas fa-search'></i>
                            <input type='text' placeholder='Tìm bác sĩ khám bệnh' />
                        </div>
                    </div>
                    <div className='content-down'>
                        <div className='option'>
                            <div className='option-child'>
                                <div className='icon-child'><i className='far fa-hospital'></i></div>
                                <div className='text-child'>Khám chuyên khoa</div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className='fas fa-mobile-alt'></i></div>
                                <div className='text-child'>Khám từ xa</div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className='fas fa-procedures'></i></div>
                                <div className='text-child'>Khám tổng quát</div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><FaMicroscope /></div>
                                <div className='text-child'>Xét nghiệm y học</div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className='fas fa-user-md'></i></div>
                                <div className='text-child'>Sức khỏe tinh thần</div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><FaTooth /></div>
                                <div className='text-child'>Khám nha khoa</div>
                            </div>


                        </div>
                    </div>



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

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
