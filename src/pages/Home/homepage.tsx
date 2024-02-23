import { Box, Grid, Stack, Tab, Tabs, Typography } from "@mui/material";
import styled, { keyframes } from "styled-components";
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

import Composable from "../../assets/images/ecosystem/composable.jpeg"
import Zkspace from "../../assets/images/ecosystem/zkspace.png"
import Web3com from "../../assets/images/ecosystem/web3com.svg"
import Altlayer from "../../assets/images/ecosystem/AltLayer.svg"
import Paimas from "../../assets/images/ecosystem/Paimas.svg"
import AGLD from "../../assets/images/ecosystem/AgldBlack.svg"
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
import Learn7 from "../../assets/images/home/Learn7.jpeg";
import Learn8 from "../../assets/images/home/Learn8.jpeg";
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
import homeImg1 from "../../assets/images/home/home1.png"
import homeImg2 from "../../assets/images/home/home2.png"
import homeImg3 from "../../assets/images/home/home3.png"
import homeImg4 from "../../assets/images/home/home4.png"
import homeImg5 from "../../assets/images/home/home5.png"
import homeImg61 from "../../assets/images/home/home6-1.png"
import homeImg62 from "../../assets/images/home/home6-2.png"
import homeImg63 from "../../assets/images/home/home6-3.png"
import homeImg7 from "../../assets/images/home/home7.png"
import starWhite from "../../assets/images/home/StarWhite.svg"
import starCircle from "../../assets/images/home/starCircle.svg"
import awnsImg from "../../assets/images/home/awns.svg"
import hypr from '../../assets/images/ecosystem/hypr.png'
import space3 from '../../assets/images/ecosystem/space.png'
import atticlab from '../../assets/images/ecosystem/ATTIC.png'
import paladins from '../../assets/images/ecosystem/pbs.jpeg'
import a3sprotocol from '../../assets/images/ecosystem/a3sprotocol.png'
import blade from '../../assets/images/ecosystem/blade.png'
import kiosk from '../../assets/images/ecosystem/kiosk.svg'
import gabby from '../../assets/images/ecosystem/gabby.png'
import ggQuest from '../../assets/images/ecosystem/GGUEST.png'
import Openfort from '../../assets/images/ecosystem/openfort.png'
import biconomy from '../../assets/images/ecosystem/biconomy.png'
import aw from '../../assets/images/ecosystem/AW.png'
import daren from '../../assets/images/ecosystem/daren.svg'

export const blinkAnimation = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 70%;
  }
`
const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const floatAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-40px);
  }
`;
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
  background: #211FCF;
`
const Head1 = styled.div`
  width: 100%;
  background: url(${homeImg1}) no-repeat;
  background-size: cover;
  background-position: 40%;
`
const FooterModal = styled.div`
  width: 100vw;
  padding-bottom: 120px;
  background: url(${homeImg7}) no-repeat;
  background-size: cover;
  @media (max-width: 767px) {
    padding: 24px;
  }

`
export default function Homepage() {
  return (
    <ContentWrapper>
      <Content1>
        <Head1>
          <Head />
          <Identity />
        </Head1>
        <Identity2 />
        <Initiatives />
      </Content1>
      <CliqueContent />
      {/* <Infrastructure /> */}
      <Ecosystem />
      <Learn />
      <FooterModal>
        <BuildWithUs />
        <Footer2 />
      </FooterModal>
    </ContentWrapper>
  );
}

export const HeadBox = styled(Box)`
  position: relative;
  width: 100%;
  height: 700px;
  /* margin: auto; */
  @media (max-width: 767px) {
    height: auto;
    padding-left: 20px;
    height: auto;
    padding-bottom: 79px;
  }
