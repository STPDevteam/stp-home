import React, {useEffect, useState, useRef} from 'react'
import { Anchor, Layout, Row, Col, Button, Carousel, Menu, Dropdown } from 'antd';
import { CSSTransition } from "react-transition-group";
import { MenuOutlined, DownOutlined } from '@ant-design/icons';
import styled from 'styled-components'
import Logo from '../../assets/images/logo.png'
import Image1 from '../../assets/images/home/image1.jpg'
import Image1H5 from '../../assets/images/home/image1-h5.png'
import Image2 from '../../assets/images/home/image2.png'
import Image3 from '../../assets/images/home/image3.jpg'
import Image3H5 from '../../assets/images/home/image3-h5.png'
import Image4 from '../../assets/images/home/image4.png'
import Image6 from '../../assets/images/home/image6.jpg'
import Image6H5 from '../../assets/images/home/image6-h5.png'
import Image8 from '../../assets/images/home/image8.jpg'
import Image8H5 from '../../assets/images/home/image8-h5.jpg'
import Image10 from '../../assets/images/home/image10.png'
import Image10H5 from '../../assets/images/home/image10-h5.png'
import SmartChain1 from '../../assets/images/home/smartchain1.png'
import SmartChain2 from '../../assets/images/home/smartchain2.png'
import SmartChain3 from '../../assets/images/home/smartchain3.png'
import SmartChain4 from '../../assets/images/home/smartchain4.png'
import SmartChain5 from '../../assets/images/home/smartchain5.png'
import System1 from '../../assets/images/home/system1.png'
import System2 from '../../assets/images/home/system2.png'
import System3 from '../../assets/images/home/system3.png'
import System4 from '../../assets/images/home/system4.png'
import System5 from '../../assets/images/home/system5.png'
import Tools1 from '../../assets/images/home/tools1.png'
import Tools2 from '../../assets/images/home/tools2.png'
import Tools3 from '../../assets/images/home/tools3.png'
import Tools4 from '../../assets/images/home/tools4.png'
import Structure1 from '../../assets/images/home/structure1.jpg'
import Structure2 from '../../assets/images/home/structure2.jpg'
import Structure3 from '../../assets/images/home/structure3.jpg'
import Structure4 from '../../assets/images/home/structure4.jpg'
import Structure5 from '../../assets/images/home/structure5.jpg'
import Projects1 from '../../assets/images/home/projects1.jpg'
import Projects2 from '../../assets/images/home/projects2.jpg'
import Projects3 from '../../assets/images/home/projects3.jpg'
import Projects4 from '../../assets/images/home/projects4.jpg'
import Platform1 from '../../assets/images/home/platform1.png'
import Platform2 from '../../assets/images/home/platform2.png'
import Platform3 from '../../assets/images/home/platform3.png'
import Platform4 from '../../assets/images/home/platform4.png'
import Platform5 from '../../assets/images/home/platform5.png'
import Platform6 from '../../assets/images/home/platform6.png'
import Platform7 from '../../assets/images/home/platform7.png'
import Platform8 from '../../assets/images/home/platform8.png'
import Platform9 from '../../assets/images/home/platform9.png'
import Platform10 from '../../assets/images/home/platform10.png'
import WechatQR from '../../assets/images/home/QR.jpeg'
import STPT from '../../assets/images/home/STPT.png'
import {ReactComponent as TwitterLogo} from '../../assets/images/home/svg/Twitter.svg'
import {ReactComponent as MediumLogo} from '../../assets/images/home/svg/Medium.svg'
import {ReactComponent as TelegramLogo} from '../../assets/images/home/svg/Telegram.svg'
import {ReactComponent as Email} from '../../assets/images/home/svg/Email.svg'
import {ReactComponent as Wechat} from '../../assets/images/home/svg/WeChat.svg'
import {ReactComponent as Arrow} from '../../assets/images/home/svg/arrow.svg'
import './index.less';

const { Header, Sider, Content } = Layout;
const { Link } = Anchor;
const HeaderContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 50px;
    @media (max-width: 767px) {
        padding: 0 20px;
    }
