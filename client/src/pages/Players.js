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

        data.map(d => {

            const randomNumber = arr[Math.floor(Math.random() * arr.length)];
            // const count = Math.floor(Math.random() * 2) + 1
            d.team_id = randomNumber
            var idx = arr.indexOf(randomNumber)
            if(idx >= 0){
                setArr(arr.splice(idx, 1))
                console.log(arr)
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


    const filterPlayers = (id) => {
        setData(data.filter((d) => d.id !== id))
    }

    const renderData = () => {
        return (
            <table singleLine class="ui collapsing table" style={{textAlign:"center"}}>
                <CustomTable style={{backgroundColor:"#7974D5", color:"#fff"}}>
                    <Table.Row>
                        <Table.HeaderCell>Include</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Tier</Table.HeaderCell>
                        <Table.HeaderCell>Position</Table.HeaderCell>
                        <Table.HeaderCell>Win</Table.HeaderCell>
                        <Table.HeaderCell>Lose</Table.HeaderCell>
                        <Table.HeaderCell>Win Rate</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </CustomTable>

                <Table.Body>
                    {data.map(d => (
                        <Table.Row style={{ fontWeight: "bold" }}>
                            <Table.Cell>
                                <Link Click={() => filterPlayers(d.id)}>
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
                </Table.Body>
                <Link to={{
                    pathname: '/gen_team'
                }}>
                    <ColorButton onClick={() => createTeams()}>Create Teams</ColorButton>
                </Link>

            </table>
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

const CustomTable = styled(Table.Header)`
    background-color: #7974D5 !important;
`