`;
export const HeadH1 = styled(Typography)`
  font-family: "Righteous";
  font-style: normal;
  font-weight: 500;
  font-size: 74px;
  line-height: 90px;
  padding-top: 200px;
  color: #ffffff;
  padding-left: 160px;
  @media (max-width: 767px) {
    padding-top: 100px;
    padding-left: 0px;
    font-size: 48px;
    line-height: 56px;
  }
`;
export const HeadText = styled(Typography)`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  margin-top: 24px;
  font-size: 24px;
  line-height: 40px;
  color: #ececec;
  padding-left: 160px;
  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 24px;
    margin-top: 40px;
    padding-left: 0px;
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
  font-size: 18px;
  height: 48px;
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
const AwnsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  margin: 70px auto;
  padding: 10px 10px 20px;
  --border-width: 2px;
  --border-radius: 30px;
  --border-color: linear-gradient(-35deg, #4f7ff4,#25f2ff);
  border-radius: var(--border-radius);
  background: linear-gradient(160deg, #131B68 13.3%, #1919E1 103.48%);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  overflow: hidden;
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
    padding: 20px;
  }
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: var(--border-width);
    border-radius: var(--border-radius);
    background: var(--border-color);
    --mask-bg: linear-gradient(red, red);
    --mask-clip: content-box, padding-box;
    -webkit-mask-image: var(--mask-bg), var(--mask-bg);
    mask-image: var(--mask-bg), var(--mask-bg);
    -webkit-mask-clip: var(--mask-clip);
    mask-clip: var(--mask-clip);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
  }
`;
const AwnsImg = styled('img')`
  display: flex;
  mix-blend-mode: lighten;
  width: 60px;
  height: 60px;
  @media (max-width: 767px) {
    order: 3;
    display: none;
  }
`;
const AwnsContent = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 50px 10px 20px;
  flex: 1;
  color: #fff;
  p {
    margin-bottom: 0;
    font-size: 16px;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    order: 1;
    padding: 10px;
  }
`;
const GreenTxt = styled.div`
  margin: 10px 0;
  padding-left: 50px;
  font-family: Urbanist;
  font-size: 26px;
  font-weight: 700;
  line-height: 1.3;
  color: #A7F46A;
  letter-spacing: 1px;
  @media (max-width: 767px) {
    padding-right: 0;
    padding-left: 0;
  }
`
const AwnsBtn = styled(GreenBtn)`
  width: 240px;
  margin-top: 50px;
  text-align: center;
  z-index: 9;
  font-size: 18px;
  @media screen and (max-width: 1440px) {
    max-width: 180px;
  }
  @media (max-width: 767px) {
    max-width: 280px;
    margin: 30px 0;
    order: 2;
  }
`;
const HeadBr = styled.br`
  @media (max-width: 767px) {
    display: none;
  }
`

