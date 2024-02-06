import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import useProfile from '../../Hooks/useProfile.jsx'
import * as actions from '../../Redux/Reducer.js'
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader.jsx'
import AccountCard from '../../components/AccountCard/AccountCard.jsx'
import { ACCOUNTS_ITEM } from './../../Data/Accounts.js'

export default function Profile() {
    const stateToken = useSelector((state) => state.user.token)
    const stateIsLogged = useSelector((state) => state.user.isLogged)
    //const stateFirstName = useSelector((state) => state.user.firstName)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { getProfile } = useProfile(stateToken)

    const getData = async () => {
        const res = await getProfile();
        dispatch(actions.setUser({ firstName: res.firstName, lastName: res.lastName }));
    };

    useEffect(() => {
        if (stateIsLogged) {
            getData()
        } else {
            navigate('/login')
        }
    }, [stateIsLogged])

    return (
        <div className='main bg-dark'>
            <div className="flexMain">
                <ProfileHeader />
            </div>
            <div className='accountCardContainer'>
                <h2 className="sr-only">Accounts</h2>
                {ACCOUNTS_ITEM.map(element => (
                    <AccountCard key={element.id} accountTitle={element.title} accountAmount={element.amount} accountAmountDesc={element.desc} />
                ))}
            </div>
        </div>
    )
}