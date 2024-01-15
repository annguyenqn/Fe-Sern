import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './UserManage.scss'
class ModalYesorNo extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    async componentDidMount() {

    }
    toggle = () => {
        // console.log('this is prop', this.props.toggle);
        this.props.toggle();
    }
    handleDelete = () => {
        this.props.handleDelete(this.props.DeleteUser);
        // console.log('id user delete', this.props.idDeleteUser);
    }
    render() {
        return (
            <>

                <Modal
                    isOpen={this.props.isOpen}
                    // isOpen={true}
                    toggle={this.toggle}
                    size='xs'
                    centered

                >
                    <ModalHeader className='bg-light text-dark' toggle={this.toggle}>Delete User</ModalHeader>
                    <ModalBody>
                        <div class="container">
                            <div class="row">
                                <p>Do you want to delete user {this.props.DeleteUser.email} ?</p>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button className='px-3' color="danger" onClick={() => this.handleDelete()}>
                            Delete
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalYesorNo);
