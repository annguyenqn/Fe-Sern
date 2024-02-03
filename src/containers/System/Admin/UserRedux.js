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

            email: '',
            password: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            address: '',
            gender: '',
            position: '',
            role: '',
            avatar: '',

        }
    }
    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language)
    }
    handleSaveUser = () => {
        let isValid = this.checkValidateInput()
        if (isValid === false) return;
        //fire redux action
        // console.log('this is user', this.state.role, this.state.position);
        this.props.createNewUser({
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            gender: this.state.gender,
            role: this.state.role,
            phoneNumber: this.state.phoneNumber,
            position: this.state.position,
        })
        // console.log('submit data', this.state);
    }
    checkValidateInput = () => {
        let isvalid = true;
        let arrCheck = ['email', 'password', 'firstName', 'lastName', 'phoneNumber', 'address']
        for (let i = 0; i < arrCheck.length; i++) {
            if (!this.state[arrCheck[i]]) {
                isvalid = false
                alert('Missing This Input:' + arrCheck[i])
                break
            }
        }
        return isvalid;
    }
    onChangeInput = (e, id) => {
        let copyState = { ...this.state }
        copyState[id] = e.target.value
        this.setState({
            ...copyState
        }, () => {
            // console.log('check input ', this.state);
        })
    }
    handleOnchangeImage = (e) => {
        let data = e.target.files;
        let file = data[0];
        if (file) {
            // let objUrl = URL.createObjectURL(file)
            this.setState({
                avatar: file
            })
            // console.log('check img', objUrl);
        } else {
            console.log('img err');
        }
    }
    async componentDidMount() {
        this.props.getGenderStart();
        this.props.getPositionStart();
        this.props.getRoleStart();
    }
    componentDidUpdate(prevProbs, prevState, snapshot) {
        if (prevProbs.genderRedux !== this.props.genderRedux) {
            let arrGenders = this.props.genderRedux
            this.setState({
                genderArr: arrGenders,
                gender: arrGenders && arrGenders.length > 0 ? arrGenders[0].key : ''
            })
        }

        if (prevProbs.positionRedux !== this.props.positionRedux) {
            let arrPosition = this.props.positionRedux
            this.setState({
                positionArr: arrPosition,
                position: arrPosition && arrPosition.length > 0 ? arrPosition[0].key : ''

            })
        }
        if (prevProbs.roleRedux !== this.props.roleRedux) {
            let arrRole = this.props.roleRedux
            this.setState({
                roleArr: arrRole,
                role: arrRole && arrRole.length > 0 ? arrRole[0].key : ''
            })
        }
    }

    render() {
        let language = this.props.language;
        let genders = this.state.genderArr;
        let positions = this.state.positionArr;
        let roles = this.state.roleArr;
        let { email, password, firstName, lastName, phoneNumber, address, gender, position, role, avatar } = this.state
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
                                        <input value={email} onChange={(e) => { this.onChangeInput(e, 'email') }} type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="inputPassword4"><FormattedMessage id="contentAdmin.password" /></label>
                                        <input value={password} onChange={(e) => { this.onChangeInput(e, 'password') }} type="password" class="form-control" id="inputPassword4" placeholder="Password" />
                                    </div>
                                    <div class="form-group col-md-2">
                                        <label ><FormattedMessage id="contentAdmin.firstName" /></label>
                                        <input value={firstName} onChange={(e) => { this.onChangeInput(e, 'firstName') }} type="text" class="form-control" id="inputFirstName" />
                                    </div>           <div class="form-group col-md-2">
                                        <label ><FormattedMessage id="contentAdmin.lastName" /></label>
                                        <input value={lastName} onChange={(e) => { this.onChangeInput(e, 'lastName') }} type="text" class="form-control" id="inputLastName" />
                                    </div>
                                </div>
                                <div class="form-group col-md-2">
                                    <label for="inputZip"><FormattedMessage id="contentAdmin.phoneNumber" /></label>
                                    <input value={phoneNumber} onChange={(e) => { this.onChangeInput(e, 'phoneNumber') }} type="text" class="form-control" id="inputPhoneNumber" />
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label ><FormattedMessage id="contentAdmin.address" /></label>
                                        <input value={address} onChange={(e) => { this.onChangeInput(e, 'address') }} type="text" class="form-control" id="inputAddress" />
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label ><FormattedMessage id="contentAdmin.gender" /></label>
                                        <select onChange={(e) => { this.onChangeInput(e, 'gender') }} id="inputGender" class="form-control">
                                            {genders && genders.length > 0 && genders.map((item, index) => {
                                                return (
                                                    <>
                                                        <option key={index} value={item.key}>
                                                            {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                                        </option>
                                                    </>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label ><FormattedMessage id="contentAdmin.position" /></label>
                                        <select onChange={(e) => { this.onChangeInput(e, 'position') }} id="inputPosition" class="form-control">
                                            {positions && positions.length > 0 && positions.map((item, index) => {
                                                return (
                                                    <>
                                                        <option key={index} value={item.key}>
                                                            {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                                        </option>
                                                    </>
                                                )
                                            })}
                                        </select>
                                    </div>

                                    <div class="form-group col-md-4">
                                        <label ><FormattedMessage id="contentAdmin.roleId" /></label>
                                        <select onChange={(e) => { this.onChangeInput(e, 'role') }} id="inputRoleID" class="form-control">
                                            {roles && roles.length > 0 && roles.map((item, index) => {
                                                return (
                                                    <>
                                                        <option key={index} value={item.key}>
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
                                <button
                                    onClick={() => this.handleSaveUser()}
                                    type="submit" class="btn btn-primary"><FormattedMessage id="contentAdmin.add" />
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
        createNewUser: (data) => dispatch(actions.createNewUser(data)),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
