import React, { useState } from 'react'
import {
  ContentWrapper,
  HeadBox,
  HeadH1,
  Box1,
  CliqueContentTitle,
  blinkAnimation,
  Footer,
  OpenIconSpeedDial
} from "../Home/homepage";
import styled from 'styled-components';
import { Button, Typography, Box } from '@mui/material'
import Modal from '@mui/material/Modal';
// import { Modal } from "antd";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import homeImg62 from "../../assets/images/home/home6-2.png"
import s1 from "../../assets/images/soda/s1.svg"
import s2 from "../../assets/images/soda/s2.png"
import f1 from "../../assets/images/soda/f1.svg"
import f2 from "../../assets/images/soda/f2.svg"
import f3 from "../../assets/images/soda/f3.svg"
import f4 from "../../assets/images/soda/f4.svg"
import star from "../../assets/images/soda/star.png"
import greenStar from "../../assets/images/soda/greenStar.svg"
import comingsoon from "../../assets/images/soda/comingsoon.png"
import closeIcon from "../../assets/images/soda/Close.svg"
import section1 from '../../assets/images/soda/section1.png'
import section2 from '../../assets/images/soda/section2.png'
import section4 from '../../assets/images/home/Homepage6.png'

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
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  padding-top: 6px;
  text-align: center;
  /* background-image: url(${homeImg62}); */
  background-repeat: no-repeat;
  background-position: center top;
  @media (max-width: 767px) {
    flex-direction: column;
    height: auto;
    margin-top: 0;
  }
`
const SocialBox = styled.div`
  width: 468px;
  height: 500px;
  margin: 0 10px;
  padding: 24px;
  border-right: 1px solid #363636;
  &:last-of-type {
    border-right: none;
  }
  position: relative;
   &:hover::before {
     content: "";
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80%;
      height: 80%;
      background-color: rgba(35, 74, 152, 1);
      border-radius: 50%;
      z-index: 1;
      transition: all 0.3s ease;
      pointer-events: none;
      filter: blur(40px);
      box-shadow: 20px -20px 20px 20px #002675;
   }
   @media (max-width: 767px) {
    width: 88%;
    height: auto;
    margin: 10px auto;
    border-right: none;
    border-bottom: 1px solid #363636;
    &:last-of-type {
      border-bottom: none;
    }
  }
`
const SocialContent = styled.div`
   position: relative;
    z-index: 2;
`
const SocialTitle = styled.div`
  margin-bottom: 10px;
  font-size: 32px;
  font-weight: 600;
  color: #fff;
  letter-spacing: 2px;
  @media (max-width: 767px) {
    font-size: 28px;
  }
`
const SocialCover = styled.img`
  height: 292px;
  margin: 10px 0 20px 0;
`
const SocialCover2 = styled.img`
  width: auto;
  height: 292px;
  margin: 10px 0 20px 0;
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
  letter-spacing: 1px;
  text-align: center;
  color: #B2B2B2;
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
  border-radius: 24px;
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
  background: #fff;
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
  width: 168px;
  @media (max-width: 767px) {
    width: 88px;
    height: auto;
    /* margin: 4px; */
  }
`
export const Box3 = styled.div<{ isMargin: boolean }>`
  width: 1440px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px auto 0;
  @media (max-width: 767px) {
    width: 100%;
    flex-direction: column;
    padding: 20px 20px 10px 20px;
    margin-top: ${props => props.isMargin ? '30px' : '0'};
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
export const Box3CardTxt = styled.div`
  padding: 20px;
  color: var(--word-color, #3F5170);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
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
const Section1 = styled.div`
  width: 100%;
  background: url(${section1}) no-repeat;
  background-size: contain;
  background-position: center;
  min-height: 520px;
  @media (max-width: 767px) {
    background-size: 200%;
    min-height: 320px;
  }
`
const Section1Title = styled.div`
  width: 377px;
  margin: auto;
  padding-top: 130px;
  font-family: Inter;
  font-size: 64px;
  font-weight: 600;
  letter-spacing: 0em;
  text-align: center;
  color: #B2B2B2;
  /* background: linear-gradient(107.41deg, #FFFFFF 65%, rgba(255, 255, 255, 0.43) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
  @media (max-width: 767px) {
    padding-top: 90px;
    font-size: 36px;
    width: 100%;
  }
`
const Section2 = styled.div`
  margin-top: -160px;
  padding-bottom: 100px;
  @media (max-width: 767px) {
   padding-bottom: 20px;
  }
`
const Section2Title = styled.div`
  width: 450px;
  margin: auto;
  font-family: Inter;
  font-size: 48px;
  font-weight: 600;
  line-height: 58px;
  letter-spacing: -0.2px;
  text-align: center;
  background: linear-gradient(107.41deg, #FFFFFF 65%, rgba(255, 255, 255, 0.43) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 767px) {
    width: 300px;
    margin-bottom: 10px;
    padding-top: 20px;
    font-size: 32px;
  }
`
const Section2Img = styled.img`
  margin-top: -40px;
  width: 1000px;
  @media (max-width: 767px) {
    width: 100%;
  }
`
const JoinBtn = styled(GreenBtn)`
  margin-top: -60px;
  background: #0049C6;
  color: #fff;
  @media (max-width: 767px) {
      margin-top: -20px;
  }
`
const Section3 = styled.div`
  
`
const Section3Title = styled.div`
  width: 450px;
  margin: auto;
  font-family: Inter;
  font-size: 48px;
  font-weight: 600;
  line-height: 58px;
  letter-spacing: -0.2px;
  text-align: center;
  background: linear-gradient(107.41deg, #FFFFFF 65%, rgba(255, 255, 255, 0.43) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 767px) {
    padding-top: 90px;
    font-size: 32px;
    width: 280px;
  }
`
const Section4 = styled.div`
  width: 100%;
  padding-bottom: 90px;
  background: url(${section4}) no-repeat;
  background-size: contain;
  background-position: center 100%;
  @media (max-width: 767px) {
    background-size: 200%;
    height: auto;
  }
`
const Section4Title = styled.div`
  width: 160px;
  margin: 120px auto 0 auto;
  font-family: Inter;
  font-size: 32px;
  font-weight: 600;
  line-height: 58px;
  letter-spacing: -0.2px;
  text-align: center;
  background: linear-gradient(107.41deg, #FFFFFF 65%, rgba(255, 255, 255, 0.43) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 767px) {
    /* width: 300px; */
  }
