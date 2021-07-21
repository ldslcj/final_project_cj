import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Header, Icon, Image } from 'semantic-ui-react'
import { AuthContext } from '../providers/AuthProvider'

const Home = () => {
    const [cats, setCats] = useState([])
    
    useEffect(() => {
        getCats()
    }, [])
    const getCats = async () => {
        try {
            let res = await axios.get('/api/cats')
            setCats(res.data)
        } catch (error) {
            console.log(error)
            console.log(error.response)
        }
    }

    const sample = () => {
        if (cats.length > 0) {
            const index = Math.floor(Math.random() * cats.length)
            return cats[index]
        }
    }

    const upVote = async (id) => {
        // added to db as liked_cat
        let res = await axios.put(`/api/cats/${id}`)
        // but don't want to see it again in UI
        removeCatFromUI(id)
    }

    const removeCatFromUI = (id) => {
        const filteredCats = cats.filter(c=> c.id !==id)
        setCats(filteredCats)
    }

    const renderCat = () => {
        const cat = sample()
        if (cat) {
            return (
                <div>
                    <br />
                    <Header as='h1'>Cat Tinder</Header>
                    <br />
                    <Card key={cat.id}>
                        <Image src={cat.avatar} />
                        <Card.Content>
                            <Card.Header>
                                {cat.name}
                            </Card.Header>
                            <Card.Description>
                                {cat.breed}
                            </Card.Description>
                            <Card.Meta>
                                {cat.registry}
                            </Card.Meta>
                        </Card.Content>
                        <Card.Content extra>
                            <Button onClick={()=>removeCatFromUI(cat.id)} color="red" icon basic>
                                <Icon name="thumbs down" />
                            </Button>
                            <Button onClick={()=>upVote(cat.id)} color="green" icon basic>
                                <Icon name="thumbs up" />
                            </Button>
                        </Card.Content>
                    </Card>
                    <Link to="/my_cats">
                        <Button color="blue">
                            My Cats
            </Button>
                    </Link>
                </div>
            )
        } else {
            return <p> No more cats </p>
        }
    }

    return (
        renderCat()
    )
}

export default Home