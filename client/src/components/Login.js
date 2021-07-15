import React, { useContext } from 'react'
import {AuthContext} from '../providers/AuthProvider'

const Login = (props) => {
    const {testValue} = useContext(AuthContext)
    return (
        <>
            <h1>Login Form</h1>
            <p>test value: {testValue}</p>
        </>
    )
}

export default Login