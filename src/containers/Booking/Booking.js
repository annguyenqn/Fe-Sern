import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Booking.scss'
import { AiFillHome } from "react-icons/ai";
import { FormattedMessage } from 'react-intl'
import Header from '../HomePage/Section/Header';
import DoctorsImg from "../../assets/images/Doctors/doctor.jpg"
import DatePicker from 'react-flatpickr';
import { BiCalendar } from "react-icons/bi";
class Booking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            On: false
        }
    }
    handleButtonMore = () => {
        this.setState({
            On: !this.state.On
        })
    }
    render() {
        console.log('state', this.state.On);
        return (
            <>
                <Header />
                <div className='Booking-Container'>
                    <div className={`Booking-intro ${this.state.On ? "show" : ""}`}>
                        <div className='Icon'><AiFillHome /><p>/</p> <p>Khám chuyên khoa</p></div>
                        <h3>Cơ Xương khớp</h3>
                        <p>Danh sách các bác sĩ uy tín đầu ngành Cơ xương khớp:</p>
                        <ul>
                            <li>Các chuyên gia có quá trình đào tạo bài bản, nhiều kinh nghiệm</li>
                            <li>Các giáo sư, phó giáo sư đang trực tiếp nghiên cứu và giảng dạy tại Đại học Y khoa Hà Nội</li>
                            <li>Các bác sĩ đã, đang công tác tại các bệnh viện hàng đầu Khoa Cơ Xương Khớp - Bệnh viện Bạch Mai, Bệnh viện Hữu nghị Việt Đức,Bệnh Viện E.</li>
                            <li>Là thành viên hoặc lãnh đạo các tổ chức chuyên môn như: Hiệp hội Cơ Xương Khớp, Hội Thấp khớp học,...</li>
                            <li>Được nhà nước công nhận các danh hiệu Thầy thuốc Nhân dân, Thầy thuốc Ưu tú, Bác sĩ Cao cấp,...</li>
                        </ul>
                        <p>Bệnh Cơ xương khớp:</p>
                        <ul>
                            <li>Gout</li>
                            <li>Thoái hóa khớp: khớp gối, cột sống thắt lưng, cột sống cổ</li>
                            <li>Viêm khớp dạng thấp, Viêm đa khớp, Viêm gân</li>
                            <li>Tràn dịch khớp gối, Tràn dịch khớp háng, Tràn dịch khớp khủy, Tràn dịch khớp vai</li>
                            <li>Loãng xương, đau nhức xương</li>
                            <li>Viêm xương, gai xương</li>
                            <li>Viêm cơ, Teo cơ, chứng đau mỏi cơ</li>
                            <li>Yếu cơ, Loạn dưỡng cơ</li>
                            <li>Các chấn thương về cơ, xương, khớp</li>
                        </ul>
                        <div className='button-more1'> <button onClick={() => this.handleButtonMore()} className='button-more'>{this.state.On ? "Ẩn bớt" : "Xem thêm"}</button></div>
                    </div>
                    <div className='Booking-Content'>
                        <div className="select">
                            <select name="" id="selectC" className="select-data">
                                <option value="">Toàn quốc</option>
                                <option value="">Hà Nội</option>
                                <option value="">Hồ CHí Minh</option>
                                <option value="">Quy Nhơn</option>
                            </select>
                        </div>
                        <div className='Booking-item'>
                            <div className='Doctor'>
                                <div className='Avatar-Container'>
                                    <img src={DoctorsImg}></img>
                                    <h6>Xem thêm</h6>
                                </div>
                                <div className='Doctor-Content'>
                                    <h4>Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Thị Hoài An</h4>
                                    <p>
                                        Nguyên Trưởng khoa Tai mũi họng trẻ em, Bệnh viện Tai Mũi Họng Trung ương
                                    </p>
                                    <p>
                                        Trên 25 năm công tác tại Bệnh viện Tai mũi họng Trung ương
                                        Chuyên khám và điều trị các bệnh lý Tai Mũi Họng người lớn và trẻ em
                                    </p>
                                </div>
                            </div>
                            <div className='Calender-Container'>
                                <div className='Calender-Date'>
                                    <select name="" id="selectDate" className="select-date">
                                        <option value="">Thứ 5 - 25/1</option>
                                        <option value="">Thứ 5 - 25/1</option>
                                        <option value="">Thứ 5 - 25/1</option>
                                        <option value="">Thứ 5 - 25/1</option>
                                    </select>
                                </div>
                                <div className='Calender-Time'>
                                    <div className='Calender-Time-top'>
                                        <BiCalendar className='Logo' />
                                        <h5>Lịch khám</h5>
                                    </div>
                                    <div className='Calender-Time-bot'>
                                        <div className='Time'>
                                            <div>7:30 - 8:30</div>
                                        </div>
                                        <div className='Time'>
                                            <div>7:30 - 8:30</div>
                                        </div>    <div className='Time'>
                                            <div>7:30 - 8:30</div>
                                        </div>    <div className='Time'>
                                            <div>7:30 - 8:30</div>
                                        </div>    <div className='Time'>
                                            <div>7:30 - 8:30</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='Address'>
                                    <div className='Address-content'>
                                        <h4>Địa chỉ khám</h4>
                                        <h5>Bệnh viện đa khoa Đông Hà</h5>
                                        <p>16 Nguyễn Như Đổ, Văn Miếu, Đống Đa, Hà Nội</p>
                                    </div>
                                </div>
                                <div className='Price'>
                                    <div className='Price-cotent'>
                                        <h4>Giá khám:</h4>
                                        <h5>200.000đ</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='Booking-item'>
                            <div className='Doctor'>
                                <div className='Avatar-Container'>
                                    <img src={DoctorsImg}></img>
                                    <h6>Xem thêm</h6>
                                </div>
                                <div className='Doctor-Content'>
                                    <h4>Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Thị Hoài An</h4>
                                    <p>
                                        Nguyên Trưởng khoa Tai mũi họng trẻ em, Bệnh viện Tai Mũi Họng Trung ương
                                    </p>
                                    <p>
                                        Trên 25 năm công tác tại Bệnh viện Tai mũi họng Trung ương
                                        Chuyên khám và điều trị các bệnh lý Tai Mũi Họng người lớn và trẻ em
                                    </p>
                                </div>
                            </div>
                            <div className='Calender-Container'>
                                <div className='Calender-Date'>
                                    <select name="" id="selectDate" className="select-date">
                                        <option value="">Thứ 5 - 25/1</option>
                                        <option value="">Thứ 5 - 25/1</option>
                                        <option value="">Thứ 5 - 25/1</option>
                                        <option value="">Thứ 5 - 25/1</option>
                                    </select>
                                </div>
                                <div className='Calender-Time'>
                                    <div className='Calender-Time-top'>
                                        <BiCalendar className='Logo' />
                                        <h5>Lịch khám</h5>
                                    </div>
                                    <div className='Calender-Time-bot'>
                                        <div className='Time'>
                                            <div>7:30 - 8:30</div>
                                        </div>
                                        <div className='Time'>
                                            <div>7:30 - 8:30</div>
                                        </div>    <div className='Time'>
                                            <div>7:30 - 8:30</div>
                                        </div>    <div className='Time'>
                                            <div>7:30 - 8:30</div>
                                        </div>    <div className='Time'>
                                            <div>7:30 - 8:30</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='Address'>
                                    <div className='Address-content'>
                                        <h4>Địa chỉ khám</h4>
                                        <h5>Bệnh viện đa khoa Đông Hà</h5>
                                        <p>16 Nguyễn Như Đổ, Văn Miếu, Đống Đa, Hà Nội</p>
                                    </div>
                                </div>
                                <div className='Price'>
                                    <div className='Price-cotent'>
                                        <h4>Giá khám:</h4>
                                        <h5>200.000đ</h5>
                                    </div>
                                </div>
                            </div>
                        </div><div className='Booking-item'>
                            <div className='Doctor'>
                                <div className='Avatar-Container'>
                                    <img src={DoctorsImg}></img>
                                    <h6>Xem thêm</h6>
                                </div>
                                <div className='Doctor-Content'>
                                    <h4>Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Thị Hoài An</h4>
                                    <p>
                                        Nguyên Trưởng khoa Tai mũi họng trẻ em, Bệnh viện Tai Mũi Họng Trung ương
                                    </p>
                                    <p>
                                        Trên 25 năm công tác tại Bệnh viện Tai mũi họng Trung ương
                                        Chuyên khám và điều trị các bệnh lý Tai Mũi Họng người lớn và trẻ em
                                    </p>
                                </div>
                            </div>
                            <div className='Calender-Container'>
                                <div className='Calender-Date'>
                                    <select name="" id="selectDate" className="select-date">
                                        <option value="">Thứ 5 - 25/1</option>
                                        <option value="">Thứ 5 - 25/1</option>
                                        <option value="">Thứ 5 - 25/1</option>
                                        <option value="">Thứ 5 - 25/1</option>
                                    </select>
                                </div>
                                <div className='Calender-Time'>
                                    <div className='Calender-Time-top'>
                                        <BiCalendar className='Logo' />
                                        <h5>Lịch khám</h5>
                                    </div>
                                    <div className='Calender-Time-bot'>
                                        <div className='Time'>
                                            <div>7:30 - 8:30</div>
                                        </div>
                                        <div className='Time'>
                                            <div>7:30 - 8:30</div>
                                        </div>    <div className='Time'>
                                            <div>7:30 - 8:30</div>
                                        </div>    <div className='Time'>
                                            <div>7:30 - 8:30</div>
                                        </div>    <div className='Time'>
                                            <div>7:30 - 8:30</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='Address'>
                                    <div className='Address-content'>
                                        <h4>Địa chỉ khám</h4>
                                        <h5>Bệnh viện đa khoa Đông Hà</h5>
                                        <p>16 Nguyễn Như Đổ, Văn Miếu, Đống Đa, Hà Nội</p>
                                    </div>
                                </div>
                                <div className='Price'>
                                    <div className='Price-cotent'>
                                        <h4>Giá khám:</h4>
                                        <h5>200.000đ</h5>
                                    </div>
                                </div>
                            </div>
                        </div><div className='Booking-item'>
                            <div className='Doctor'>
                                <div className='Avatar-Container'>
                                    <img src={DoctorsImg}></img>
                                    <h6>Xem thêm</h6>
                                </div>
                                <div className='Doctor-Content'>
                                    <h4>Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Thị Hoài An</h4>
                                    <p>
                                        Nguyên Trưởng khoa Tai mũi họng trẻ em, Bệnh viện Tai Mũi Họng Trung ương
                                    </p>
                                    <p>
                                        Trên 25 năm công tác tại Bệnh viện Tai mũi họng Trung ương
                                        Chuyên khám và điều trị các bệnh lý Tai Mũi Họng người lớn và trẻ em
                                    </p>
                                </div>
                            </div>
                            <div className='Calender-Container'>
                                <div className='Calender-Date'>
                                    <select name="" id="selectDate" className="select-date">
                                        <option value="">Thứ 5 - 25/1</option>
                                        <option value="">Thứ 5 - 25/1</option>
                                        <option value="">Thứ 5 - 25/1</option>
                                        <option value="">Thứ 5 - 25/1</option>
                                    </select>
                                </div>
                                <div className='Calender-Time'>
                                    <div className='Calender-Time-top'>
                                        <BiCalendar className='Logo' />
                                        <h5>Lịch khám</h5>
                                    </div>
                                    <div className='Calender-Time-bot'>
                                        <div className='Time'>
                                            <div>7:30 - 8:30</div>
                                        </div>
                                        <div className='Time'>
                                            <div>7:30 - 8:30</div>
                                        </div>    <div className='Time'>
                                            <div>7:30 - 8:30</div>
                                        </div>    <div className='Time'>
                                            <div>7:30 - 8:30</div>
                                        </div>    <div className='Time'>
                                            <div>7:30 - 8:30</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='Address'>
                                    <div className='Address-content'>
                                        <h4>Địa chỉ khám</h4>
                                        <h5>Bệnh viện đa khoa Đông Hà</h5>
                                        <p>16 Nguyễn Như Đổ, Văn Miếu, Đống Đa, Hà Nội</p>
                                    </div>
                                </div>
                                <div className='Price'>
                                    <div className='Price-cotent'>
                                        <h4>Giá khám:</h4>
                                        <h5>200.000đ</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }

}


export default Booking;
