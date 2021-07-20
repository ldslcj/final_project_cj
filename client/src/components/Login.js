import React, { useContext } from 'react'
import { Form } from 'semantic-ui-react'
import { useFormInput } from '../customHooks/useFormInput'
import {AuthContext} from '../providers/AuthProvider'
import {useHistory} from 'react-router-dom'

const Login = (props) => {
    const history = useHistory()
    const {handleLogin} = useContext(AuthContext)
    const email = useFormInput('', 'Email')
    const password = useFormInput('', 'Password')



    const handleSubmit = (e) => {
        e.preventDefault()
        handleLogin({email: email.value, password: password.value}, history)
    }

    return (
        <>
            <h1>Login Form</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Input {...email} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
                <Form.Input {...password} type='password'/>
                <Form.Button type='submit'>Add</Form.Button>
            </Form>
        </>
    )
}

export default Login