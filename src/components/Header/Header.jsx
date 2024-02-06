import React from "react";
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './../../assets/img/argentBankLogo.png'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../Redux/Reducer.js'
import { useNavigate } from 'react-router-dom'


export default function Header() {
    const stateIsLogged = useSelector((state) => state.user.isLogged)
    const stateFirstName = useSelector((state) => state.user.firstName)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleLogout() {
        dispatch(actions.logOut())
        navigate('/')
    }

    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img
                    className="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                {stateIsLogged ? (
                    <div className="navLoggedContainer">
                        <Link to="/profile" className="main-nav-item" onClick={handleLogout}>
                            <i className="fa fa-user-circle"></i>
                            {stateFirstName}
                        </Link>
                        <Link to="/" className="main-nav-item" onClick={handleLogout}>
                            <i className="fa fa-sign-out"></i>
                            Logout
                        </Link>
                    </div>
                ) : (
                    <Link className="main-nav-item" to="./login">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </Link>
                )}
            </div>
        </nav>
    );
}