import React from 'react'
import { useHistory } from "react-router";

import styled from "styled-components";
import Logo from "../../assets/images/home/svg/stp-logo.svg";
import bg from "../../assets/images/awns/bg1.jpg"
import walletImg from "../../assets/images/awns/bg2.png"
import wallet from "../../assets/images/awns/bg3.png"

const Font = styled.div`
  font-family: Inter;
  color: #fff;
`
const AwnsPage = styled.div`
  padding-bottom: 120px;
  background: #211d8c;
  @media (max-width: 767px) {
    padding-bottom: 60px;
  }
`
const AwnsBox = styled.div`
  margin-top: -140px;
  background: url(${bg}) no-repeat;
  background-size: 100%;
`
const AwnsHead = styled.div`
  width: 1000px;
  height: auto;
  margin: auto;
  padding: 40px 0;
  text-align: center;
  @media (max-width: 767px) {
    width: 100%;
    padding: 40px 24px;
  }
`
const HeadLogo = styled.img`
  width: 76px;
  margin: 20px auto;
  cursor: pointer;
  @media (max-width: 767px) {
    margin: 40px auto 20px auto;
  }
`
const HeadTitle = styled(Font)`
  font-size: 40px;
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
  height: auto;
  margin: 80px auto;
  padding: 22px 30px;
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
    padding-inline-start: 0px;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      ::marker {
        color: #A7F46A;
        transform: rotate(45deg);
      }
    }
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
  @media (max-width: 767px) {
    margin-top: 0px;
  }
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
  position: relative;
  width: 560px;
  height: 146px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 14px 40px 14px 50px;
  font-family: Inter;
  font-size: 20px;
  color: #fff;
  text-align: left;
  border-radius: 10px;
  background: #3130BA;
  @media (max-width: 767px) {
    padding: 14px 20px 14px 36px;
    margin-bottom: 10px;
    font-size: 16px;
    line-height: 1.3;
  }
`
const Square = styled.span`
  position: absolute;
  top: 26px;
  left: 24px;
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #A7F46A;
  transform: rotate(45deg);
  @media (max-width: 767px) {
      left: 14px;
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
const WalletImg = styled.img`
  width: 520px;
  height: auto;
  @media (max-width: 767px) {
    width: 100%;
    margin: 0px auto 0 auto;
  }
`
const ContentBox3 = styled.div`
  width: 100%;
  height: 670px;
  margin: 50px auto;
  padding: 8px 10px;
  text-align: center;
  background: url(${wallet}) no-repeat;
  background-size: cover;
  background-position: 50%;
  @media (max-width: 767px) {
    width: 100%;
    height: 320px;
    margin: 0px auto;
    padding: 0px 0px;
    background-size: 250%;
  }
`
const TextBox = styled.div`
  width: 944px;
  height: 670px;
  margin: auto;
  position: relative;
  @media (max-width: 767px) {
    width: 100%;
    height: 320px;
    margin: 0px auto;
    padding: 0px 10px;
  }
`
const Box3Text = styled.div`
  font-family: Inter;
  font-size: 28px;
  color: #fff;
  font-weight: 600;
  line-height: 1.48;
  @media (max-width: 767px) {
    font-size: 14px;
  }
`
const Text1 = styled(Box3Text)`
  position: absolute;
  width: 300px;
  top: 18%;
  left: calc( 50% - 150px );
  @media (max-width: 767px) {
  }
`
const Text2 = styled(Box3Text)`
  position: absolute;
  width: 340px;
  bottom: 20px;
  left: 0%;
  @media (max-width: 767px) {
    width: 170px;
    left: 2px;
    bottom: 10px;
  }
`
const Text3 = styled(Box3Text)`
  position: absolute;
  width: 326px;
  bottom: 20px;
  right: 0px;
  @media (max-width: 767px) {
    width: 170px;
    bottom: 10px;
  }
  
`

export default function Awns() {
  const history = useHistory();
  return (
    <AwnsPage>
      <AwnsBox>
        <AwnsHead>
          <HeadLogo onClick={()=>{history.push('/')}} src={Logo}></HeadLogo>
          <HeadTitle>Autonomous World Identity Begins with Your AWNS</HeadTitle>
          <HeadTxt>STP presents the AW naming service (AWNS) for domains ending in “.AW” on Ethereum. <br/>  Use your AWNS name to store all of your NFTs, Avatars and On-chain gaming characters which can each receive any cryptocurrency, token, or other NFTs.</HeadTxt>
        </AwnsHead>
        <AwnsContent1>
          <IframeBox>
            <Iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeyKjwUUm704kEXDSDeUtkgIB3LSqsz5wYbdR7any0asoCc4w/viewform?embedded=true"  frameBorder={0}>Loading…</Iframe>
          </IframeBox>
          <ContentBox2>
            <Title3>AWNS is your Smart Wallet Identity</Title3>
            <HeadTxt>It’s not just an ENS, It’s a wallet</HeadTxt>
            <WalletImg src={walletImg}></WalletImg>
          </ContentBox2>
          <ContentBox1>
            <Title3>AWNS Leverages ERC-6551 to Enable:</Title3>
            <ul>
              <Li> <Square></Square>  You can seamlessly connect AWNS to any AW app and game in our ecosystem. </Li>
              <Li> <Square></Square>  You can earn experiences & badges in-game that are natively attached to the AWNS in provenance and history. </Li>
              <Li> <Square></Square>  Your decisions are recorded to create new paths, abilities are acquired to unlock new assets, and more boundless game use-cases are enabled. </Li>
              <Li> <Square></Square>  In-app and game data usage will cultivate your identity and social profile visible for open interaction and collaboration. </Li>
            </ul>
          </ContentBox1>
        </AwnsContent1>
          <ContentBox3>
            <TextBox>
              <Text1>STP’s identity engine uses AWNS to personify a user</Text1>
              <Text2>Catalog of on-chain participation exemplifies a user’s value</Text2>
              <Text3>User experiences, decisions and abilities illustrate desires</Text3>
            </TextBox>
          </ContentBox3>
      </AwnsBox>
    </AwnsPage>
  )
}
