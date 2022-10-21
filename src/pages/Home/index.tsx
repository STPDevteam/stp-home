import React, {useEffect, useState, useRef} from 'react'
import { Anchor, Layout, Row, Col, Button, Menu, Dropdown, Carousel, Modal } from 'antd';
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Slider from "react-slick";
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
import Dao1 from '../../assets/images/home/dao1.png'
import Dao2 from '../../assets/images/home/dao2.png'
import Dao3 from '../../assets/images/home/dao3.png'
import Dao4 from '../../assets/images/home/dao4.png'
import Cube from '../../assets/images/home/cube.png'
import {ReactComponent as Infrastructure1} from '../../assets/images/home/svg/infrastructure1.svg'
import {ReactComponent as Infrastructure2} from '../../assets/images/home/svg/infrastructure2.svg'
import {ReactComponent as Infrastructure3} from '../../assets/images/home/svg/infrastructure3.svg'
import {ReactComponent as Infrastructure4} from '../../assets/images/home/svg/infrastructure4.svg'
import './index.less';

const { Header, Sider, Content } = Layout;
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
        font-size: 16px;
        @media (max-width: 767px) {
            font-size: 14px;
            line-height: 30px;
        }
        margin-bottom: 40px;
    }
    h1{
        margin-top: 120px;
        margin-bottom: 32px;
        margin-right: 260px;
        font-size: 56px;
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
        width: 150px;
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
    .btns{
        display: grid;
        grid-template-columns: 1fr;
        width: 200px;
        grid-gap: 20px;
        @media (max-width: 767px) {
            width: 100px;
        }
        // .ant-btn{
        //     &:last-of-type{
        //         background: #3898FC;
        //         border-color: #3898FC;
        //     }
        // }
    }
`

const SecondContent = styled.div`
    background: url(${Image2}) no-repeat, #fff;
    background-size: 50%;
    background-position: center right;
    .secondContent_main {
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        max-width: 1200px;
        padding: 180px 0px 150px 50px;
        @media (max-width: 1100px) {
            padding: 180px 0px 150px 50px;
        }
        @media (max-width: 1020px) {
            padding: 180px 0px 150px 50px;
        }
        @media (max-width: 920px) {
            padding: 180px 0 150px 50px;
        }
        @media (max-width: 767px) {
            padding: 100px 0px 100px 0px;
            flex-direction: column;
        }

        .secondContent_info {
            flex: 1;
            margin-right: 150px;
            @media (max-width: 767px) {
                padding: 0px 30px;
                margin-right: 0;
            }
        }
        p {
            margin: 0;
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
        font-size: 18px;
        line-height: 24px;
        @media (max-width: 767px) {
            font-size: 12px;
            padding-right: 60px;
            line-height: 20px;
        }
    }
    h2{
        color: #111029;
        font-size: 48px;
        line-height: 70px;
        font-weight: 800;
        margin-bottom: 0;
        @media (max-width: 767px) {
            font-size: 24px;
            line-height: 40px;
        }
    }
    hr{
        border-top: 1px solid #ECECEC;
        border-bottom: none;
        margin: 16px 0; 
        @media (max-width: 767px) {
            margin: 16px 80px 16px 0px;
        }
    }

    .video_content {
        width: 535px;
        height: 299px;

        @media (max-width: 767px) {
            width: 100%;
            padding: 30px 30px 0px 30px;
            /* height: 250px; */
        }

        iframe {
            border: none;
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
            margin-bottom: 30px;
            font-size: 12px;
            width: 100%;
        }
    }
    h2{
        font-size: 48px;
        color:#fff;
        margin-bottom: 0;
        @media (max-width: 767px) {
            font-size: 24px;
        }
    }
    h3{
        font-size: 14px;
        line-height: 20px;
        font-weight: 600;
        color: #fff; 
        margin-top: 0;
        margin-bottom: 10px;
        @media (max-width: 767px) {
            font-size: 14px;
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
            border-radius: 16px; 
            display: flex;
            flex-direction: row;
            align-items: center;
            height: 114px;
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
                height: 120px;
                &:first-of-type{
                    height: 150px;
                }
                &:nth-of-type(2){
                    height: 160px;
                }
            }
        }
        p{
            font-size: 12px;
            margin-bottom: 0;
            width: 100%;
            @media (max-width: 767px) {
                font-size: 10px;
                line-height: 14px;
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
            padding: 30px 0 80px;
        }
    }
    background: rgba(0, 0, 0, 0.05);
    background: url(${Image4}) no-repeat, radial-gradient(75.22% 75.22% at 20.49% 12.79%, #FFFFFF 0%, rgba(228, 231, 233, 0.502295) 100%);;
    background-size: 100%;
       
    h2{
        font-size: 48px;
        text-align: center;
        color: #111029;
        padding: 0px 30px 30px;
        padding-top: 195px;
        @media (max-width: 767px) {
            font-size: 24px;
            padding-top: 80px;
            padding-bottom: 10px;
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
    padding: 10px 0 200px;
    @media (max-width: 767px) {
        padding: 65px 0 100px;
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
        line-height: 20px;
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
        padding-bottom: 300px;
        background: url(${Image6H5}) no-repeat;
        background-position: 100% 210px;
        background-size: 80%;
    }
    &>div{
        margin: 0 auto;
        max-width: 1200px;
        padding: 180px 50px 50px 50px;
        @media (max-width: 1200px) {
            padding: 100px 50px;
        }
        @media (max-width: 767px) {
            padding: 20px;
        }
    }
    h2{
        font-size: 48px;
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
        font-size: 48px;
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
    background-position-x: -10px;
    background-size: 100%;
    @media (max-width: 767px) {
        background: url(${Image8H5}) no-repeat;
        background-position: 10px 200px;
        background-size: 11%;
    }
    &>div{
        max-width: 1200px;
        margin: 50px auto 0;
        padding: 0 40px 0 60px;
        @media (max-width: 767px) {
            padding: 100px 30px;
            margin: 0 auto;
        }
    }
    h2{
        font-size: 48px;
        text-align: center;
        color: #111029; 
        margin-bottom: 120px;
        padding-top: 32px;
        @media (max-width: 767px) {
            margin-top: 0;
            font-size: 24px;
            margin-bottom: 64px;
        }
    }
    h3{
        font-size: 16px;
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
        font-size: 48px;
        text-align: center;
        color: #111029; 
        @media (max-width: 767px) {
            font-size: 24px;
            text-align: left;
        }
    }
    p{
        font-size: 16px;
        text-align: center;
        color: #727272;
        margin-bottom: 40px;
        @media (max-width: 767px) {
            font-size: 12px;
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


const Home: React.FC = () =>  {

    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [infrastructureActive, setInfrastructureActive] = useState(false);
    const [elementHeight, setElementHeight] = useState(568);
    const carouselRef = useRef<any>()
    const history = useHistory();

    const headerRef = useRef(null);
    const homeRef = useRef(null);
    const verseRef = useRef(null);
    const productsRef = useRef(null);
    const partnershipsRef = useRef(null);
    const resourcesRef = useRef(null);
    const learnRef = useRef(null);

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
  
  
    const sectionRefs = [
      { section: "Home", ref: homeRef },
      { section: "Verse", ref: verseRef },
      { section: "Products", ref: productsRef },
      { section: "Partnerships", ref: partnershipsRef },
      { section: "Resources", ref: resourcesRef },
      { section: "Learn", ref: learnRef },
    ];
    const getDimensions = (ele: any) => {
        if(!ele){
            return {}
        }
        const { height } = ele.getBoundingClientRect();
        const offsetTop = ele.offsetTop;
        const offsetBottom = offsetTop + height;
      
        return {
          height,
          offsetTop,
          offsetBottom,
        };
      };
      
    const scrollTo = (ele: any) => {
        if(!ele){
            return
        }
        ele.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    
    const getCustomPaging = (i: number) => {
        switch (i) {
            case 1: 
                return <><div><img src={Tools1}/></div><div>Clique</div></>
            case 2: 
                return <><div><img src={Tools3}/></div><div>Governance SDK</div></>
            case 3: 
                return <><div><img src={Tools4}/></div><div>Multi-modular blockchain architecture</div></>
        }
    }

    const settings = {
        customPaging: function(i: number) { return <a>{getCustomPaging(i+1)}</a> },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear",
        nextArrow: <></>,
        prevArrow: <></>,
      };

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 767px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);
        window.addEventListener("scroll", reveal);
        const revealElement = document.getElementById("infrastructure-list");
        if(revealElement){
            setElementHeight(revealElement.getBoundingClientRect().height)
        }  
        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
            window.removeEventListener("scroll", reveal);
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

    const reveal = () => {
        const revealElement = document.getElementById("infrastructure-list");
        if(revealElement){
            const windowHeight = window.innerHeight;
            const elementTop = revealElement.getBoundingClientRect().top;
        
            if (elementTop < windowHeight - (elementHeight + 50)) {
                setInfrastructureActive(true)
            } else {
                setInfrastructureActive(false)
            }
        } 
    }
      
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
            {/* <Menu.Item>
                <a href="#Ecosystem">
                    Ecosystem Projects
                </a>
            </Menu.Item> */}
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
                <a target="_blank" href="/Verse Network WP.pdf">
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
                <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@versenetwork">
                    STP News
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://stp-network.gitbook.io">
                    Wiki
                </a>
            </Menu.Item>
        </Menu>
    )

    return (
        <Layout className="homePage">
            <Modal className="comingModal" visible={isModalVisible} footer={null} closable={false} width={320} centered>
                <img src={Cube} alt="" />
                <p>Coming Soon...</p>
            <Button type="primary" onClick={handleCancel}>Close</Button>
            </Modal>
                <FirstContent className="section" id="Home" ref={homeRef}>
                    <div>
                        <Row>
                            <Col md={18} sm={24}>
                                <h1>Verse Network <br/> by <img className="stpt" src={Logo}/></h1>
                                <p>
                                An ecosystem optimized for DAOs
                                </p>
                                <div className="btns">
                                    <Button type="primary"><Link to="/product">Launch DAO APPs</Link></Button>
                                    {/* <Button type="primary"><Link to="/developers">Launch Verse Testnet</Link></Button> */}
                                </div>
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
                <div className="section" id="Verse" ref={verseRef}>
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
                        <div id="About" className='secondContent_main'>
                            <div className='secondContent_info'>
                                <h2 id="Finance">Redefining Value<br/> One DAO at a Time</h2>
                                <hr />
                                <p>Native tools and infrastructure that facilitate more efficient decentralized decision-making for users, communities, and organizations.</p>
                            </div>
                            <div className='video_content'>
                                <iframe title='youtube' src="https://www.youtube.com/embed/ZEDNduNedCc?autoplay=1" height="100%" width="100%"></iframe>                               
                            </div>
                        </div>
                    </SecondContent> 
                    <ThirdContent>
                        <div id="Features">
                            <h2 id="Experience" className="defiTitle">Verse</h2>
                            <p>An Ecosystem Optimized for DAOs </p>
                            <ul>
                                <li>
                                    <div><img src={SmartChain1} alt="" /></div>
                                    <div>
                                        <h3>An all-in-one aggregated Dashboard</h3>
                                        <p>Verse Network offers multiple native dApps optimized for all aspects of DAO creation and operations. We also offer integration with the most popular third party options for additional DAO tooling capabilities. </p>
                                    </div>
                                </li>
                                <li>
                                    <div><img src={SmartChain2} alt="" /></div>
                                    <div>
                                        <h3>DAO Goverance</h3>
                                        <p>Verse Network offers seamless DAO governance for projects built on Ethereum, and EMV-compatible chains. Our governance dApp Clique covers the basics from proposal creation and voting, to more advanced features like cross chain governance. </p>
                                    </div>
                                </li>
                                <li>
                                    <div><img src={SmartChain3} alt="" /></div>
                                    <div>
                                        <h3>Data Traceability and Transparency</h3>
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
                            </ul>
                        </div>
                    </ThirdContent>
                </div>
                {/* <div className="infrastructure">
                    <h2>
                    Verse Infrastructure
                    </h2>
                    <div id="infrastructure-list" className={`list ${infrastructureActive ? 'active' : ''}`}>
                        <div>
                            <div><Infrastructure1/></div>
                            <div>
                                <h3>
                                Application Layer 
                                </h3>
                                {infrastructureActive ? 
                                    <ul>
                                        <li>Ethereum Emulation – EVM & RPC emulation mode</li>
                                        <li>Cross-chain Interoperability</li>
                                        <li>DAPP Deployment – Low and stable Gas Costs</li>
                                    </ul> :
                                    <p>
                                    Smart Contracts, DAPPs, User Interface
                                    </p>
                                }
                                <hr />
                            </div>
                        </div>
                        <div>
                            <div><Infrastructure2/></div>
                            <div>
                                <h3>
                                Execution Layer 
                                </h3>
                                {infrastructureActive ? 
                                    <ul>
                                        <li>High Throughput (~1500 TPS per EVM chain) </li>
                                        <li>Front Running Resistant</li>
                                        <li>Low Gas Fees (~5 to 50 Cents)</li>
                                    </ul> :
                                    <p>
                                    Supporting multiple VMs (EVM, WASM, MOVE) inside separate containers 
                                    </p>
                                }
                                <hr />
                            </div>
                        </div>
                        <div>
                            <div><Infrastructure3/></div>
                            <div>
                                <h3>
                                Network Layer 
                                </h3>
                                {infrastructureActive ? 
                                    <ul>
                                        <li>O(log(n)) network communication overhead BLS and layered gossip network design </li>
                                        <li>Potential of further scaling through Sharding</li>
                                        <li>Potential of Shared hub with Parallel/shared chains with Instant Finality </li>
                                        <li>Low Hardware Specifications</li>
                                    </ul> :
                                    <p>
                                    1,000s of Full Node Operation with low hardware specifications 
                                    </p>
                                }
                                <hr />
                            </div>
                        </div>
                        <div>
                            <div><Infrastructure4/></div>
                            <div>
                                <h3>
                                Consensus Layer
                                </h3>
                                {infrastructureActive ? 
                                    <ul>
                                        <li>Scale to 1,000s of Validators – None to minimal effect of network performance </li>
                                        <li>High Sybil Resistance – 67% </li>
                                        <li>Instant deterministic Finality – 2.4 Sec or lower</li>
                                        <li>Best performance for totally order linear blockchains</li>
                                    </ul> :
                                    <p>
                                    Scale to 1,000s of validators without effect on performance
                                    </p>
                                }
                                <hr />
                            </div>
                        </div>
                    </div>
                    <Button type="primary" onClick={() => {history.push('/tech')}}>Learn more</Button>
                </div> */}
                <FourthContent>
                    <div>
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
                            <div className="item">
                                <div className="blue"><img src={System3} alt="" /></div>
                                <h3>Network Incentives</h3>
                                <p>Incentives network participants and contributors.</p>
                            </div>
                        </div>
                        <div className="h5 system">
                            <Carousel ref={carouselRef as any}>
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
                                    <h3>Network Incentives</h3>
                                    <p>Incentives network participants and contributors.</p>
                                </div>
                                {/* <div className="item">
                                    <div className="blue"><img src={System5} alt="" /></div>
                                    <h3>USTP</h3>
                                    <p>A native stablecoin on Verse  based on STPT staking</p>
                                </div> */}
                            </Carousel>
                        </div>
                    </div>
                </FourthContent>
                <FifthContent className="section" id="Products" ref={productsRef}>
                    <div>
                        <h2>Tools and Infrastructure</h2>
                        <p>A full suite of native tools and infrastructure built on Verse facilitates efficient decentralized decision-making for users, communities and organizations</p>
                        <div className="tools">
                            <Slider {...settings}>
                                <div className="item">
                                    <div>
                                        <img src={Dao1} alt="" />
                                    </div>
                                    <div>
                                        <h3>Clique</h3>
                                        <p>An aggregated dashboard to browse, manage and socially participate in all DAOs, asset holdings, proposals, and ongoing events on Verse</p>
                                        <div className="btns">
                                            <Button type="primary"><a href="https://myclique.io" target="_blank">Launch App</a></Button>
                                            <Button type="primary"><a href="https://stp-dao.gitbook.io/verse-network/dapps/clique">Learn More</a></Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <img src={Dao2} alt="" />
                                    </div>
                                    <div>
                                        <h3>Governance SDK</h3>
                                        <p>Using Clique, DAOs can implement cross chain governance to take advantage of greatly reduced gas fees. DAOs on Ethereum (or any EVM chain) can execute governance on Polygon without the need to issue new tokens or bridge their existing tokens. </p>
                                        <div className="btns">
                                            <Button type="primary"><a href="https://myclique.io/governance" target="_blank">Launch App</a></Button>
                                            <Button type="primary"><a href="https://stp-dao.gitbook.io/verse-network/clique/clique-sdk-beta">Learn More</a></Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <img src={Dao4} alt="" />
                                    </div>
                                    <div>
                                        <h3>Multi-modular blockchain architecture</h3>
                                        <p>Powered by Ankr BNB Chain-Application-Sidechain (BAS) framework, Verse Network’s chain includes core modules including Parlia Consensus Engine, Pool & Staking, Governance, Dynamic Runtime Upgrades, and Reward Management.</p>
                                        <div className="btns">
                                            <Button type="primary" onClick={showModal}>Coming soon</Button>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                            {/* <div className="control">
                                <div>
                                    <ArrowLeft/>
                                </div>
                                <div>
                                    <ArrowRight/>
                                </div>
                            </div> */}
                            {/* <div className="dots">
                                <div><img src={Tools1} alt="" />Clique</div>
                                <div><img src={Tools2} alt="" />Framework</div>
                                <div><img src={Tools3} alt="" />DAO Scan Tool</div>
                                <div><img src={Tools4} alt="" />DAO MaketCap Tool</div>
                            </div> */}
                        </div>
                    </div>
                </FifthContent>
                <EighthContent className="section" id="Resources" ref={resourcesRef}>
                    <div id="Roadmap">
                        <h2>Roadmap</h2>
                        <div className="roadmap">
                            <div>
                                <h3>2022 Q2</h3>
                                <ul>
                                    <li>Launch Cross-chain Governance Features and Data Bridge System on Polygon (Done)</li>
                                </ul>
                            </div>
                            <div>
                                <h3>2022 Q3</h3>
                                <ul>
                                    <li>Launch Clique V2.0 with more DAO tooling features such as Airdrop, Fundraising, etc</li>
                                    <li>Launch Governance SDK that enables projects to deploy decentralized governance feature on their own websites</li>
                                    <li>Launch on Binance Side-chain (BAS) optimized for DAO ecosystem</li>
                                    <li>DAO Social Identity and Scoring Mechanism with Credibility Score and Reputation score</li>
                                </ul>
                            </div>
                            <div>
                                <h3>2022 Q4 and Further</h3>
                                <ul>
                                    <li>Continue to expand infrastructures and cross-chain DAO interoperability</li>
                                    <li>Continue to expand Clique DAO ecosystem with more featured projects and DApps</li>
                                    <li>Explore deployment on other EVM-based Blockchains</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </EighthContent>
                <NinthContent>
                    <div>
                        <div className="integrate">
                            <h2>Want to Collaborate with Verse?</h2>
                            <p>
                            Explore partnership and integration possibilities for your project with Verse.
                            </p>
                            <Button type="primary"><a href="mailto:contact@stp.network">Contact</a></Button>
                        </div>
                    </div>
                </NinthContent>  
        </Layout>
    )
}

export default Home;
