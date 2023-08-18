import { Box, Grid, Stack, Tab, Tabs, Typography } from "@mui/material";
import styled from "styled-components";
import { Button, Divider } from "antd";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import BottomCircle from "../../assets/images/home/svg/header-bottom-circle.svg";
import TopCircle from "../../assets/images/home/svg/header-top-circle.svg";
import DappStorePic from "../../assets/images/home/svg/dapp-store.svg";
import CliqueSdkPic from "../../assets/images/home/svg/clique-sdk.svg";
import DataBg from "../../assets/images/home/svg/data-bg.svg";
import Label1 from "../../assets/images/home/svg/label1.svg";
import { ReactComponent as IconStart } from "../../assets/images/home/svg/label1.svg";
import { ReactComponent as UserIcon } from "../../assets/images/home/svg/usericon.svg";
import { ReactComponent as FileIcon } from "../../assets/images/home/svg/file-icon.svg";
import { ReactComponent as AlarmIcon } from "../../assets/images/home/svg/alarmicon.svg";
import UserActive from "../../assets/images/home/svg/user-active.svg";
// import AlarmIcon from "../../assets/images/home/svg/alarmicon.svg";
// import FileIcon from "../../assets/images/home/svg/file-icon.svg";

import BuildCircle from "../../assets/images/home/svg/elips.svg";
import StpLogo from "../../assets/images/home/svg/stp-logo.svg";
import InfrastructurePic from "../../assets/images/home/infrastructure.png";
import InfrastructureSmPic from "../../assets/images/home/infrastructure-sm.svg";
import Initiatives2 from "../../assets/images/home/initiatives2.png";
import Initiatives3 from "../../assets/images/home/initiatives3.png";
import InitiativesGpt from "../../assets/images/home/initiatives-chat-gpt.png";
import Email from "../../assets/images/socialmedia/email.svg";
import Cylinder from "../../assets/images/socialmedia/cylinder.svg";
import Medium from "../../assets/images/socialmedia/medium.svg";
import Tele from "../../assets/images/socialmedia/telegramsvg.svg";
import Twitter from "../../assets/images/socialmedia/twitter.svg";
import Wechat from "../../assets/images/socialmedia/wechat.svg";
import SmallStar from "../../assets/images/home/svg/small-star.svg";
import InfEllipse1 from "../../assets/images/home/svg/infrastruc-ellipse-left-1.svg";
import InfEllipse2 from "../../assets/images/home/svg/infrastruc-ellipse-left-2.svg";
import LearnCommunity from "../../assets/images/home/svg/learn-community.svg";
import LearnCreateDao from "../../assets/images/home/svg/learn-create-dao.svg";
import LearnCreateToken from "../../assets/images/home/svg/learn-create-token.svg";
import LearnOnChain from "../../assets/images/home/svg/learn-on-chian.svg";
import ArrowUpRight from "../../assets/images/home/svg/arrow-up-right.svg";
import React, { useMemo, useState } from "react";
import { useHistory } from "react-router";
import useBreakpoint from "../../hooks/useBreakpoint";
import { useTotal } from "../../hooks/useHomepage";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css";
import "swiper/modules/autoplay/autoplay.min.css";
import "swiper/modules/autoplay/autoplay.less";
import "swiper/modules/autoplay/autoplay.js";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/navigation/navigation.js";
import "swiper/modules/navigation/navigation.less";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Autoplay } from "swiper";
import { Navigation } from "swiper";

import Base from "../../assets/images/home/base.svg";
import Chainlink from "../../assets/images/ecosystem/Chainlink.png";
import GnosisSafe from "../../assets/images/ecosystem/GnosisSafe.png";
import Thegraph from "../../assets/images/ecosystem/Thegraph.png";
import Polygon from "../../assets/images/ecosystem/Polygon.png";
import Klaytn from "../../assets/images/ecosystem/Klaytn.png";
import Rai from "../../assets/images/ecosystem/raiFinance.png";
import Vee from "../../assets/images/ecosystem/Vee.png";
import Cere from "../../assets/images/ecosystem/Cere.png";
import Define from "../../assets/images/ecosystem/Define.png";
import Deesse from "../../assets/images/ecosystem/Deesse.png";
import Layer3 from "../../assets/images/ecosystem/Layer3.png";
import Meter from "../../assets/images/ecosystem/Meter.png";
import Voltswap from "../../assets/images/ecosystem/Voltswap.png";
import Cobak from "../../assets/images/ecosystem/cobak.png";
import MovieBloc from "../../assets/images/ecosystem/moviebloc.png";
import Search from "../../assets/images/ecosystem/Search.png";
import Binance from "../../assets/images/ecosystem/binance.png";
import BinanceListf from "../../assets/images/ecosystem/binanceList.png";
import Bithumb from "../../assets/images/ecosystem/bithumb.png";
import CoinDCX from "../../assets/images/ecosystem/coinDCX.png";
import CoinOne from "../../assets/images/ecosystem/coinOne.png";
import DeepDAO from "../../assets/images/ecosystem/deepDAO.png";
import Gate from "../../assets/images/ecosystem/gate.png";
import Her from "../../assets/images/ecosystem/her.png";
import HuoBi from "../../assets/images/ecosystem/huobi.png";
import Immunefi from "../../assets/images/ecosystem/immunefi.png";
import Jenny from "../../assets/images/ecosystem/Jenny.png";
import Knn from "../../assets/images/ecosystem/knn.png";
import MapPro from "../../assets/images/ecosystem/mapPro.png";
import Poloniex from "../../assets/images/ecosystem/poloniex.png";
import PolygonDAO from "../../assets/images/ecosystem/polygonDAO.png";
import PushPro from "../../assets/images/ecosystem/pushPro.png";
import UpBit from "../../assets/images/ecosystem/upbit.png";
import Zeta from "../../assets/images/ecosystem/zeta.png";
import ZkEVM from "../../assets/images/ecosystem/zkEvm.png";
import Learn1 from "../../assets/images/home/Learn1.png";
import Learn2 from "../../assets/images/home/Learn2.png";
import Learn3 from "../../assets/images/home/Learn3.png";
import Learn4 from "../../assets/images/home/Learn4.png";
import Learn5 from "../../assets/images/home/Learn5.png";
import Learn6 from "../../assets/images/home/Learn6.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Swiper as SwiperClass } from "swiper/types";
import Item from "antd/lib/list/Item";
import WechatQR from "../../assets/images/home/QR.jpeg";
import infrastructure from "../../assets/images/home/svg/infrastructure.svg";
import qrcode from "../../assets/images/home/svg/qrcode.svg";
import dataForm from "../../assets/images/home/svg/dataForm.svg";
import more from "../../assets/images/home/svg/more.svg";
import identity from "../../assets/images/home/identity.png"
import decorationStar from "../../assets/images/home/svg/decorationStar.svg"
import workspaceImg from "../../assets/images/home/doc_type.png"
import workspaceImg1 from "../../assets/images/home/workspace1.png"
import workspaceImg2 from "../../assets/images/home/workspace2.png"
import workspaceImg3 from "../../assets/images/home/workspace3.png"
import workspaceImg4 from "../../assets/images/home/workspace4.png"

export const ContentWrapper = styled(Box)`
  position: absolute;
  width: 100%;
  top: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;
`;
const Content1 = styled.div`
  width: 100%;
  background: linear-gradient(180deg, #2524E0 0%, #1414A9 100%);
`
export default function Homepage() {
  return (
    <ContentWrapper>
      <Content1>
        <Head />
        <Identity />
        <Identity2 />
        <Initiatives />
        <Data />
      </Content1>
      <CliqueContent />
      {/* <Infrastructure /> */}
      <Ecosystem />
      <Learn />
      <BuildWithUs />
      <Footer />
    </ContentWrapper>
  );
}

