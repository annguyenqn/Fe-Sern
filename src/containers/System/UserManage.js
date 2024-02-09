import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss'
import { getAllUser, addNewUser, deleteUser, editUser } from '../../services/userService'
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import ModalUser from "./ModalUser"
import ModalYesOrNo from './ModalYesOrNo';
import EditModal from './EditModal';
import { castArray } from 'lodash';
import { emitter } from '../../utils/emitter'
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,
            isOpenModalYN: false,
            isOpenModalEdit: false,
            DeleteUser: {},
            userEdit: {},
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
    // getUsetById = async (item) => {
    //     // let res = await getAllUser(userId);
    //     // console.log('user :', res);
    //     this.setState({
    //         user: item
    //     })
    // }
    handleAddNewUser = () => {
        this.setState({
            isOpenModalUser: true
        })
    }
    handleDeleteUser = (item) => {
        this.setState({
            isOpenModalYN: !this.state.isOpenModalYN,
            DeleteUser: item
        })

    }
    handleEditUser = (item) => {
        this.setState({
            isOpenModalEdit: !this.state.isOpenModalEdit,
            userEdit: item
        })

    }
    toggleModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser
        })
    }
    toogleModalYN = () => {
        this.setState({
            isOpenModalYN: !this.state.isOpenModalYN
        })
    }
    toggleModalEdit = () => {
        this.setState({
            isOpenModalEdit: !this.state.isOpenModalEdit
        })
    }
    handleDelete = async (User) => {
        // console.log('user id', idUser);

        try {
            let res = await deleteUser(User.id)
            if (res && res.errCode === 0) {
                await this.getAllUserFromReact();
                this.setState({
                    isOpenModalYN: !this.state.isOpenModalYN,
                })
            } else {
                console.log('err mess', res.message)
            }

        } catch (e) {
            console.log('Delete User Err:', e);
        }

    }
    createNewUser = async (data) => {
        // console.log('create', data);
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
                emitter.emit('EVENT_CLEAR_MODAL_DATA', { 'id': 'your id' })
            }
        } catch (e) {
            console.log('create new user err:', e);
        }
    }
    EditUser = async (data) => {
        // console.log('user edit', data);
        try {
            // gọi api editUser truyền pram để update
            let res = await editUser(data)
            console.log('edit user', res);
            if (res && res.errCode != 0) {
                alert(res.message)
            } else {
                //Get all user sau khi update để reload lại trang show user
                await this.getAllUserFromReact();
                this.setState({
                    isOpenModalEdit: false
                })
            }
        } catch (e) {
            console.log('Edit user err:', e);
        }
    }
    render() {
        let arrUsers = this.state.arrUsers
        // console.log('this is user', this.state.user);
        return (
            <>
                <div className="user-container  ">
                    <ModalUser
                        isOpen={this.state.isOpenModalUser}
                        toggle={this.toggleModal}
                        createNewUser={this.createNewUser} />
                    <ModalYesOrNo
                        isOpen={this.state.isOpenModalYN}
                        toggle={this.toogleModalYN}
                        handleDelete={this.handleDelete}
                        DeleteUser={this.state.DeleteUser}
                    />
                    {
                        this.state.isOpenModalEdit &&
                        <EditModal
                            isOpen={this.state.isOpenModalEdit}
                            toggle={this.toggleModalEdit}
                            editUser={this.EditUser}
                            user={this.state.userEdit}
                        />

                    }


                    <div className='title text-center'>Manange Users</div>
                    <div className='d-flex-col mx-5 mt-5 '>
                        <div className=''>
                            <button onClick={() => { this.handleAddNewUser() }} className='btn btn-primary px-3  '>Add New User</button>
                        </div>
                        <div className='mt-3'>
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
                                                    <tr key={index}>
                                                        <td className=''>{item.email}</td>
                                                        <td>{item.firstName}</td>
                                                        <td className=''>{item.lastName}</td>
                                                        <td className=' '>
                                                            <button
                                                                onClick={() => { this.handleEditUser(item) }}
                                                                type="button" className="btn btn-primary w-25 mx-2 "><AiOutlineEdit className='h-50' /></button>
                                                            <button
                                                                onClick={() => this.handleDeleteUser(item)}
                                                                type="button"
                                                                className="btn btn-danger w-25 "><AiOutlineDelete /></button>
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
