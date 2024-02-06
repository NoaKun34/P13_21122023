import useAPI from '../API/API.js'
import { useSelector } from 'react-redux'

export default function useProfile() {
    const stateToken = useSelector((state) => state.user.token);

    const getProfile = async () => {
        try {
            const res = await useAPI.profile(stateToken);
            return res;
        } catch (error) {
            console.log(error);
        }
    }

    return { getProfile }
}