export const HeadBox = styled(Box)`
  /* background: #1b1aff; */
  position: relative;
  /* height: 900px; */
  width: 100%;
  padding-left: 252px;
  @media (max-width: 767px) {
    padding-left: 20px;
    height: calc(100vh - 48px);
    padding-bottom: 79px;
  }
`;
export const HeadH1 = styled(Typography)`
  font-family: "Urbanist";
  font-style: normal;
  font-weight: 600;
  font-size: 90px;
  line-height: 110px;
  padding-top: 179px;
  color: #ffffff;

  @media (max-width: 767px) {
    font-size: 48px;
    line-height: 56px;
  }
`;
export const HeadText = styled(Typography)`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  margin-top: 48px;
  font-size: 28px;
  line-height: 40px;
  color: #ececec;
  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 24px;
    margin-top: 40px;
  }
`;
export const GreenBtn = styled(Button)`
  display: flex;
  border: 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  font-weight: 700;
  font-size: 16px;
  height: 56px;
  line-height: 24px;
  gap: 8px;
  background: #a7f46a;
  border-radius: 8px;
  @media (max-width: 767px) {
    height: 40px;
    font-size: 14px;
    line-height: 150%;
  }
`;
const BottomCircleImg = styled("img")`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0%);
  bottom: 0;
`;

const TopCircleImg = styled("img")`
  position: absolute;
  right: -10px;
  top: 0;
  z-index: 4; // header nav is 3
  @media (max-width: 767px) {
    position: absolute;
    right: -56px;
    top: 20px;
    transform: rotate(15deg);
    width: 50%;
  }
`;

function Head() {
  const history = useHistory();
  return (
    <HeadBox>
      <HeadH1>
      Opening The Portal<br />
      to Autonomous Worlds
      </HeadH1>
      <HeadText>
        Our mission is to build and scale an identity layer for<br /> Autonomous Worlds.
      </HeadText>
      {/* <GreenBtn
        style={{ marginTop: "40px" }}
        onClick={() => window.open("https://www.myclique.io/creator", "_blank")}
      >
        Coming Soon
        <ArrowOutwardIcon />
      </GreenBtn> */}
      {/* <BottomCircleImg src={BottomCircle} /> */}
      <TopCircleImg src={TopCircle} />

    </HeadBox>
  );
}
const IdentityBox = styled.div`
  margin-top: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* background: #1b1aff; */
  @media (max-width: 767px) {
    flex-direction: column;
    margin-top: 0px;
  }
  
`
const IdentityImage = styled.img`
  margin-left: -200px;
  margin-right:40px;
  @media (max-width: 767px) {
    display: block;
    margin: 0;
    width: 100%;
  }
`
const IdentityContent = styled.div`
  max-width: 480px;
  font-family: Urbanist;
  color: #fff;
  @media (max-width: 767px) {
    width: 100%;
    padding: 20px;
  }
`
const IdentityTitle = styled.div`
  font-family: Urbanist;
  font-size: 56px;
  font-weight: 700;
  line-height: 62px;
  letter-spacing: 2px;
  display: flex;
  justify-content: center;
  @media (max-width: 767px) {
    font-size: 32px;
    line-height: 1.2;
  }
`
const IdentityText = styled.div`
  margin-top: 40px;
  font-size: 28px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 2px;
  align-items: center;
  @media (max-width: 767px) {
      font-size: 20px;
      line-height: 1.2;
  }
`
const IdentityIcons = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
  margin-left: 20px;
  color: #fff;
  @media (max-width: 767px) {
    width: 100%;
    flex-direction: column;
    margin-left: 0px;
  }
`
const IconsBox = styled.div`
  width: 240px;
  height: 240px;
  margin: 15px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  background: linear-gradient(180deg, rgba(32, 31, 218, 0.00) 0%, #1A19D8 54.17%);
  @media (max-width: 767px) {
    width: 240px;
    height: 240px;
    margin: 6px auto;
  }
`
const Icon = styled.img`
  width: 70px;
  @media (max-width: 767px) {
    width: 36px;
  }
`
const IconName = styled.div`
  margin-top: 30px;
`
const Identity2Box = styled.div`
  max-width: 1440px;
  margin: 160px auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: #1b1aff; */
  @media (max-width: 767px) {
    flex-direction: column;
    margin-top: 60px;
  }
  
`
const Identity2Content = styled.div`
  align-items: center;
  font-family: Urbanist;
  color: #fff;
  @media (max-width: 767px) {
    width: 100%;
    padding: 20px;
  }
`
const Identity2Text = styled.div`
  margin-top: 10px;
  font-size: 28px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 2px;
  align-items: center;
  display: flex;
  justify-content: center;
  @media (max-width: 767px) {
      font-size: 20px;
      line-height: 1.2;
  }
`
function Identity() {
  return (
    <IdentityBox>
      <IdentityImage src={identity} width={700}></IdentityImage>
      <IdentityContent>
        <IdentityText>We envision a multi-layer identity for every user traversing in the ever-growing universe of Autonomous Worlds. </IdentityText>
        <IdentityText>We believe in unlocking individualism by contributing to elevated forms of on-chain identity.</IdentityText>
      </IdentityContent>
    </IdentityBox>
  )
}
function Identity2() {
  return (
    <Identity2Box>
      <Identity2Content>
        <IdentityTitle>STP will empower AW builders </IdentityTitle>
        <Identity2Text>Leverage frontier technology in Autonomous Worlds, Account Abstraction and AI</Identity2Text>
      </Identity2Content>
      <IdentityIcons>
        <IconsBox>
          <Icon src={infrastructure}></Icon>
          <IconName>Infrastructure</IconName>
        </IconsBox>
        <IconsBox>
          <Icon src={qrcode}></Icon>
          <IconName>Toolkit</IconName>
        </IconsBox>
        <IconsBox>
          <Icon src={dataForm}></Icon>
          <IconName>Data APIs</IconName>
        </IconsBox>
      </IdentityIcons>
    </Identity2Box>
  )
}

const InfraH1 = styled(Typography)`
  font-family: "Urbanist";
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 90px;
  color: #1b1aff;
  @media (max-width: 767px) {
    font-size: 48px;
    line-height: 56px;
  }
`;

const InfraSubH1 = styled(Typography)`
  font-family: "Urbanist";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 110%;
  color: #1b1aff;
  @media (max-width: 767px) {
    font-size: 20px;
    line-height: 30px;
  }
`;

const InfraH2 = styled(Typography)`
  font-family: "Urbanist";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 110%;
  margin-top: 48px;
  color: #23262f;
  @media (max-width: 767px) {
    font-size: 20px;
    line-height: 30px;
    margin-top: 40px;
  }
`;

const InfraText = styled(Typography)`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  margin-top: 8px;
  color: #777e91;
  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 24px;
  }
`;
const InfraBoxBg = styled(Box)`
  padding: 27px 30px 30px;
  width: 100%;
  background: #f8fffe;
  border: 1px solid #a3a3a3;
  height: 100%;
  border-radius: 16px;
  @media (max-width: 767px) {
    padding: 24px;
  }
`;

const InfraBoxTitle = styled(Typography)`
  height: 64px;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #23262f;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  @media (max-width: 767px) {
    font-size: 20px;
    line-height: 32px;
  }
`;

const InfraBoxContent = styled(Typography)`
  max-height: 72px;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin-top: 11px;
  color: #777e91;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  @media (max-width: 767px) {
    font-size: 14px;
    line-height: 150%;
  }
`;

function InfraBox({ title, content }: { title: string; content: string }) {
  return (
    <InfraBoxBg>
      <InfraBoxTitle>{title}</InfraBoxTitle>
      <InfraBoxContent>{content}</InfraBoxContent>
    </InfraBoxBg>
  );
}

const CliqueBox = styled(Box)`
  position: relative;
  padding: 40px;
  background: rgba(240, 240, 255, 0.4);
  border: 1px solid #a3a3a3;
  border-radius: 16px;
`;

const CliqueTitle = styled(Typography)`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 110%;
  margin-bottom: 24px;
  color: #23262f;
  @media (max-width: 767px) {
    font-size: 20px;
    line-height: 30px;
  }
`;
const CliqueText = styled(Typography)`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #777e91;
  min-height: 72px;
  @media (max-width: 767px) {
    font-size: 16px;
    min-height: 0;
    line-height: 24px;
  }
`;
const CliqueImg = styled("img")`
  width: 100%;
  height: 341px;
  @media (max-width: 767px) {
    height: auto;
  }
