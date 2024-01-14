import axios from "../axios"
const handleLoginApi = (userEmail, userPassword) => {

    return axios.post('api/login', { email: userEmail, password: userPassword });
}
const getAllUser = (inputId) => {
    return axios.get(`api/get-all-user?id=${inputId}`);
}
const addNewUser = (data) => {
    console.log('check data from service', data);
    // return axios.post('/api/create-new-user', data);
}
export {
    handleLoginApi,
    getAllUser,
    addNewUser

}
