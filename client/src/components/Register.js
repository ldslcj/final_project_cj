import React, { useContext } from 'react'
import {AuthContext} from '../providers/AuthProvider'

const Register = (props) => {
    const {testValue} = useContext(AuthContext)
    return (
        <>
            <h1>Register Form</h1>
            <p>test value: {testValue}</p>
        </>
    )
}

export default Register