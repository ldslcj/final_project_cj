import React, {useContext, useState, useEffect} from 'react'
import axios from 'axios'
import {AuthContext} from '../providers/AuthProvider'

const FetchUser = (props) => {
    const [loaded, setLoaded] = useState(false)
    const {authenticated, setUser} = useContext(AuthContext)

    useEffect(()=>{
        console.log('checking user')
        checkUser()        
    },[])

    const checkUser = async () => {
        if (authenticated || !localStorage.getItem('access-token')){
            setLoaded(true)
            return;
        }

        try {
            const res = await axios.get('/api/auth/validate_token')
            setUser(res.data.data)
        } catch (err) {
            console.log(err)
            console.log(err.response)
        } finally {
            setLoaded(true)
        }
    }

    return loaded ? props.children : null
}

export default FetchUser