`;

function DappStore() {
  return (
    <CliqueBox>
      <CliqueTitle>DApp Store</CliqueTitle>
      <CliqueText>
        Scale your DAO with unlimited ecosystem tools and infrastructures.
        Become part of our ecosystem by integrating your dApp with Clique.
      </CliqueText>
      <CliqueImg src={DappStorePic} />
    </CliqueBox>
  );
}

function CliqueSdk() {
  return (
    <CliqueBox style={{ background: "rgba(237, 252, 255, 0.4)" }}>
      <CliqueTitle>SDK</CliqueTitle>
      <CliqueText>
        Create a customized workspace platform for free with Clique SDK.
      </CliqueText>
      <CliqueImg src={CliqueSdkPic} />
    </CliqueBox>
  );
}

const VideoContent = styled(Box)`
  width: 1150px;
  height: 525px;
  margin: 120px auto;

  @media (max-width: 767px) {
    width: 100%;
    height: 320px;
    margin: 80px auto;
  }

  iframe {
    border: none;
  }
`;

const InfrastructureBox = styled(Box)`
  width: 100%;
  padding: 120px;
  max-width: 1441px;
  position: relative;

  @media (max-width: 767px) {
    padding: 80px 24px 0px;
  }
`;

const InfraStar = styled("img")`
  position: absolute;
  top: 0px;
  /* left: 67px; */
  right: 0px;
`;

const Ellipse = styled("img")`
  position: absolute;
  top: -100px;
  left: 0;
`;
const BottomStar = styled("img")`
  position: absolute;
  top: 30px;
  left: -30px;
`;

function Infrastructure() {
  const isDownSm = useBreakpoint("sm");
  const CliqueBox = [
    {
      title: "Setup your team framework",
      content:
        "Unleash core members and reward  their contribution based on a customized framework.",
    },
    {
      title: "Legitimize your governance participation",
      content:
        "Encourage community engagement through incentives and social credibility.",
    },
    {
      title: "Manage and execute your tasks",
      content:
        "Enhance teamwork and productivity with Web3-centric tools that turn idea into execution.",
    },
  ];

  return (
    <Box
      position={"relative"}
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
      sx={{
        overflowX: "hidden",
      }}
    >
      {!isDownSm && <InfraStar src={SmallStar} />}
      <Ellipse src={InfEllipse1} />
      <Ellipse src={InfEllipse2} />
      <InfrastructureBox>
        <Box
          display={"flex"}
          alignItems={"baseline"}
          gap={"16px"}
          flexDirection={"column"}
        >
          <InfraH1>Ecosystem Tools & Infrastructure</InfraH1>
          <InfraSubH1>Clique: The All-in-One Platform</InfraSubH1>
        </Box>
        <InfraH2>Workspace</InfraH2>
        <InfraText>
          Web3 community workspace for all builders with no code and gas
          required.
        </InfraText>
        <Grid
          container
          mt={isDownSm ? "0" : "24px"}
          spacing={"28px"}
          zIndex={2}
        >
          {CliqueBox.map((c, idx) => (
            <Grid item sm={12} md={4}>
              <InfraBox title={c.title} content={c.content} />
            </Grid>
          ))}
        </Grid>
        <img
          style={{ marginTop: "40px", width: "100%" }}
          src={isDownSm ? InfrastructureSmPic : InfrastructurePic}
        />
        <Grid
          container
          spacing={isDownSm ? "24px" : "42px"}
          direction={isDownSm ? "column" : "row"}
          position={"relative"}
          mb={"48px"}
        >
          {!isDownSm && <BottomStar src={SmallStar} />}
          <Grid item sm={12} md={6}>
            <DappStore />
          </Grid>
          <Grid item sm={12} md={6}>
            <CliqueSdk />
          </Grid>
        </Grid>
        {false && (
          <VideoContent>
            <iframe
              title="youtube"
              src="https://www.youtube.com/embed/ZEDNduNedCc?autoplay=1"
              height="100%"
              width="100%"
            ></iframe>
          </VideoContent>
        )}
      </InfrastructureBox>
    </Box>
  );
}
const CliqueContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 100px;
`
const Box1 = styled.div`
  position: relative;
  width: 1440px;
  margin: auto;
  display: flex;
  justify-content: center;
  @media (max-width: 767px) {
    width: 100vw;
    padding: 20px;
    flex-direction: column;
  }
`
const Box1Star = styled.img`
  position: absolute;
  top: -60px;
  right: 80px;
  transform: rotate(164.072deg);
`
const ContentLeft = styled.div`
  max-width: 400px;
  color: #23262F;
  margin-right: 40px;
`
const CliqueContentTitle = styled.div`
  font-family: Urbanist;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (max-width: 767px) {
    font-size: 40px;
  }
`
const CliqueContentSubTitle = styled.div`
  margin-top: 40px;
  font-family: Urbanist;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.4;
  @media (max-width: 767px) {
    font-size: 24px;
    margin-top: 20px;
  }

`
const CliqueContentText = styled.div`
  margin-top: 60px;
  font-family: Urbanist;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  @media (max-width: 767px) {
      margin-top: 20px;
  }
`
const ContentRight = styled.div`
  display: flex;
  @media (max-width: 767px) {
    flex-direction: column;
    margin-top: 20px;
  }
`
const Cards = styled.div`
  margin-right: 26px;
  @media (max-width: 767px) {
    margin-right: 0px;
  }
`
const Card = styled.div`
  padding: 32px 40px;
  border-radius: 20px;
  border: 1px solid #C6DCF0;
  background: #F8FCFF;
  @media (max-width: 767px) {
    padding: 22px;
  }
`
const Card1 = styled(Card)`
  width: 376px;
  height: 230px;
  margin-bottom: 32px;
  @media (max-width: 767px) {
    width: 100%;
    height: auto;
  }
`
const Card2 = styled(Card)`
  width: 376px;
  height: 232px;
  margin-bottom: 32px;
  @media (max-width: 767px) {
    width: 100%;
    height: auto;
  }

`
const Card3 = styled(Card)`
  width: 376px;
  height: 232px;
  margin-bottom: 32px;
  @media (max-width: 767px) {
    width: 100%;
    height: auto;
  }

`
const Card4 = styled(Card)`
  width: 376px;
  height: 180px;
  margin-bottom: 32px;
  @media (max-width: 767px) {
    width: 100%;
    height: auto;
  }

`
const CardTitle = styled.div`
  font-family: Urbanist;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px;
`
const CardText = styled.div`
  margin-top: 18px;
  color: var(--word-color, #3F5170);
  font-family: Urbanist;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px; 
`
const Box2 = styled.div`
  margin-top: 140px;
  display: flex;
  @media (max-width: 767px) {
    width: 100vw;
    margin-top: 20px;
    padding: 20px;
    flex-direction: column;
  }
`
const Box2Img = styled.img`
  width: 823px;
  @media (max-width: 767px) {
    width: 100%;
  }
`
const ContentLeft2 = styled.div`
  margin-right: 40px;
  @media (max-width: 767px) {
    margin-right: 0px;
  }
`
const ContentRight2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  @media (max-width: 767px) {
    width: 100%;
  }
`
const BlueCard = styled.div`
  margin-bottom: 20px;
  padding: 36px;
  border-radius: 20px;
  border: 1px solid #C6DCF0;
  background: #F8FCFF;
`
const Box3 = styled.div`
  width: 1440px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px auto 0;
  @media (max-width: 767px) {
    width: 100%;
    flex-direction: column;
    padding: 20px;
  }
`
const Box3Card = styled.div`
  width: 580px;
  margin-right: 40px;
  margin-bottom: 20px;
  padding: 38px;
  border-radius: 20px;
  border: 1px solid #C6DCF0;
  background: #F8FCFF;
  @media (max-width: 767px) {
    width: 100%;
  }
`
const Box3CardBlue = styled(Box3Card)`
  position: relative;
  padding: 38px;
  border-radius: 20px;
  border: 1px solid #C6DCF0;
  background: #F8FCFF;