`

const FirstContent = styled.div`
    background: url(${Image1}) no-repeat;
    background-size: cover;
    background-position: center bottom;
    margin-top: 100px;
    height: calc(100vh - 100px);
    @media (max-width: 767px) {
        margin-top: 64px;
        background: url(${Image1H5}) no-repeat;
        background-position: center bottom;
        background-size: cover;
    }
    &>div{
        position: relative;
        height: 100%;
        min-height: 400px;
        max-width: 1200px;
        padding: 0 50px;
        margin: 0 auto;
        padding: 0 50px;
        overflow: hidden;
        @media (max-width: 767px) {
            padding: 0 30px 300px;
        }
        &>div{
            &:first-of-type{
                position: relative;
                top: calc(50% - 100px);
                transform: translateY(-50%);
                @media (max-width: 767px) {
                    top: 145px;
                    transform: translateY(0);
                }
            }
        }
    }
    p{
        color: #25AAE1;
        width: 100%;
        font-size: 22px;
        @media (max-width: 767px) {
            font-size: 21px;
            line-height: 30px;
        }
        margin-bottom: 80px;
    }
    h1{
        margin-top: 180px;
        margin-bottom: 32px;
        margin-right: 260px;
        font-size: 72px;
        line-height: 80px;
        font-weight: 600;
        @media (max-width: 767px) {
            font-size: 40px;
            line-height: 48px;
            margin-top: -40px;
            margin-right: 0px;
        }
    }
    h3{
        color: #727272;
        font-size: 16px;
        display:inline-block;
        margin: 0;
    }
    .stpt{
        width: 190px;
        margin-left: 10px;
        @media (max-width: 767px) {
            width: 100px;
        }
    }
    .whereBuy{
        display: flex;
        justify-content: space-around;
        position: absolute;
        width: calc(100% - 120px);
        bottom: 40px;
        left: 50px;
        max-width: 1200px;
        magrin: 0 auto;
        h3{
            width: 240px;
        }
        @media (max-width: 767px) {
           display: none;
        }
    }
    .ant-btn{
        box-shadow: 5px 5px 20px #A3A3A3;
        &:hover{
            box-shadow: 5px 5px 20px #676767;
        }
    }
