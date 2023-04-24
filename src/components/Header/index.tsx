import React, { useEffect, useState, useRef } from "react";
import { Layout, Button, Menu, Dropdown, Modal } from "antd";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import { Link, useLocation } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { useToggle } from "../../hooks/useToggle";
import Logo from "../../assets/images/home/svg/stp-logo.svg";
import DarkLogo from "../../assets/images/logo.png";
import Cube from "../../assets/images/home/cube.png";
import { ReactComponent as Arrow } from "../../assets/images/home/svg/arrow.svg";
import "./index.less";
import IconDapp from "../../assets/images/header/clique-dapp.svg";
import IconWorkSpace from "../../assets/images/header/clique-workspace.svg";
import IconSDK from "../../assets/images/header/clique-sdk.svg";
import { Box, Typography } from "@mui/material";
import { GreenBtn } from "../../pages/Home/homepage";
import { useHistory } from "react-router";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const { Header: LayoutHeader } = Layout;
const HeaderContent = styled.div`
  margin: 0 auto;
  width: 100vw;
  z-index: 3;
  padding: 0 50px;
  height: auto !important;
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
  const currentPath = useLocation();
  const history = useHistory();

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

  const MenuTitle = styled(Typography)`
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #23262f;
  `;
  const MenuText = styled(Typography)`
    width: 100%;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #777e91;
  `;

  const ecosystemMenu = () => {
    const menuList = [
      {
        icon: IconWorkSpace,
        title: "Clique Workspace",
        link: "",
        text: " Web3 community workspace for all builders with no code and gas required",
      },
      {
        icon: IconDapp,
        title: "Clique DApp Store",
        link: "",
        text: "Scale your DAO with the various tools and infrastructure on our platform. Become part of our ecosystem by integrating your DApp with Clique",
      },
      {
        icon: IconSDK,
        title: "Clique SDK",
        link: "",
        text: "Create a customized workspace platform for free with Clique SDK",
      },
    ];
    return (
      <Menu style={{ padding: "80px 42.5px 68px" }}>
        {menuList.map((menu, idx) => (
          <Box
            key={idx}
            sx={{
              width: "522px",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              padding: "27px 24px",
              gap: "16px",
              marginBottom: "12px",
              ":hover": {
                background: "#A7F46A",
              },
            }}
          >
            <img src={menu.icon} />
            <Box gap={"4px"}>
              <MenuTitle>{menu.title}</MenuTitle>
              <MenuText>{menu.text}</MenuText>
            </Box>
          </Box>
        ))}
      </Menu>
    );
  };
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
    <LayoutHeader
      style={{
        zIndex: 3,
        width: "100vw",
        height: "auto !important",
        background: "transparent",
        overflowX: "hidden",
      }}
    >
      {/*<HeaderLink target="_blank" href="https://forms.gle/LoAVQXu7HhHh48rJ8">*/}
      {/*  Sign up for STP DAO Booster Program!*/}
      {/*</HeaderLink>*/}
      <HeaderContent
        className="header"
        ref={headerRef}
        style={{
          background: currentPath.pathname.includes("dao")
            ? "white"
            : "#1B1AFF",
        }}
      >
        <img
          className="Logo"
          src={currentPath.pathname.includes("dao") ? DarkLogo : Logo}
          alt="logo"
        />
        <CSSTransition
          in={!isSmallScreen || open}
          timeout={350}
          classNames="NavAnimation"
          unmountOnExit
        >
          <nav className="Nav">
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Home
            </Link>{" "}
            <Dropdown overlay={ecosystemMenu} trigger={["click"]}>
              <a>
                Product
                <Arrow />
              </a>
            </Dropdown>
            {/*<Link*/}
            {/*  to="/tech"*/}
            {/*  className={location.pathname === "/tech" ? "active" : ""}*/}
            {/*>*/}
            {/*  Tech*/}
            {/*</Link>*/}
            {/* <Link to="/ecosystem" className={location.pathname === '/ecosystem' ? 'active': ''}>Ecosystem</Link> */}
            <Dropdown overlay={resourcesMenu} trigger={["click"]}>
              <a>
                DAOs <Arrow />
              </a>
            </Dropdown>
            <Dropdown overlay={resourcesMenu} trigger={["click"]}>
              <a>
                Resources <Arrow />
              </a>
            </Dropdown>
            <Link
              to="/ecosystem"
              className={location.pathname === "/product" ? "active" : ""}
            >
              Ecosystem
            </Link>{" "}
            {/* <Link to="/developers" className={location.pathname === '/developers' ? 'active': ''}>Developers</Link> */}
            <a
              href="https://mirror.xyz/0xB9d761AF53845D1F3C68f99c38f4dB6fcCfB66A1"
              target="_blank"
            >
              News
            </a>
            <GreenBtn
              onClick={() =>
                window.open("https://www.myclique.io/creator", "_blank")
              }
            >
              Build DAO <ArrowOutwardIcon style={{ color: "#23262F" }} />
            </GreenBtn>
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