`
const Box3CardPink = styled(Box3Card)`
  position: relative;
  padding: 38px 36px 28px;
  border-radius: 20px;
  border: 1px solid #D9C6F0;
  background: #FDF8FF;
  @media (max-width: 767px) {
    position: static;
  }
`
const ComingSoonBtn = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  border-radius: 12px;
  padding: 8px 15px;
  @media (max-width: 767px) {
    display: none;
  }
`
const ComingSoonBtnBlue = styled(ComingSoonBtn)`
  border: 1px solid #C8D9D6;
  background: #EDF9FB;
  color: #93BFB7;
  
`
const ComingSoonBtnPink = styled(ComingSoonBtn)`
  border: 1px solid #9E9EE8;
  background: #EFEFFF;
  color: #9E9EE8;
`
const ComingSoonBtnH5 = styled.div`
  border-radius: 12px;
  padding: 8px 15px;
  display: none;
  @media (max-width: 767px) {
    display: block;
    margin-top: 10px;
    text-align: center;
  }
`
const ComingSoonBtnBlueH5 = styled(ComingSoonBtnH5)`
  border: 1px solid #C8D9D6;
  background: #EDF9FB;
  color: #93BFB7;
  
`
const ComingSoonBtnPinkH5 = styled(ComingSoonBtnH5)`
  border: 1px solid #9E9EE8;
  background: #EFEFFF;
  color: #9E9EE8;
`
const Box3CardImg = styled.img`
  width:100%;
`
const Box3CardTitle = styled.div`
  color: var(--main, #23262F);
  font-family: Urbanist;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.1;
`
const Box3CardTxt = styled.div`
  padding: 20px;
  color: var(--word-color, #3F5170);
  font-family: Urbanist;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
`
const Box3CardUl = styled.ul`
  margin-top: 20px;
`
const Box3CardLi = styled.li`
  color: #3F5170;
  font-family: DM Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
`
function CliqueContent() {
  const cliqueAwSolutions = {
    title: 'Clique AW Solutions',
    subTitle: 'Build on-chain worlds unique to any AW project with a full suite of solutions.',
    // text: 'Seamlessly unwind and power world-building through these solutions'
  }
  const cardList = [
    {
      title: 'Identity Engine',
      content: 'Onboard users across worlds in seconds with gasless transactions'
    },
    {
      title: 'Account Generator',
      content: 'One-click on-chain activity using account abstraction'
    },
    {
      title: 'Data APIs',
      content: 'Query and build on-chain data across any chain using AI assistance'
    },
    {
      title: 'Asset Portal',
      content: 'Buy, sell & hold any on-chain asset through custom marketplaces'
    },
  ]
  const cliqueWorkspace = {
    title: 'Clique Workspace',
    subTitle: 'Evolve DAOs for Autonomous Worlds',
    text: 'Collaborative governance tool for planning and building on-chain worlds with no code and gas.'
  }
  return (
    <CliqueContentBox>
      <Box1>
        {<Box1Star src={decorationStar} />}
        <Ellipse src={InfEllipse1} />
        <Ellipse src={InfEllipse2} />
        <ContentLeft>
          <CliqueContentTitle>{cliqueAwSolutions.title}</CliqueContentTitle>
          <CliqueContentSubTitle>{cliqueAwSolutions.subTitle}</CliqueContentSubTitle>
          {/* <CliqueContentText>{cliqueAwSolutions.text}</CliqueContentText> */}
          <GreenBtn style={{ marginTop: '40px' }}>Coming Soon</GreenBtn>
        </ContentLeft>
        <ContentRight>
          <Cards>
            <Card1>
              <CardTitle>{cardList[0].title}</CardTitle>
              <CardText>{cardList[0].content}</CardText>
            </Card1>
            <Card1>
              <CardTitle>{cardList[1].title}</CardTitle>
              <CardText>{cardList[1].content}</CardText>
            </Card1>
          </Cards>
          <Cards>
            <Card1>
              <CardTitle>{cardList[2].title}</CardTitle>
              <CardText>{cardList[2].content}</CardText>
            </Card1>
            <Card1>
              <CardTitle>{cardList[3].title}</CardTitle>
              <CardText>{cardList[3].content}</CardText>
            </Card1>
          </Cards>
        </ContentRight>
      </Box1>
      <Box3>
        <Box3CardPink>
          <ComingSoonBtnPink>Coming Soon</ComingSoonBtnPink>
          <Box3CardTitle>Identity Engine</Box3CardTitle>
          <Box3CardUl>
            <Box3CardLi>Generate smart wallet based on NFT using innovative account.</Box3CardLi>
            <Box3CardLi>Manage NFT Smart Wallet customizable in-app.</Box3CardLi>
            <Box3CardLi>Traverse in multi-chain worlds using interworld passports.</Box3CardLi>
          </Box3CardUl>
          <Box3CardImg src={workspaceImg3}></Box3CardImg>
          <ComingSoonBtnPinkH5>Coming Soon</ComingSoonBtnPinkH5>
        </Box3CardPink>
        <Box3CardBlue>
          <ComingSoonBtnBlue>Coming Soon</ComingSoonBtnBlue>
          <Box3CardTitle>Asset Portal</Box3CardTitle>
          <Box3CardUl>
            <Box3CardLi>NFT and all asset marketplace for world building.</Box3CardLi>
            <Box3CardLi>New tradeable class of packaged assets.</Box3CardLi>
            <Box3CardLi>Utility analytics based on on-chain activity.</Box3CardLi>
          </Box3CardUl>
          <Box3CardImg src={workspaceImg4}></Box3CardImg>
          <ComingSoonBtnBlueH5>Coming Soon</ComingSoonBtnBlueH5>
        </Box3CardBlue>
      </Box3>
      <Box2>
        <ContentLeft2>
          <Box2Img src={workspaceImg} />
        </ContentLeft2>
        <ContentRight2>
          <CliqueContentTitle>{cliqueWorkspace.title}</CliqueContentTitle>
          <CliqueContentSubTitle>{cliqueWorkspace.subTitle}</CliqueContentSubTitle>
          <CliqueContentText>{cliqueWorkspace.text}</CliqueContentText>
        </ContentRight2>
      </Box2>
      <Box3>
        <Box3CardBlue>
          <Box3CardTitle style={{marginBottom:'20px',paddingLeft:'10px'}}>Clique Rewards</Box3CardTitle>
          <Box3CardImg src={workspaceImg1}></Box3CardImg>
          <Box3CardTxt>Rewards feature for discovering and interacting with the universe of AW.</Box3CardTxt>
        </Box3CardBlue>
        <Box3CardPink>
          <Box3CardTitle style={{marginBottom:'20px',paddingLeft:'10px'}}>Clique Governance</Box3CardTitle>
          <Box3CardImg src={workspaceImg2}></Box3CardImg>
          <Box3CardTxt>Governance feature for the expression and execution of the world state.</Box3CardTxt>
        </Box3CardPink>
      </Box3>

    </CliqueContentBox>
  )
}

const DataBgBox = styled(Box)`
  /* background-image: url("${DataBg}"); */
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 200px;
  padding: 74px 0;
  background-size: cover;
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 48px;
  }
`;
const DataStar = styled.img`
  position: absolute;
  width: 40px;
  left: 200px;
  bottom: 60px;
`

const DataNumber = styled(Typography)`
  font-family: "Urbanist";
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 60px;
  text-align: center;
  color: #ffffff;
  @media (max-width: 767px) {
    font-size: 32px;
  }
`;

const DataContent = styled(Typography)`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  color: #ececec;
  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

function Data() {
  const { total } = useTotal();
  const dataList = useMemo(() => {
    return [
      { number: total?.totalDao.toLocaleString(), desc: "DAOs Created" },
      {
        number: total?.totalAccount.toLocaleString(),
        desc: "Community Members",
      },
      { number: total?.totalProposal.toLocaleString(), desc: "Proposals" },
    ];
  }, [total?.totalAccount, total?.totalDao, total?.totalProposal]);
  return (
    <DataBgBox>
      <DataStar src={decorationStar}></DataStar>
      {dataList.map((d, idx) => {
        return (
          <Box>
            <DataNumber>{d.number}</DataNumber>
            <DataContent>{d.desc}</DataContent>
          </Box>
        );
      })}
    </DataBgBox>
  );
}

const InitH1 = styled(Typography)`
  font-family: "Urbanist";
  font-style: normal;
  font-weight: 600;
  margin-top: 120px;
  font-size: 64px;
  line-height: 90px;
  text-align: center;
  color: #fff;
  @media (max-width: 767px) {
    font-size: 48px;
    margin-top: 80px;
    margin-left: 24px;
    line-height: 56px;
    text-align: left;
  }
