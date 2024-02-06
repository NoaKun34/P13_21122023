import useAPI from '../API/API.js'
import { useSelector } from 'react-redux'

export default function useUserUpdate() {
    const stateToken = useSelector((state) => state.user.token);

    const getUserUpdate = async (firstName, lastName) => {
        try {
            const res = await useAPI.userUpdate(stateToken, { firstName, lastName });
            return res;
        } catch (error) {
            console.log(error);
        }
    }

    return { getUserUpdate }
}