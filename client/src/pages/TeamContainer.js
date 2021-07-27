import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory, useLocation, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { Container, Table } from 'semantic-ui-react'
import styled from 'styled-components'
import useAxiosOnMount from '../customHooks/useAxiosOnMount'

const TeamContainer = () => {
    const location = useLocation()
    const team1 = []
    const team2 = []


    // const { data, loading, error, getData, setData } = useAxiosOnMount('/api/player')
    // console.log('useaxios', data)
    const [data, setData] = useState([])

    useEffect(()=>{
            getPlayers();
    },[]);
  

   
 

    const getPlayers = async () => {
        let res = await axios.get('/api/player')
        console.log("new axios call", res.data)
        setData(res.data);
        console.log("data should be set", data)
        
    }

    const whichTeam = () => {
        data.map(p => {
            if (p.team_id === 1){
                team1.push(p)
            } else {
                team2.push(p)
            }
        })
        console.log("team1 array", team1)
        

    }


    const renderData = () => {
        whichTeam();
        return (
            <div class="ui segment">
                <div class="ui two column very relaxed grid">
                    <div class="column" >
                        <Table>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell 
                                        colspan="3" 
                                        style={{ 
                                            backgroundColor: "#3659c9", 
                                            color: "white" 
                                            }}>
                                            Team 1
                                    </Table.HeaderCell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.HeaderCell>Player</Table.HeaderCell>
                                    <Table.HeaderCell>Tier</Table.HeaderCell>
                                    <Table.HeaderCell>Position</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                {team1.map(d => (
                                    <Table.Row>
                                        <Table.Cell>{d.name}</Table.Cell>
                                        <Table.Cell>{d.tier_name}</Table.Cell>
                                        <Table.Cell>{d.position}</Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </div>
                    <div class="column">
                        <Table>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell 
                                        colspan="3" 
                                        style={{ 
                                            backgroundColor: "#c93636", 
                                            color: "white" 
                                            }}>
                                                Team 2
                                    </Table.HeaderCell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.HeaderCell>Player</Table.HeaderCell>
                                    <Table.HeaderCell>Tier</Table.HeaderCell>
                                    <Table.HeaderCell>Position</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                {team2.map(d => (
                                    <Table.Row>
                                        <Table.Cell>{d.name}</Table.Cell>
                                        <Table.Cell>{d.tier_name}</Table.Cell>
                                        <Table.Cell>{d.position}</Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            {renderData()} 
        </>
    )
}

export default TeamContainer