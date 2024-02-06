import axios from "axios";

const api = axios.create({
    baseURL: `http://localhost:3001/api/v1`
});

class useAPI {

    auth = async (credentials) => {
        try {
            const response = await api.post('/user/login', credentials);
            return response.data.body.token;
        } catch (error) {
            return(error.response.status);
        }
    };

    profile = async (token) => {
        try {
            const response = await api.post('/user/profile', {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data.body;
        } catch (error) {
            console.log(error);
        }
    };

    userUpdate = async (token, user) => {
        try {
            const response = await api.put('/user/profile', user, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data.body;
        } catch (error) {
            console.log(error);
        }
    };
}

export default new useAPI();