import React, { useState } from 'react'
import axios from 'axios'

export const AuthContext = React.createContext()

export const AuthConsumer = AuthContext.Consumer


const AuthProvider = (props) => {
    const [user, setUser] = useState(null)

    const handleRegister = async (userFormData, history) => {
        try {
            let res = await axios.post('api/auth', userFormData)
            setUser(res.data.data)
            history.push('/')
        } catch (err) {
            console.log(err)
            console.log(err.response)

        }
        console.log(userFormData)

    }

    const handleLogin = async (userFormData, history) => {
        try {
            let res = await axios.post('api/auth/sign_in', userFormData)
            console.log(res)
            setUser(res.data.data)
            history.push('/')
        } catch (err) {
            console.log(err)
            console.log(err.response)

        }
        console.log(userFormData)

    }

    const handleLogout = (history) => {
        console.log('handleLogout called')
        setUser(null)
        history.push('/login')
    }

    return (
        <AuthContext.Provider value={{
            testValue: 'test value',
            user,
            authenticated: user !== null,
            handleRegister,
            handleLogin,
            handleLogout
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider