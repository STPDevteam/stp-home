import React, { useState } from 'react'
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
import { Button, Typography, Box } from '@mui/material'
import Modal from '@mui/material/Modal';
// import { Modal } from "antd";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import homeImg62 from "../../assets/images/home/home6-2.png"
import s1 from "../../assets/images/soda/s1.png"
import s2 from "../../assets/images/soda/s2.png"
import f1 from "../../assets/images/soda/f1.svg"
import f2 from "../../assets/images/soda/f2.svg"
import f3 from "../../assets/images/soda/f3.svg"
import f4 from "../../assets/images/soda/f4.svg"
import star from "../../assets/images/soda/star.png"
import greenStar from "../../assets/images/soda/greenStar.svg"
import comingsoon from "../../assets/images/soda/comingsoon.png"
import closeIcon from "../../assets/images/soda/Close.svg"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 520,
  bgcolor: '#fff',
  border: 'none',
  borderRadius: 4,
  boxShadow: 24,
  pt: 1,
  px: 1,
  pb: 4,
};

const HeadBox2 = styled(HeadBox)`
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

const CenterBox = styled.div`
  position: relative;
  height: 620px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  padding-top: 6px;
  text-align: center;
  background-image: url(${homeImg62});
  background-repeat: no-repeat;
  background-position: center top;
  @media (max-width: 767px) {
    flex-direction: column;
    height: 760px;
  }
`
const SocialBox = styled.div`
  width: 540px;
  height: 500px;
  margin: 0 10px;
  padding: 24px;
  border-radius: 10px;
  border: 1px solid rgba(54, 114, 231, 1);
  background: rgba(31, 50, 220, 0.5);
   &:hover {
    border-color: rgba(167, 244, 106, 1);
    box-shadow: 0px 4px 60px 0px rgba(14, 14, 172, 1);
   }
   @media (max-width: 767px) {
    width: 88%;
    height: auto;
    margin: 10px auto;
  }
`
const SocialTitle = styled.div`
  font-size: 32px;
  font-weight: 600;
  color: #fff;
  letter-spacing: 2px;
`
const SocialCover = styled.img`
  width: 80%;
`
const SocialCover2 = styled.img`
  width: auto;
  height: 292px;
  @media (max-width: 767px) {
    width: 62%;
    height: auto;
    
  }
`
const SocialTxt = styled.div`
  font-family: Urbanist;
  font-size: 24px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 2px;
  text-align: center;
  color: #fff;
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
  padding: 10px 24px;
  margin: 10px auto 0 auto;
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

