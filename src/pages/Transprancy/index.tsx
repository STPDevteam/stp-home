import React, { useState } from 'react'
import {
  ContentWrapper,
  Footer,
  OpenIconSpeedDial
} from "../Home/homepage";
import styled from 'styled-components';
import { Button, Typography, Box } from '@mui/material'

import homeImg62 from "../../assets/images/home/home6-2.png"
import section1 from '../../assets/images/transprancy/s1.png'
import m8 from "../../assets/images/transprancy/m8.jpeg"
import m7 from "../../assets/images/transprancy/m7.jpeg"
import m6 from "../../assets/images/transprancy/m6.jpeg"
import m5 from "../../assets/images/transprancy/m5.jpeg"
import m4 from "../../assets/images/transprancy/m4.jpeg"
import m3 from "../../assets/images/transprancy/m3.png"
import m2 from "../../assets/images/transprancy/m1.png"
import m1 from "../../assets/images/transprancy/m2.png"
import section3 from '../../assets/images/home/Homepage6.png'


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
  min-height: 650px;
  mix-blend-mode: luminosity;
  @media (max-width: 767px) {
    /* background-size: 980%; */
    background: none;
    min-height: 320px;
    margin-bottom: 20px;
  }
`
const Section1Title = styled.div`
  width: 538px;
  margin: auto;
  padding-top: 150px;
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
  margin: 10px auto 40px auto;
  font-family: Inter;
  font-size: 24px;
  line-height: 34px;
  text-align: center;
  color: #949CB9;
  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 1.3;
    width: 100%;
    margin: 20px auto;
    padding: 0px 24px 0 24px;
  }
`
const Section2 = styled.div`
  position: relative;
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: -80px auto 0  auto;
  z-index: 9;
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
const Section3 = styled.div`
  width: 100%;
  height: 598px;
  display: flex;
  align-items: flex-end;
  margin-top: -200px;
  padding-bottom: 120px;
  background: url(${section3}) no-repeat;
  background-size: contain;
  background-position: center 80%;
  @media (max-width: 767px) {
    margin-top: 10px;
    padding-bottom: 20px;
    background-size: 200%;
    background-position: center 100%;
    height: auto;
  }
`
const list = [
  {
    title:'STP 2024 Year End Recap',
    des:'2024 was a pivotal year for STP Network, characterized by significant progress in developing infrastructure for AI-enhanced gaming and Onchain identity within Autonomous Worlds (AW). From expanding our game library and tools to introducing cutting-edge AI capabilities, STP cemented itself as a leader in this rapidly evolving space. Below, we reflect on the year’s achievements across product development, partnerships, and ecosystem growth, supplemented by links to detailed articles where possible.',
    cover: m8,
    link:'https://mirror.xyz/0xB9d761AF53845D1F3C68f99c38f4dB6fcCfB66A1/3n4y9BD1e90V4y7kiaM5xIwNAhnTwlcp0Xa3kVT_Gsw'
  },
  {
    title:'STP December 2024 Update',
    des:'STP continues to impact the onchain gaming and agent landscape with new AI initiatives and infrastructure developments. From supporting exciting mini-game launches to AI agent development on Base and the launch of a new AI Agent developer grant program, STP remains committed to delivering enhanced gaming experiences and an agentic ecosystem. A more comprehensive recap of 2024 will be released along with the 2025 roadmap, but first let’s dive into what’s shaping the future of onchain gaming and AI this month:',
    cover: m7,
    link:'https://mirror.xyz/0xB9d761AF53845D1F3C68f99c38f4dB6fcCfB66A1/j1p-U_VxOVppwCpXKPmjhh33KhllNJb38eXkQiCePlc'
  },
  {
    title:'STP November 2024 Update',
    des:'STP continues to impact the onchain gaming and agent landscape with new AI initiatives and infrastructure developments. From supporting exciting mini-game launches to AI agent development on Base, STP remains committed to delivering enhanced gaming experiences and an agentic ecosystem. Let’s dive into what’s shaping the future of onchain gaming and AI this month:',
    cover: m6,
    link:'https://mirror.xyz/0xB9d761AF53845D1F3C68f99c38f4dB6fcCfB66A1/no-s5GqkSwFsGV5LGDxKXFOyTrasMhC-HLIOvy_ijTM'
  },
  {
    title:'STP October 2024 Update',
    des:'October was a breakthrough month for STP, highlighting bold expansions and innovative products that underscore our commitment to transforming the onchain gaming ecosystem. From strategic advancements on Base—recently leading all chains in stablecoin transaction volume—to new AI-powered tools for immersive gaming experiences, STP continues to push the boundaries of onchain engagement.',
    cover: m5,
    link:'https://mirror.xyz/0xB9d761AF53845D1F3C68f99c38f4dB6fcCfB66A1/weqS1e7EGgW0Jwb3ZBozypY36312MkPa7rbm07aBbq8'
  },
  {
    title:'STP September 2024 Update',
    des:'STP is thrilled to share its exciting developments from September 2024. Our focus is on enhancing onchain games with AI while expanding the STP ecosystem globally. By leveraging our community and game library, we have attracted more builders, gamers and partners than ever before through live events and reward campaigns.',
    cover: m4,
    link:'https://mirror.xyz/0xB9d761AF53845D1F3C68f99c38f4dB6fcCfB66A1/WdSX1yAlHzistxK-7WPqPG4wiH3zBeSZb7raH_BrD2A'
  },
  {
    title:'STP August 2024 Update ',
    des:'STP is thrilled to share its exciting developments from August 2024. Our focus remains on enhancing the gaming experience with AI and expanding our Clique L3 on Base along with supporting our flagship onchain game Eternal Legacy. Here’s a look at STP’s progress in August.',
    cover: m3,
    link:'https://mirror.xyz/0xB9d761AF53845D1F3C68f99c38f4dB6fcCfB66A1/kKAXpB9c3xoeExt4xP1dJyAvh-ujVnZDghRrqWvRsFM'
  },
  {
    title:'STP Q2 2024 Progress: Clique Gaming Propels',
    des:'STP is thrilled to share its exciting developments from Q2 2024. Our focus remains on enhancing the gaming experience with AI and expanding our L3 Clique. Here’s a look at STP’s progress in Q2.',
    cover: m2,
    link:'https://mirror.xyz/0xB9d761AF53845D1F3C68f99c38f4dB6fcCfB66A1/KWf6Fwvv8Os54tPag1zpKf1hK27AGKSLN7H3RgKA2sA'
  },
  {
    title:'STP 2023 Year End Recap',
    des:'Throughout the last year STP greatly expanded its ecosystem optimized for DAOs by supporting over 500+ DAOs while enhancing its native DAO tools and infrastructure with Clique V3. Additionally, STP made the leap into Autonomous Worlds by expanding its infrastructure and tooling for on-chain games, communities and worlds starting with identity. This new initiative resulted in the release of AWNS (Autonomous Worlds Name Service) which leverages account abstraction to create an identity and wallet (ERC-6551) that is designed for all on-chain activity but specifically gaming. The initial version of this identity product was released at the end of Q3 and played a major part in STP’s 2023 development',
    cover: m1,
    link:'https://mirror.xyz/0xB9d761AF53845D1F3C68f99c38f4dB6fcCfB66A1/OI6mpDTF98pzSOOEKKuPAI4Tm8KDuBaspbyLNC3pYRw'
  },
]

