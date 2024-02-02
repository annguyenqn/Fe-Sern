import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './UserManage.scss'
import { emitter } from '../../utils/emitter'

class EditModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.user.id,
            email: this.props.user.email,
            firstName: this.props.user.firstName,
            lastName: this.props.user.lastName,
            phoneNumber: this.props.user.phoneNumber,
        }
    }


    async componentDidMount() {


    }

    toggle = () => {
        this.props.toggle();
    }
    //handle input
    handleOnChange = (event, id) => {
        let copyState = { ...this.state };
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        }, () => {
        })
    }
    handleUpdateUser = () => {
        // console.log('child state', this.state);
        this.props.editUser(this.state);

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
                    <ModalHeader className='bg-light text-dark' toggle={this.toggle}>Edit user</ModalHeader>
                    <ModalBody>
                        <div class="container">
                            <div class="row">
                                <form action="/post-crud" method="POST">
                                    <div class="mb-3">
                                        {
                                            UserArr.map((item, index) => {
                                                return (
                                                    <>
                                                        <div key={index}>
                                                            <label for="exampleInputEmail1" class="form-label">{item.Header}</label>
                                                            <br />
                                                            {/* <span style={{ color: "red" }}>* Not Empty</span> */}
                                                            <input
                                                                onChange={(event) => this.handleOnChange(event, item.name)}
                                                                type={item.type}
                                                                className="form-control"
                                                                value={this.state[item.name]}
                                                                name={item.name}
                                                                disabled={item.name === 'email'}
                                                                aria-describedby="emailHelp" />
                                                        </div>
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
                        <Button className='px-3' color="primary" onClick={() => this.handleUpdateUser()}>
                            Update
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

export default connect(mapStateToProps, mapDispatchToProps)(EditModal);
