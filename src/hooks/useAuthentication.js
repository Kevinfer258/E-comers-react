import axios from "axios"

const useAuthentication = () => {

    const createNewUser = data => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users'
        return axios.post(url, data);
    }

    const loginUser = (data) => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login'
        return axios
            .post(url, data)

        /* .then(res => {
            
            console.log(res.data)
        })
        .catch(err => {
            console.error(err)
        }) */
    }

    return { createNewUser, loginUser }
}

export default useAuthentication