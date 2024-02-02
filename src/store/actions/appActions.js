import actionTypes from './actionTypes';

export const appStartUpComplete = () => ({
    type: actionTypes.APP_START_UP_COMPLETE
});

export const setContentOfConfirmModal = (contentOfConfirmModal) => ({
    type: actionTypes.SET_CONTENT_OF_CONFIRM_MODAL,
    contentOfConfirmModal: contentOfConfirmModal
});
// action này dùng để changlanguage
export const changeLanguageApp = (language) => ({
    //type để reducer nhận biết được action này dùng cho case nào
    type: actionTypes.CHANGE_LANGUAGE,
    // language là pram truyền cho reducer xử lý
    language: language
})