import axios from 'axios'
import React, { useState } from 'react'
import { useHistory, useLocation, useParams } from 'react-router'
import { Button, Container } from 'semantic-ui-react'
import useAxiosOnMount from '../customHooks/useAxiosOnMount'
import TeamContainer from './TeamContainer'
import styled from 'styled-components'

const Teams = () => {
    const {data, setData, getData} = useAxiosOnMount('/api/player')
    const location = useLocation()
    const params = useParams()
    const history = useHistory()
    const [selectedPlayer, setSelectedPlayer] = useState(location.id ? location.id : null)
    const [win, setWin] = useState(location.win)
    const [lose, setLose] = useState(location.lose)

    const winCount = async () => {
        if (params.id){
            let res = await axios.put(`/api/player/${params.id}`, {
                id: selectedPlayer,
                win: win,
                lose: lose
            })
        }
    }

    const redWinCount = () => {

    }

    return(
        <Container>
            <TeamContainer />
            <BlueTeamBtn class="ui blue button" onClick={winCount}>Blue team Won</BlueTeamBtn>
            <RedTeamBtn class="ui red button" onClick={winCount}>Red team Won</RedTeamBtn>
        </Container>
    )
}

export default Teams

const BlueTeamBtn = styled(Button)`
    background-color: #3659C9 !important;
    color: #fff !important;
`

const RedTeamBtn = styled(Button)`
    background-color: #C93636 !important;
    color: #fff !important;
    float: right;
`