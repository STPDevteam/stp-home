import React, { useEffect, useState, useRef, useCallback } from "react";
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
import Icon1 from "../../assets/images/header/icon1.svg";
import Icon1A from "../../assets/images/header/icon1A.svg";
import Icon2 from "../../assets/images/header/icon2.svg";
import Icon2A from "../../assets/images/header/icon2A.svg";
import Icon3 from "../../assets/images/header/icon3.svg";
import Icon3A from "../../assets/images/header/icon3A.svg";
import Icon4 from "../../assets/images/header/icon4.svg";
import Icon4A from "../../assets/images/header/icon4A.svg";
import { Box, Typography } from "@mui/material";
import { GreenBtn } from "../../pages/Home/homepage";
import { useHistory } from "react-router";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import MobileMenu from "./mobileMenu";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

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

const MenuBg = styled(Box)`
  padding: 40px 24px;
  background: #141639;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.10);
  @media (max-width: 767px) {
    padding: 0;
    border-radius: 8px;
    gap: 0;
  }
`;

const MenuTitle = styled(Typography)`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #FFF;
  @media (max-width: 767px) {
    font-size: 14px;
    line-height: 24px;
  }
`;
const MenuText = styled(Typography)`
  width: 100%;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #B2B2B2;
  @media (max-width: 767px) {
    font-size: 12px;
    line-height: 150%;
  }
`;

const MenuBox = styled(Box)`
  width: 408px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 8px 0 8px 24px;
  gap: 16px;
  cursor: pointer;
  img {
    display: none;
  }
  &>:first-child  {
    display: block;
  }
  &:hover {
    background: #0049C6;
    &>:first-child  {
      display: none;
    }
    &>img:last-of-type  {
      display: block;
    }
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;
const ImgActive = styled.img`
  
`
const ImgNormal = styled.img`
  
`

export function ProductMenu({
  setDropdownVisible,
}: {
  setDropdownVisible?: (visible: boolean) => void;
}) {
  // export function ProductMenu() {
  const history = useHistory()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const menuList = [
    {
      icon: Icon1,
      iconA: Icon1A,
      title: "L3 on Base (Coming Soon)",
      link: "",
      text: "",
    },
    {
      icon: Icon2,
      iconA: Icon2A,
      title: "Game Portal",
      link: "https://awns.stp.network/",
      route:'',
      text: "",
    },
    {
      icon: Icon3,
      iconA: Icon3A,
      title: "Developer Engine (Coming Soon)",
      link: "",
      text: "",
    },
    {
      icon: Icon4,
      iconA: Icon4A,
      title: "Community",
      link: "https://test-stp-home.netlify.app/cliqueSocial",
      // route:'/cliqueSocial',
      text: "",
    },
  ];

  return (
    <MenuBg>
      {menuList.map((menu, idx) => (
        <MenuBox
          key={idx}
          onClick={() => {
            if (menu.link) {
              window.open(menu.link, "_blank");
            }else if(menu.route) {
              if (setDropdownVisible) {
                setDropdownVisible(false);
              }
              window.scrollTo(0, 0);
              history.push(menu.route)
              
            } else {
              // if (setDropdownVisible) {
              //   setDropdownVisible(false);
              // }
              // setIsModalOpen(true);
            }
          }}
        >
          <ImgNormal src={menu.icon} />
          <ImgActive src={menu.iconA} />
          <Box gap={"4px"}>
            <MenuTitle>{menu.title}</MenuTitle>
            <MenuText>{menu.text}</MenuText>
          </Box>
        </MenuBox>
      ))}
      <Modal
        visible={isModalOpen}
        title="Coming Soon"
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
      >
        <p>This section is still implementing.</p>
        <p>Please come back later</p>
      </Modal>
    </MenuBg>
  );
}

const HeaderMenuBox = styled(Box)`
  background: #141639;
  padding: 12px;
  display: flex;
  left: -12px;
  border-radius: 10px;
  position: relative;
  flex-direction: column;
  box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.10);
  @media (max-width: 767px) {
    /* background: transparent; */
    left: 0px;
  }
`;

const HeaderLink = styled("a")`
  font-weight: 500;
  font-size: 16px;
  line-height: 48px;
  padding: 0 16px;
  color: #fff;
  &:hover {
    color: #0049c6;
  }