function Head() {
  const history = useHistory();
  return (
    <HeadBox>
      <HeadH1>
        Opening The Portal <HeadBr />
        to Autonomous Worlds
      </HeadH1>
      <HeadText>
        Our mission is to build and scale an identity layer for<br /> Autonomous Worlds.
        <AwnsBtn onClick={()=>{window.open('https://awns.stp.network/','_blank')}}>
          Register for an AWNS
        </AwnsBtn>
      </HeadText>
      {/* <AwnsBox>
        <AwnsContent>
          <AwnsImg src={awnsImg}></AwnsImg>
          <GreenTxt>Secure your AWNS (6551) by joining the waitlist now!</GreenTxt>
        </AwnsContent>
      </AwnsBox> */}
      {/* <GreenBtn
        style={{ marginTop: "40px" }}
        onClick={() => window.open("https://www.myclique.io/creator", "_blank")}
      >
        Coming Soon
        <ArrowOutwardIcon />
      </GreenBtn> */}
      {/* <BottomCircleImg src={BottomCircle} /> */}
      {/* <TopCircleImg src={TopCircle} /> */}

    </HeadBox>
  );
}
const IdentityBox = styled.div`
  margin-top: 160px;
  display: flex;
  align-items: self-start;
  padding-top: 60px;
  width: 100%;
  height: 500px;
  @media (max-width: 767px) {
    height: auto;
    flex-direction: column;
    margin-top: 0px;
    padding-top: 0px;
  }
  
`
const IdentityHomeImg2 = styled.img`
  position: relative;
  mix-blend-mode: screen;
  max-width: 800px;
  @media (max-width: 767px) {
    width: 100vw;
    order: 2;
    margin-top: 40px;
  }
`
const IdentityImage = styled.img`
  position: absolute;
  top: 0;
  left: -140px;
  width: 88px;
  animation: ${blinkAnimation} 1.5s ease-in-out infinite;
  @media (max-width: 767px) {
    display: block;
    top: -30px;
    left: 0;
  }
`
const IdentityImage2 = styled.img`
  position: absolute;
  top: 50px;
  left: -70px;
  width: 38px;
  animation: ${blinkAnimation} 2s ease-in-out infinite;
  @media (max-width: 767px) {
    display: block;
    top: 20px;
    left: 50px;
  }
`
const IdentityContent = styled.div`
  /* margin-left: 500px; */
  position: relative;
  max-width: 620px;
  font-family: Poppins;
  color: #fff;
  padding: 0 30px 0 30px;
  @media screen and (min-width: 1440px) {
    max-width: 680px;
    padding: 0 20px 0 80px;
  }
  @media (max-width: 767px) {
    width: 100%;
    padding: 24px;
    order: 1;
  }
`
const IdentityTitle = styled.div`
  font-family: Poppins;
  font-size: 54px;
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
      font-size: 18px;
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
  background: linear-gradient(180deg, rgba(49, 48, 241, 0.00) 0%, #3837F1 62.50%);
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
  font-size: 20px;
`
const Identity2Box = styled.div`
  max-width: 1440px;
  margin: 300px auto 0;
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
  position: relative;
  align-items: center;
  font-family: Poppins;
  color: #fff;
  @media (max-width: 767px) {
    width: 100%;
    padding: 20px;
  }
`
const Identity2Text = styled.div`
  margin-top: 10px;
  font-size: 22px;
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
const Identity2Star = styled.img`
  position: absolute;
  top: -100px;
  left: 10px;
  animation: ${blinkAnimation} 1.5s ease-in-out infinite;
  @media (max-width: 767px) {
    display: none;
  }
`
const HomeImg3 = styled.img`
  position: absolute;
  top: -140px;
  right: -120px;
  mix-blend-mode: screen;
  animation: ${blinkAnimation} 5s ease-in-out infinite;
  @media (max-width: 767px) {
    display: none;
  }
`

function Identity() {
  return (
    <IdentityBox>
      <IdentityHomeImg2 src={homeImg2}></IdentityHomeImg2>
        <IdentityContent>
          <IdentityImage src={starWhite}></IdentityImage>
          <IdentityImage2 src={starWhite}></IdentityImage2>
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
        <Identity2Star src={starWhite}></Identity2Star>
        <IdentityTitle>STP will empower AW builders </IdentityTitle>
        <Identity2Text>Leverage frontier technology in Autonomous Worlds, Account Abstraction and AI</Identity2Text>
        <HomeImg3 src={homeImg3}></HomeImg3>
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
  font-family: "Poppins";
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
  font-family: "Poppins";
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
  font-family: "Poppins";
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
  padding-top: 150px;
  background: url(${homeImg4}) no-repeat;
  background-position: 0% -5%;
  @media (max-width: 767px) {
    padding-top: 60px;
  }
`
export const Box1 = styled.div`
  position: relative;
  width: 1440px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
    width: 100vw;
    padding: 20px 20px 0 20px;
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
export const CliqueContentTitle = styled.div`
  font-family: Poppins;
  font-size: 54px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.3;
  @media (max-width: 767px) {
    margin-top: 40px;
    font-size: 32px;
  }
