import axios from 'axios'
import React, { useState } from 'react'
import { useHistory, useLocation, useParams } from 'react-router'
import { Button, Container } from 'semantic-ui-react'
import useAxiosOnMount from '../customHooks/useAxiosOnMount'
import TeamContainer from './TeamContainer'
import styled from 'styled-components'

const Teams = () => {
    const {data, setData, getData} = useAxiosOnMount('/api/player/')


    const countBlueWin = () => {
        data.map(d=>{
            console.log('teamid',d.team_id)
            if(d.team_id == 1){
                d.win = d.win + 1
            } else {
                d.lose = d.lose + 1
            }


        })
    }

    const countRedWin = () => {
        data.map(d=>{
            console.log('teamid',d.team_id)
            if(d.team_id == 2){
                d.win = d.win + 1
            } else {
                d.lose = d.lose + 1
            }


        })
    }

    // const putLose = async () => {
    //     countWin()
    //     let res = await axios.put(`/api/player/assign_win`,{
    //         data: data
    //     })

    // }
    const putRedWin = async () => {
        countRedWin()
        let res = await axios.post(`/api/player/assign_win`,{
            data: data
        })

    }

    const putBlueWin = async () => {
        countBlueWin()
        let res = await axios.post(`/api/player/assign_win`,{
            data: data
        })

    }

    // const addBlueTeamPlayerWin = async (id, win, lose) => {
    //     let res = await axios.patch(`/api/team/1/player/${id}`, {
    //         win: win + 1
    //     })
    // }

    // const addBlueTeamPlayerLose = async (id, lose) => {
    //     let res1 = await axios.patch(`/api/team/1/player/${id}`, {
    //         lose: lose + 1
    //     })
    // }

    // const addRedTeamPlayerWin = async (id, win) => {
    //     let res = await axios.patch(`/api/team/2/player/${id}`, {
    //         win: win + 1
    //     })
    // }    
    // const addRedTeamPlayerLose = async (id, lose) => {
    //     let res = await axios.patch(`/api/team/2/player/${id}`, {
    //         lose: lose + 1
    //     })
    // }
    
    // const blueWinCount = () => {
    //     console.log('blue win count', data)
    //     data.map(d=>{
    //         addBlueTeamPlayerWin(d.id, d.win, d.lose)
    //     })
    //     redLoseCount()
    //     getWinrate()
    // }

    // const blueLoseCount = () => {
    //     console.log('blue win count', data)
    //     data.map(d=>{
    //         addBlueTeamPlayerLose(d.id, d.lose)
    //     })
    // }

    // const redLoseCount = () => {
    //     console.log('blue win count', data)
    //     data.map(d=>{
    //         addRedTeamPlayerLose(d.id, d.lose)
    //     })
    // }

    // const redWinCount = () => {
    //     console.log('blue win count', data)
    //     data.map(d=>{
    //         addRedTeamPlayerWin(d.id, d.win, d.lose)
    //     })
    //     blueLoseCount()
    //     getWinrate()
    // }

    const getWinrate = () => {
        data.map(d=>{
            let win_rate = d.win / (d.win + d.lose)
            console.log('id, winrate', d.id, win_rate)
            postWinrate(d.id, win_rate)
        })
    }

    const postWinrate = async (id, winrate) => {
        let res = await axios.put(`/api/player/${id}`, {
            id: id,
            win_rate: winrate
        })
    }

    return(

        <Container>
            {getWinrate()}
            <TeamContainer />
            <BlueTeamBtn class="ui blue button" onClick={putBlueWin} >Blue team Won</BlueTeamBtn>
            <RedTeamBtn class="ui red button" onClick={putRedWin} >Red team Won</RedTeamBtn>
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