`;

const resourcesMenu = (
  <HeaderMenuBox>
    {/* <HeaderLink target="_blank" href="/Verse Network WP.pdf">
      Whitepaper
    </HeaderLink> */}
    <HeaderLink
      href="https://mirror.xyz/0xB9d761AF53845D1F3C68f99c38f4dB6fcCfB66A1"
      target="_blank"
    >
      News
    </HeaderLink>
    <HeaderLink href="https://github.com/STPDevteam" target="_blank">
      Github
    </HeaderLink>
    <HeaderLink
      href="https://stp-dao.gitbook.io/verse-network/verse-network/master"
      target="_blank"
    >
      Documentation
    </HeaderLink>
  </HeaderMenuBox>
);

const ecosystemMenu = (
  <HeaderMenuBox>
    <HeaderLink href="/ecosystem">Ecosystem</HeaderLink>
    {/* <HeaderLink href="/dao">Clique World Launchpad</HeaderLink> */}
  </HeaderMenuBox>
);

const daoMenu = () => {
  const menuList = [
    {
      title: "Chatgpt Dao",
      link: "https://www.myclique.io/governance/daoInfo/137/0x04f40b00d50e90adf63d5ef3eb206c27eb21bcc7",
    },
    {
      title: "Bubble",
      link: "https://www.myclique.io/governance/daoInfo/137/0x1d78b7713caf654a6ce17349557017beeb39e8b9",
    },
    {
      title: "Sonet",
      link: "https://www.myclique.io/governance/daoInfo/137/0xf515548f7c6b7ec624517dca51eeed16f4e20b08",
    },
  ];
  return (
    <HeaderMenuBox>
      {menuList.map((menu, idx) => (
        <HeaderLink target="_blank" href={menu.link}>
          {menu.title}
        </HeaderLink>
      ))}
    </HeaderMenuBox>
  );
};
const DaoLink = () => {
  return (
    <HeaderMenuBox>
      <HeaderLink target="_blank" href="https://www.myclique.io/daos">
        DAOs
      </HeaderLink>
    </HeaderMenuBox>
  );
};
export const MenuList: {
  title: string;
  subtitle?: ReactJSXElement;
  link?: string;
}[] = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Clique",
      subtitle: <ProductMenu />,
    },
    // {
    //   title: "DAOs",
    //   subtitle: daoMenu(),
    // },
    // {
    //   title: "DAOs",
    //   link: "https://www.myclique.io/daos",
    // },

    {
      title: "Resources",
      subtitle: resourcesMenu,
    },
    {
      title: "Ecosystem",
      link: "/ecosystem",
      // subtitle: ecosystemMenu,
    },
    // {
    //   title: "News",
    //   link: "https://mirror.xyz/0xB9d761AF53845D1F3C68f99c38f4dB6fcCfB66A1",
    // },
  ];

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownVisible, setVisible] = useState(false);

  const handleMobileMenueDismiss = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);
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

  return (
    <LayoutHeader
      style={{
        zIndex: 999,
        width: "100vw",
        height: "auto !important",
        background: "transparent",
        overflowX: "hidden",
        display: currentPath.pathname.includes("awns")?'none':'block'
      }}
    >
      {/*<HeaderLink target="_blank" href="https://forms.gle/LoAVQXu7HhHh48rJ8">*/}
      {/*  Sign up for STP DAO Booster Program!*/}
      {/*</HeaderLink>*/}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onDismiss={handleMobileMenueDismiss}
      />
      <HeaderContent
        className="header"
        ref={headerRef}
        style={{
          background: currentPath.pathname.includes("ecosystem")
            ? "#2524de"
            : "#000228",
          color: currentPath.pathname.includes("dao")
            ? "#000"
            : "#fff",
        }}
      >
        <img
          className="Logo"
          src={currentPath.pathname.includes("dao") ? DarkLogo : Logo}
          alt="logo"
          onClick={() => {
            history.push("/");
          }}
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
            </Link>
            <Dropdown
              overlay={<ProductMenu setDropdownVisible={setVisible} />}
              visible={dropdownVisible}
              trigger={["click"]}
              onVisibleChange={(flag) => {
                setVisible(flag);
              }}
            >
              <a>
                Clique
                <Arrow />
              </a>
            </Dropdown>
            {/* <a href="https://www.myclique.io/daos" target="_blank">
              DAOs
            </a> */}
           <Dropdown overlay={resourcesMenu} trigger={["click"]}>
              <a >
                Resources <Arrow />
              </a>
            </Dropdown>
            <Link to="/ecosystem" className={location.pathname === "/ecosystem" ? "active" : ""}>
              Ecosystem
            </Link>
            {/* <Dropdown overlay={resourcesMenu} trigger={["click"]}>
              <a >
                Resources <Arrow />
              </a>
            </Dropdown> */}

          </nav>
         
        </CSSTransition>
        <GreenBtn
          className="BuildDao"
          onClick={() =>
            window.open("https://www.myclique.io/daos", "_blank")
          }
        >
         Build on Clique 
         {/* <ArrowOutwardIcon style={{ color: "#23262F" }} /> */}
        </GreenBtn>
        <button
          onClick={() => {
            setMobileMenuOpen((prevState) => !prevState);
          }}
          className="Burger"
        >
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