`
const CliqueContentSubTitle = styled.div`
  margin-top: 40px;
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.4;
  @media (max-width: 767px) {
    font-size: 18px;
    margin-top: 20px;
  }

`
const CliqueContentText = styled.div`
  margin-top: 60px;
  font-family: Poppins;
  font-size: 18px;
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
    margin-top: 0px;
  }
`
const Cards = styled.div`
  margin-right: 40px;
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
  width: 580px;
  height: 180px;
  margin-bottom: 0px;
  @media (max-width: 767px) {
    width: 100%;
    height: auto;
    margin-bottom: 22px;
  }
`
const Card2 = styled(Card)`
  width: 376px;
  height: 202px;
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
  font-family: Poppins;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px;
`
const CardText = styled.div`
  margin-top: 18px;
  color: var(--word-color, #3F5170);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px; 
`
const Box2 = styled.div`
  position: relative;
  width: 100%;
  margin-top: 80px;
  display: flex;
  justify-content: center;
  /* background: url(${homeImg5}) no-repeat; */
  /* background-position: 100% 120%; */
  @media (max-width: 767px) {
    width: 100vw;
    margin-top: 20px;
    padding: 20px;
    flex-direction: column;
  }
`
const HomeImg5 = styled.img`
  position: absolute;
  bottom: -100px;
  right: 0;
  z-index: 1;
  animation: ${blinkAnimation} 2s ease-in-out infinite;
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
  z-index: 2;
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
export const Box3 = styled.div<{isMargin: boolean}>`
  width: 1440px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px auto 0;
  @media (max-width: 767px) {
    width: 100%;
    flex-direction: column;
    padding: 20px 20px 10px 20px;
    margin-top: ${props => props.isMargin?'30px':'0'};
  }
`
export const Box3Card = styled.div`
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
export const Box3CardBlue = styled(Box3Card)`
  position: relative;
  padding: 38px;
  border-radius: 20px;
  border: 1px solid #C8D9D6;
  background: #F8FEFF;
  &:hover {
    box-shadow: 0px 6px 10px 0px rgba(173, 218, 183, 0.25);
  }
`
export const Box3CardPink = styled(Box3Card)`
  position: relative;
  padding: 38px 36px 28px;
  border-radius: 20px;
  border: 1px solid #9E9EE8;
  background: #F8F8FF;
  &:hover {
    box-shadow: 0px 6px 10px 0px rgba(180, 158, 193, 0.25);
  }
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
  font-weight: 600;
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
export const Box3CardImg = styled.img`
  width:100%;
`
export const Box3CardTitle = styled.div`
  color: var(--main, #23262F);
  font-family: Poppins;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.1;
`
export const Box3CardSubTitle = styled.div`
  margin-top: 20px;
  color: var(--main, #23262F);
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.1;
`
export const Box3CardTxt = styled.div`
  padding: 20px;
  color: var(--word-color, #3F5170);
  font-family: Poppins;
  font-size: 18px;
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
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
`
function CliqueContent() {
  const cliqueAwSolutions = {
    title: 'Clique AW',
    subTitle: 'Build on-chain worlds unique to any AW project with a full suite of solutions.',
    // text: 'Seamlessly unwind and power world-building through these solutions'
  }
  const cardList = [
    {
      title: 'AWNS',
      content: 'Onboard & interact across worlds seamlessly with a universal name'
    },
    {
      title: '6551 Account Generator',
      content: 'Elevate any NFT into a powerful wallet that can seamlessly own and connect'
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
        {/* <ContentLeft> */}
          <CliqueContentTitle>{cliqueAwSolutions.title}</CliqueContentTitle>
          <CliqueContentSubTitle>{cliqueAwSolutions.subTitle}</CliqueContentSubTitle>
        {/* </ContentLeft> */}
        <Box3 isMargin={false}>
        <Box3CardPink>
          {/* <ComingSoonBtnPink>Coming Soon</ComingSoonBtnPink> */}
          <Box3CardTitle>AWNS</Box3CardTitle>
          <Box3CardSubTitle>Personalize with Universal Name</Box3CardSubTitle>
          <Box3CardUl>
            <Box3CardLi>Register and manage your dynamic. AW domain wrapped with a 6551 wallet</Box3CardLi>
            <Box3CardLi>Easily connect and interact with AW dApps</Box3CardLi>
            <Box3CardLi>Single name for all tokens and decentralized worlds</Box3CardLi>
          </Box3CardUl>
          <Box3CardImg src={workspaceImg3}></Box3CardImg>
          <ComingSoonBtnPinkH5>Coming Soon</ComingSoonBtnPinkH5>
        </Box3CardPink>
        <Box3CardBlue>
          <ComingSoonBtnBlue>Coming Soon</ComingSoonBtnBlue>
          <Box3CardTitle>6551 Account Generator</Box3CardTitle>
          <Box3CardSubTitle>Turn any NFT into a wallet</Box3CardSubTitle>
          <Box3CardUl>
            <Box3CardLi>Generate smart wallet based on NFT using innovative account abstraction</Box3CardLi>
            <Box3CardLi>Manage NFT Smart Wallet customizable in-app</Box3CardLi>
            <Box3CardLi>Traverse in multi-chain worlds using interworld passports</Box3CardLi>
          </Box3CardUl>
          <Box3CardImg src={workspaceImg4}></Box3CardImg>
          <ComingSoonBtnBlueH5>Coming Soon</ComingSoonBtnBlueH5>
        </Box3CardBlue>
      </Box3>
        <ContentRight>
          <Cards>
            {/* <Card1>
              <CardTitle>{cardList[0].title}</CardTitle>
              <CardText>{cardList[0].content}</CardText>
            </Card1> */}
            <Card1>
              <CardTitle>{cardList[3].title}</CardTitle>
              <CardText>{cardList[3].content}</CardText>
            </Card1>
          </Cards>
          <Cards>
            {/* <Card1>
              <CardTitle>{cardList[1].title}</CardTitle>
              <CardText>{cardList[1].content}</CardText>
            </Card1> */}
            <Card1>
              <CardTitle>{cardList[2].title}</CardTitle>
              <CardText>{cardList[2].content}</CardText>
            </Card1>
          </Cards>
        </ContentRight>
      </Box1>
      
      <Box2>
        <ContentLeft2>
          <Box2Img src={workspaceImg} />
        </ContentLeft2>
        <ContentRight2>
          <CliqueContentTitle>{cliqueWorkspace.title}</CliqueContentTitle>
          <CliqueContentSubTitle>{cliqueWorkspace.subTitle}</CliqueContentSubTitle>
          <CliqueContentText>{cliqueWorkspace.text}</CliqueContentText>
        </ContentRight2>
        <HomeImg5 src={homeImg5}></HomeImg5>
      </Box2>
      <Box3 isMargin={true}>
        <Box3CardBlue>
          <Box3CardTitle style={{ marginBottom: '20px', paddingLeft: '10px' }}>Clique Rewards</Box3CardTitle>
          <Box3CardImg src={workspaceImg1}></Box3CardImg>
          <Box3CardTxt>Rewards feature for discovering and interacting with the universe of AW.</Box3CardTxt>
        </Box3CardBlue>
        <Box3CardPink>
          <Box3CardTitle style={{ marginBottom: '20px', paddingLeft: '10px' }}>Clique Governance</Box3CardTitle>
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
  font-family: "Poppins";
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
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #97B7EF;
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
      {/* <DataStar src={decorationStar}></DataStar> */}
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
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  margin-top: 160px;
  font-size: 54px;
  line-height: 90px;
  text-align: center;
  color: #fff;
  @media (max-width: 767px) {
    font-size: 32px;
    margin-top: 80px;
    margin-left: 24px;
    line-height: 1.3;
    text-align: left;
  }
`;
const InitH2 = styled(Typography)`
  margin-top: 16px;
  font-family: "Poppins";
  font-style: normal;
  font-size: 22px;
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
  font-family: "Poppins";
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
  margin: 20px auto 160px auto;
  padding-bottom: 0px;
  border-radius: 40px;
  background: linear-gradient(180deg, rgba(32, 31, 218, 0.00) 0%, #1714B5 39.06%);
  /* background: linear-gradient(180deg, rgba(32, 31, 218, 0.00) 0%, #1A19D8 37.14%); */
  /* background: linear-gradient(180deg, rgba(27, 26, 255, 0.00) 0%, #1B1AFF 37.14%); */
  @media (max-width: 767px) {
    margin: 20px auto 60px auto;
    width: 100vw;
  }
`
const InitiativesStarWhite = styled.img`
  position: absolute;
  top: -60px;
  right: 30px;
  width: 32px;
  animation: ${blinkAnimation} 1.5s ease-in-out infinite;
`
const InitiativesStar = styled.img`
  position: absolute;
  bottom: -70px;
  right: 10px;
`
const ViewAllBox = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 767px) {
    justify-content: flex-start;
    padding-left: 24px;
  }
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
      <InitiativesStarWhite src={starWhite}></InitiativesStarWhite>
      <InitH1>Top DAOs Building Autonomous Worlds</InitH1>
      <InitH2>
        We evolve DAOs for Autonomous Worlds.  <br />
        Traverse our on-chain universe and help build the future!
      </InitH2>
      <ViewAllBox>
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
      </ViewAllBox>
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
      {/* <InitiativesStar src={decorationStar}></InitiativesStar> */}

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
      <Data />
    </InitiativesBox>
  );
}

const EcoH1 = styled(Typography)`
  margin: 150px 0 48px;
  font-family: "Poppins";
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
const HomeImg61 = styled.img`
  position: absolute;
  top: 100px;
  left: 100px;
  animation: ${blinkAnimation} 3s ease-in-out infinite;
`
const HomeImg62 = styled.img`
  position: absolute;
  bottom: -600px;
  left: calc(50% - 500px);
  z-index: 1;
  opacity: .3;
  animation: ${rotateAnimation} 200s linear infinite;

`
const HomeImg63 = styled.img`
  position: absolute;
  bottom: -500px;
  left: 0px;
  z-index: 2;
`
const EcoContent = styled.div`
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
`
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
    hypr,
    space3,
    atticlab,
    paladins,
    a3sprotocol,
    blade,
    kiosk,
    gabby,
    ggQuest,
    Openfort,
    biconomy,
    aw,
    daren,
    Composable,
    Paimas,
    Zkspace,
    Web3com,
    Altlayer,
    AGLD,
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
  const IntegrationsLogos = [Base, Binance, Polygon, Klaytn, ZkEVM];
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
    <Box position={"relative"} display={"flex"} alignItems={"center"} flexDirection={"column"} overflow={"hidden"}>
      <HomeImg61 src={homeImg61}></HomeImg61>
      <EcoContent>
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
            <SwiperSlide key={idx} style={{ width: "264.2px", lineHeight: '50px',textAlign:'center' }}>
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
      </EcoContent>
      <HomeImg62 src={homeImg62}></HomeImg62>
      <HomeImg63 src={homeImg63}></HomeImg63>
    </Box>
  );
}

function Learn() {
  const data = [
    {
      imgUrl: Learn7,
      title: "Building an Identity Layer in Autonomous Worlds (Phase 1)",
      link: "https://mirror.xyz/0xB9d761AF53845D1F3C68f99c38f4dB6fcCfB66A1/Wmh0cBnNl5fFeLBlnkeELrai1jGRi0Onk5-pbhsuiRs",
      content:
        "Underwhelming State of On-chain Identity Still to this day, users interact and transact on apps using EOAs (externally owned accounts) that can be attached with a username from a naming service (such as ENS for .eth). Deserving praise, the ecosystem has effectively adopted this username identity through most applications. However, this naming convention lacks personality and creativity as a sole identity. Beyond that, consensus says the current wallet solutions are restrictive and hinder individualism on-chain.",
    },
    {
      imgUrl: Learn8,
      title: "Building an Identity Layer in Autonomous Worlds (Phase 2)",
      link: "https://mirror.xyz/0xB9d761AF53845D1F3C68f99c38f4dB6fcCfB66A1/AxggTBVjbZWEg6UqwAH-r9WHm4MI57C3vDIbknRhsDE",
      content:
        "Framing and Building AW Identity AW requires a dynamic and versatile identity infrastructure that transports users seamlessly across worlds. So far, innovative wallets with traction such as Argent and Exodus focus on interoperability and security, but don’t focus on adding depth to identity. Today in AW, on-chain maxis still need to use different wallet providers (often blockchain specific) and hack in order to onboard across different worlds. Beyond that, wallet connections are only surface-level public keys and usernames, which hinders the expansion of on-chain realities.",
    },
    {
      imgUrl: Learn2,
      title: "DAO with Zero Knowledge Proof",
      link: "https://mirror.xyz/0xB9d761AF53845D1F3C68f99c38f4dB6fcCfB66A1/kXM7Kom5_bdWsZZHjTCY6gstqj_YEjbWDV2Fsvp_nS8",
      content:
        "DAO (Decentralized Autonomous Organization) is a form of organization that leverages blockchain technology to achieve autonomous governance, distribution, and collaboration in a decentralized manner.",
    },
    // {
    //   imgUrl: Learn1,
    //   title: "How AI will transform DAOs",
    //   link: "https://mirror.xyz/0xB9d761AF53845D1F3C68f99c38f4dB6fcCfB66A1/3jVwJxEc_dce0mSg2pS8dAPguQYq4O0OFu3OYkdtHa4",
    //   content:
    //     "ChatGPT took the world by storm by proliferating the application of  artificial intelligence (AI) and reinforcement learning (RL). By design, DAOs gravitate towards AI and RL through smart contract technology and activity data that can be trained and reinforced. Intertwining the DAO concept with AI technology creates a paradigm shift in efficiency and capability for governance, while promising transparency and decentralization. The efficacy of this combination of theory and technology is unprecedented.",
    // },
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
    // {
    //   imgUrl: Learn5,
    //   title: "How to create a community event with Clique",
    //   link: "https://stp-dao.gitbook.io/verse-network/clique/dao-rewards",
    //   content:
    //     "As a part of Clique’s V2 upgrade, DAO Rewards is a new feature to reward community members and foster engagement ... ",
    // },
  ];
  const isDownSm = useBreakpoint("sm");

  return (
    <Box position={"relative"} pb={"120px"} sx={{ width: "100%", backgroundColor: "#F5F8FE" }}>
      <LearnEllipse src={starCircle}></LearnEllipse>
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


const LearnEllipse = styled.img`
  position: absolute;
  top: 0;
  right: 0px;
  z-index: 1;
`

const LearnBox = styled(Box)`
  z-index: 2;
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
  width: 1330px;
  /* height: 506px; */
  position: relative;
  margin: auto;
  padding: 120px 60px;
  @media (max-width: 767px) {
    width: 100%;
    padding: 80px 4px;
    // margin-bottom: 48px;
  }
`;

const BuildH1 = styled(Typography)`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 60px;
  line-height: 90px;
  color: #ffffff;
  @media (max-width: 767px) {
    font-size: 42px;
    line-height: 58px;
  }
`;

const BuildContent = styled(Typography)`
  font-family: "DM Sans";
  font-style: normal;
  margin-top: 24px;
  font-weight: 500;
  font-size: 32px;
  line-height: 1.3;
  color: #A7F46A;
  width: 600px;
  @media (max-width: 767px) {
    width: 100%;
    font-size: 26px;
  }
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
      {/* <img
        style={{ position: "absolute", right: 0, bottom: 0 }}
        src={BuildCircle}
      /> */}
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
    ["Products", "Clique Workspace","Clique Social", "Clique DApp Store", "Clique SDK"],
    ["Leading DAOs", "STP DAO", "Mighty Magic", "AGLD", "Paladins DAO"],
    ["STP Ecosystem", "Ecosystem"],
    ["Resources", "News", "Github", "Documentation"],
  ];
  const footListLink = [
    [
      "Products",
      "https://www.myclique.io/governance",
      "/cliqueSocial",
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
    // [
    //   "Resources",
    //   "https://github.com/STPDevteam",
    //   "https://stp-dao.gitbook.io/verse-network/clique/overview-of-clique",
    // ],
    [
      "STP Ecosystem",
      "https://www.stp.network/ecosystem"
    ],
    [
      "Resources",
      "https://mirror.xyz/0xB9d761AF53845D1F3C68f99c38f4dB6fcCfB66A1",
      "https://github.com/STPDevteam",
      "https://stpdao.gitbook.io/whitepaper/stp-network/master"
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
                          onClick={() =>{
                            if(footListLink[idx][i].includes('http')){
                              window.open(footListLink[idx][i], "_blank")
                            }else {
                              window.scrollTo(0, 0);
                              history.push(footListLink[idx][i])
                            }
                          }
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
            {/* <Box>
              <FooterH1>STP Ecosystem</FooterH1>
               <FooterH1
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open(
                    "https://www.stp.network/ecosystem",
                    "_blank"
                  )
                }
              >
                Ecosystem
              </FooterH1>
            </Box> */}
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

const FooterBox2 = styled(Box)`
  width: 1330px;
  margin: auto;
  padding: 80px;
  border-radius: 60px;
  background: linear-gradient(180deg, #0B1251 0%, rgba(16, 16, 16, 0.47) 100%);
  backdrop-filter: blur(32px);
  @media (max-width: 767px) {
    width: 100%;
    margin: 24px;
    margin: auto;
    padding: 48px 20px 88px 20px;
  }
`
export function Footer2() {
  const isDownSm = useBreakpoint("sm");
  const history = useHistory();
  // return <></>;
  const footList = [
    ["Products", "Clique Workspace","Clique Social", "Clique DApp Store", "Clique SDK"],
    ["Leading DAOs", "STP DAO", "Mighty Magic", "AGLD", "Paladins DAO"],
    ["STP Ecosystem", "Ecosystem"],
    ["Resources", "News", "Github", "Documentation"],
  ];
  const footListLink = [
    [
      "Products",
      "https://www.myclique.io/governance",
      "/cliqueSocial",
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
      "STP Ecosystem",
      "https://www.stp.network/ecosystem"
    ],
    [
      "Resources",
      "https://mirror.xyz/0xB9d761AF53845D1F3C68f99c38f4dB6fcCfB66A1",
      "https://github.com/STPDevteam",
      "https://stpdao.gitbook.io/whitepaper/stp-network/master"
    ],
  ];
  return (
    <FooterBox2>
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
          <Divider style={{ background: "#757B8A", marginTop: '40px', marginBottom: '70px' }} />
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
                            {
                              if(footListLink[idx][i].includes('http')){
                                window.open(footListLink[idx][i], "_blank")
                              }else {
                                window.scrollTo(0, 0);
                                history.push(footListLink[idx][i])
                              }
                            }
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
            {/* <Box>
              <FooterH1>STP Ecosystem</FooterH1>
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
            </Box> */}
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
    </FooterBox2>
  );
}
