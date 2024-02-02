import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './UserManage.scss'
import { emitter } from '../../utils/emitter'

class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            firstName: '',
            password: '',
            lastName: '',
            phoneNumber: '',
            errMess: ''
        }
        this.listenToEmitter();
    }
    //dùng emitter để lắng nghe sự kiện clear state trong input
    listenToEmitter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            this.setState({
                email: '',
                firstName: '',
                password: '',
                lastName: '',
                phoneNumber: '',
                errMess: ''
            })
            console.log('emmmit');
        })
    }

    async componentDidMount() {

    }
    toggle = () => {
        this.props.toggle();
    }
    handleOnChange = (event, id) => {
        //copy state hiện tại để tránh code cứng state
        let copyState = { ...this.state };
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        }, () => {
            // console.log('check state', id);
        })
    }
    validateForm = () => {
        let isValid = true;
        let arrInput = ['email', 'firstName', 'password', 'lastName', 'phoneNumber'];
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert('missing param:' + ' ' + arrInput[i]);
                break;
            }
        }
        return isValid;
    }
    handleAddNewUser = () => {
        let isValid = this.validateForm();
        if (isValid == true) {
            // console.log('data modal', this.state);
            // Lấy props create new user từ component cha và truyền cho nó state user để add
            this.props.createNewUser(this.state);
        }
    }
    render() {
        let UserArr = [
            {
                Header: 'Email address',
                name: 'email',
                type: 'email',

            },
            {
                Header: 'First Name',
                name: 'firstName',
                type: 'text',

            },
            {
                Header: 'Password',
                name: 'password',
                type: 'password',

            },
            {
                Header: 'Last Name',
                name: 'lastName',
                type: 'text',

            },
            {
                Header: 'Phone Number',
                name: 'phoneNumber',
                type: 'number',

            },
        ]
        return (
            <>
                <Modal
                    isOpen={this.props.isOpen}
                    toggle={this.toggle}
                    size='lg'
                    centered
                >
                    <ModalHeader className='bg-light text-dark' toggle={this.toggle}>Create new user</ModalHeader>
                    <ModalBody>
                        <div class="container">
                            <div class="row">
                                <form action="/post-crud" method="POST">
                                    <div class="mb-3">
                                        {
                                            UserArr.map((item, index) => {
                                                return (
                                                    <>
                                                        <label for="exampleInputEmail1" class="form-label">{item.Header}</label>
                                                        <br />
                                                        {/* <span style={{ color: "red" }}>* Not Empty</span> */}
                                                        <input
                                                            onChange={(event) => this.handleOnChange(event, item.name)}
                                                            type={item.type}
                                                            className="form-control"
                                                            value={this.state[item.name]}
                                                            name={item.name}
                                                            aria-describedby="emailHelp" />
                                                    </>
                                                )
                                            })
                                        }

                                    </div>
                                    {/* <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Sex</label>
                                        <select name="gender" class="form-control">
                                            <option value="0">Male</option>
                                            <option value="1">Female</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Role</label>
                                        <select name="roleid" class="form-control">
                                            <option value="0">Admin</option>
                                            <option value="1">Doctor</option>
                                            <option value="2">Patient</option>
                                        </select>
                                    </div> */}
                                </form>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button className='px-3' color="primary" onClick={() => this.handleAddNewUser()}>
                            Submit
                        </Button>{' '}
                        <Button className='px-3' color="secondary" onClick={() => this.toggle()}>
                            Cancels
                        </Button>
                    </ModalFooter>
                </Modal>

            </>
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
