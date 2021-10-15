import React, {useEffect, useState, useRef} from 'react'
import { Anchor, Layout, Row, Col, Button, Select, Carousel, Menu, Dropdown } from 'antd';
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
import Image8 from '../../assets/images/home/image8.jpg'
import Image8H5 from '../../assets/images/home/image8-h5.jpg'
import Image9 from '../../assets/images/home/image9.jpg'
import Image10_1 from '../../assets/images/home/image10-1.png'
import Image10_2 from '../../assets/images/home/image10-2.png'
import SmartChain1 from '../../assets/images/home/smartchain1.png'
import SmartChain2 from '../../assets/images/home/smartchain2.png'
import SmartChain3 from '../../assets/images/home/smartchain3.png'
import SmartChain4 from '../../assets/images/home/smartchain4.png'
import System1 from '../../assets/images/home/system1.png'
import System2 from '../../assets/images/home/system2.png'
import System3 from '../../assets/images/home/system3.png'
import System4 from '../../assets/images/home/system4.png'
import System5 from '../../assets/images/home/system5.png'
import Tools1 from '../../assets/images/home/tools1.jpg'
import Tools2 from '../../assets/images/home/tools2.jpg'
import Tools3 from '../../assets/images/home/tools3.jpg'
import Tools4 from '../../assets/images/home/tools4.jpg'
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
import {ReactComponent as TwitterLogo} from '../../assets/images/home/svg/Twitter.svg'
import {ReactComponent as MediumLogo} from '../../assets/images/home/svg/Medium.svg'
import {ReactComponent as TelegramLogo} from '../../assets/images/home/svg/Telegram.svg'
import {ReactComponent as Email} from '../../assets/images/home/svg/Email.svg'
import {ReactComponent as Wechat} from '../../assets/images/home/svg/Wechat.svg'
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
    background-size: 100%;
    background-position: 100% -50px;
    margin-top: 100px;
    @media (max-width: 767px) {
        background: url(${Image1H5}) no-repeat;
        background-position: center bottom;
        background-size: cover;
        height: calc(100vh - 100px);
    }
    &>div{
        max-width: 1200px;
        padding: 0 50px;
        margin: 0 auto;
        padding: 200px 50px 200px;
        position: relative;
        overflow: hidden;
        @media (max-width: 767px) {
           padding: 20px 30px 300px;
        }
    }
    p{
        color: #25AAE1;
        width: 100%;
        max-width: 480px;
    }
`

const SecondContent = styled.div`
    background: url(${Image2}) no-repeat;
    background-size: 50%;
    background-position: center right;
    &>div{
        margin: 0 auto;
        max-width: 1200px;
        padding: 200px 500px 100px 50px;
        @media (max-width: 767px) {
            padding: 100px 20px;
        }
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
        padding: 200px 50px;
        @media (max-width: 1200px) {
            padding: 100px 50px;
        }
        @media (max-width: 767px) {
            padding: 20px;
        }
    }
    p{
        font-size: 24px;
        color: #fff;
        margin-bottom: 30px;
        @media (max-width: 767px) {
            font-size: 16px;
        }
    }
    h2{
        font-size: 72px;
        color:#fff;
        margin-bottom: 0;
        @media (max-width: 767px) {
            font-size: 32px;
        }
    }
    h3{
        font-size: 21px;
        color: #fff; 
        margin-top: 0;
        margin-bottom: 0px;
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
            padding: 20px 40px;
            border-radius: 15px; 
            display: flex;
            flex-direction: row;
            align-items: center;
            img{
                width: 60px;
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
            @media (max-width: 767px) {
                width: 100%!important;
            }
        }
        p{
            font-size: 14px;
            margin-bottom: 0;
        }
    }
