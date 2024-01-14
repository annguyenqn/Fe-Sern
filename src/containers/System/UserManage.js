import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss'
import { getAllUser, addNewUser } from '../../services/userService'
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import ModalUser from "./ModalUser"
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,

        }
    }

    async componentDidMount() {
        await this.getAllUserFromReact()
    }
    getAllUserFromReact = async () => {
        let res = await getAllUser('ALL');
        // console.log('get user from nodejs', res);
        if (res && res.errCode === 0) {
            this.setState({
                arrUsers: res.users
            })
        }
    }
    handleAddNewUser = () => {
        this.setState({
            isOpenModalUser: true
        })
    }
    toggleModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser
        })
    }
    createNewUser = async (data) => {
        try {
            let res = await addNewUser(data)
            // console.log('respon create new user', res);
            if (res && res.errCode != 0) {
                alert(res.message)
            } else {
                await this.getAllUserFromReact();
                this.setState({
                    isOpenModalUser: false
                })
            }
        } catch (e) {
            console.log('create new user err:', e);
        }
        // console.log('this is data', data);
    }
    render() {
        let arrUsers = this.state.arrUsers
        return (
            <>
                <div className="user-container  ">
                    <ModalUser
                        isOpen={this.state.isOpenModalUser}
                        toggle={this.toggleModal}
                        createNewUser={this.createNewUser} />
                    <div className='title text-center'>Manange Users</div>
                    <div className='mx-1'>
                        <button onClick={() => { this.handleAddNewUser() }} className='btn btn-primary px-3 '>Add New User</button>
                    </div>
                    <div className='mt-5 mx-5'>
                        <table class="table table-hover ">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">Email</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Actions</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    arrUsers && arrUsers.map((item, index) => {
                                        return (
                                            <>
                                                <tr>
                                                    <td className=''>{item.email}</td>
                                                    <td>{item.firstName}</td>
                                                    <td className=''>{item.lastName}</td>
                                                    <td className=' '>
                                                        <button type="button" class="btn btn-primary w-25 mx-2 "><AiOutlineEdit className='h-50' /></button>
                                                        <button type="button" class="btn btn-danger w-25 "><AiOutlineDelete /></button>
                                                    </td>

                                                </tr>
                                            </>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </div>


                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
