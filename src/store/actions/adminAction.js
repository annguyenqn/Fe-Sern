import actionTypes from './actionTypes';
import { getAllCode, addNewUser, getAllUser, deleteUser, editUser } from '../../services/userService';
// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START
// })

export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCode("GENDER")
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data));
            } else {
                dispatch(fetchGenderFailed());
            }
        } catch (e) {
            dispatch(fetchGenderFailed());
            console.log(e);
        }
    }
}


export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        try {
            // console.log('this is pos action ');
            let res = await getAllCode("POSITION")
            // console.log('this is pos action res ', res);
            if (res && res.errCode === 0) {
                dispatch(fetchPositionSuccess(res.data));
            } else {
                dispatch(fetchPositionFailed());
            }
        } catch (e) {
            dispatch(fetchPositionFailed());
            console.log(e);
        }
    }
}

export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCode("ROLE")
            if (res && res.errCode === 0) {
                dispatch(fetchRoleSuccess(res.data));
            } else {
                dispatch(fetchRoleFailed());
            }
        } catch (e) {
            dispatch(fetchRoleFailed());
            console.log(e);
        }
    }
}

export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            // console.log('check create redux');
            let res = await addNewUser(data)
            if (res && res.errCode === 0) {
                dispatch(saveUserSuccess());
                dispatch(fetchAllUserStart());
            } else {
                dispatch(saveUserFail());
            }
        } catch (e) {
            dispatch(saveUserFail());
            console.log(e);
        }
    }
}
export const fetchAllUserStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllUser("ALL")
            if (res && res.errCode === 0) {
                dispatch(fetchAllUserSuccess(res.users));
            } else {
                dispatch(fetchAllUserFail());
            }
        } catch (e) {
            dispatch(fetchAllUserFail());
            console.log(e);
        }
    }
}
export const deleteUserStart = (id) => {
    // console.log('delete', id);
    return async (dispatch, getState) => {
        try {
            let res = await deleteUser(id)
            if (res && res.errCode === 0) {
                dispatch(deleteUserSuccess());
                dispatch(fetchAllUserStart());
            } else {
                dispatch(deleteUserFail());
            }
        } catch (e) {
            dispatch(deleteUserFail());
            console.log(e);
        }
    }
}
export const editUserStart = (data) => {
    // console.log('delete', id);
    return async (dispatch, getState) => {
        try {
            let res = await editUser(data)
            if (res && res.errCode === 0) {
                dispatch(editUserSuccess());
                dispatch(fetchAllUserStart());
            } else {
                dispatch(editUserFail());
            }
        } catch (e) {
            dispatch(editUserFail());
            console.log(e);
        }
    }
}


export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData
})
export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED
})

export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})
export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED
})

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})
export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED
})

export const saveUserSuccess = () => ({
    type: actionTypes.SAVE_USER_SUCCESS,
    // data: data
})
export const saveUserFail = () => ({
    type: actionTypes.SAVE_USER_FAILED
})

export const fetchAllUserSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_USER_SUCCESS,
    users: data
})
export const fetchAllUserFail = () => ({
    type: actionTypes.FETCH_ALL_USER_FAILED
})

export const deleteUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS,
})
export const deleteUserFail = () => ({
    type: actionTypes.DELETE_USER_FAILED
})

export const editUserSuccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS,
})
export const editUserFail = () => ({
    type: actionTypes.EDIT_USER_FAILED,
})