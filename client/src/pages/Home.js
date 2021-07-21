import React, {useState, useEffect, useContext} from 'react'
import {AuthContext} from '../providers/AuthProvider'

const Home = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <h1>Home</h1>
            <p>{user ? user.email : "No User"}</p>
            <p>{localStorage.getItem('access-token')}</p>
        </div>
    )
} 

export default Home