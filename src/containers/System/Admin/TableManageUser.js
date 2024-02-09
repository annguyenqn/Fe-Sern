import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './TableManageUser.scss'
import * as actions from "../../../store/actions"
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import actionTypes from '../../../store/actions/actionTypes';
class TableManageUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            UsersRedux: [],
        }
    }

    async componentDidMount() {
        //fire action khi render lan dau
        this.props.fetchUserRedux();
    }

    async componentDidUpdate(prevProbs, prevState, snapshot) {
        //Sau khi update check prevprops với props hiện tại có sự thay đổi ko
        // Nếu có thay đổi thì gán listUsers props cho state userRedux
        if (prevProbs.listUser !== this.props.listUser) {
            this.setState({
                UsersRedux: this.props.listUser,
            })
        }
    }
    render() {
        // console.log('this is user', this.state.UsersRedux);
        let Users = this.state.UsersRedux
        return (
            <>
                <div className='mt-3'>
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
                                                            // onClick={() => { this.handleEditUser(item) }}
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
        listUser: state.admin.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserRedux: () => dispatch(actions.fetchAllUserStart()),
        deleteUserRedux: (id) => dispatch(actions.deleteUserStart(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
