import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { BsEyeFill } from "react-icons/bs";
import { BsEyeSlashFill } from "react-icons/bs";
import { handleLoginApi } from '../../services/userService';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            messege: '',
            eyes: true,
        }
    }
    handleOnchangeInput = (event) => {
        this.setState({
            username: event.target.value
        })
        // console.log(event.target.value);
    }
    handleOnchangePass = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    handleLogin = async () => {
        this.setState({
            messege: ''
        })
        try {
            const user = await handleLoginApi(this.state.username, this.state.password);
            console.log('this is user', user);
            if (user.errCode !== 0) {
                this.setState({
                    messege: user.errMessege
                })
            }
            if (user.errCode === 0) {
                this.props.userLoginSuccess(user.user)
                console.log('logion success');
            }
        } catch (e) {
            console.log('login api is err:', e);
        }


    }
    handleEyes = () => {
        this.setState({
            eyes: !this.state.eyes
        })
    }
    render() {
        return (
            <>

                <div className='login-background'>
                    <div className='login-container'>
                        <div className='login-content row'>
                            <div className='col-12 text-login fs-7'>Login</div>
                            <div className='col-12 form-group login-input '>
                                <label>UserName:</label>
                                <input onChange={(event) => this.handleOnchangeInput(event)} value={this.setState.username} placeholder='Enter your username' type='text' className='form-control'></input>
                            </div>
                            <div className='col-12 form-group login-input'>
                                <label>Password:</label>
                                <div className='input-Pass'>
                                    <input onChange={(event) => this.handleOnchangePass(event)} placeholder='Enter your password' type={this.state.eyes ? 'text' : 'password'} className='form-control'></input>
                                    <div onClick={() => { this.handleEyes() }} className='eyes'> {this.state.eyes ? <BsEyeFill /> : <BsEyeSlashFill />}</div>
                                </div>
                                <div className='col-12' style={{ color: 'red', marginTop: 3, marginBottom: 3 }}>{this.state.messege}</div>
                            </div>
                            <div className='col-12'>
                                <button onClick={() => { this.handleLogin() }} className='btn btn-primary but-login'>Login</button>
                            </div>
                            <div className='col-12 forgot-pass'>
                                <span>Forgot your password?</span>
                            </div>
                            {/* <div className='col-12'>
                                <span>Forgot your password?</span>
                            </div> */}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        lang: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // userLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
