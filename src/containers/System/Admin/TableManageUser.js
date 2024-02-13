import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './TableManageUser.scss'
import * as actions from "../../../store/actions"
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import actionTypes from '../../../store/actions/actionTypes';
import EditModal from '../EditModal';
class TableManageUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // UsersRedux: this.props.listUser,
            isOpenModalEdit: false,
            userEdit: {},

        }
    }
    handleEditUser = (item) => {
        this.setState({
            isOpenModalEdit: !this.state.isOpenModalEdit,
            userEdit: item
        })
    }
    toggleModalEdit = () => {
        this.setState({
            isOpenModalEdit: !this.state.isOpenModalEdit
        })
    }
    EditUser = (data) => {
        this.props.editUserRedux(data);
        this.setState({
            isOpenModalEdit: !this.state.isOpenModalEdit
        })
    }
    async componentDidMount() {
        //fire action khi render lan dau
        // this.props.fetchUserRedux();
    }

    async componentDidUpdate(prevProbs, prevState, snapshot) {
        //Sau khi update check prevprops với props hiện tại có sự thay đổi ko
        // Nếu có thay đổi thì gán listUsers props cho state userRedux
        // if (prevProbs.listUser !== this.props.listUser) {
        //     this.setState({
        //         UsersRedux: this.props.listUser,
        //     })
        // }
    }
    render() {
        let Users = this.props.listUser
        // console.log('this is users', this.state.userEdit, this.state.isOpenModalEdit);
        return (
            <>
                <div className='table'>
                    {
                        //Ta phải kiểm tra trước nếu có nhấn nút edit thì mới render
                        //Nếu không xét điều kiện thì nó sẽ render trước mà chưa truyền props
                        this.state.isOpenModalEdit &&
                        <EditModal
                            isOpen={this.state.isOpenModalEdit}
                            toggle={this.toggleModalEdit}
                            editUser={this.EditUser}
                            user={this.state.userEdit}
                        />

                    }
                    <table class="table table-hover ">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Email</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Address</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <>
                                {
                                    Users && Users.map((item, index) => {
                                        return (
                                            <>
                                                <tr key={index}>
                                                    <td className=''>{item.email}</td>
                                                    <td>{item.firstName}</td>
                                                    <td className=''>{item.lastName}</td>
                                                    <td className=''>{item.address}</td>
                                                    <td className=' '>
                                                        <button
                                                            onClick={() => { this.handleEditUser(item) }}
                                                            type="button" className="btn btn-primary w-25 mx-2 "><AiOutlineEdit className='h-50' /></button>
                                                        <button
                                                            onClick={() => this.props.deleteUserRedux(item.id)}
                                                            type="button"
                                                            className="btn btn-danger w-25 "><AiOutlineDelete /></button>
                                                    </td>

                                                </tr>
                                            </>
                                        )
                                    })
                                }
                            </>
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        // listUser: state.admin.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // fetchUserRedux: () => dispatch(actions.fetchAllUserStart()),
        deleteUserRedux: (id) => dispatch(actions.deleteUserStart(id)),
        editUserRedux: (data) => dispatch(actions.editUserStart(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