`

const SecondContent = styled.div`
    background: url(${Image2}) no-repeat, #fff;
    background-size: 50%;
    background-position: center right;
    &>div{
        margin: 0 auto;
        max-width: 1200px;
        padding: 180px 560px 150px 50px;
        @media (max-width: 1100px) {
            padding: 180px 300px 150px 50px;
        }
        @media (max-width: 1020px) {
            padding: 180px 200px 150px 50px;
        }
        @media (max-width: 920px) {
            padding: 180px 0 150px 50px;
        }
        @media (max-width: 767px) {
            padding: 100px 30px;
        }
    }
    .whereBuy{
        display: none;
        width: 100%;
        padding: 30px;
        background: radial-gradient(75.22% 75.22% at 20.49% 12.79%, #FFFFFF 0%, rgba(228, 231, 233, 0.502295) 100%);
        @media (max-width: 767px) {
            display: block;
         }
        .stpt{
            width: 15px;
            margin-left: 10px;
        }
        h3{
            margin-top: 0;
            color: #727272;
            text-align: center;
        }
    }
    p{
        color: #727272;
        font-size: 16px;
        line-height: 24px;
        @media (max-width: 767px) {
            font-size: 14px;
            padding-right: 60px;
            line-height: 20px;
        }
    }
    h2{
        color: #111029;
        font-size: 56px;
        line-height: 70px;
        font-weight: 800;
        @media (max-width: 767px) {
            font-size: 32px;
            line-height: 40px;
        }
    }
    hr{
        border-top: 1px solid #ECECEC;
        border-bottom: none;
        margin: 64px 0;
    }
`

const ThirdContent = styled.div`
    background: url(${Image3}) no-repeat;
    background-size: cover;
    @media (max-width: 767px) {
        padding-bottom: 360px;
        background: url(${Image3H5}) no-repeat,#1b1b87;
        background-position: 50% 120%, center;
        background-size: 100%, 100%;
    }
    &>div{
        margin: 0 auto;
        max-width: 1200px;
        padding: 160px 50px;
        @media (max-width: 1200px) {
            padding: 100px 50px;
        }
        @media (max-width: 767px) {
            padding: 100px 30px 30px;
        }
    }
    p{
        font-size: 18px;
        color: #fff;
        margin-bottom: 50px;
        @media (max-width: 767px) {
            font-size: 16px;
        }
    }
    h2{
        font-size: 56px;
        color:#fff;
        margin-bottom: 0;
        @media (max-width: 767px) {
            font-size: 32px;
        }
    }
    h3{
        font-size: 16px;
        line-height: 24px;
        font-weight: 600;
        color: #fff; 
        margin-top: 0;
        margin-bottom: 0px;
        @media (max-width: 767px) {
            font-size: 16px;
            line-height: 1.2;
            margin-bottom: 5px;
        }
    }
    ul{
        list-style: none;
        font-size: 16px;
        line-height: 40px;
        color: #79869F;
        padding: 0;
        li{
            margin: 20px 0;
            background: #2436D9;
            padding: 16px 20px;
            border-radius: 15px; 
            display: flex;
            flex-direction: row;
            align-items: center;
            height: 80px;
            img{
                width: 48px;
                margin-right: 15px;
            }
            box-shadow: 11px 10px 20px rgba(0, 0, 0, 0.6);
            &:first-of-type{
                width: 600px;
            }
            &:nth-of-type(2){
                width: 680px
            }
            &:nth-of-type(3){
                width: 760px
            }
            &:nth-of-type(4){
                width: 840px
            }
            &:nth-of-type(5){
                width: 900px
            }
            @media (max-width: 767px) {
                width: 100%!important;
                height: 137px;
            }
        }
        p{
            font-size: 12px;
            margin-bottom: 0;
            @media (max-width: 767px) {
                font-size: 10px;
                line-height: 15px;
            }
        }
    }
`

const FourthContent = styled.div`
    &>div{
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 50px 100px;
        @media (max-width: 767px) {
            padding: 46px 0 100px;
        }
    }
    background: rgba(0, 0, 0, 0.05);
    background: url(${Image4}) no-repeat, radial-gradient(75.22% 75.22% at 20.49% 12.79%, #FFFFFF 0%, rgba(228, 231, 233, 0.502295) 100%);;
    background-size: 100%;
       
    h1{
        font-size: 32px;
        color: #25AAE1;
        text-align: center;
        padding-top: 195px;
        @media (max-width: 767px) {
            font-size: 16px;
            padding-top: 80px;
        }
    }
    h2{
        font-size: 48px;
        text-align: center;
        color: #111029;
        padding: 0px 30px 30px;
        @media (max-width: 767px) {
            font-size: 24px;
        }
    }
    h3{
        font-weight: 600;
    }
`
const FifthContent = styled.div`
    &>div{
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 50px;
        @media (max-width: 767px) {
            padding: 0 30px;
        }
    }
    padding: 10px 0;
    @media (max-width: 767px) {
        padding: 65px 0;
    }
    h2{
        font-size: 48px;
        text-align: center;
        color: #111029; 
        padding-top: 150px;
        @media (max-width: 767px) {
            font-size: 24px;
            padding-top: 60px;
        }
    }
    h3{
        font-size: 20px;
        color: #111029;
        margin-top: 0;
        font-weight: 600;
        @media (max-width: 767px) {
            font-size: 16px;
        } 
    }
    p{
        font-size: 16px;
        text-align: center;
        color: #727272;
        padding: 0px 50px;
        @media (max-width: 767px) {
            font-size: 12px;
            padding: 0;
        }
    }
`
const SixthContent = styled.div`
    &>div{
        max-width: 1200px;
        margin: 0 auto;
    }
    background: url(${Image6}) no-repeat;
    background-size: 80%;
    background-position: center right;
    @media (max-width: 767px) {
        padding-bottom: 460px;
        background: url(${Image6H5}) no-repeat;
        background-position: 100% 150px;
        background-size: 80%;
    }
    &>div{
        margin: 0 auto;
        max-width: 1200px;
        padding: 120px 50px 50px 50px;
        @media (max-width: 1200px) {
            padding: 100px 50px;
        }
        @media (max-width: 767px) {
            padding: 20px;
        }
    }
    h2{
        font-size: 64px;
        text-align: center;
        color: #111029; 
        @media (max-width: 767px) {
            font-size: 24px;
        }
    }
    p{
        padding: 20px 100px;
        text-align: center;
        @media (max-width: 767px) {
            padding: 20px 30px;
        }
    }
    .ant-card-body{
        margin: 0 auto;
        text-align: center;
    }
`

const SeventhContent = styled.div`
    &>div{
        max-width: 1200px;
        margin: 0 auto;
        padding: 150px 50px;
        @media (max-width: 767px) {
            padding: 20px 30px;
        }
    }
    h2{
        font-size: 64px;
        text-align: center;
        color: #111029; 
        @media (max-width: 767px) {
            font-size: 24px;
        }
    }
    p{
        font-size: 16px;
        text-align: center;
        color: #727272;
        padding: 0px 50px;
        @media (max-width: 767px) {
            padding: 0;
            font-size: 12px;
        }
    }
    .ant-btn{
        margin: 0 auto;
        display: block;
        box-shadow: 5px 5px 20px #A3A3A3;
        &:hover{
            box-shadow: 5px 5px 20px #676767;
        }
    }
`
const EighthContent = styled.div`
    background: url(${Image8}) no-repeat;
    background-position-y: 150px;
    background-size: 100%;
    @media (max-width: 767px) {
        background: url(${Image8H5}) no-repeat;
        background-position: 10px 200px;
        background-size: 13%;
    }
    &>div{
        max-width: 1200px;
        margin: 50px auto 0;
        padding: 0 50px;
        @media (max-width: 767px) {
            padding: 100px 30px;
            margin: 0 auto;
        }
    }
    h2{
        font-size: 56px;
        text-align: center;
        color: #111029; 
        margin-bottom: 160px;
        padding-top: 32px;
        @media (max-width: 767px) {
            margin-top: 0;
            font-size: 32px;
            margin-bottom: 64px;
        }
    }
    h3{
        font-size: 18px;
        color: #151517;
        margin-top: 0;
        font-weight: 600;
        @media (max-width: 767px) {
            padding-left: 60px;
        }
    }
    ul{
        padding-left: 20px;
        @media (max-width: 767px) {
            padding-left: 80px;
        }
    }
    li{
        font-size: 12px;
        font-weight: 400;
        color: #727272;
        @media (max-width: 767px) {
            font-size: 10px;
            line-height: 15px;
        }
    }
`
const NinthContent = styled.div`
    background: url(${Image10}) no-repeat;
    background-position: center top; 
    background-size: cover;
    background-position-x: 100%;
    padding: 100px 0 100px; 
    margin-top: 150px;
    @media (max-width: 767px) {
        background: url(${Image10H5}) no-repeat;
        background-size: 100%;
        background-position: center top; 
        margin-top: 0px;
    }
    &>div{
        max-width: 1200px;
        margin: 0 auto;
        padding: 50px;
        @media (max-width: 767px) {
            padding: 20px;
        }
    }
    h2{
        font-size: 56px;
        text-align: center;
        color: #111029; 
        @media (max-width: 767px) {
            font-size: 32px;
            text-align: left;
        }
    }
    p{
        font-size: 16px;
        text-align: center;
        color: #727272;
        margin-bottom: 40px;
        @media (max-width: 767px) {
            font-size: 14px;
            text-align: left;
        }
    }
    .ant-btn{
        margin: 0 auto;
        display: block;
        box-shadow: 5px 5px 20px #A3A3A3;
        @media (max-width: 767px) {
            margin-left: 0;
        }
        &:hover{
            box-shadow: 5px 5px 20px #676767;
        }
    }
    ul{
        margin: 50px 0;
        padding-left: 0;
        li{
            color: #9f9fa9;
            display: inline-block;
            width: 20%;
            text-align: center;
            line-height: 20px;
            a{
                color: #9f9fa9; 
                display: flex;
                justify-content: center;
                align-items: center;
            }
            span{
                margin-left: 10px;
                @media (max-width: 767px) {
                    display: none;
                }
            }
        }
    }
`

const Footer = styled.div`
    background: #00113B;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    &>div{
        max-width: 1200px;
        margin: 0 auto;
        height: 48px;
    }
    ul{
        padding-left: 0;
        margin: 0;
        height: 48px;
        dispaly: flex;
        li{
            color: #9f9fa9;
            display: inline-block;
            width: 20%;
            text-align: center;
            line-height: 48px;
            height: 48px;
            a{
                color: #9f9fa9; 
                display: inline-block;
            }
            span{
                margin-left: 10px;
                @media (max-width: 767px) {
                    display: none;
                }
            }
        }
    }
`


const Home: React.FC = () =>  {

    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const carouselRef = useRef<any>()
    // useEffect(() => {
    //     window.addEventListener('scroll', scrollHeader, false);
    //     return () => {
    //         window.removeEventListener('scroll', scrollHeader, false);
    //     }
    // }, [])

    const scrollTop = () => {
        if (!document.querySelector('.ant-layout-header')) {
            return;
        }

        var scrollTop = document.documentElement.scrollTop;
        if (scrollTop >= 60) {
            //@ts-ignore
            document.querySelector('.ant-layout-header').style.background = '#fff';
        } else {
            //@ts-ignore
            document.querySelector('.ant-layout-header').style.background = 'transparent';
        }
    }
  
    useEffect(() => {
      const mediaQuery = window.matchMedia("(max-width: 767px)");
      mediaQuery.addListener(handleMediaQueryChange);
      handleMediaQueryChange(mediaQuery);
  
      return () => {
        mediaQuery.removeListener(handleMediaQueryChange);
      };
    }, []);
  
    const handleMediaQueryChange = (mediaQuery: any) => {
      if (mediaQuery.matches) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };
  
    const toggleNav = () => {
      setNavVisibility(!isNavVisible);
    };

    const stpMenu = (
        <Menu>
            <Menu.Item>
                <a href="#About">About</a>
            </Menu.Item>
            <Menu.Item>
            <a href="#Features">
                Features
            </a>
            </Menu.Item>
      </Menu>
    )

    const productsMenu = (
        <Menu>
            <Menu.Item>
                <a href="#STPChain">
                    STP Chain
                </a>
            </Menu.Item>
            <Menu.Item>
                <a href="#Tools">
                    Tools
                </a>
            </Menu.Item>
        </Menu>
    )
    const ecosystemMenu = (
        <Menu>
            <Menu.Item>
                <a href="#Ecosystem">
                    Ecosystem Projects
                </a>
            </Menu.Item>
            <Menu.Item>
                <a href="#Strategic">
                    Strategic Partners
                </a>
            </Menu.Item>
        </Menu>
    )
    const resourcesMenu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" href="/STP-2.0-Updated-WP.pdf">
                    Whitepaper
                </a>
            </Menu.Item>
            <Menu.Item>
                <a href="#Roadmap">
                Roadmap
                </a>
            </Menu.Item>
            <Menu.Item>
                <a href="mailto:contact@stp.network">
                    Build with STP
                </a>
            </Menu.Item>
        </Menu>
    )
    const learnMenu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://standardtokenizationprotocol.medium.com/">
                    STP News
                </a>
            </Menu.Item>
        </Menu>
    )


    return (
        <Layout className="homePage">
            <Header>
                <HeaderContent className="header">
                    <img className="Logo" src={Logo} alt="logo" />
                    <CSSTransition
                        in={!isSmallScreen || isNavVisible}
                        timeout={350}
                        classNames="NavAnimation"
                        unmountOnExit
                    >
                        <nav className="Nav">
                            <a className="active" href="/">Home</a>
                            <Dropdown overlay={stpMenu} trigger={['click']}>
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                Verse <Arrow/>
                                </a>
                            </Dropdown>
                            <a className="ant-dropdown-link" href="#Products">
                            Products 
                            </a>
                            <a className="ant-dropdown-link" href="#Ecosystem">
                            Partnerships
                            </a>
                            <Dropdown overlay={resourcesMenu} trigger={['click', 'hover']}>
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                Resources <Arrow />
                                </a>
                            </Dropdown>
                            <Dropdown overlay={learnMenu} trigger={['click', 'hover']}>
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                Learn <Arrow />
                                </a>
                            </Dropdown>
                            <Button type="primary"><a target="_blank" href="https://app.stp.network">APP</a></Button>
                        </nav>
                    </CSSTransition>
                    <button onClick={toggleNav} className="Burger">
                        <MenuOutlined />
                    </button>
                </HeaderContent>
            </Header>
            <Content>
                <FirstContent>
                    <div>
                        <Row>
                            <Col md={18} sm={24}>
                                <h1>Verse Network by <img className="stpt" src={Logo}/></h1>
                                <p>
                                A layer2 on Ethereum optimized for DAOs
                                </p>
                                <Button type="primary"><a href="https://app.stp.network" target="_blank">Launch APPs</a></Button>
                            </Col>
                        </Row>
                        {/* <div className="whereBuy">
                            <h3>Where you can buy STPT?<img className="stpt" src={STPT}/></h3>
                            <div className="platforms">
                                <div>
                                    <img src={Platform1} alt="" />
                                </div>
                                <div>
                                    <img src={Platform2} alt="" />
                                </div>
                                <div>
                                    <img src={Platform3} alt="" />
                                </div>
                                <div>
                                    <img src={Platform4} alt="" />
                                </div>
                                <div>
                                    <img src={Platform5} alt="" />
                                </div>
                                <div>
                                    <img src={Platform6} alt="" />
                                </div>
                                <div>
                                    <img src={Platform7} alt="" />
                                </div>
                                <div>
                                    <img src={Platform8} alt="" />
                                </div>
                                <div>
                                    <img src={Platform9} alt="" />
                                </div>
                                <div>
                                    <img src={Platform10} alt="" />
                                </div>
                            </div>
                        </div> */}
                    </div>
                </FirstContent>
                <SecondContent>
                    {/* <div className="whereBuy">
                        <h3>Where you can buy STPT?<img className="stpt" src={STPT}/></h3>
                        <div className="platforms">
                            <div>
                                <img src={Platform1} alt="" />
                            </div>
                            <div>
                                <img src={Platform2} alt="" />
                            </div>
                            <div>
                                <img src={Platform3} alt="" />
                            </div>
                            <div>
                                <img src={Platform4} alt="" />
                            </div>
                            <div>
                                <img src={Platform5} alt="" />
                            </div>
                            <div>
                                <img src={Platform6} alt="" />
                            </div>
                            <div>
                                <img src={Platform7} alt="" />
                            </div>
                            <div>
                                <img src={Platform8} alt="" />
                            </div>
                            <div>
                                <img src={Platform9} alt="" />
                            </div>
                            <div>
                                <img src={Platform10} alt="" />
                            </div>
                        </div>
                    </div> */}
                    <div id="About">
                        <p>Our vision is to shift the paradigm of how people interact by creating an optimized Layer2 blockchain designed for DAOs. 
                            <br/>
                            <br/>
                            We exist to evangelize the DAO concept for optimizing the efficiency and unlocking value of networks, communities and organizations.
                        </p>
                        <hr />
                        <h2 id="Finance">Redefining Value<br/> One DAO at a Time</h2>
                    </div>
                </SecondContent> 
                <ThirdContent>
                    <div id="Features">
                        <h2 id="Experience" className="defiTitle">Verse</h2>
                        <p>A Layer2 blockchain optimized for all DAOs</p>
                        <ul>
                            <li>
                                <div><img src={SmartChain1} alt="" /></div>
                                <div>
                                    <h3>Low cost</h3>
                                    <p>Less governance cost compared to DAOs on ETH enabling our ecosystem to track more valuable data</p>
                                </div>
                            </li>
                            <li>
                                <div><img src={SmartChain2} alt="" /></div>
                                <div>
                                    <h3>Developer Friendly</h3>
                                    <p>Build various Dapps and customized DAOs using developer tool (support EVM)</p>
                                </div>
                            </li>
                            <li>
                                <div><img src={SmartChain3} alt="" /></div>
                                <div>
                                    <h3>Data Traceability and Transparancy</h3>
                                    <p>Record on-chain governance activities and bring off-chain social participation data on-chain from native forums and popular social mediums</p>
                                </div>
                            </li>
                            <li>
                                <div><img src={SmartChain4} alt="" /></div>
                                <div>
                                    <h3>Cross DAO Interoperability</h3>
                                    <p>Build bridges to different DAOs to enable seamless partnership that allows for conjoined votes and community sharing</p>
                                </div>
                            </li>
                            <li>
                                <div><img src={SmartChain5} alt="" /></div>
                                <div>
                                    <h3>Off-chain Verifiable Proofs</h3>
                                    <p>Allows for weighted off-chain voting census trustlessly determined by on-chain token proofs</p>
                                </div>  
                            </li>
                        </ul>
                    </div>
                </ThirdContent>
                <FourthContent id="Products">
                    <div>
                        <h1>Verse</h1>
                        <h2>Powering The DAO Ecosystem</h2>
                        <div className="web system">
                            <div className="item">
                                <div className="green"><img src={System1} alt="" /></div>
                                <h3>Governance</h3>
                                <p>STPT Holders are allowed to vote on key proposals in the ecosystem.</p>
                            </div>
                            <div className="item">
                                <div className="blue"><img src={System2} alt="" /></div>
                                <h3>Transaction Fees</h3>
                                <p>Serves as gas fees for transaction and smart contract execution.</p>
                            </div>
                        </div>
                        <div className="web system">
                            <div className="item">
                                <div className="blue"><img src={System3} alt="" /></div>
                                <h3>Node Rewards</h3>
                                <p>Incentivizes network participants and contributors.</p>
                            </div>
                            <div className="item">
                                <div className="green"><img src={System4} alt="" /></div>
                                <h3>Tuning Key Parameters</h3>
                                <p className="parameters">Tuning collateralization ratio functions, price curve, and parameters such as different weightings on asset properties.</p>
                            </div>
                            <div className="item">
                                <div className="blue"><img src={System5} alt="" /></div>
                                <h3>USTP</h3>
                                <p>A native stablecoin on STP Verse based on STPT staking</p>
                            </div>
                        </div>
                        <div className="h5 system">
                            <Carousel autoplay ref={carouselRef as any}>
                                <div className="item">
                                    <div className="green"><img src={System1} alt="" /></div>
                                    <h3>Governance</h3>
                                    <p>STPT Holders are allowed to vote on key proposals in the ecosystem.</p>
                                </div>
                                <div className="item">
                                    <div className="blue"><img src={System2} alt="" /></div>
                                    <h3>Transaction Fees</h3>
                                    <p>Serves as gas fees for transaction and smart contract execution.</p>
                                </div>
                                <div className="item">
                                    <div className="blue"><img src={System3} alt="" /></div>
                                    <h3>Node Rewards</h3>
                                    <p>Incentivizes network participants and contributors.</p>
                                </div>
                                <div className="item">
                                    <div className="green"><img src={System4} alt="" /></div>
                                    <h3>Tuning Key Parameters</h3>
                                    <p>Tuning collateralization ratio functions, price curve, and parameters such as different weightings on asset properties.</p>
                                </div>
                                <div className="item">
                                    <div className="blue"><img src={System5} alt="" /></div>
                                    <h3>USTP</h3>
                                    <p>A native stablecoin on STP Smart Chain based on STPT staking</p>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </FourthContent>
                <FifthContent id="Tools">
                    <div>
                        <h2>Tools and Infrastructure</h2>
                        <p>A full suite of native tools and infrastructure built on STP Verse facilitates efficient decentralized decision-making for users, communities and organizations.</p>
                        <div className="tools">
                            <div className="item">
                                <div>
                                    <img src={Tools1} alt="" />
                                </div>
                                <div>
                                    <h3>Clique</h3>
                                    <p>An aggregated dashboard to  browse, manage and socially participate in all DAOs, asset holdings, proposals, and ongoing events on STP Verse</p>
                                </div>
                            </div>
                            <div className="item">
                                <div>
                                    <img src={Tools2} alt="" />
                                </div>
                                <div>
                                    <h3>Framework</h3>
                                    <p>A full suite of native tools and infrastructure built on STP Verse facilitates efficient decentralized decision-making for users, communities and organizations.</p>
                                </div>
                            </div>
                            <div className="item">
                                <div>
                                    <img src={Tools3} alt="" />
                                </div>
                                <div>
                                    <h3>DAO Scan Tool</h3>
                                    <p>Track all DAO transaction history and onchain data on STP Verse</p>
                                </div>
                            </div>
                            <div className="item">
                                <div>
                                    <img src={Tools4} alt="" />
                                </div>
                                <div>
                                    <h3>DAO MarketCap Tool</h3>
                                    <p>A DAO ranking and data analysis platform for the STP ecosystem</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </FifthContent>
                <SixthContent>
                    <div className="tools2">
                        <ul>
                            <li>
                                <div>
                                    <img src={Structure1} alt="" />
                                    Decentralized Exchange
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={Structure2} alt="" />
                                    Lending Platform
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={Structure3} alt="" />
                                    NFT Marketplace
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={Structure4} alt="" />
                                    Stablecoin system
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={Structure5} alt="" />
                                    Prediction market
                                </div>
                            </li>
                        </ul>
                    </div>
                </SixthContent>
                <SeventhContent id="Ecosystem">
                    <div>
                        <h2>Ecosystem Projects</h2>
                        <p>
                        STP DAO aspires to be an all-encompassing platform for any organization to decentralize decision-making effectively and developers to launch decentralized applications. Organizations leverage our powerful solutions and templates to best tailor its governance structure with their specific industry use-cases and decision styles.
                        </p>
                        <div className="projects">
                            <div><img src={Projects1} alt="" /></div>
                            <div><img src={Projects2} alt="" /></div>
                            <div><img src={Projects3} alt="" /></div>
                            <div><img src={Projects4} alt="" /></div>
                        </div>
                        <p>
                        More Coming Soon
                        </p>
                        <Button type="primary"><a href="mailto:contact@stp.network">Build with STP</a></Button>
                    </div>
                </SeventhContent>
                <EighthContent>
                    <div id="Roadmap">
                        <h2>Roadmap</h2>
                        <div className="roadmap">
                            <div>
                                <h3>2021 Q4</h3>
                                <ul>
                                    <li>Launch STP Verse Testnet</li>
                                    <li>DAO Builder V1.0 - with basic DAO templates</li>
                                    <li>DAO Aggregator V1.0 - All in one DAO hub for joint DAOs and proposals and DAO token management</li>
                                    <li>DAO Scan - Track transaction history and real-time chain info of STP Verse</li>
                                    <li>Announce new STPT Token economy - a dual token ecosystem with STPT and USTP powering STP DAO Verse</li>
                                </ul>
                            </div>
                            <div>
                                <h3>2022 Q1</h3>
                                <ul>
                                    <li>DAO Social Identity and Scoring Mechanism with Credibility Score and Reputation score</li>
                                    <li>Social media integration - connecting with popular off-chain social media to optimize the Social Identity system</li>
                                    <li>Cross-chain bridge - enhance interoperability between STP Verse and mainstream public chains</li>
                                    <li>Smart DAO Builder V2.0 - More DAO solutions for off-chain organizations</li>
                                </ul>
                            </div>
                            <div>
                                <h3>2022 Q2</h3>
                                <ul>
                                    <li>Smart DAO Builder V3.0 - Support cross-DAO interoperability and DAO token issuance</li>
                                    <li>Testing Dapp Developer Kit on STP Verse</li>
                                    <li>Launch DAO Infrastructures for STP Verse</li>
                                </ul>
                            </div>
                            <div>
                                <h3>2022 Q3 and Further</h3>
                                <ul>
                                    <li>Launch STP Verse Mainnet</li>
                                    <li>Continue to expand ecosystem and onboard developer tools of STP Verse</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </EighthContent>
                <NinthContent>
                    <div>
                        <div className="integrate">
                            <h2>Want to Integrate with STP</h2>
                            <p>
                            Explore partnership and integration possibility of your project with STP.
                            </p>
                            <Button type="primary"><a href="mailto:contact@stp.network">Contact</a></Button>
                        </div>
                    </div>
                </NinthContent>
                <Footer>
                    <div>
                        <ul>
                            <li>
                                <a target="_blank" href="https://t.me/STPofficial"><TelegramLogo/><span>Telegram</span></a>
                            </li>
                            <li>
                                <a target="_blank" href="https://twitter.com/STP_Networks"><TwitterLogo/><span>Twitter</span></a>
                            </li>
                            <li>
                                <a target="_blank" href="https://standardtokenizationprotocol.medium.com"><MediumLogo/><span>Medium</span></a>
                            </li>
                            <li>
                                <a target="_blank" href={WechatQR}><Wechat/><span>Wechat</span></a>
                            </li>
                            <li>
                                <a href="mailto:contact@stp.network"><Email/><span>Email</span></a>
                            </li>
                        </ul>
                    </div>
                </Footer>
            </Content>     
        </Layout>
    )
}

export default Home;
