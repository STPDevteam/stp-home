import React, {useEffect, useState, useRef} from 'react'
import { Anchor, Layout, Row, Col, Button, Menu, Dropdown, Carousel } from 'antd';
import { CSSTransition } from "react-transition-group";
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
import {ReactComponent as ArrowLeft} from '../../assets/images/home/svg/arrow-left.svg'
import {ReactComponent as ArrowRight} from '../../assets/images/home/svg/arrow-right.svg'
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
`

const SecondContent = styled.div`
    background: url(${Image2}) no-repeat, #fff;
    background-size: 50%;
    background-position: center right;
    &>div{
        margin: 0 auto;
        max-width: 1200px;
        padding: 180px 600px 150px 50px;
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
        @media (max-width: 767px) {
            font-size: 24px;
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
        font-size: 16px;
        color: #fff;
        margin-bottom: 50px;
        width: 630px;
        line-height: 1.2;
        @media (max-width: 767px) {
            font-size: 14px;
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
            width: 100%;
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
       
    h2{
        font-size: 48px;
        text-align: center;
        color: #111029;
        padding: 0px 30px 30px;
        padding-top: 195px;
        @media (max-width: 767px) {
            font-size: 24px;
            padding-top: 80px;
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
        padding: 0 120px;
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
        font-size: 48px;
        text-align: center;
        color: #111029; 
        margin-bottom: 160px;
        padding-top: 32px;
        @media (max-width: 767px) {
            margin-top: 0;
            font-size: 24px;
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
    const [visibleSection, setVisibleSection] = useState('Home');
    const carouselRef = useRef<any>()

    const headerRef = useRef(null);
    const homeRef = useRef(null);
    const verseRef = useRef(null);
    const productsRef = useRef(null);
    const partnershipsRef = useRef(null);
    const resourcesRef = useRef(null);
    const learnRef = useRef(null);
  
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
    
    useEffect(() => {
        const handleScroll = () => {
            if(!headerRef && !sectionRefs){
                return;
            }
            const { height: headerHeight } = getDimensions(headerRef.current);
            const scrollPosition = window.scrollY + headerHeight;

            const selected: any = sectionRefs.find(({ section, ref }) => {
                const ele = ref.current;
                if (ele) {
                    const { offsetBottom, offsetTop } = getDimensions(ele);
                    return scrollPosition > offsetTop && scrollPosition < offsetBottom;
                }
            });

            if (selected && selected.section !== visibleSection) {
                setVisibleSection(selected.section);
            } else if (!selected && visibleSection) {
                setVisibleSection('');
            }
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [visibleSection]);

    
    const getCustomPaging = (i: number) => {
        switch (i) {
            case 1: 
                return <><div><img src={Tools1}/></div><div> Clique</div></>
            case 2: 
                return <><div><img src={Tools2}/></div><div> Framework</div></>
            case 3: 
                return <><div><img src={Tools3}/></div><div> DAO Scan Tool</div></>
            case 4: 
                return <><div><img src={Tools4}/></div><div> DAO MarketCap Tool</div></>
        }
    }

    const settings = {
        customPaging: function(i: number) { return <a>{getCustomPaging(i+1)}</a> },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        autoplay: true,
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
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://stp-network.gitbook.io">
                    Wiki
                </a>
            </Menu.Item>
        </Menu>
    )

    return (
        <Layout className="homePage">
            <Header>
                <HeaderContent className="header" ref={headerRef}>
                    <img className="Logo" src={Logo} alt="logo" />
                    <CSSTransition
                        in={!isSmallScreen || isNavVisible}
                        timeout={350}
                        classNames="NavAnimation"
                        unmountOnExit
                    >
                        <nav className="Nav">
                            <a className={`${visibleSection === "Home" ? "active" : ""}`} 
                                onClick={() => {
                                    scrollTo(homeRef.current);
                                }}>Home</a>
                            <Dropdown overlay={stpMenu} trigger={['click']}>
                                <a className={`${visibleSection === "Verse" ? "active" : ""}`}   
                                onClick={() => {
                                    scrollTo(verseRef.current);
                                }}>
                                Verse <Arrow/>
                                </a>
                            </Dropdown>
                            <a className={`${visibleSection === "Products" ? "active" : ""}`}    
                                onClick={() => {
                                    scrollTo(productsRef.current);
                                }}>
                            Products 
                            </a>
                            <Dropdown overlay={resourcesMenu} trigger={['click']}>
                                <a className={`${visibleSection === "Resources" ? "active" : ""}`} 
                                onClick={() => {
                                    scrollTo(resourcesRef.current);
                                }}>
                                Resources <Arrow />
                                </a>
                            </Dropdown>
                            <Dropdown overlay={learnMenu} trigger={['click']}>
                                <a onClick={e => e.preventDefault()}>
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
                <FirstContent className="section" id="Home" ref={homeRef}>
                    <div>
                        <Row>
                            <Col md={18} sm={24}>
                                <h1>Verse Network <br/> by <img className="stpt" src={Logo}/></h1>
                                <p>
                                A layer 2 blockchain optimized for DAOs
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
                        <div id="About">
                            <p>Our vision is to shift the paradigm of how people interact by creating an optimized Layer 2 blockchain designed for DAOs. 
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
                            <p>A censorship resistant, front running resistant high performance interconnected cloud for next gen DAO and DeFi.</p>
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
                                        <h3>Multi Chain Compatibility</h3>
                                        <p>Build various Dapps and customized DAOs using developer tool (support EVM, WESM, MOVE)</p>
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
                                <p>A native stablecoin on Verse  based on STPT staking</p>
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
                                    <p>A native stablecoin on Verse  based on STPT staking</p>
                                </div>
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
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <img src={Dao2} alt="" />
                                    </div>
                                    <div>
                                        <h3>Framework</h3>
                                        <p>A full suite of native tools and infrastructure built on Verse facilitates efficient decentralized decision-making for users, communities and organizations</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <img src={Dao3} alt="" />
                                    </div>
                                    <div>
                                        <h3>DAO Scan Tool</h3>
                                        <p>Track all DAO transaction history and onchain data globally</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div>
                                        <img src={Dao4} alt="" />
                                    </div>
                                    <div>
                                        <h3>DAO MarketCap Tool</h3>
                                        <p>A global DAO ranking and data analysis platform</p>
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
                {/* <SixthContent>
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
                </SixthContent> */}
                {/* <SeventhContent id="Ecosystem">
                    <div>
                        <h2>Ecosystem Projects</h2>
                        <p>
                        Verse aspires to be an all-encompassing platform for any organization to decentralize decision-making effectively and developers to launch decentralized applications. Organizations leverage our powerful solutions and templates to best tailor its governance structure with their specific industry use-cases and decision styles.                        </p>
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
                </SeventhContent> */}
                <EighthContent className="section" id="Resources" ref={resourcesRef}>
                    <div id="Roadmap">
                        <h2>Roadmap</h2>
                        <div className="roadmap">
                            <div>
                                <h3>2021 Q4</h3>
                                <ul>
                                    <li>Launch Verse Testnet</li>
                                    <li>Framework V1.0 - with basic DAO templates</li>
                                    <li>Clique V1.0 - All in one DAO hub for joint DAOs and proposals and DAO token management </li>
                                    <li>DAO Scan - Track transaction history and real-time chain info of Verse</li>
                                    <li>Announce new STPT Token economy - a dual token ecosystem with STPT and USTP powering Verse</li>
                                </ul>
                            </div>
                            <div>
                                <h3>2022 Q1</h3>
                                <ul>
                                    <li>DAO Social Identity and Scoring Mechanism with Credibility Score and Reputation score</li>
                                    <li>Social media integration - connecting with popular off-chain social media to optimize the Social Identity system</li>
                                    <li>Cross-chain bridge - enhance interoperability between Verse and mainstream public chains</li>
                                    <li>Framework V2.0 - More DAO solutions for off-chain organizations</li>
                                </ul>
                            </div>
                            <div>
                                <h3>2022 Q2</h3>
                                <ul>
                                    <li>Framework V3.0 - Support cross-DAO interoperability and DAO token issuance</li>
                                    <li>Testing Dapp Developer Kit on Verse</li>
                                    <li>Launch DAO Infrastructures for Verse</li>
                                </ul>
                            </div>
                            <div>
                                <h3>2022 Q3 and Further</h3>
                                <ul>
                                    <li>Launch Verse Mainnet</li>
                                    <li>Continue to expand ecosystem and onboard developer tools of Verse</li>
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
