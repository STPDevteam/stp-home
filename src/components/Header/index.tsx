import React, { useEffect, useState, useRef } from "react";
import { Layout, Button, Menu, Dropdown, Modal } from "antd";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import { Link, useLocation } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { useToggle } from "../../hooks/useToggle";
import Logo from "../../assets/images/home/svg/stp-logo.svg";
import Cube from "../../assets/images/home/cube.png";
import { ReactComponent as Arrow } from "../../assets/images/home/svg/arrow.svg";
import "./index.less";

const { Header: LayoutHeader } = Layout;
const HeaderContent = styled.div`
  margin: 0 auto;
  width: 100vw;
  padding: 0 50px;
  height: auto !important;
  background: #1b1aff !important;
  @media (max-width: 767px) {
    padding: 0 20px;
  }
`;

const Header: React.FC = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [, setInfrastructureActive] = useState(false);
  const [elementHeight, setElementHeight] = useState(568);
  useRef<any>();
  const location = useLocation();
  const [open, toggle] = useToggle(false);

  const headerRef = useRef(null);
  useOnClickOutside(headerRef, open ? toggle : undefined);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);
    window.addEventListener("scroll", reveal);
    const revealElement = document.getElementById("infrastructure-list");
    if (revealElement) {
      setElementHeight(revealElement.getBoundingClientRect().height);
    }
    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
      window.removeEventListener("scroll", reveal);
    };
  }, []);

  useEffect(() => {
    if (open) {
      toggle(false);
    }
  }, [location.pathname]);

  const handleMediaQueryChange = (mediaQuery: any) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const reveal = () => {
    const revealElement = document.getElementById("infrastructure-list");
    if (revealElement) {
      const windowHeight = window.innerHeight;
      const elementTop = revealElement.getBoundingClientRect().top;

      if (elementTop < windowHeight - (elementHeight + 50)) {
        setInfrastructureActive(true);
      } else {
        setInfrastructureActive(false);
      }
    }
  };

  const ecosystemMenu = (
    <Menu>
      <Menu.Item>
        <a href="/#/ecosystem">Ecosystem</a>
      </Menu.Item>
      <Menu.Item>
        <a href="/#/dao">Dao Booster Program</a>
      </Menu.Item>
    </Menu>
  );
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
        <a
          href="https://stp-dao.gitbook.io/verse-network/verse-network/master"
          target="_blank"
        >
          Documentation
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <LayoutHeader>
      {/*<HeaderLink target="_blank" href="https://forms.gle/LoAVQXu7HhHh48rJ8">*/}
      {/*  Sign up for STP DAO Booster Program!*/}
      {/*</HeaderLink>*/}
      <HeaderContent className="header" ref={headerRef}>
        <img className="Logo" src={Logo} alt="logo" />
        <CSSTransition
          in={!isSmallScreen || open}
          timeout={350}
          classNames="NavAnimation"
          unmountOnExit
        >
          <nav className="Nav">
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Home
            </Link>
            <Link
              to="/tech"
              className={location.pathname === "/tech" ? "active" : ""}
            >
              Tech
            </Link>
            {/* <Link to="/ecosystem" className={location.pathname === '/ecosystem' ? 'active': ''}>Ecosystem</Link> */}
            <Dropdown overlay={ecosystemMenu} trigger={["click"]}>
              <a>
                Ecosystem <Arrow />
              </a>
            </Dropdown>
            <Link
              to="/product"
              className={location.pathname === "/product" ? "active" : ""}
            >
              Product
            </Link>
            {/* <Link to="/developers" className={location.pathname === '/developers' ? 'active': ''}>Developers</Link> */}
            <Dropdown overlay={resourcesMenu} trigger={["click"]}>
              <a>
                Resources <Arrow />
              </a>
            </Dropdown>
            <a
              href="https://mirror.xyz/0xB9d761AF53845D1F3C68f99c38f4dB6fcCfB66A1"
              target="_blank"
            >
              News
            </a>
            <Button type="primary">
              <Link to="/product">APP</Link>
            </Button>
          </nav>
        </CSSTransition>
        <button onClick={toggle} className="Burger">
          <MenuOutlined />
        </button>
      </HeaderContent>
      <Modal
        className="comingModal"
        visible={isModalVisible}
        footer={null}
        closable={false}
        width={320}
        centered
      >
        <img src={Cube} alt="" />
        <p>Coming Soon...</p>
        <Button type="primary" onClick={handleCancel}>
          Close
        </Button>
      </Modal>
    </LayoutHeader>
  );
};

export default Header;
