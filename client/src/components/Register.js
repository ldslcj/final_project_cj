import React, { useContext } from 'react'
import { Form } from 'semantic-ui-react'
import { useFormInput } from '../customHooks/useFormInput'
import {AuthContext} from '../providers/AuthProvider'
import {useHistory} from 'react-router-dom'

const Register = (props) => {
    const history = useHistory()
    const {handleRegister} = useContext(AuthContext)
    const email = useFormInput('', 'Email')
    const password = useFormInput('', 'Password')
    const passwordConfirmation = useFormInput('', 'Password Confirmation')



    const handleSubmit = (e) => {
        e.preventDefault()
        if(password.value !== passwordConfirmation.value || password.value.length < 6){
            alert('passwords do not match or too short')
        } else {
        handleRegister({email: email.value, password: password.value}, history)
        }
    }

    return (
        <>
            <h1>Register Form</h1>
            <p>test value: {handleRegister}</p>
            <Form onSubmit={handleSubmit}>
                <Form.Input {...email} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
                <Form.Input {...password} type='password'/>
                <Form.Input {...passwordConfirmation} type='password'/>
                <Form.Button type='submit'>Add</Form.Button>
            </Form>
        </>
    )
}

export default Register