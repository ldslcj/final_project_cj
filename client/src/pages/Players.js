import axios from 'axios'
import React, { useState } from 'react'
import { Container, FormText } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { Icon, Table, Button } from 'semantic-ui-react'
import useAxiosOnMount from '../customHooks/useAxiosOnMount'
import CreateTeams from './CreateTeams'
import PlayerForm from './PlayerForm'
import styled from 'styled-components'

const Players = () => {
    const history = useHistory()
    const [arr, setArr] = useState([1, 1, 1, 1, 1, 2, 2, 2, 2, 2])
    const { data, loading, error, setData, getData } = useAxiosOnMount('/api/player')

    const [playerData, setPlayerData] = useState([])


    const deletePlayers = async (id) => {
        try {
            await axios.delete(
                `/api/player/${id}`
            )
            filterPlayers(id)
        } catch (error) {
            console.log(error)
        }
    }
    const filterPlayers = (id) => {
        console.log('filter')
        setData(data.filter((d) => d.id !== id))
    }    
    
    const removePlayer = (id) => {
        console.log('filter')
        setData(data.filter((d) => d.id !== id))
    }

    // const playerWinRate = () => {
    //     let win = data.win
    //     let lose = data.lose
    //     const winRate = (win + lose)

    // }

    // const arr = [3, 7, 2, 6, 5, 4, 9];
    // const sum = arr.reduce((sum, val) => (sum += val));
    // const len = arr.length;
    // const arrSort = arr.sort();

    // const mid = Math.ceil(len / 2)


    // const median = () => {
    //     len % 2 == 0 ? (arrSort[mid] + arrSort[mid - 1]) / 2 : arrSort[mid - 1];
    // }


    const assignTeamId = async () => {
        // data.map(d=>{arr.push(d.tier_value)})
        // console.log('arr', arr)

        // const len = arr.length;
        // console.log('len', len)
        // const arrSort = arr.sort();
        // console.log('arrSort', arrSort)
        // const min = Math.min.apply(null, arr)
        // const max = Math.max.apply(null, arr)
        // console.log('min', min)
        // console.log('max', max)

        data.forEach(d => {

            const randomNumber = arr[Math.floor(Math.random() * arr.length)];
            var idx = arr.indexOf(randomNumber)
            // const count = Math.floor(Math.random() * 2) + 1
            if (idx >= 0 && arr.length != 0){
            d.team_id = randomNumber
            setArr(arr.splice(idx, 1))
            console.log('splice',arr)
            }
        })
        history.push('/gen_team')
    }





    // data.map(d=>{
    //     console.log(d.tier_value)
    //     if (d.tier_value == min){
    //         d.team_id = 1
    //         for( var i = 0; i < arr.length; i++){
    //             if(arr[i] == min){
    //         arr.splice(i, 1)}}

    //         console.log('arr after splice', arr)
    //     } else {
    //         d.team_id = 2
    //     }
    // })

    // const assignTeamId = () => {
    //     data.map(d => {
    //         if (d.team_id === null)
    //             d.team_id = 1
    //     })
    // }



    const createTeams = async () => {
        console.log('createTEams init')
        assignTeamId()
        let res = await axios.post(`/api/player/assign_team`, {
            data: data
        })

    }

    const getWinrate = () => {
        data.map(d=>{
            let win_rate = (d.win / (d.win + d.lose))
            let a = win_rate.toFixed(2)
            console.log('id, winrate', d.id, win_rate)
            postWinrate(d.id, a)
        })
    }

    const postWinrate = async (id, winrate) => {
        let res = await axios.put(`/api/player/${id}`, {
            id: id,
            win_rate: winrate
        })
    }




    const renderData = () => {
        {getWinrate()}
        return (
            <CustomDiv>
            <CustomTable singleLine class="ui collapsing table" style={{textAlign:"center"}}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Include</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Tier</Table.HeaderCell>
                        <Table.HeaderCell>Position</Table.HeaderCell>
                        <Table.HeaderCell>Win</Table.HeaderCell>
                        <Table.HeaderCell>Lose</Table.HeaderCell>
                        <Table.HeaderCell>Balanced Rate
                            <br/><p style={{fontSize:"0.8em"}}>(0.5 = well balanced)</p></Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {data.map(d => (
                        <Table.Row style={{ fontWeight: "bold" }}>
                            <Table.Cell>
                                <Link onClick={() => removePlayer(d.id)}>
                                    <ColorIcon name='x' ></ColorIcon>
                                </Link>
                            </Table.Cell>
                            <Table.Cell>{d.name}</Table.Cell>
                            <Table.Cell>{d.tier_name}</Table.Cell>
                            <Table.Cell>{d.position}</Table.Cell>
                            <Table.Cell>{d.win}</Table.Cell>
                            <Table.Cell>{d.lose}</Table.Cell>
                            <Table.Cell>{d.win_rate}</Table.Cell>
                            <Table.Cell>
                                <Link to={{
                                    pathname: `/add_player/edit/${d.id}`,
                                    id: d.id,
                                    name: d.name,
                                    tier_name: d.tier_name,
                                    tier_id: d.tier_id,
                                    position: d.position,
                                    tier: d.tier,
                                    win: d.win,
                                    lose: d.lose,
                                    win_rate: d.win_rate
                                }}>
                                    <ColorIcon name='pencil'></ColorIcon>

                                </Link>
                                <Link onClick={() => deletePlayers(d.id)}>
                                    <ColorIcon name='trash'></ColorIcon>
                                </Link>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                    <Table.Row>
                            <Table.Cell>                <Link to={{
                    pathname: '/gen_team'
                }}>
                    <ColorButton onClick={() => createTeams()}>Create Teams</ColorButton>
                </Link></Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell></Table.Cell>
                    </Table.Row>
                </Table.Body>
                {/* <Link to={{
                    pathname: '/gen_team'
                }}>
                    <ColorButton onClick={() => createTeams()}>Create Teams</ColorButton>
                </Link> */}

            </CustomTable>
            </CustomDiv>
        )
    }



    return (
        <Container>
            <div>
                <PlayerForm data={data} getData={getData} />
                
                {renderData()}
                
            </div>
        </Container>
    )
}

export default Players

const ColorIcon = styled(Icon)`
    color: #7974D5;
`

const ColorButton = styled(Button)`
    color: #fff !important;
    background-color: #7974D5 !important;
`

const CustomTable = styled(Table)`
    margin-bottom: 100px;
`

const CustomDiv = styled.div`
    padding-bottom: 500px;
`