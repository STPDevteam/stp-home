import React from 'react'
import { useHistory } from "react-router";

import styled from "styled-components";
import Logo from "../../assets/images/home/svg/stp-logo.svg";
import bg from "../../assets/images/awns/bg.png"
import wallet from "../../assets/images/awns/wallet.png"

const Font = styled.div`
  font-family: Inter;
  color: #fff;
`

const AwnsBox = styled.div`
  margin-top: -140px;
  background: url(${bg}) no-repeat;
  background-size: cover;
`
const AwnsHead = styled.div`
  width: 100%;
  height: auto;
  padding: 40px 0;
  background: rgba(0, 0, 0, 0.46);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  text-align: center;
  @media (max-width: 767px) {
    padding: 40px 24px;
  }
`
const HeadLogo = styled.img`
  width: 76px;
  cursor: pointer;
  @media (max-width: 767px) {
    margin: 40px auto 20px auto;
  }
`
const HeadTitle = styled(Font)`
  font-size: 50px;
  font-weight: 700;
  @media (max-width: 767px) {
    font-size: 32px;
    line-height: 1.3;
  }
`
const HeadTxt = styled(Font)`
  margin-top: 10px;
  font-size: 20px;
  text-align: center;
  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 1.3;
  }
`
const AwnsContent1 = styled.div`
  margin-top: 50px;
  @media (max-width: 767px) {
    margin-top: 0px;
    padding: 24px;
  }
`
const Title2 = styled(Font)`
  max-width: 874px;
  margin: 20px auto;
  font-size: 40px;
  font-weight: 700;
  line-height: 54px;
  text-align: center;
  @media (max-width: 767px) {
    width: 100%;
    font-size: 28px;
    line-height: 1.3;
  }
`
const ContentBox1 = styled.div`
  width: 1200px;
  height: 460px;
  margin: 80px auto;
  padding: 48px 60px;
  flex-shrink: 0;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.37);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(5px);
  @media (max-width: 767px) {
    width: 100%;
    height: auto;
    margin: 40px auto;
    padding: 24px 24px;
  }
  ul {
    padding-inline-start: 20px;
  }
`
const Title3 = styled(Font)`
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 50px;
  @media (max-width: 767px) {
    font-size: 20px;
    line-height: 1.5;
  }
`
const IframeBox = styled.div`
  margin-top: 40px;
  text-align: center;
`
const Iframe = styled.iframe`
  width: 807px;
  height: 796px;
  background: rgba(227,241,249,1);
  border-radius: 10px;
  ::-webkit-scrollbar {
    width: 0px;
  }
  @media (max-width: 767px) {
    width: 100%;
    height: 400px;
  }
`
const Li = styled.li`
  margin-top: 12px;
  font-family: Inter;
  font-size: 20px;
  color: #fff;
  text-align: left;
  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 1.3;
  }
`
const ContentBox2 = styled.div`
  width: 1200px;
  margin: 50px auto;
  padding: 8px 10px;
  text-align: center;
  @media (max-width: 767px) {
    width: 100%;
    margin: 40px auto;
    padding: 0px 10px;

  }
`
const GreenTxt = styled.span`
  color: #A7F46A;
`
const ContentBox2Img = styled.img`
  width: 900px;
  height: auto;
  margin: -200px auto 0 auto;
  @media (max-width: 767px) {
    width: 100%;
    margin: -50px auto 0 auto;
  }
`

export default function Awns() {
  const history = useHistory();
  return (
    <AwnsBox>
      <AwnsHead>
        <HeadLogo onClick={()=>{history.push('/')}} src={Logo}></HeadLogo>
        <HeadTitle>Framing the base layer of AW identity</HeadTitle>
        <HeadTxt>STP unveils the first novel AW naming service (AWNS), domain ending in “.aw” initially on Ethereum.</HeadTxt>
      </AwnsHead>
      <AwnsContent1>
        <Title2>Autonomous World Identity begins with your
        AWNS (Name Service)</Title2>
        <HeadTxt>Forge the All-Traversal AW Username</HeadTxt>
        <IframeBox>
          <Iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeyKjwUUm704kEXDSDeUtkgIB3LSqsz5wYbdR7any0asoCc4w/viewform?embedded=true" frameBorder={0}>Loading…</Iframe>
        </IframeBox>
        <ContentBox1>
          <Title3>Akin to AWNS is STP’s 6551 Account Generator that’s used to power every AWNS to be a 6551 NFT Wallet, unlocking:</Title3>
          <ul>
            <Li> You can seamlessly connect AWNS to any AW app and game in our ecosystem. </Li>
            <Li> You can earn experiences & badges in-game that are natively attached to the AWNS in provenance and history. </Li>
            <Li> Your decisions are recorded to create new paths, abilities are acquired to unlock new assets, and more boundless game use-cases are enabled. </Li>
            <Li> In-app and game data usage will cultivate your identity and social profile visible for open interaction and collaboration. </Li>
          </ul>
        </ContentBox1>
        <ContentBox2>
          <Title3>STP’s identity engine uses <GreenTxt>AWNS</GreenTxt> as the foundation to personify a user, a catalog of on-chain participation can exemplify a user’s values, and the experiences, decisions, and abilities acquired can illustrate a user’s desires</Title3>
          <ContentBox2Img src={wallet}></ContentBox2Img>
        </ContentBox2>
      </AwnsContent1>
    </AwnsBox>
  )
}
