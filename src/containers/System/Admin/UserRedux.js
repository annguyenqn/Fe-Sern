import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { LANGUAGES } from '../../../utils'
import { changeLanguageApp } from '../../../store/actions'
import { getAllCode } from '../../../services/userService'
import * as actions from "../../../store/actions"
import './UserRedux.scss'
class UserRedux extends Component {

    constructor(probs) {
        super(probs);
        this.state = {
            genderArr: [],
            positionArr: [],
            roleArr: [],
            previewImgURL: '',
        }
    }
    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language)
    }
    handleOnchangeImage = (e) => {
        let data = e.target.files;
        let file = data[0];

        if (file) {
            let objUrl = URL.createObjectURL(file)
            // this.setState({
            //     previewImgURL: objUrl
            // })
            console.log('check img', objUrl);
        } else {
            console.log('img err');
        }
    }
    async componentDidMount() {
        this.props.getGenderStart();
        this.props.getPositionStart();
        this.props.getRoleStart();
        // try {
        //     let gender = await getAllCode('gender');
        //     let position = await getAllCode('position');
        //     let role = await getAllCode('role');
        //     if (gender && gender.errCode === 0) {
        //         this.setState({
        //             genderArr: gender.data
        //         })
        //     }
        //     if (position && position.errCode === 0) {
        //         this.setState({
        //             positionArr: position.data
        //         })
        //     }
        //     if (role && role.errCode === 0) {
        //         this.setState({
        //             roleArr: role.data
        //         })
        //     }
        // } catch (e) {
        //     console.log(e);
        // }
    }
    componentDidUpdate(prevProbs, prevState, snapshot) {
        if (prevProbs.genderRedux !== this.props.genderRedux) {
            this.setState({
                genderArr: this.props.genderRedux
            })
        }

        if (prevProbs.positionRedux !== this.props.positionRedux) {
            this.setState({
                positionArr: this.props.positionRedux
            })
        }
        if (prevProbs.roleRedux !== this.props.roleRedux) {
            this.setState({
                roleArr: this.props.roleRedux
            })
        }
    }

    render() {
        let language = this.props.language;
        let gender = this.state.genderArr;
        let position = this.state.positionArr;
        let role = this.state.roleArr;
        // console.log(' xin chao', this.props.positionRedux);
        return (
            <>
                <div className='user-redux-container'>
                    <div className='title'>Learn Redux  </div>
                    <div className='user-redux-body'>
                        <div className='container'>
                            <form>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="inputEmail4"><FormattedMessage id="contentAdmin.email" /></label>
                                        <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="inputPassword4"><FormattedMessage id="contentAdmin.password" /></label>
                                        <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
                                    </div>
                                    <div class="form-group col-md-2">
                                        <label ><FormattedMessage id="contentAdmin.firstName" /></label>
                                        <input type="text" class="form-control" id="inputFirstName" />
                                    </div>           <div class="form-group col-md-2">
                                        <label ><FormattedMessage id="contentAdmin.lastName" /></label>
                                        <input type="text" class="form-control" id="inputLastName" />
                                    </div>
                                </div>
                                <div class="form-group col-md-2">
                                    <label for="inputZip"><FormattedMessage id="contentAdmin.phoneNumber" /></label>
                                    <input type="text" class="form-control" id="inputPhoneNumber" />
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label ><FormattedMessage id="contentAdmin.address" /></label>
                                        <input type="text" class="form-control" id="inputAddress" />
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label ><FormattedMessage id="contentAdmin.gender" /></label>
                                        <select id="inputGender" class="form-control">
                                            {gender && gender.length > 0 && gender.map((item, index) => {
                                                return (
                                                    <>
                                                        <option key={index}>
                                                            {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                                        </option>
                                                    </>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label ><FormattedMessage id="contentAdmin.position" /></label>
                                        <select id="inputPosition" class="form-control">
                                            {position && position.length > 0 && position.map((item, index) => {
                                                return (
                                                    <>
                                                        <option key={index}>
                                                            {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                                        </option>
                                                    </>
                                                )
                                            })}
                                        </select>
                                    </div>

                                    <div class="form-group col-md-4">
                                        <label ><FormattedMessage id="contentAdmin.roleId" /></label>
                                        <select id="inputRoleID" class="form-control">
                                            {role && role.length > 0 && role.map((item, index) => {
                                                return (
                                                    <>
                                                        <option key={index}>
                                                            {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                                        </option>
                                                    </>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <div class="form-group col-md-2">
                                        <label ><FormattedMessage id="contentAdmin.image" /></label>
                                        <div className='preview-img-container'>
                                            <input type="file"
                                                onChange={(e) => { this.handleOnchangeImage(e) }}
                                                class="form-control" id="previewImage" />
                                            {/* <label className='label-upload' htmlFor='previewImage'>Tải ảnh <i className='fas fa-upload'></i></label> */}
                                            {/* <div className='preview-image'
                                                style={{
                                                    backgroundImage: `url(${this.state.previewImgURL})`
                                                }}
                                            ></div> */}
                                        </div>

                                        {/* <input type="text" class="form-control" id="inputImage" /> */}
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary"><FormattedMessage id="contentAdmin.add" />
                                    <style>
                                        {`.btn { margin-top: 10px;width:100px;} `}
                                    </style>
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genderRedux: state.admin.genders,
        positionRedux: state.admin.position,
        roleRedux: state.admin.roles,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language)),
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getPositionStart: () => dispatch(actions.fetchPositionStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart()),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
