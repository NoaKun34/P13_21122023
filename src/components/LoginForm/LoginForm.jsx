import { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth.jsx'
import * as actions from '../../Redux/Reducer.js'
import './LoginForm.css';

export default function LoginForm() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const usernameRef = useRef()
    const passwordRef = useRef()
    const stateToken = useSelector(state => state.user.token)
    const { getAuth } = useAuth()
    const [errorMessage, setErrorMessage] = useState(null)

    useEffect(() => {
        if (stateToken) {
            navigate('/profile')
        }
    }, [stateToken])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const username = usernameRef.current.value
        const password = passwordRef.current.value
        if (username === '' || password === '') {
            setErrorMessage('All fields are required')
        }
        const res = await getAuth(username, password)
        if (res == 400) {
            console.log(res)
            setErrorMessage("Incorrect username or password")
        } else {
            dispatch(actions.setToken({ token: res }))
            setErrorMessage(null)
        }
    }

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit} >
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" ref={usernameRef} />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" ref={passwordRef} />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button type="submit" className="sign-in-button">Sign In</button>
                    {errorMessage && (
                        <p className='errorMessage'>{errorMessage}</p>
                    )}
                </form>
            </section>
        </main>
    );
}