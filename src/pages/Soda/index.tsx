import React from 'react'
import {
  ContentWrapper,
  HeadBox,
  HeadH1,
  Box1,
  CliqueContentTitle,
  Box3,
  Box3CardBlue,
  Box3CardPink,
  Box3CardTitle,
  Box3CardImg,
  Box3CardTxt,
  blinkAnimation,
  Footer
} from "../Home/homepage";
import styled from 'styled-components';
import { Button, Typography } from '@mui/material'
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import homeImg62 from "../../assets/images/home/home6-2.png"
import s1 from "../../assets/images/soda/s1.png"
import f1 from "../../assets/images/soda/f1.png"
import f2 from "../../assets/images/soda/f2.png"
import f3 from "../../assets/images/soda/f3.png"
import f4 from "../../assets/images/soda/f4.png"
import star from "../../assets/images/soda/star.png"
import greenStar from "../../assets/images/soda/greenStar.svg"


const HeadBox2 =styled(HeadBox)`
  @media (max-width: 767px) {
    padding-left: 0;
    padding-bottom: 0;
  }
`
const HeadTitle = styled.div`
  font-family: "Righteous";
  font-style: normal;
  font-weight: 500;
  font-size: 74px;
  line-height: 90px;
  padding-top: 200px;
  color: #ffffff;
  /* padding-left: 160px; */
  text-align: center;
  @media (max-width: 767px) {
    padding-top: 100px;
    padding-left: 0px;
    font-size: 48px;
    line-height: 56px;
  }
`
const HeadText = styled(Typography)`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  margin-top: 24px;
  font-size: 24px;
  line-height: 40px;
  color: #ececec;
  text-align: center;

  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 24px;
    margin-top: 40px;
    padding-left: 0px;
  }
`
const CenterBox = styled.div`
  position: relative;
  height: 600px;
  width: 100%;
  margin-top: 20px;
  padding-top: 16px;
  text-align: center;
  background-image: url(${homeImg62});
  background-repeat: no-repeat;
  background-position: center top;
  @media (max-width: 767px) {
    height: 310px;
  }
`
const CenterBtn = styled.div`
  position: absolute;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  z-index: 99;
`
const GreenBtn = styled(Button)`
  display: flex;
  border: 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  margin: auto;
  font-weight: 700;
  font-size: 18px;
  height: 48px;
  line-height: 24px;
  gap: 8px;
  background: #a7f46a;
  border-radius: 8px;
  text-transform: none;
  color: rgba(35, 38, 47, 1);
  cursor: pointer;
  &:hover {
    background-color: #7de04d;
    /* box-shadow: 1px 1px #a7f46a; */
  }
  @media (max-width: 767px) {
    height: 40px;
    font-size: 14px;
    line-height: 150%;
  }
`;
const SocailImg = styled.img`
  position: absolute;
  top: -30px;
  left: calc(50% - 400px);
  width: 800px;
  height: 670px;
  z-index: 1;
  @media (max-width: 767px) {
    width: 100%;
    height: auto;
    top: 30px;
    left: calc(50% - 185px);
  }
`
const Features = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 150px;
  background-position: 0% -5%;
  position: relative;
  z-index: 1;
  padding-bottom: 100px;
  overflow: hidden;
  @media (max-width: 767px) {
    padding-top: 50px;
    padding-bottom: 40px;
  }
`
const StarImg = styled.img`
  position: absolute;
  top: 0px;
  left: 0;
  z-index: 1;
  animation: ${blinkAnimation} 2s ease-in-out infinite;
  @media (max-width: 767px) {
    width: 200px;
  }
`
const GreenStarImg = styled.img`
  position: absolute;
  top: -80px;
  right: 50px;
  z-index: 1;
  /* animation: ${blinkAnimation} 2s ease-in-out infinite; */
  @media (max-width: 767px) {
    top: -30px;
    right: 10px;
    width: 68px;
  }
`
const BigStar = styled.img`
  position: absolute;
  bottom: -100px;
  right: -100px;
  width: 600px;
  transform: rotate(150deg);
  z-index: 0;
  @media (max-width: 767px) {
    width: 100%;
  }

`
const Box3CardPink2 =styled(Box3CardPink)`
  z-index: 3;
  opacity: .95;
`
export default function index() {
  return (
    <ContentWrapper>
      <HeadBox2 style={{ height: 'auto', background: "#2524de" }}>
        <HeadTitle>Clique Social</HeadTitle>
        <HeadText>
          Power DAOs and NFTs with social tooling integrated on Twitter and Facebook
        </HeadText>
        <CenterBox>
          <CenterBtn>
            <GreenBtn onClick={() => {window.open('https://chromewebstore.google.com/detail/soda/ckeekocbghailhahfmkdgffiieolpagi')}}>Install Extension <ArrowOutwardIcon style={{ color: "#23262F" }} /></GreenBtn>
          </CenterBtn>
          <SocailImg src={s1}></SocailImg>
        </CenterBox>
      </HeadBox2>
      <Features>
          <StarImg src={star}></StarImg>
        <Box1>
          <GreenStarImg src={greenStar}></GreenStarImg>
          <CliqueContentTitle>Features</CliqueContentTitle>
        </Box1>
        <Box3 isMargin={false}>
          <Box3CardPink>
            <Box3CardTitle style={{ marginBottom: '20px', paddingLeft: '10px' }}>Mint</Box3CardTitle>
            <Box3CardImg src={f1}></Box3CardImg>
            <Box3CardTxt>Mint your own NFTs with just a few clicks! Upload an image from your local drive, or mint an existing post on Facebook or Twitter.</Box3CardTxt>
          </Box3CardPink>
          <Box3CardBlue>
            <Box3CardTitle style={{ marginBottom: '20px', paddingLeft: '10px' }}>Share</Box3CardTitle>
            <Box3CardImg src={f2}></Box3CardImg>
            <Box3CardTxt>Easily upload your NFTs from your Clique Social wallet to social media for the whole world to see!</Box3CardTxt>
          </Box3CardBlue>
          <Box3CardBlue>
            <Box3CardTitle style={{ marginBottom: '20px', paddingLeft: '10px' }}>DAO Creation</Box3CardTitle>
            <Box3CardImg src={f3}></Box3CardImg>
            <Box3CardTxt>Create a DAO in minutes using an individual NFT or an NFT series. Simply choose the NFT(s), enter some basic information, and that's it!</Box3CardTxt>
          </Box3CardBlue>
          <Box3CardPink2>
            <Box3CardTitle style={{ marginBottom: '20px', paddingLeft: '10px' }}>DAO Governance</Box3CardTitle>
            <Box3CardImg src={f4}></Box3CardImg>
            <Box3CardTxt>Create DAO proposals within minutes and NFT-gate its participation. Users with verified NFTs can vote within seconds!</Box3CardTxt>
          </Box3CardPink2>
        </Box3>
        <BigStar src={homeImg62}></BigStar>
      </Features>
      <Footer />
    </ContentWrapper>
  )
}
