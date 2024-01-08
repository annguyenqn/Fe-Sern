import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';

class Login extends Component {
    constructor(props) {
        super(props);
        this.btnLogin = React.createRef();
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
                                <input placeholder='Enter your username' type='text' className='form-control'></input>
                            </div>
                            <div className='col-12 form-group login-input'>
                                <label>Password:</label>
                                <input placeholder='Enter your password' type='password' className='form-control'></input>
                            </div>
                            <div className='col-12'>
                                <button className='btn btn-primary but-login'>Login</button>
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
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
