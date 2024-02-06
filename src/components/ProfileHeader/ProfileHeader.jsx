import React, { useRef, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../Redux/Reducer.js'
import useUserUpdate from '../../Hooks/useUserUpdate.jsx'
import './ProfileHeader.css'

export default function ProfileHeader() {
    const dispatch = useDispatch()
    const stateFirstName = useSelector((state) => state.user.firstName)
    const stateLastName = useSelector((state) => state.user.lastName)
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const { getUserUpdate } = useUserUpdate()
    const [errorMessage, setErrorMessage] = useState(null)
    const [changeName, setChangeName] = useState(false)

    /*useEffect(() => {
        setChangeName(true)
    }, [changeName])*/

    async function handleUpdate() {
        if (firstNameRef.current.value === '' || lastNameRef.current.value === '') {
            setErrorMessage('All fields are required')
        } else {
            console.log(firstNameRef.current.value, lastNameRef.current.value)
            const res = await getUserUpdate(firstNameRef.current.value, lastNameRef.current.value)
            if (res.error) {
                console.log("erreur dans HandleUpdate" + res.error)
                setErrorMessage(res.error)
            } else {
                dispatch(actions.setUser({ firstName: res.firstName, lastName: res.lastName }))
                console.log("Dispatch dans HandleUpdate" + res)
                setErrorMessage(null)
                setChangeName(false)
            }
        }
    }

    function handleChangeName() {
        if (changeName) {
            setChangeName(false)
        } else {
            setChangeName(true)
        }
    }

    return (
        <div className="header">
            <h1 className="profileTitle">Welcome back</h1>
            {changeName && (
                <div className="nameEditorContainer">
                    <form className="nameEditorForm">
                        <div className="leftForm formSide">
                            <input className="nameEditorInput" type="text" placeholder={stateFirstName} ref={firstNameRef} />
                            <button className="edit-button leftButton" type="button" onClick={handleUpdate}>Save</button>
                        </div>
                        <div className="rightForm formSide">
                            <input className="nameEditorInput" type="text" placeholder={stateLastName} ref={lastNameRef} />
                            <button className="edit-button rightButton" type="button" onClick={handleChangeName}>Cancel</button>
                        </div>
                    </form>
                    {errorMessage && (
                        <p className='errorMessage'>{errorMessage}</p>
                    )}
                </div>
            )}
            {!changeName && (
                <div className='namesContainer'>
                    <h2 className='names'>{stateFirstName} {stateLastName}</h2>
                    <button className='edit-button changeNameBtn' onClick={handleChangeName}>Changer le nom</button>
                </div>
            )}
        </div>
    )
}