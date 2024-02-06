import useAPI from '../API/API.js'

export default function useAuth() {
    const getAuth = async (email, password) => {
        try {
            const res = await useAPI.auth({ email, password });
            return res;
        } catch (error) {
            return(error);
        }
    }

    return { getAuth }
}