import actionTypes from '../actions/actionTypes';
const initialState = {
    genders: [],
    roles: [],
    position: []
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            console.log("fire event", action);
            return {
                ...state,
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            let copyState = { ...state }
            copyState.genders = action.data
            // console.log("fire event success", copyState);
            return {
                ...copyState,
            }
        case actionTypes.FETCH_GENDER_FAILED:
            // console.log("fire event fail", action);
            return {
                ...state,
            }
        case actionTypes.FETCH_POSITION_SUCCESS:
            // console.log('this is pos');
            let copyStatePos = { ...state }
            copyStatePos.position = action.data
            return {
                ...copyStatePos,
            }
        case actionTypes.FETCH_POSITION_FAILED:
            // console.log("fire event fail", action);
            return {
                ...state,
            }
        case actionTypes.FETCH_ROLE_SUCCESS:
            // console.log('this is rol');
            let copyStateRole = { ...state }
            copyStateRole.roles = action.data
            return {
                ...copyStateRole,
            }
        default:
            return state;
    }
}
export default adminReducer;