`
const Section4Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 900px; */
  height: 999px;
  margin: 24px auto;
  gap: 24px;
  @media (max-width: 767px) {
    flex-direction: column;
    width: 100%;
    height: auto;
    padding: 0 24px;
    gap: 20px;
  }
`
const Section4Card = styled.div`
  /* width: 50%; */
  display: flex;
  max-width: 607px;
  height: 216px;
  margin-bottom: 16px;
  padding: 24px;
  border-left: 1px solid #363636;
  &:hover {
    background: linear-gradient(180deg, rgba(3, 0, 20, 0) 5.9%, #0049C6 124.43%, #0049C6 155.23%);
    
  }
  @media (max-width: 767px) {
    width: 100%;
    height: auto;
    padding: 10px;
    /* flex-direction: column; */
  }
`
const CardImgBox = styled.div`
  /* padding-top: 20px;
  padding-left: 24px;
  padding-bottom: 20px; */
  padding: 4px;
`
const CardTitle = styled.div`
  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  line-height: 26px;
  padding-left: 24px;
  margin: 16px 0;
  color: #fff;
  @media (max-width: 767px) {
    padding-left: 10px;
    /* flex-direction: column; */
  }
`
const CardTxt = styled.div`
  padding: 0 24px;
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #B2B2B2;
  letter-spacing: -0.2px;
  @media (max-width: 767px) {
    padding: 0 0 0 10px;
    line-height: 20px;
    font-size: 14px;
    /* flex-direction: column; */
  }
`
export default function Soda() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ContentWrapper>
        <Section1>
          <Section1Title>Community</Section1Title>
        </Section1>
        <Section2>
          <Section2Title>Social and DAOs</Section2Title>
          <Section2Img src={section2}></Section2Img>
          <JoinBtn onClick={()=>window.open('https://www.myclique.io/daos')}>Join Community</JoinBtn>
        </Section2>
        <Section3>
          <Section3Title>Social Tooling</Section3Title>
          <CenterBox>
            <SocialBox>
              <SocialContent>
                <SocialTitle>Soda</SocialTitle>
                <SocialCover src={s1}></SocialCover>
                <SocialTxt>Chrome extension</SocialTxt>
                <GreenBtn onClick={() => window.open('https://chromewebstore.google.com/detail/soda/ckeekocbghailhahfmkdgffiieolpagi')}>Install </GreenBtn>
              </SocialContent>
            </SocialBox>
            <SocialBox>
              <SocialContent>
                <SocialTitle>Soton</SocialTitle>
                <SocialCover src={s2}></SocialCover>
                <SocialTxt>Telegram bot</SocialTxt>
                <GreenBtn onClick={() => window.open('https://t.me/Web3SotonBot')}>Install </GreenBtn>
              </SocialContent>
            </SocialBox>
          </CenterBox>
        </Section3>
        <Section4>
          <Section4Title>Features</Section4Title>
          <Section4Main>
            <Section4Card>
              {/* <CardImgBox> */}
                <FeaturesMainImg style={{marginRight: '4px'}} src={f1}></FeaturesMainImg>
              {/* </CardImgBox> */}
              <div>
                <CardTitle>Mint</CardTitle>
                <CardTxt>Instantly create NFTs from any image or social media post with just a few clicks. Our platform simplifies your minting process.</CardTxt>
              </div>
            </Section4Card>
            <Section4Card>
              <div>
                <CardTitle>Share</CardTitle>
                <CardTxt>Seamlessly share your NFTs on social media from your Soda wallet. Connect and impress audiences worldwide with ease.</CardTxt>
              </div>
              {/* <CardImgBox> */}
                <FeaturesMainImg style={{marginLeft: '4px'}} src={f2}></FeaturesMainImg>
              {/* </CardImgBox> */}
            </Section4Card>
            <Section4Card>
              {/* <CardImgBox> */}
                <FeaturesMainImg style={{marginRight: '4px'}} src={f3}></FeaturesMainImg>
              {/* </CardImgBox> */}
              <div>
                <CardTitle>DAO Management</CardTitle>
                <CardTxt>Quickly set up DAO proposals and enable NFT-based voting directly on socials such as Telegram.Streamline community engagement and decision-making.</CardTxt>
              </div>
            </Section4Card>
            <Section4Card>
              <div>
                <CardTitle>IDO</CardTitle>
                <CardTxt>Launch tokens on the TON blockchain effortlessly. Our platform enhances community building with staking, voting, and rewards directly on socials.</CardTxt>
              </div>
              {/* <CardImgBox> */}
                <FeaturesMainImg style={{marginLeft: '4px'}} src={f4}></FeaturesMainImg>
              {/* </CardImgBox> */}
            </Section4Card>
          </Section4Main>
        </Section4>
        <Footer btnShow={false} />
        <OpenIconSpeedDial></OpenIconSpeedDial>
      </ContentWrapper>
    </>
  )
}
