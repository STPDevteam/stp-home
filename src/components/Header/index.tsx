import React, {useEffect, useState, useRef} from 'react'
import { Anchor, Layout, Row, Col, Button, Menu, Dropdown, Carousel, Modal } from 'antd';
import styled from 'styled-components'
import { CSSTransition } from "react-transition-group";
import { Link, useLocation } from "react-router-dom";
import { MenuOutlined, DownOutlined } from '@ant-design/icons';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { useToggle } from '../../hooks/useToggle';
import Logo from '../../assets/images/logo.png'
import Cube from '../../assets/images/home/cube.png'
import {ReactComponent as Arrow} from '../../assets/images/home/svg/arrow.svg'
import './index.less';

const { Header: LayoutHeader, Sider, Content } = Layout;
const HeaderContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 50px;
    @media (max-width: 767px) {
        padding: 0 20px;
    }
`
const HeaderLink = styled.a`
    background: #0B1CB5;
    display: block;
    height: 40px;
    color: #fff;
    text-align: center;
    line-height: 40px;
    font-size: 12px;
    text-decoration: underline;
`


const Header: React.FC = () =>  {

    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [infrastructureActive, setInfrastructureActive] = useState(false);
    const [elementHeight, setElementHeight] = useState(568);
    const carouselRef = useRef<any>()
    const location = useLocation();
    const [open, toggle] = useToggle(false)

    const headerRef = useRef(null);
    const homeRef = useRef(null);
    const verseRef = useRef(null);
    const productsRef = useRef(null);
    const partnershipsRef = useRef(null);
    const resourcesRef = useRef(null);
    const learnRef = useRef(null);
    useOnClickOutside(headerRef, open ? toggle : undefined)


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

    useEffect(() => {
        if(open){
            toggle(false)
        }
    },[location.pathname])

    const handleMediaQueryChange = (mediaQuery: any) => {
      if (mediaQuery.matches) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
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
            <Menu.Item>
                <a href="/#/ecosystem">
                Ecosystem
                </a>
            </Menu.Item>
            <Menu.Item>
                <a href="/#/dao">
                Dao Booster Program
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
                <a href="https://github.com/STPDevteam" target="_blank">
                    Github
                </a>
            </Menu.Item>
            <Menu.Item>
                <a href="https://stp-dao.gitbook.io/verse-network/verse-network/master" target="_blank">
                    Documentation
                </a>
            </Menu.Item>
        </Menu>
    )
    const learnMenu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://mirror.xyz/0xB9d761AF53845D1F3C68f99c38f4dB6fcCfB66A1">
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
        <LayoutHeader>
            <HeaderLink target="_blank" href="https://forms.gle/LoAVQXu7HhHh48rJ8">Sign up for STP DAO Booster Program!</HeaderLink>
            <HeaderContent className="header" ref={headerRef}>
                <img className="Logo" src={Logo} alt="logo" />
                <CSSTransition
                    in={!isSmallScreen || open}
                    timeout={350}
                    classNames="NavAnimation"
                    unmountOnExit
                >
                    <nav className="Nav">
                        <Link to="/" className={location.pathname === '/' ? 'active': ''}>Home</Link>
                        <Link to="/tech" className={location.pathname === '/tech' ? 'active': ''}>Tech</Link>
                        {/* <Link to="/ecosystem" className={location.pathname === '/ecosystem' ? 'active': ''}>Ecosystem</Link> */}
                        <Dropdown overlay={ecosystemMenu} trigger={['click']}>
                            <a>
                            Ecosystem <Arrow />
                            </a>
                        </Dropdown>
                        <Link to="/product" className={location.pathname === '/product' ? 'active': ''}>Product</Link>
                        {/* <Link to="/developers" className={location.pathname === '/developers' ? 'active': ''}>Developers</Link> */}
                        <Dropdown overlay={resourcesMenu} trigger={['click']}>
                            <a>
                            Resources <Arrow />
                            </a>
                        </Dropdown>
                        <a href="https://mirror.xyz/0xB9d761AF53845D1F3C68f99c38f4dB6fcCfB66A1" target="_blank">News</a>
                        <Button type="primary"><Link to="/product">APP</Link></Button>
                    </nav>
                </CSSTransition>
                <button onClick={toggle} className="Burger">
                    <MenuOutlined />
                </button>
            </HeaderContent>
            <Modal className="comingModal" visible={isModalVisible} footer={null} closable={false} width={320} centered>
                <img src={Cube} alt="" />
                <p>Coming Soon...</p>
            <Button type="primary" onClick={handleCancel}>Close</Button>
            </Modal>
        </LayoutHeader>
    )
}

export default Header;