`;
const InitH2 = styled(Typography)`
  margin-top: 16px;
  font-family: "Urbanist";
  font-style: normal;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: #fff;
  @media (max-width: 767px) {
    font-size: 18px;
    margin-left: 24px;
    line-height: 24px;
    text-align: left;
  }
`;
const InitBox = styled(Box)`
  display: flex;
  position: relative;
  padding: 42px 47px;
  background: #ffffff;
  opacity: 0.9;
  border: 1px solid #e9ecf2;
  border-radius: 20px;
  height: 446px;
  width: 1150px;
  gap: 40px;
  @media (max-width: 767px) {
    width: 288px;
    padding: 24px;
    height: 555px;
  }
`;

const InitListH1 = styled(Typography)`
  margin-left: 8px;
  font-family: "Urbanist";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 110%;
  color: #23262f;
  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const InitTag = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 24px;
  gap: 12px;
  background: #fffcf8;
  border: 1px solid #d4d7e2;
  border-radius: 6px;
  color: #0049c6;
`;

const InitListDesc = styled(Box)`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #777e91;
`;

interface InitiativesData {
  pic: string;
  avatar: string;
  title: string;
  tag: string[];
  tagColor: string[];
  desc: string;
  link: string;
}

export const Row = styled(Box)`
  display: flex;
`;

const InitRow = styled(Row)`
  margin-top: 32px;
  align-items: center;
`;

function InitList({ data }: { data: InitiativesData }) {
  const isDownSm = useBreakpoint("sm");
  return (
    <InitBox>
      <img src={data.pic} width={"600px"} />
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
      >
        <Box>
          <InitRow>
            <img src={data.avatar} width={isDownSm ? "40px" : "60px"} />
            <InitListH1>{data.title}</InitListH1>
          </InitRow>
          <Row gap={"16px"} mt={"16px"}>
            {data.tag.map((tag, idx) => (
              <InitTag key={idx} sx={{ background: data.tagColor[idx] }}>
                {tag}
              </InitTag>
            ))}
          </Row>
          <InitListDesc mt={"24px"}>{data.desc}</InitListDesc>
        </Box>
        <GreenBtn
          style={{
            width: "184px",
          }}
          onClick={() => window.open(data.link, "_blank")}
        >
          Learn more
          <ArrowOutwardIcon />
        </GreenBtn>
      </Box>
    </InitBox>
  );
}

const Main = styled(Box)`
  display: flex;
  width: 100vw;
  overflow: hidden;
  margin-bottom: 120px;
`;

const GroupMain = styled.div`
  display: flex;
  gap: 43px;
  @keyframes slide {
    0% {
      transform: translateX(0); /* 初始位置 */
    }
    100% {
      transform: translateX(-100%); /* 移动到最左边 */
    }
  }
  animation: slide 15s linear infinite;
`;

interface InfoDataType {
  avatar: string;
  name: string;
  group: string;
  comment: string;
  item1: string;
  item2: string;
  item3: string;
}
const InfoName = styled(Typography)`
  padding-right: 12px;
  max-width: 142px;
  height: 30px;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const InfoNameIcon = styled("svg")`
  height: 16px;
  width: 16px;
`;
const InfoTitle = styled(Typography)`
  max-width: 142px;
  height: 24px;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const InfoConetne = styled(Typography)`
  margin-top: 16px;
  height: 42px;
  width: 100%;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  flex: none;
  order: 1;
  flex-grow: 0;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const IfonBoxs = styled(Box)`
  padding: 0 60px;
  max-width: 1441px;
  ::-webkit-scrollbar {
    display: none !important;
  }
  @media (max-width: 767px) {
    & .wrapper {
      flex-wrap: nowrap;
      ::-webkit-scrollbar {
        display: none !important;
      }
    }
    & .wrapper ::-webkit-scrollbar {
      display: none !important;
    }
    display: flex;
    padding: 32px 24px 0px;
    overflow-x: auto;
    flex-wrap: nowrap;
  }
`;
const InfoBottomText = styled(Typography)`
  padding-left: 10px;
  width: 31px;
  height: 24px;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;
const InfoUserIcon = styled(UserIcon)`
  path {
    fill: #fff;
  }
  :hover path {
    fill: #a7f46a;
  }
`;
const InfoFileIcon = styled(FileIcon)`
  height: 16.6px;
  width: 20px;
  path {
    fill: #fff;
  }
`;
const InfoAlarmIcon = styled(AlarmIcon)`
  height: 17.5px;
  width: 17.5px;
  path {
    fill: #fff;
  }
`;

const AllInfo = styled(Box)`
  margin-top: 31px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: 191px;
  height: 48px;
  border: 1px solid #fff;
  border-radius: 80px;
  color: #fff;
  font-size: 18px;
`;

const ContributorsImg = styled("img")`
  height: 153px;
  width: 153px;
`;
const ContributorsName = styled(Box)`
  width: 99px;
  height: 24px;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #0049c6;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin-top: 9px;
`;
const ContributorsTitle = styled(Box)`
  width: 99px;
  height: 18px;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #23262f;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin-top: 4px;