export default function Soda() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ContentWrapper>
        <Section1>
          <Section1Title>Transparency</Section1Title>
          <Section1Subtitle>Transparency is a core value of the STP DAO, and we’re committed to keeping our community informed every step of the way.</Section1Subtitle>
          <Section1Subtitle>Here, you’ll find a collection of links and resources detailing our progress over the years and everything we’re working on right now. This includes quarterly updates, governance reports, annual reviews, and other key documents.</Section1Subtitle>
       </Section1>
        <Section2>
          {
            list.map(item =>(
            <Section2Card key={item.title} onClick={()=>{window.open(item.link)}}>
              <CardCover src={item.cover}></CardCover>
              <CardTitle>{item.title}</CardTitle>
              <CardDes>{item.des} </CardDes>
            </Section2Card>
            ))
          }
          {/* <Section2Card onClick={()=>{window.open("https://mirror.xyz/0xB9d761AF53845D1F3C68f99c38f4dB6fcCfB66A1/j1p-U_VxOVppwCpXKPmjhh33KhllNJb38eXkQiCePlc")}}>
            <CardCover src={m7}></CardCover>
            <CardTitle>STP December 2024 Update</CardTitle>
            <CardDes>STP continues to impact the onchain gaming and agent landscape with new AI initiatives and infrastructure developments. From supporting exciting mini-game launches to AI agent development on Base and the launch of a new AI Agent developer grant program, STP remains committed to delivering enhanced gaming experiences and an agentic ecosystem. A more comprehensive recap of 2024 will be released along with the 2025 roadmap, but first let’s dive into what’s shaping the future of onchain gaming and AI this month: </CardDes>
          </Section2Card>
          <Section2Card onClick={()=>{window.open("https://mirror.xyz/0xB9d761AF53845D1F3C68f99c38f4dB6fcCfB66A1/no-s5GqkSwFsGV5LGDxKXFOyTrasMhC-HLIOvy_ijTM")}}>
            <CardCover src={m6}></CardCover>
            <CardTitle>STP November 2024 Update</CardTitle>
            <CardDes>STP continues to impact the onchain gaming and agent landscape with new AI initiatives and infrastructure developments. From supporting exciting mini-game launches to AI agent development on Base, STP remains committed to delivering enhanced gaming experiences and an agentic ecosystem. Let’s dive into what’s shaping the future of onchain gaming and AI this month: </CardDes>
          </Section2Card>
          <Section2Card onClick={()=>{window.open("https://mirror.xyz/0xB9d761AF53845D1F3C68f99c38f4dB6fcCfB66A1/weqS1e7EGgW0Jwb3ZBozypY36312MkPa7rbm07aBbq8")}}>
            <CardCover src={m5}></CardCover>
            <CardTitle>STP October 2024 Update</CardTitle>
            <CardDes>October was a breakthrough month for STP, highlighting bold expansions and innovative products that underscore our commitment to transforming the onchain gaming ecosystem. From strategic advancements on Base—recently leading all chains in stablecoin transaction volume—to new AI-powered tools for immersive gaming experiences, STP continues to push the boundaries of onchain engagement. </CardDes>
          </Section2Card>
          <Section2Card onClick={()=>{window.open("https://mirror.xyz/0xB9d761AF53845D1F3C68f99c38f4dB6fcCfB66A1/WdSX1yAlHzistxK-7WPqPG4wiH3zBeSZb7raH_BrD2A")}}>
            <CardCover src={m4}></CardCover>
            <CardTitle>STP September 2024 Update </CardTitle>
            <CardDes>STP is thrilled to share its exciting developments from September 2024. Our focus is on enhancing onchain games with AI while expanding the STP ecosystem globally. By leveraging our community and game library, we have attracted more builders, gamers and partners than ever before through live events and reward campaigns.</CardDes>
          </Section2Card>
          <Section2Card onClick={()=>{window.open("https://mirror.xyz/0xB9d761AF53845D1F3C68f99c38f4dB6fcCfB66A1/kKAXpB9c3xoeExt4xP1dJyAvh-ujVnZDghRrqWvRsFM")}}>
            <CardCover src={m3}></CardCover>
            <CardTitle>STP August 2024 Update </CardTitle>
            <CardDes>STP is thrilled to share its exciting developments from August 2024. Our focus remains on enhancing the gaming experience with AI and expanding our Clique L3 on Base along with supporting our flagship onchain game Eternal Legacy. Here’s a look at STP’s progress in August.</CardDes>
          </Section2Card>
          <Section2Card onClick={()=>{window.open("https://mirror.xyz/0xB9d761AF53845D1F3C68f99c38f4dB6fcCfB66A1/KWf6Fwvv8Os54tPag1zpKf1hK27AGKSLN7H3RgKA2sA")}}>
            <CardCover src={m2}></CardCover>
            <CardTitle>STP Q2 2024 Progress: Clique Gaming Propels</CardTitle>
            <CardDes>STP is thrilled to share its exciting developments from Q2 2024. Our focus remains on enhancing the gaming experience with AI and expanding our L3 Clique. Here’s a look at STP’s progress in Q2.</CardDes>
          </Section2Card>
          <Section2Card onClick={()=>{window.open("https://mirror.xyz/0xB9d761AF53845D1F3C68f99c38f4dB6fcCfB66A1/OI6mpDTF98pzSOOEKKuPAI4Tm8KDuBaspbyLNC3pYRw")}}>
            <CardCover src={m1}></CardCover>
            <CardTitle>STP 2023 Year End Recap</CardTitle>
            <CardDes>Throughout the last year STP greatly expanded its ecosystem optimized for DAOs by supporting over 500+ DAOs while enhancing its native DAO tools and infrastructure with Clique V3. Additionally, STP made the leap into Autonomous Worlds by expanding its infrastructure and tooling for on-chain games, communities and worlds starting with identity. This new initiative resulted in the release of AWNS (Autonomous Worlds Name Service) which leverages account abstraction to create an identity and wallet (ERC-6551) that is designed for all on-chain activity but specifically gaming. The initial version of this identity product was released at the end of Q3 and played a major part in STP’s 2023 development</CardDes>
          </Section2Card> */}
        </Section2>
        <Section3>
          <Section1Subtitle>We encourage our community to visit this page frequently to stay up-to-date on the latest developments within the STP ecosystem. </Section1Subtitle>
        </Section3>
        <Footer />
        <OpenIconSpeedDial></OpenIconSpeedDial>
      </ContentWrapper>
    </>
  )
}
