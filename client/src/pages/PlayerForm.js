import axios from 'axios'
import { Button } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
// import { Col, FloatingLabel, Row, Form } from 'react-bootstrap'
import { useHistory, useLocation, useParams } from 'react-router'
import { Container, Dropdown, Form, Input } from 'semantic-ui-react'
import styled from 'styled-components'

const PlayerForm = (props) => {
    const { getData } = props
    const location = useLocation()
    const params = useParams()
    const history = useHistory()
    const [name, setName] = useState(location.name)
    const [tiers, setTiers] = useState(location.tiers)
    const [position, setPosition] = useState(location.position)
    const [selectedPlayer, setSelectedPlayer] = useState(location.id ? location.id : null)
    const [selectedTier, setSelectedTier] = useState(location.id ? location.id : null)
    const [player, setPlayer] = useState([])
    const [win, setWin] = useState(0)
    const [lose, setLose] = useState(0)

    useEffect(() => {
        getPlayer()
    }, [])

    const getPlayer = async () => {
        let res1 = await axios.get('/api/tiers')
        if (params.id) {
            let res = await axios.get(`/api/player/${params.id}`)
            setPlayer(res.data)
        }
        let selectedTierData = res1.data.map(tier => {
            return { key: tier.id, value: tier.id, text: tier.name }
        })
        setTiers(selectedTierData)
    }

    const handleSubmit = async () => {
        if (params.id) {
            let res = await axios.put(`/api/player/${params.id}`, {
                id: selectedPlayer,
                tier_id: selectedTier,
                name: name,
                position: position
            })
        } else {
            let res = await axios.post('/api/player', {
                tier_id: selectedTier,
                id: selectedPlayer,
                name: name,
                position: position,
                win: win,
                lose: lose

            })

        }
        history.push('/')
        history.push('/add_player')

    }

    const nameChange = (event, { name, value }) => {
        setName(value)
    }
    const positionChange = (event, { position, value }) => {
        setPosition(value)
    }

    return (
        <Container>
            <h1 style={{ paddingTop: '20px', paddingBottom: '10px' }}>Players</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group widths='equal'>
                    <Form.Field>
                        <label >Player Name</label>
                        <div class="ui labeled input">
                            <div class="ui label" style={{backgroundColor:"#7974D5", color:"#fff"}}>Name</div>
                            <Input
                                defaultValue={location.name}
                                onChange={nameChange}
                                placeholder='Player'
                                fluid
                                value={name}
                            />
                        </div>
                    </Form.Field>
                    <Form.Field>
                        <label >Position</label>
                        <div class="ui labeled input">
                            <div class="ui label" style={{backgroundColor:"#7974D5", color:"#fff"}}>Position</div>
                            <Input
                                defaultValue={location.position}
                                onChange={positionChange}
                                placeholder='Position'
                                fluid
                                value={position}
                            />
                        </div>
                    </Form.Field>
                    <Form.Field>
                        <label>Tier</label>
                        <Dropdown
                            defaultValue={location.tier_id}
                            onChange={(e, { value }) => setSelectedTier(value)}
                            placeholder='Tier'
                            fluid
                            search
                            selection
                            options={tiers}
                        />
                    </Form.Field>
                </Form.Group>
                <ColorButton style={{ marginBottom: '30px' }} type='submit' className="ui violet button">Add Player</ColorButton>
            </Form>
        </Container>
    )
}




export default PlayerForm

const ColorButton = styled(Button)`
    color: #fff !important;
    background-color: #7974D5 !important;
`

const LabelColor = styled.div`
    color: #7974D5;
`