const Features = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 130px;
  background-position: 0% -5%;
  position: relative;
  z-index: 1;
  padding-bottom: 100px;
  overflow: hidden;
  @media (max-width: 767px) {
    padding-top: 30px;
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
  bottom: -120px;
  right: 0px;
  z-index: 1;
  /* animation: ${blinkAnimation} 2s ease-in-out infinite; */
  @media (max-width: 767px) {
    top: 30px;
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
const FeaturesCardTitle = styled.div`
  font-family: Urbanist;
  font-size: 32px;
  font-weight: 600;
  line-height: 35px;
  letter-spacing: 0px;
  text-align: center;
`
const FeaturesMain = styled.div`
  display: flex;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`
const FeaturesMainImg = styled.img`
  width: 100%;
  @media (max-width: 767px) {
    width: 100px;
    height: auto;
    margin: auto;
  }
`
const Box3CardPink2 = styled(Box3CardPink)`
  z-index: 3;
  opacity: .95;
`
const ComingSoonBox = styled.div`
  width: 380px;
  height: 210px;
  margin: auto;
  background-color: #f8fbff;
  border: 1px solid rgba(151, 183, 239, 1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`
const CloseBox = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
`
const Close = styled.img`
  width: 24px;
  cursor: pointer;
`
const ComingSoonTxt = styled.p`
  margin-top: 10px;
  color: rgba(0, 73, 198, 1);
  font-weight: 600;
  font-size: 20px;
`
export default function Soda() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* <Modal open={isModalOpen} title="Coming Soon" onClose={() => setIsModalOpen(false)} >
        <Box sx={{ ...style }}>
          <CloseBox>
            <Close src={closeIcon} onClick={() => setIsModalOpen(false)}></Close>
          </CloseBox>
          <ComingSoonBox>
            <img src={comingsoon}></img>
            <ComingSoonTxt>Coming Soon...</ComingSoonTxt>
          </ComingSoonBox>
        </Box>
      </Modal> */}
      <ContentWrapper>
        <HeadBox2 style={{ height: 'auto', background: "#2524de" }}>
          <HeadTitle>Clique Social</HeadTitle>
          {/* <HeadText>
            Power DAOs and NFTs with social tooling integrated on Twitter and Facebook
          </HeadText> */}
          <CenterBox>
            <SocialBox>
              <SocialTitle>Soda</SocialTitle>
              <SocialCover src={s1}></SocialCover>
              <SocialTxt>Chrome extension</SocialTxt>
              <GreenBtn onClick={() => window.open('https://chromewebstore.google.com/detail/soda/ckeekocbghailhahfmkdgffiieolpagi')}>Install <ArrowOutwardIcon style={{ color: "#23262F" }} /></GreenBtn>
            </SocialBox>
            <SocialBox>
              <SocialTitle>Soton</SocialTitle>
              <SocialCover2 src={s2}></SocialCover2>
              <SocialTxt>Telegram bot</SocialTxt>
              <GreenBtn onClick={() => window.open('https://t.me/Web3SotonBot')}>Install <ArrowOutwardIcon style={{ color: "#23262F" }} /></GreenBtn>
            </SocialBox>
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
              <FeaturesCardTitle style={{ marginBottom: '20px', paddingLeft: '10px' }}>Mint</FeaturesCardTitle>
              <FeaturesMain>
                <FeaturesMainImg src={f1}></FeaturesMainImg>
                <Box3CardTxt>Instantly create NFTs from any image or social media post with just a few clicks. Our platform simplifies your minting process.</Box3CardTxt>
              </FeaturesMain>
            </Box3CardPink>
            <Box3CardBlue>
              <FeaturesCardTitle style={{ marginBottom: '20px', paddingLeft: '10px' }}>Share</FeaturesCardTitle>
              <FeaturesMain>
                <FeaturesMainImg src={f2}></FeaturesMainImg>
                <Box3CardTxt>Seamlessly share your NFTs on social media from your Soda wallet. Connect and impress audiences worldwide with ease.</Box3CardTxt>
              </FeaturesMain>
            </Box3CardBlue>
            <Box3CardBlue>
              <FeaturesCardTitle style={{ marginBottom: '20px', paddingLeft: '10px' }}>Governance</FeaturesCardTitle>
              <FeaturesMain>
                <FeaturesMainImg src={f3}></FeaturesMainImg>
                <Box3CardTxt>Quickly set up DAO proposals and enable NFT-based voting directly on socials such as Telegram.Streamline community engagement and decision-making.</Box3CardTxt>
              </FeaturesMain>
            </Box3CardBlue>
            <Box3CardPink2>
              <FeaturesCardTitle style={{ marginBottom: '20px', paddingLeft: '10px' }}>Launchpad</FeaturesCardTitle>
              <FeaturesMain>
                <FeaturesMainImg src={f4}></FeaturesMainImg>
                <Box3CardTxt>Launch tokens on the TON blockchain effortlessly. Our platform enhances community building with staking, voting, and rewards directly on socials.</Box3CardTxt>
              </FeaturesMain>
            </Box3CardPink2>
          </Box3>
          <BigStar src={homeImg62}></BigStar>
        </Features>
        <Footer />
      </ContentWrapper>
    </>
  )
}
