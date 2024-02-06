import { createSlice } from "@reduxjs/toolkit"

const { actions, reducer } = createSlice({
    name: 'UserReducer',
    initialState: {
        isLogged: false,
        token: null,
        firstName: null,
        lastName: null,
    },

    reducers: {
        setToken: (state, action) => {
            return {
                ...state,
                isLogged: true,
                token: `${action.payload.token}`,
            }

        },
        setUser: (state, action) => {
            return {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName
            }
        },
        logOut: (state) => {
            return {
                ...state,
                isLogged: false,
                token: null,
                firstName: null,
                lastName: null,
            }

        }
    }
})


export const { setToken, setUser, logOut } = actions
export default reducer