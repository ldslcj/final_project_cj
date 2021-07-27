import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from './image/yin-yang.svg'
import { Button, Card, Header, Icon } from 'semantic-ui-react'
import styled from 'styled-components'
import { ButtonGroup, Col, Container, Row, Image } from 'react-bootstrap'

const Home = () => {

    return (
        // <div style={{
        //     backgroundImage: `url("https://nexus.leagueoflegends.com/wp-content/uploads/2019/09/WORLDS_Hero-Optimized_tet6rcp8js7lbk8ypf0d.jpg")`,
            // filter: "blur(3px)",
            // height: 'auto',
            // width: "100%",
            // backgroundPosition: "center",
            // backgroundRepeat: "no-repeat",
            // backgroundSize: "cover"
        // }}>
        //     <img src={logo} style={{ width: "150px" }} />
        //     <div style={{
        //         color: "#292929",
        //         fontWeight: "bold",
        //         position: "absolute",
        //         top: "50%",
        //         left: "50%",
        //         transform: "translate(-50%, -50%)",
        //         zIndex: "2",
        //         width: "50%",
        //         padding: "20px",
        //         textAlign: "center"
        //     }}>

        //         <Title style={{ fontSize: "10em" }}>Balanced</Title>
        //         <p style={{ fontSize: "150%" }}>Armsers LOL League Team Generator</p>
        //         <GetStartedButton
        //             className="huge ui violet button"
        //             href='/gen_team'
        //         >
        //             <p>Get Started</p>
        //         </GetStartedButton>
        //     </div>

        // </div>
        <>
        <LandingBanner fluid>
            <Row>
                <Col lg={2} md={4} sm={0} xs={0}></Col>
                <ContentCol lg={8} md={4} sm={12} xs={12}>
            <BannerLogo src={logo} width="200em"/></ContentCol>
                <Col lg={2} md={4} sm={0} xs={0}></Col>
            </Row>
            <Row>
                <Col lg={2} md={4} sm={0} xs={0}></Col>
                <ContentCol lg={8} md={4} sm={12} xs={12}><Hone>Balanced</Hone></ContentCol>
                <Col lg={2} md={4} sm={0} xs={0}></Col>
            </Row>
            <Row>
                <Col lg={2} md={4} sm={0} xs={0}></Col>
                <ContentCol lg={8} md={4} sm={12} xs={12}><SubTitle>Armsers LOL League Team Generator</SubTitle></ContentCol>
                <Col lg={2} md={4} sm={0} xs={0}></Col>
            </Row>          
            <Row>
                <Col lg={2} md={4} sm={0} xs={0}></Col>
                <ContentCol lg={8} md={4} sm={12} xs={12}><Link to='add_player'><GetStartedButton to='/add_player'>Get Started</GetStartedButton></Link></ContentCol>
                <Col lg={2} md={4} sm={0} xs={0}></Col>
            </Row>
        </LandingBanner>
        <FeatureBanner fluid>
            <Row>
                <Col lg={2} ><FeatureImg class="d-none d-xs-block" src="https://res.cloudinary.com/cjlee/image/upload/v1627379229/Screen_Shot_2021-07-27_at_3.46.31_AM_xlhptq.png" /></Col>
                <Col lg={4} md={{size: 12, order: "third"}} sm={{size: 12, order: "third"}} xs={{size: 12, order: "third"}}><Col><H1one>Random Team Generator</H1one></Col><Sub1Title>Balanced is designed for generating 2 teams for 5 vs 5 league of legends game with your friends. This app will help you to split a list of custom players into 2 teams randomly.</Sub1Title></Col>
                <Col lg={2} ><FeatureImg class="d-none d-xs-block" src="https://res.cloudinary.com/cjlee/image/upload/v1627379229/Screen_Shot_2021-07-27_at_3.46.41_AM_gxbdti.png" /></Col>
                <Col lg={4} md={{size: 12, order: "last"}} sm={{size: 12, order: "last"}} xs={{size: 12, order: "last"}}><Col><H1one>Track Your Game Results</H1one></Col><Sub1Title>Balanced is also prividing tracking system that you can record who won and lost. Furthermore, it shows you player's win rate as well.</Sub1Title></Col>
            </Row>
        </FeatureBanner>
        </>
    )
}
export default Home

const GetStartedButton = styled(Button)`
    border-radius: 25px !important;
    background-color: #7974D5 !important;
    color: #fff !important;
    padding: 15px 20px 15px 20px !important;
    border:none;
    font-size: 1.5em !important;
    font-weight: bold;
    margin-top: 20px !important;
`

const LandingBanner = styled(Container)`
    background-image: url("https://res.cloudinary.com/cjlee/image/upload/v1627376527/cj_background_dt2hqd.png");
    height: 1000px;
    width: 100%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: contain;    
`
const FeatureBanner = styled(Container)`
    height: 500px;
    width: 80%;
    margin-top: 50px;
`

const ContentCol = styled(Col)`
    text-align: center;
    margin-top: 10px;
`

const BannerLogo = styled.img`
    margin-top: 300px;
`

const Hone = styled.h1`
    font-size: 6em;
    color: #fff;
    font-weight: bold;
`
// #F7F0EB;
const SubTitle = styled.p`
    font-size: 1.8em;
    color: #fff;
    font-weight: 700;
`

const SubSub = styled.p`
    font-size: 1.4em;
    color: #fff;
    font-weight: 500;
`

const FeatureImg = styled.img`
    width: 100%;
`

const H1one = styled.h1`
    padding: 70px 0px 0px 0px;
    margin-right: 80px;
    font-size: 3rem;
    color: #7974D5;
    font-weight: bold;
`

const Sub1Title = styled.p`
    padding: 0px 50px 0px 0px;
    margin-top: 20px;
    margin-right: 20px;
    font-size: 1.4rem;
    color: #383838;
    font-weight: 600;
`