`

const FourthContent = styled.div`
    &>div{
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 50px;
        @media (max-width: 767px) {
            padding: 0;
        }
    }
    background: rgba(0, 0, 0, 0.05);
    background: url(${Image4}) no-repeat, radial-gradient(75.22% 75.22% at 20.49% 12.79%, #FFFFFF 0%, rgba(228, 231, 233, 0.502295) 100%);;
    background-size: 100%;
    @media (max-width: 767px) {
        margin-top: -10px;
    }
       
    h1{
        font-size: 40px;
        color: #25AAE1;
        text-align: center;
        padding-top: 280px;
        @media (max-width: 767px) {
            font-size: 16px;
            padding-top: 80px;
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
    padding: 100px 0;
    @media (max-width: 767px) {
        padding: 65px 0;
    }
    h1{
        font-size: 40px;
        color: #25AAE1;
        text-align: center;
        padding-top: 60px;
        @media (max-width: 767px) {
            font-size: 16px;
            padding-top: 60px;
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
    h3{
        font-size: 24px;
        color: #111029;
        margin-top: 0;
        @media (max-width: 767px) {
            font-size: 16px;
        } 
    }
    p{
        font-size: 16px;
        text-align: center;
        color: #727272;
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
    &>div{
        margin: 0 auto;
        max-width: 1200px;
        padding: 50px;
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
            padding: 20px;
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
        padding: 0 50px;
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
        font-size: 16px;
        text-align: center;
        color: #727272;
    }
    .ant-btn{
        margin: 0 auto;
        display: block;
    }
`
const EighthContent = styled.div`
    background: url(${Image8}) no-repeat;
    background-position-y: 150px;
    background-size: 100%;
    @media (max-width: 767px) {
        background: url(${Image8H5}) no-repeat;
        background-position: 20px 160px;
    }
    &>div{
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 50px;
        @media (max-width: 767px) {
            padding: 20px;
        }
    }
    h2{
        font-size: 64px;
        text-align: center;
        color: #111029; 
        margin-bottom: 140px;
        @media (max-width: 767px) {
            margin-top: 50px;
            font-size: 24px;
            margin-bottom: 20px;
        }
    }
    h3{
        font-size: 18px;
        color: #151517;
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
        font-size: 16px;
        color: #727272;
    }
`
const NinthContent = styled.div`
    background: url(${Image9}) no-repeat;
    background-position: center center;
    background-size: 80%;
    padding-bottom: 250px;
    h2{
        font-size: 64px;
        text-align: center;
        color: #111029; 
        margin-top: 150px;
        margin-bottom: 50px;
        @media (max-width: 767px) {
            font-size: 24px;
            margin-top: 50px;
            margin-bottom: 50px;
        }
    }
    &>div{
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 50px;
        @media (max-width: 767px) {
            padding: 20px;
        }
    }
`
const TenthContent = styled.div`
    background: url(${Image10_2}) no-repeat, url(${Image10_1}) no-repeat;
    background-position: 100% 0,-300px 0; 
    background-size: 100%, 40%;
    padding: 100px 0 0; 
    margin-top: -150px;
    @media (max-width: 767px) {
        background-position: 100% 0, 0 0; 
        background-size: cover, 40%
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
    }
    .ant-btn{
        margin: 0 auto;
        display: block;
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
            }
            span{
                margin-left: 10px;
                @media (max-width: 767px) {
                    display: none;
                }
            }
            svg{
                display:inline-block;
                line-height: 20px;
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

    const goTo = (index: number) => {
        if(carouselRef.current){
            carouselRef.current.goTo(index);
        }
    }

    const scrollHeader = () => {
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
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                STP DAO
            </a>
            </Menu.Item>
            <Menu.Item>
            <a rel="noopener noreferrer" href="#$STPT">
                $STPT
            </a>
            </Menu.Item>
      </Menu>
    )

    const productsMenu = (
        <Menu>
            <Menu.Item>
                <a rel="noopener noreferrer" href="#STPChain">
                    STP Chain
                </a>
            </Menu.Item>
            <Menu.Item>
                <a rel="noopener noreferrer" href="#Tools">
                    Tools
                </a>
            </Menu.Item>
        </Menu>
    )
    const ecosystemMenu = (
        <Menu>
            <Menu.Item>
                <a rel="noopener noreferrer" href="#Ecosystem">
                Ecosystem Projects
                </a>
            </Menu.Item>
            <Menu.Item>
                <a rel="noopener noreferrer" href="#Strategic">
                Strategic Partners
                </a>
            </Menu.Item>
        </Menu>
    )
    const resourcesMenu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="#">
                Whitepaper
                </a>
            </Menu.Item>
            <Menu.Item>
                <a rel="noopener noreferrer" href="#Roadmap">
                Roadmap
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="">
                Build with STP
                </a>
            </Menu.Item>
        </Menu>
    )
    const learnMenu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="">
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
                            <a href="/">Home</a>
                            <Dropdown overlay={stpMenu} trigger={['click', 'hover']}>
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                STP <DownOutlined />
                                </a>
                            </Dropdown>
                            <Dropdown overlay={productsMenu} trigger={['click', 'hover']}>
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                Products <DownOutlined />
                                </a>
                            </Dropdown>
                            <Dropdown overlay={ecosystemMenu} trigger={['click', 'hover']}>
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                STP Ecosystem <DownOutlined />
                                </a>
                            </Dropdown>
                            <Dropdown overlay={resourcesMenu} trigger={['click', 'hover']}>
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                Resources <DownOutlined />
                                </a>
                            </Dropdown>
                            <Dropdown overlay={learnMenu} trigger={['click', 'hover']}>
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                Learn <DownOutlined />
                                </a>
                            </Dropdown>
                            <Button type="primary"><a target="_blank" href="https://betapro.rai.finance">Launch Beta</a></Button>
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
                            <Col md={12} sm={24}>
                                <h1 id="$STPT">DAV Sidechain by STPT</h1>
                                <p>
                                A layer2 on Ethereum optimized for scalable and smarter DAO solutions
                                </p>
                                <Button type="primary"><a href="https://betapro.rai.finance" target="_blank">Launch APPs</a></Button>
                            </Col>
                            <Col md={12} sm={24}>
                            </Col>
                        </Row>
                    </div>
                </FirstContent>
                <SecondContent>
                    <div>
                        <p>Our vision is to shift the paradigm of how organizations should be run by creating an optimized Layer2 blockchain designed for DAOs. We exist to evangelize the DAO concept for enhancing management structure and unlocking value. 
                            <br/>
                            <br/>
                            STP DAOverse is a fully functional platform powered by STP Chain with native tools and infrastructures. We aspire to be an all-encompassing platform for any organization to decentralize decision-making effectively and developers to launch decentralized applications. 
                        </p>
                        <h2 id="Finance">Changing Management One DAO at a Time</h2>
                    </div>
                </SecondContent> 
                <ThirdContent>
                    <div id="STPChain">
                        <h2 id="Experience" className="defiTitle">STP Smart Chain</h2>
                        <p>A Layer2 blockchain optimized for all DAOs</p>
                        <ul>
                            <li>
                                <div><img src={SmartChain1} alt="" /></div>
                                <div>
                                    <h3>Low cost</h3>
                                    <p>Lower governance cost compared to DAOs on Ethereum</p>
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
                                    <h3>Cross DAO Interoperobility</h3>
                                    <p>Build bridges to different DAOs to enable seamless partnership that allows for conjoined votes and community sharing</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </ThirdContent>
                <FourthContent>
                    <div id="Ecosystem">
                        <h1>STPT</h1>
                        <h2>Powering DAO Ecosystem</h2>
                        <div className="web system">
                            <div className="item">
                                <img className="green" src={System1} alt="" />
                                <h3>Governance</h3>
                                <p>STPT Holders are allowed to vote on key proposals in the ecosystem.</p>
                            </div>
                            <div className="item">
                                <img className="blue" src={System2} alt="" />
                                <h3>Transaction Fees</h3>
                                <p>Serves as gas fees for transaction and smart contract execution.</p>
                            </div>
                        </div>
                        <div className="web system">
                            <div className="item">
                                <img className="blue" src={System3} alt="" />
                                <h3>Governance</h3>
                                <p>STPT Holders are allowed to vote on key proposals in the ecosystem.</p>
                            </div>
                            <div className="item">
                                <img className="green" src={System4} alt="" />
                                <h3>Transaction Fees</h3>
                                <p>Serves as gas fees for transaction and smart contract execution.</p>
                            </div>
                            <div className="item">
                                <img className="blue" src={System5} alt="" />
                                <h3>Transaction Fees</h3>
                                <p>Serves as gas fees for transaction and smart contract execution.</p>
                            </div>
                        </div>
                        <div className="h5 system">
                            <Carousel autoplay ref={carouselRef as any}>
                                {/* <div className="item">
                                    <img className="green" src={System1} alt="" />
                                    <h3>Governance</h3>
                                    <p>STPT Holders are allowed to vote on key proposals in the ecosystem.</p>
                                </div> */}
                                <div className="item">
                                    <img className="blue" src={System2} alt="" />
                                    <h3>Transaction Fees</h3>
                                    <p>Serves as gas fees for transaction and smart contract execution.</p>
                                </div>
                                <div className="item">
                                    <img className="blue" src={System2} alt="" />
                                    <h3>Transaction Fees</h3>
                                    <p>Serves as gas fees for transaction and smart contract execution.</p>
                                </div>
                                <div className="item">
                                    <img className="blue" src={System3} alt="" />
                                    <h3>Governance</h3>
                                    <p>STPT Holders are allowed to vote on key proposals in the ecosystem.</p>
                                </div>
                                <div className="item">
                                    <img className="green" src={System4} alt="" />
                                    <h3>Transaction Fees</h3>
                                    <p>Serves as gas fees for transaction and smart contract execution.</p>
                                </div>
                                <div className="item">
                                    <img className="blue" src={System5} alt="" />
                                    <h3>Transaction Fees</h3>
                                    <p>Serves as gas fees for transaction and smart contract execution.</p>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </FourthContent>
                <FifthContent>
                    <div>
                        <h1>STP DAOverse</h1>
                        <h2>Tools and Infrastructure</h2>
                        <p>STP DAOverse is a fully functional platform powered by STP Chain with native tools and infrastructures. We aspire to be an all-encompassing platform for any organization to decentralize decision-making effectively and developers to launch decentralized applications.</p>
                        <div className="tools">
                            <div className="item">
                                <div>
                                    <img src={Tools1} alt="" />
                                </div>
                                <div>
                                    <h3>Clique Dapp</h3>
                                    <p>An aggregated dashboard to  browse, manage and socially participate in all DAOs, asset holdings, proposals, and ongoing events on STP Smart Chain</p>
                                </div>
                            </div>
                            <div className="item">
                                <div>
                                    <img src={Tools2} alt="" />
                                </div>
                                <div>
                                    <h3>DAO Scan Tool</h3>
                                    <p>Track all DAO transaction history and onchain data on STP chain</p>
                                </div>
                            </div>
                            <div className="item">
                                <div>
                                    <img src={Tools3} alt="" />
                                </div>
                                <div>
                                    <h3>Orblox Dapp</h3>
                                    <p>Build on-chain decentralized  organizations and issue governance token running on STP Smart Chain by using industry-based templates</p>
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
                <SeventhContent>
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
                        <Button type="primary"><a href="https://betapro.rai.finance" target="_blank">Build with STP</a></Button>
                    </div>
                </SeventhContent>
                <EighthContent>
                    <div id="Roadmap">
                        <h2>Roadmap</h2>
                        <div className="roadmap">
                            <div>
                                <h3>Q4 2021</h3>
                                <ul>
                                    <li>Launch STP Smart Chain Testnet</li>
                                    <li>DAO Builder V1.0 - with basic DAO templates</li>
                                    <li>DAO Aggregator V1.0 - All in one DAO hub for joint DAOs and proposals and DAO token management</li>
                                    <li>DAO Scan  - Track transaction history and real-time chain info of STP Smart Chain</li>
                                    <li>Announce new STPT Token economy - a dual token ecosystem with STPT and USTP powering STP DAOverse</li>
                                </ul>
                            </div>
                            <div>
                                <h3>Q4 2021</h3>
                                <ul>
                                    <li>Launch STP Smart Chain Testnet</li>
                                    <li>DAO Builder V1.0 - with basic DAO templates</li>
                                    <li>DAO Aggregator V1.0 - All in one DAO hub for joint DAOs and proposals and DAO token management</li>
                                    <li>DAO Scan  - Track transaction history and real-time chain info of STP Smart Chain</li>
                                    <li>Announce new STPT Token economy - a dual token ecosystem with STPT and USTP powering STP DAOverse</li>
                                </ul>
                            </div>
                            <div>
                                <h3>Q4 2021</h3>
                                <ul>
                                    <li>Launch STP Smart Chain Testnet</li>
                                    <li>DAO Builder V1.0 - with basic DAO templates</li>
                                    <li>DAO Aggregator V1.0 - All in one DAO hub for joint DAOs and proposals and DAO token management</li>
                                    <li>DAO Scan  - Track transaction history and real-time chain info of STP Smart Chain</li>
                                    <li>Announce new STPT Token economy - a dual token ecosystem with STPT and USTP powering STP DAOverse</li>
                                </ul>
                            </div>
                            <div>
                                <h3>Q4 2021</h3>
                                <ul>
                                    <li>Launch STP Smart Chain Testnet</li>
                                    <li>DAO Builder V1.0 - with basic DAO templates</li>
                                    <li>DAO Aggregator V1.0 - All in one DAO hub for joint DAOs and proposals and DAO token management</li>
                                    <li>DAO Scan  - Track transaction history and real-time chain info of STP Smart Chain</li>
                                    <li>Announce new STPT Token economy - a dual token ecosystem with STPT and USTP powering STP DAOverse</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </EighthContent>
                <NinthContent>
                    <div>
                        <h2>Where you can buy STPT?</h2>
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
                    </div>
                </NinthContent>
                <TenthContent>
                    <div>
                        <div className="integrate">
                            <h2>Want to Integrate with STP</h2>
                            <p>
                            Explore partnership and integration possibility of your project with STP.
                            </p>
                            <Button type="primary"><a href="https://betapro.rai.finance" target="_blank">Contact</a></Button>
                        </div>
                        <ul>
                            <li>
                                <a href=""><TelegramLogo/><span>Telegram</span></a>
                            </li>
                            <li>
                                <a href=""><TwitterLogo/><span>Twitter</span></a>
                            </li>
                            <li>
                                <a href=""><MediumLogo/><span>Medium</span></a>
                            </li>
                            <li>
                                <a href=""><Wechat/><span>Wechat</span></a>
                            </li>
                            <li>
                                <a href=""><Email/><span>Email</span></a>
                            </li>
                        </ul>
                    </div>
                </TenthContent>
            </Content>     
        </Layout>
    )
}

export default Home;
