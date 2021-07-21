import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Divider, Image } from 'semantic-ui-react'
import Cat from './Cat'

const MyCats = () => {
    const [cats, setCats] = useState([])

    useEffect(() => {
        getMyCats()
    }, [])

    const getMyCats = async () => {
        try {
            let res = await axios.get('/api/my_cats')
            console.log(res)
            setCats(res.data)
        } catch (error) {
            alert('error')
            console.log(error)
            console.log(error.response)
        }
    }

    const renderCats = () => {
        if (cats.length == 0) {
            return <p>No liked cats</p>
        }
        return (
            <Card.Group itemsPerRow={4}>
                {cats.map(c => <Cat key={c.id} {...c} />)}
            </Card.Group>
        )

    }

    return (
        <div>
            <h1>My Cats</h1>
            {renderCats()}
        </div>
    )
}

export default MyCats