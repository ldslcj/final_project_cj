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

    const handleLogout = async (history) => {
        console.log('handleLogout called')
        try{
            let res = await axios.delete('/api/auth/sign_out')
            console.log(res)
            setUser(null)
            history.push('/login')
        } catch (err){
            alert('erro occurred check console')
            console.log(err)
            console.log(err.response)
        }
    }

    return (
        <AuthContext.Provider value={{
            testValue: 'test value',
            user,
            authenticated: user !== null,
            handleRegister,
            handleLogin,
            handleLogout,
            setUser
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider