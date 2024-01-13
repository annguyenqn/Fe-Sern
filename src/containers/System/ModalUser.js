import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            firstName: '',
            password: '',
            lastName: '',
            phoneNumber: ''
        }
    }

    async componentDidMount() {

    }
    toggle = () => {
        this.props.toggle();
    }
    handleOnChange = (event, id) => {
        console.log('event', event.target.value, id);
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
                    <ModalHeader toggle={this.toggle}>Create new user</ModalHeader>
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
                                                        <input onChange={(event) => this.handleOnChange(event, item.name)} type={item.type} class="form-control" name={item.name} aria-describedby="emailHelp" />
                                                    </>
                                                )
                                            })
                                        }

                                    </div>
                                    {/* <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Password</label>
                                        <input type="password" class="form-control" name="password" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">First Name</label>
                                        <input type="text" class="form-control" name="firstName" aria-describedby="emailHelp" />

                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Last Name</label>
                                        <input type="text" class="form-control" name="lastName" aria-describedby="emailHelp" />

                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Phone Number</label>
                                        <input type="text" class="form-control" name="phoneNumber" aria-describedby="emailHelp" />

                                    </div> */}
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
                        <Button className='px-3' color="primary" onClick={() => this.toggle()}>
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
