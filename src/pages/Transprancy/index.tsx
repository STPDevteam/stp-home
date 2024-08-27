import React, { useState } from 'react'
import {
  ContentWrapper,
  Footer,
  OpenIconSpeedDial
} from "../Home/homepage";
import styled from 'styled-components';
import { Button, Typography, Box } from '@mui/material'

import homeImg62 from "../../assets/images/home/home6-2.png"
import section1 from '../../assets/images/soda/section1.png'
import m1 from "../../assets/images/transprancy/m1.png"
import m2 from "../../assets/images/transprancy/m2.png"

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


const Section1 = styled.div`
  margin-top: 50px;
  width: 100%;
  background: url(${section1}) no-repeat;
  background-size: contain;
  background-position: center;
  min-height: 520px;
  @media (max-width: 767px) {
    background-size: 880%;
    min-height: 320px;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }
`
const Section1Title = styled.div`
  width: 538px;
  margin: auto;
  padding-top: 130px;
  font-family: Inter;
  font-size: 64px;
  font-weight: 600;
  letter-spacing: 0em;
  text-align: center;
  /* color: #B2B2B2; */
  background: linear-gradient(107.41deg, #FFFFFF 65%, rgba(255, 255, 255, 0.43) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 767px) {
    padding-top: 40px;
    margin-bottom: 10px;
    font-size: 36px;
    width: 100%;
  }
`
const Section1Subtitle = styled.div`
  width: 1080px;
  margin: auto;
  font-family: Inter;
  font-size: 24px;
  line-height: 34px;
  text-align: center;
  color: #949CB9;
  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 1.3;
    width: 100%;
    padding: 0px 24px 0 24px;
  }
`
const Section2 = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: -40px auto 0  auto;
  @media (max-width: 767px) {
    margin-top: -20px;
    padding: 24px;
    flex-direction: column;
  }
`
const Section2Card = styled.div`
  width: 388px;
  height: 388px;
  padding: 16px;
  border: 1px solid #363636;
  border-radius: 20px;
  background: #1D1C20;
  cursor: pointer;
  @media (max-width: 767px) {
    width: 100%;
    height: auto;
  }
`
const CardCover = styled.img`
  width: 100%;
  border-radius: 10px;
`
const CardTitle = styled.div`
  height: 56px;
  margin: 10px 0;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  color: #fff;
`
const CardDes = styled.div`
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  color: #BDBDC0;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
  text-overflow: ellipsis;
`

export default function Soda() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ContentWrapper>
        <Section1>
          <Section1Title>Transprancy</Section1Title>
          <Section1Subtitle>Transparency is a core value of the STP DAO, and we’re committed to keeping our community informed every step of the way. Here, you’ll find a collection of links and resources detailing our progress over the years and everything we’re working on right now. This includes quarterly updates, governance reports, annual reviews, and other key documents.
          </Section1Subtitle>
          <Section1Subtitle>We encourage our community to visit this page frequently to stay up-to-date on the latest developments within the STP ecosystem.</Section1Subtitle>
        </Section1>
        <Section2>
          <Section2Card onClick={()=>{window.open("https://mirror.xyz/0xB9d761AF53845D1F3C68f99c38f4dB6fcCfB66A1/KWf6Fwvv8Os54tPag1zpKf1hK27AGKSLN7H3RgKA2sA")}}>
            <CardCover src={m1}></CardCover>
            <CardTitle>STP Q2 2024 Progress: Clique Gaming Propels</CardTitle>
            <CardDes>STP is thrilled to share its exciting developments from Q2 2024. Our focus remains on enhancing the gaming experience with AI and expanding our L3 Clique. Here’s a look at STP’s progress in Q2.</CardDes>
          </Section2Card>
          <Section2Card onClick={()=>{window.open("https://mirror.xyz/0xB9d761AF53845D1F3C68f99c38f4dB6fcCfB66A1/OI6mpDTF98pzSOOEKKuPAI4Tm8KDuBaspbyLNC3pYRw")}}>
            <CardCover src={m2}></CardCover>
            <CardTitle>STP 2023 Year End Recap</CardTitle>
            <CardDes>Throughout the last year STP greatly expanded its ecosystem optimized for DAOs by supporting over 500+ DAOs while enhancing its native DAO tools and infrastructure with Clique V3. Additionally, STP made the leap into Autonomous Worlds by expanding its infrastructure and tooling for on-chain games, communities and worlds starting with identity. This new initiative resulted in the release of AWNS (Autonomous Worlds Name Service) which leverages account abstraction to create an identity and wallet (ERC-6551) that is designed for all on-chain activity but specifically gaming. The initial version of this identity product was released at the end of Q3 and played a major part in STP’s 2023 development</CardDes>
          </Section2Card>
        </Section2>
        <Footer />
        <OpenIconSpeedDial></OpenIconSpeedDial>
      </ContentWrapper>
    </>
  )
}
