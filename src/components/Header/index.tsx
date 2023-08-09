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
import IconDapp from "../../assets/images/header/clique-dapp.svg";
import IconWorkSpace from "../../assets/images/header/clique-workspace.svg";
import IconSDK from "../../assets/images/header/clique-sdk.svg";
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
  padding: 40px 42.5px 68px;
  background: white;
  border-radius: 8px;
  gap: 12px;
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
  color: #23262f;
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
  color: #777e91;
  @media (max-width: 767px) {
    font-size: 12px;
    line-height: 150%;
  }
`;

const MenuBox = styled(Box)`
  width: 522px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 27px 24px;
  gap: 16px;
  cursor: pointer;

  &:hover {
    background: #a7f46a;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export function ProductMenu({
  setDropdownVisible,
}: {
  setDropdownVisible?: (visible: boolean) => void;
}) {
  // export function ProductMenu() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const menuList = [
    {
      icon: IconSDK,
      title: "Clique AW Solutions",
      // link: "",
      text: "Solutions platform for building on-chain worlds unique to any AW project.",
    },
    {
      icon: IconWorkSpace,
      title: "Clique Workspace",
      link: "https://www.myclique.io/governance",
      text: "Collaborative governance tool for planning and building worlds with no code and gas.",
    },
    // {
    //   icon: IconDapp,
    //   title: "Clique Tools",
    //   link: "",
    //   text: "Scale your DAO with the various tools and infrastructure on our platform. Become part of our ecosystem by integrating your DApp with Clique",
    // },
    
  ];

  return (
    <MenuBg>
      {menuList.map((menu, idx) => (
        <MenuBox
          key={idx}
          onClick={() => {
            if (menu.link) {
              window.open(menu.link, "_blank");
            } else {
              if (setDropdownVisible) {
                setDropdownVisible(false);
              }
              setIsModalOpen(true);
            }
          }}
        >
          <img src={menu.icon} />
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
  background: white;
  padding: 12px;
  display: flex;
  left: -12px;
  border-radius: 10px;
  position: relative;
  flex-direction: column;
  @media (max-width: 767px) {
    background: transparent;
    left: 30px;
  }
`;

const HeaderLink = styled("a")`
  font-weight: 500;
  font-size: 16px;
  line-height: 48px;
  padding: 0 16px;
  color: #999fae;
  &:hover {
    color: #1b1aff;
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
    <HeaderLink href="/dao">Clique Launchpad</HeaderLink>
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
    title: "Products",
    subtitle: <ProductMenu />,
  },
  // {
  //   title: "DAOs",
  //   subtitle: daoMenu(),
  // },
  {
    title: "DAOs",
    link: "https://www.myclique.io/daos",
  },

  {
    title: "Ecosystem",
    subtitle: ecosystemMenu,
  },
  {
    title: "Resources",
    subtitle: resourcesMenu,
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
          background: currentPath.pathname.includes("dao")
            ? "white"
            : "#1B1AFF",
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
                Products
                <Arrow />
              </a>
            </Dropdown>
            <a href="https://www.myclique.io/daos" target="_blank">
              DAOs
            </a>
            {/* <Dropdown overlay={daoMenu} trigger={["click"]}>
              <a>
                DAOs
                <Arrow />
              </a>
            </Dropdown> */}
            {/*<Link*/}
            {/*  to="/tech"*/}
            {/*  className={location.pathname === "/tech" ? "active" : ""}*/}
            {/*>*/}
            {/*  Tech*/}
            {/*</Link>*/}
            {/* <Link to="/ecosystem" className={location.pathname === '/ecosystem' ? 'active': ''}>Ecosystem</Link> */}
            <Dropdown overlay={ecosystemMenu} trigger={["click"]}>
              <a>
                Ecosystem <Arrow />
              </a>
            </Dropdown>
            <Dropdown overlay={resourcesMenu} trigger={["click"]}>
              <a>
                Resources <Arrow />
              </a>
            </Dropdown>
            {/* <Link to="/developers" className={location.pathname === '/developers' ? 'active': ''}>Developers</Link> */}
            {/* <a
              href="https://mirror.xyz/0xB9d761AF53845D1F3C68f99c38f4dB6fcCfB66A1"
              target="_blank"
            >
              News
            </a> */}
            <GreenBtn
              onClick={() =>
                window.open("https://www.myclique.io/daos", "_blank")
              }
            >
              Build DAO <ArrowOutwardIcon style={{ color: "#23262F" }} />
            </GreenBtn>
          </nav>
        </CSSTransition>
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