`;

function InfoBox({
  avatar,
  name,
  group,
  comment,
  item1,
  item2,
  item3,
  link,
}: {
  avatar: string;
  name: string;
  group: string;
  comment: string;
  item1: string;
  item2: string;
  item3: string;
  link?: string;
}) {
  return (
    <Box
      onClick={() => link && window.open(link)}
      sx={{
        cursor: "pointer",
        padding: "24px",
        backgroundColor: "#3145FF",
        border: "1px solid rgba(116, 139, 184, 0.70)",
        borderRadius: "24px",
        color: '#fff',
        "&:hover": {
          border: "1px solid #A7F46A",
          boxShadow: "0 0 10px 2px rgba(0,0,0,0.25)",
        },
      }}
    >
      <Row>
        <img
          alt=""
          src={avatar}
          style={{ width: "48px", height: "48px", borderRadius: "50%" }}
        />
        <Box sx={{ pl: "14px" }}>
          <Row sx={{ alignItems: "center" }}>
            <InfoName> {name} </InfoName>
            <IconStart fill={'#fff'}></IconStart>
            {/* <InfoNameIcon src={Label1}></InfoNameIcon> */}
          </Row>
          <InfoTitle> {group} </InfoTitle>
        </Box>
      </Row>

      <InfoConetne> {comment} </InfoConetne>
      <Row sx={{ pt: "16px", alignItems: "center" }}>
        <Row sx={{ alignItems: "center" }}>
          <InfoUserIcon />
          <InfoBottomText> {item1}</InfoBottomText>
        </Row>

        <Row sx={{ alignItems: "center", ml: "40px" }}>
          <InfoFileIcon></InfoFileIcon>
          <InfoBottomText> {item2}</InfoBottomText>
        </Row>

        <Row sx={{ alignItems: "center", ml: "40px" }}>
          <InfoAlarmIcon></InfoAlarmIcon>
          <InfoBottomText> {item3}</InfoBottomText>
        </Row>
      </Row>
    </Box>
  );
}

function ContributorsBox({
  img,
  name,
  group,
}: {
  img: string;
  name: string;
  group: string;
}) {
  return (
    <Box
      sx={{
        width: 184,
        height: 235,
        padding: "16px 15px 11px 16px",
        backgroundColor: "#fff",
        border: "1px solid #A3A3A3",
        borderRadius: "12px",
        "&:hover": {
          background: "#FFFFFF",
          border: "1px solid #1B1AFF",
          boxShadow: "0px 4px 60px rgba(0, 0, 0, 0.08)",
        },
      }}
    >
      <ContributorsImg src={img}></ContributorsImg>

      <ContributorsName>{name}</ContributorsName>
      <ContributorsTitle>{group}</ContributorsTitle>
    </Box>
  );
}
const InitiativesBox = styled.div`
  position: relative;
  width: 1300px;
  margin: 20px auto;
  padding-bottom: 70px;
  border-radius: 40px;
  background: linear-gradient(180deg, rgba(32, 31, 218, 0.00) 0%, #1A19D8 37.14%);
  /* background: linear-gradient(180deg, rgba(27, 26, 255, 0.00) 0%, #1B1AFF 37.14%); */
  @media (max-width: 767px) {
    width: 100vw;
  }
`
const InitiativesStar = styled.img`
  position: absolute;
  bottom: -70px;
  right: 10px;
`
function Initiatives() {
  const isDownSm = useBreakpoint("sm");
  const dataList = [
    {
      avatar: "https://preapiv2.myclique.io/static/1665737932735871572.png",
      name: "STP",
      group: "@stp",
      link: "https://www.myclique.io/governance/daoInfo/3/proposal",
      comment:
        "Verse Network by STP brings a full suite of native tools and infrastructures facilitating efficient decentralized decision-making for users, communities and organizations.",
      item1: "21k",
      item2: "52",
      item3: "0",
    },
    {
      avatar: "https://apiv2.myclique.io/static/1665735793090759566.png",
      name: "Adventure Gold ",
      group: "@agld",
      link: "https://www.myclique.io/governance/daoInfo/1/proposal",
      comment:
        "Adventure Gold (AGLD) is the incentivization token for the Lootverse. Launched through a fair airdrop",
      item1: "8.9k",
      item2: "0",
      item3: "0",
    },
    {
      avatar: "https://apiv2.myclique.io/static/1684733259674140973.jpeg",
      name: "Mighty Magic DAO",
      group: "@mightymagicdao",
      link: "https://www.myclique.io/governance/daoInfo/224/proposal",
      comment:
        "Mighty Magic DAO is a on chain ecosystem that fully empowers on chain games and brings the magic back to gaming.",
      item1: "10.1k",
      item2: "0",
      item3: "0",
    },
    {
      avatar: "https://apiv2.myclique.io/static/1684303444667989296.jpg",
      name: "Paladins DAO",
      group: "@paladinsdao",
      link: "https://www.myclique.io/governance/daoInfo/216/proposal",
      comment:
        "Paladins DAO is a citizens owned Esports team and community consisting of every contributor type across the gaming ecosystem. Paladins aim to revolutionize ownership and...",
      item1: "2",
      item2: "0",
      item3: "0",
    },
    // {
    //   avatar: "https://preapiv2.myclique.io/static/1666074762290076677.jpeg",
    //   name: "Alpha DAO",
    //   group: "@alphadao",
    //   link: "https://www.myclique.io/page/137/0xf88037bae5e6faceb5d7c723abe2bdf938f687bd",
    //   comment:
    //     "Alpha DAO is an exclusive community of top Web3 investors, founders, and builders providing access to proprietary insights and deal flow.",
    //   item1: "2.7k",
    //   item2: "0",
    //   item3: "0",
    // },
    // {
    //   avatar: "https://apiv2.myclique.io/static/1665738518318964203.png",
    //   name: "Bubble",
    //   group: "@bubble",
    //   link: "https://www.myclique.io/governance/daoInfo/137/0x1d78b7713caf654a6ce17349557017beeb39e8b9",
    //   comment:
    //     "Support an inclusive and diverse community by building meaningful relationships in Web3. Members form close-knit bonds in a safe environment free from judgment, surrounded by like-minded individuals.",
    //   item1: "12.7K",
    //   item2: "57",
    //   item3: "0",
    // },

    // {
    //   avatar: "https://preapiv2.myclique.io/static/1665738772191379494.png",
    //   name: "GoldenDAO",
    //   group: "@goldendao",
    //   link: "https://www.myclique.io/page/137/0xaec5aa4a0a769855b776a18b6288a83b26c668ff",
    //   comment:
    //     "Our mission is to launch a DAO to collectively advance AAPI solidarity and empowerment through real world events + gatherings, and web3 infrastructure + initiatives.",
    //   item1: "1.4k",
    //   item2: "3",
    //   item3: "0",
    // },
    // {
    //   avatar: "https://apiv2.myclique.io/static/1676425557741808633.png",
    //   name: "Turkey Disaster Relief DAO",
    //   group: "@turkeydisasterreliefdao",
    //   link: "https://www.myclique.io/governance/daoInfo/137/0xcdf08a2fc664edf65d853e594e2dff6b283db2e1",
    //   comment:
    //     "This DAO aims to help the Turkish people affected by the earthquake return to normal life and rebuild their lives as soon as possible.",
    //   item1: "861",
    //   item2: "1",
    //   item3: "0",
    // },
  ];
  const ContributorsData = [
    {
      avatar: Label1,
      name: "UserName",
      group: "Follower 200",
    },
    {
      avatar: Label1,
      name: "UserName",
      group: "Follower 200",
    },
    {
      avatar: Label1,
      name: "UserName",
      group: "Follower 200",
    },
    {
      avatar: Label1,
      name: "UserName",
      group: "Follower 200",
    },
    {
      avatar: Label1,
      name: "UserName",
      group: "Follower 200",
    },
    {
      avatar: Label1,
      name: "UserName",
      group: "Follower 200",
    },
  ];

  return (
    <InitiativesBox>
      <InitH1>Top DAOs Building Autonomous Worlds</InitH1>
      <InitH2>
        We evolve DAOs for Autonomous Worlds.  <br />
        Traverse our on-chain universe and help build the future!
      </InitH2>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <AllInfo
          sx={{
            "&:hover": {
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
              gap: "10px",
              position: "relative",
              width: "191px",
              height: "48px",
              background: "#A7F46A",
              border: "1px solid #ECECEC",
              borderRadius: "80px",
              cursor: "pointer",
              color: '#000',
            },
          }}
          onClick={() => {
            window.open("https://www.myclique.io/governance", "_blank");
          }}
        >
          View All
        </AllInfo>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <IfonBoxs>
          <Grid
            className={"wrapper"}
            container
            mt={isDownSm ? "0" : "24px"}
            spacing={"18px"}
            zIndex={2}
          >
            {dataList.map((c, idx) => (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <InfoBox
                  link={c.link}
                  avatar={c.avatar}
                  name={c.name}
                  group={c.group}
                  comment={c.comment}
                  item1={c.item1}
                  item2={c.item2}
                  item3={c.item3}
                />
              </Grid>
            ))}
          </Grid>
        </IfonBoxs>
      </Box>
      <InitiativesStar src={decorationStar}></InitiativesStar>

      {/* <InitH1>Top Contributors</InitH1>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <IfonBoxs>
          <Grid
            container
            mt={isDownSm ? "0" : "16px"}
            spacing={"16px"}
            zIndex={2}
          >
            {ContributorsData.map((c, idx) => (
              <Grid item>
                <ContributorsBox
                  img={c.avatar}
                  name={c.name}
                  group={c.group}
                ></ContributorsBox>
              </Grid>
            ))}
          </Grid>
        </IfonBoxs>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <AllInfo
          sx={{
            mb: "132px",
            "&:hover": {
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
              gap: "10px",
              position: "relative",
              width: "191px",
              height: "48px",
              background: "#A7F46A",
              border: "1px solid #ECECEC",
              borderRadius: "80px",
              cursor: "pointer",
            },
          }}
          onClick={() => {
            window.open("https://www.myclique.io/governance", "_blank");
          }}
        >
          View All
        </AllInfo>
      </Box> */}
    </InitiativesBox>
  );
}

const EcoH1 = styled(Typography)`
  margin: 120px 0 48px;
  font-family: "Urbanist";
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 90px;
  /* identical to box height, or 141% */

  text-align: center;

  color: #1b1aff;
  @media (max-width: 767px) {
    font-size: 48px;
    line-height: 56px;
    margin: 80px 0 40px;
  }
`;

const EcoButton = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 191px;
  height: 48px;
  border: 1px solid #b4b4b4;
  border-radius: 80px;

  :hover {
    background: #a7f46a;
    color: #23262f;
    border: 1px solid #ececec;
  }
`;

const EcoTab = styled(Tab)`
  text-transform: none;
  font-weight: 500;
  margin: 0 32px;
  font-size: 20px;
  @media (max-width: 767px) {
    font-size: 14px;
    margin: 0;
    line-height: 150%;
    padding: 8px;
  }
`;

function Ecosystem() {
  const [value, setValue] = useState("Partners");
  const isDownSm = useBreakpoint("sm");
  const history = useHistory();
  const PartnersLogos = [
    Base,
    Chainlink,
    Thegraph,
    PolygonDAO,
    Zeta,
    GnosisSafe,
    Layer3,
    Rai,
    MapPro,
    Meter,
    Define,
    Immunefi,
    Cobak,
    MovieBloc,
    Deesse,
    Cere,
    DeepDAO,
    Jenny,
    Her,
    Knn,
    Voltswap,
    PushPro,
  ];
  const IntegrationsLogos = [Base,Binance, Polygon, Klaytn, ZkEVM];
  const ListedLogos = [
    BinanceListf,
    UpBit,
    Bithumb,
    HuoBi,
    Gate,
    CoinOne,
    Poloniex,
    CoinDCX,
  ];
  const currentLogos =
    value === "Partners"
      ? PartnersLogos
      : value === "Integrations"
        ? IntegrationsLogos
        : ListedLogos;

  return (
    <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
      <EcoH1>Ecosystem</EcoH1>
      <Tabs
        value={value}
        onChange={(e, value) => setValue(value)}
        sx={{
          color: "#777E90",
          ".MuiTabs-indicator": {
            background: "#A7F46A",
            height: isDownSm ? "3px" : "5px",
            borderRadius: isDownSm ? "1.5px" : "2.5px",
          },
          ".MuiButtonBase-root.MuiTab-root.MuiTab-textColorPrimary.Mui-selected":
          {
            color: "#777E90",
          },
        }}
      >
        <EcoTab value={"Partners"} label="Partners" />
        <EcoTab value={"Integrations"} label="Integrations" />
        <EcoTab value={"Listed Exchanges"} label="Listed Exchanges" />
      </Tabs>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        loop
        autoplay={{
          delay: 1000,
        }}
        slidesPerView={5}
        style={{
          maxWidth: "1441px",
          padding: "60px",
          alignItems: 'center'
        }}
      >
        {currentLogos.map((logo, idx) => (
          // init width 0px
          <SwiperSlide key={idx} style={{ width: "264.2px", lineHeight: '50px' }}>
            <img key={idx} style={{ maxHeight: 50, maxWidth: 200 }} src={logo} />
          </SwiperSlide>
        ))}
      </Swiper>

      <EcoButton
        style={{ marginTop: "50px", marginBottom: "120px" }}
        onClick={() => history.push("/ecosystem")}
      >
        Learn More
      </EcoButton>
    </Box>
  );
}

function Learn() {
  const data = [
    {
      imgUrl: Learn2,
      title: "DAO with Zero Knowledge Proof",
      link: "https://mirror.xyz/0xB9d761AF53845D1F3C68f99c38f4dB6fcCfB66A1/kXM7Kom5_bdWsZZHjTCY6gstqj_YEjbWDV2Fsvp_nS8",
      content:
        "DAO (Decentralized Autonomous Organization) is a form of organization that leverages blockchain technology to achieve autonomous governance, distribution, and collaboration in a decentralized manner.",
    },
    {
      imgUrl: Learn1,
      title: "How AI will transform DAOs",
      link: "https://mirror.xyz/0xB9d761AF53845D1F3C68f99c38f4dB6fcCfB66A1/3jVwJxEc_dce0mSg2pS8dAPguQYq4O0OFu3OYkdtHa4",
      content:
        "ChatGPT took the world by storm by proliferating the application of  artificial intelligence (AI) and reinforcement learning (RL). By design, DAOs gravitate towards AI and RL through smart contract technology and activity data that can be trained and reinforced. Intertwining the DAO concept with AI technology creates a paradigm shift in efficiency and capability for governance, while promising transparency and decentralization. The efficacy of this combination of theory and technology is unprecedented.",
    },
    {
      imgUrl:
        "https://mirror-media.imgix.net/publication-images/H9ECGhjeNNObB57GPZJmp.jpeg?height=1024&width=2048&h=1024&w=2048&auto=compress",
      title: "The Fusion of Fully On-Chain Games and DAOs",
      link: "https://mirror.xyz/0xB9d761AF53845D1F3C68f99c38f4dB6fcCfB66A1/cgI4U8yZY6LVuSWiHsL7C2Ii9Q2H1UlZdyqis-WOlLs",
      content:
        "According to Market Research Report, the global gaming market in 2022 reached $207 billion and will continue to grow to an estimated $343 billion in 2028. This indicates that the gaming market has yet to be exploited and has great potential for investors and developers. Along with the growth of blockchain technology, many GameFi projects will emerge but regardless of traditional or GameFi, both have limitations. However, a fully on-chain game (FOCG) complemented with DAO may be able to compensate for the limitations. This research aims to explore the possibility that FOCG and DAO may create.",
    },
    {
      imgUrl:
        "https://mirror-media.imgix.net/publication-images/KVdaSrkjtnh-NcgtVRWc-.jpeg?height=256&width=512&h=256&w=512&auto=compress",
      title: "Clique V3 Announcement",
      link: "https://mirror.xyz/0xB9d761AF53845D1F3C68f99c38f4dB6fcCfB66A1/14EyzZxhUTfD04xTImYPN10S4DlVD7W1th4Ww3neeeo",
      content:
        "As revealed in our 2023 roadmap article, STP is focused on its mission to build an ecosystem optimized for DAOs. We are progressing on our early initiative to build a platform of tools & infrastructure that empower DAO creation & management while improving daily workflows and efficiency in Web3. ",
    },
    {
      imgUrl: Learn4,
      title: "How to Create a DAO with Clique",
      link: "https://stp-dao.gitbook.io/verse-network/clique/how-to-list-your-project-on-clique",
      content:
        "Step 1: Go to Clique and connect your Metamask wallet to Polygon network. Then click the 'Add DAO' button on the left ...",
    },
    {
      imgUrl: Learn6,
      title: "How to create a DAO token on Clique",
      link: "https://stp-dao.gitbook.io/verse-network/clique/how-to-create-a-token",
      content:
        "Create an ERC-20 token using Clique Go to Creator section and click 'Create Token'. Your wallet will pop up to switch you to Ethereum mainnet...",
    },
    {
      imgUrl: Learn3,
      title: "How does on-chain governance work on Clique",
      link: "https://stp-dao.gitbook.io/verse-network/clique/how-to-create-a-proposal",
      content:
        "Enter in a DAO and click ‘Create a Proposal’ to start a community proposal. Community proposals, or regular proposals, are a ...",
    },
    {
      imgUrl: Learn5,
      title: "How to create a community event with Clique",
      link: "https://stp-dao.gitbook.io/verse-network/clique/dao-rewards",
      content:
        "As a part of Clique’s V2 upgrade, DAO Rewards is a new feature to reward community members and foster engagement ... ",
    },
  ];
  const isDownSm = useBreakpoint("sm");

  return (
    <Box pb={"120px"} sx={{ width: "100%", backgroundColor: "#F5F8FE" }}>
      <InitH1 style={{ textAlign: "center", color: "#000" }}>Learn</InitH1>
      <Box
        mt={isDownSm ? "40px" : "48px"}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <LearnBox>
          <Box
            sx={{
              display: { xs: "flex", sm: "grid" },
              gridTemplateColumns: {
                lg: "1fr 1fr 1fr 1fr",
                md: "1fr 1fr 1fr",
                sm: "1fr 1fr",
              },
              gap: "24px",
            }}
            className={"LearnBoxOutterItem"}
          >
            {data.map((item) => {
              return (
                <LearnItemBox onClick={() => window.open(item.link)}>
                  <LearnImg src={item.imgUrl} />
                  <LearnTitle>{item.title}</LearnTitle>
                  <LearnContent>{item.content}</LearnContent>
                </LearnItemBox>
              );
            })}
          </Box>
        </LearnBox>
      </Box>
    </Box>
  );
}

const LearnBox = styled(Box)`
  padding: 0 20px;
  max-width: 1169px;
  @media (max-width: 767px) {
    padding: 0px 24px 0;
    width: 100%;
    overflow-x: auto;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  & .LearnBoxOutterItem {
    @media (max-width: 767px) {
      flex-wrap: nowrap;
      flex-direction: row;
    }
  }
`;
const LearnItemBox = styled(Box)`
  padding: 24px 21px;
  cursor: pointer;
  border: 1px solid #a3a3a3;
  width: 264px;
  height: 310px;
  border-radius: 20px;
  background-color: #ffffff;
  display: grid;
  &:hover {
    border: 1px solid #1b1aff;
    box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.08);
    border-radius: 20px;
  }

  @media (max-width: 767px) {
    min-width: 264px;
  }
  @media (max-width: 340px) {
    min-width: calc(100vw - 70px);
  }
`;
const LearnImg = styled("img")`
  width: 100%;
  height: 111px;
  object-fit: cover;
  margin-bottom: 8px;
  @media (max-width: 767px) {
    width: 100%;
    max-width: fit-content;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    font-size: 48px;
    line-height: 58px;
  }
`;
const LearnTitle = styled(Typography)`
  height: 48px;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #1b1aff;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;
const LearnContent = styled(Typography)`
  height: 84px;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #777e90;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
`;

const BuildBox = styled(Box)`
  width: 100vw;
  height: 506px;
  position: relative;
  padding: 120px;
  background: #2524de;
  @media (max-width: 767px) {
    padding: 120px 80px 118px 20px;
    // margin-bottom: 48px;
  }
`;

const BuildH1 = styled(Typography)`
  font-family: "Urbanist";
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 90px;
  color: #ffffff;
  @media (max-width: 767px) {
    font-size: 48px;
    line-height: 58px;
  }
`;

const BuildContent = styled(Typography)`
  font-family: "DM Sans";
  font-style: normal;
  margin-top: 24px;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #ececec;
`;

function BuildWithUs() {
  return (
    <BuildBox>
      <BuildH1>Build with Us</BuildH1>
      <BuildContent>
        Explore partnership and integration possibilities for your project.
      </BuildContent>
      <GreenBtn style={{ marginTop: "66px" }}>
        <a
          href="mailto:contact@stp.network"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          Contact <ArrowOutwardIcon style={{ marginLeft: "8px" }} />
        </a>
      </GreenBtn>
      <img
        style={{ position: "absolute", right: 0, bottom: 0 }}
        src={BuildCircle}
      />
    </BuildBox>
  );
}

const FooterBox = styled(Box)`
  width: 100%;
  background: #101010;
  padding: 120px 105px 80px;
  overflow-x: hidden;
  @media (max-width: 767px) {
    padding: 68px 20px 118px 20px;
  }
`;

export const BlueButton = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 42px;
  gap: 8px;
  background: #0049c6;
  color: white;
  border-radius: 8px;
  font-weight: 700;
  border: 0;
  @media (max-width: 767px) {
    width: 204px;
    height: 48px;
  }
`;

const FooterH1 = styled(Typography)`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  margin-top: 16px;
  font-size: 20px;
  line-height: 30px;
  color: #ffffff;
`;

const FooterText = styled(Typography)`
  font-family: "DM Sans";
  margin-top: 16px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  cursor: pointer;
  color: #d6d6d6;
`;

const SocialMedia = styled.img`
  width: 20px;
  height: 20px;
`;

export function Footer() {
  const isDownSm = useBreakpoint("sm");
  const history = useHistory();
  // return <></>;
  const footList = [
    ["Products", "Clique Workspace", "Clique DApp Store", "Clique SDK"],
    // ["Leading DAOs", "STP DAO", "Bubble DAO", "Sonet DAO", "Chatgpt DAO"],
    ["Leading DAOs", "STP DAO", "Mighty Magic", "AGLD", "Paladins DAO"],
    ["Resources", "Developer Portal", "How to guides"],
  ];
  const footListLink = [
    [
      "Products",
      "https://www.myclique.io/governance",
      "https://www.myclique.io/tools",
      "https://www.npmjs.com/package/@myclique/governance-sdk",
    ],
    [
      "Leading DAOs",
      "https://www.myclique.io/governance/daoInfo/3/proposal",
      "https://www.myclique.io/governance/daoInfo/224/proposal",
      "https://www.myclique.io/governance/daoInfo/1/proposal",
      "https://www.myclique.io/governance/daoInfo/216/proposal",
    ],
    [
      "Resources",
      "https://github.com/STPDevteam",
      "https://stp-dao.gitbook.io/verse-network/clique/overview-of-clique",
    ],
  ];
  return (
    <FooterBox>
      <Box
        display={"flex"}
        width={"100%"}
        flexDirection={isDownSm ? "column" : "row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={isDownSm ? "48px" : 0}
      >
        <img src={StpLogo} alt="" />
        {/* <BlueButton
          onClick={() =>
            window.open("https://www.myclique.io/daos", "_blank")
          }
        >
          Build DAO
        </BlueButton> */}
      </Box>
      {!isDownSm ? (
        <>
          <Divider style={{ background: "#757B8A" }} />
          <Box display={"flex"} gap={isDownSm ? "20px" : "120px"}>
            {footList.map((coloum, idx) => {
              return (
                <Box>
                  {coloum.map((item, i) => {
                    if (i === 0) {
                      return <FooterH1>{item}</FooterH1>;
                    } else {
                      return (
                        <FooterText
                          onClick={() =>
                            window.open(footListLink[idx][i], "_blank")
                          }
                        >
                          {item}
                        </FooterText>
                      );
                    }
                  })}
                </Box>
              );
            })}
            <Box>
              <FooterH1>STP Ecosystem</FooterH1>
              {/* <FooterH1
                style={{ cursor: "pointer" }}
                onClick={() => history.push("/dao")}
              >
                Clique World Launchpad
              </FooterH1> */}
              <FooterH1
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open(
                    "https://mirror.xyz/0xB9d761AF53845D1F3C68f99c38f4dB6fcCfB66A1",
                    "_blank"
                  )
                }
              >
                News
              </FooterH1>
            </Box>
          </Box>
        </>
      ) : (
        ""
      )}
      <Box
        display={"flex"}
        gap={"40px"}
        sx={{
          justifyContent: isDownSm ? "center" : "flex-end",
          marginTop: isDownSm ? "60px" : 0,
          "& img": {
            cursor: "pointer",
          },
        }}
      >
        <SocialMedia
          src={Tele}
          onClick={() => window.open("https://t.me/STPofficial", "_blank")}
        />
        <SocialMedia
          src={Twitter}
          onClick={() =>
            window.open("https://twitter.com/STP_Network", "_blank")
          }
        />
        {/* <SocialMedia
          src={Medium}
          onClick={() =>
            window.open("https://medium.com/@versenetwork", "_blank")
          }
        /> */}
        <SocialMedia
          src={Cylinder}
          onClick={() =>
            window.open(
              "https://mirror.xyz/0xB9d761AF53845D1F3C68f99c38f4dB6fcCfB66A1",
              "_blank"
            )
          }
        />
        <SocialMedia
          src={Wechat}
          onClick={() => window.open(WechatQR, "_blank")}
        />
        <SocialMedia
          src={Email}
          onClick={() => window.open("mailto:contact@stp.network", "_blank")}
        />
      </Box>
      {isDownSm ? (
        <Box
          display={"flex"}
          justifyContent={"center"}
          sx={{
            marginTop: "60px",
            color: "#757B8A",
            fontSize: 14,
            fontWeight: 500,
            fontFamily: "Inter",
          }}
        >
          © STP All Rights Reserved
        </Box>
      ) : (
        ""
      )}
    </FooterBox>
  );
}
