import React from 'react'
// import { Button } from "antd";
import { Button, Divider } from "antd";

import { ContentWrapper,Footer, } from '../Home/homepage'
import styled from 'styled-components'
import section1A from "../../assets/images/home/cliqueS1.png"
import section4 from '../../assets/images/home/Homepage6.png'
import thirdweb from '../../assets/images/developerEngine/thirdweb.svg'
import goldsky from '../../assets/images/developerEngine/goldsky.svg'
import decent from '../../assets/images/developerEngine/d2.svg'
import zeroDev from '../../assets/images/developerEngine/zero.svg'
import m1 from '../../assets/images/developerEngine/m1.jpg'
import m2 from '../../assets/images/developerEngine/m2.png'
import m3 from '../../assets/images/developerEngine/m3.jpg'
import m4 from '../../assets/images/developerEngine/m4.png'
import toolIcon from '../../assets/images/developerEngine/toolIcon.svg'


const Section1 = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 980px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  margin-top: 80px;
  padding-top: 120px;
  background: url(${section1A}) no-repeat;
  background-size: contain;
  background-position: center;
  text-align: center;
  @media (max-width: 767px) {
    margin-top: 0px;
    background-size: 300%;
    padding: 24px;
    min-height: 680px;
  }
`
const Section1Title = styled.div`
  margin-top: 140px;
  font-family: Inter;
  font-size: 64px;
  font-weight: 700;
  line-height: 36px;
  text-align: center;
  color: #fff;

  @media (max-width: 767px) {
    margin-top: 80px;
    line-height: 1.1;
  }
`
const Section1Content = styled.div`
  width: 620px;
  margin-top: 45px;
  font-family: Inter;
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
  text-align: center;
  color: #fff;
  @media (max-width: 767px) {
    margin-top: 30px;
    width: 100%;
    font-size: 20px;
    line-height: 1.3;
  }
`
const Section2 = styled.div`
  margin-top: -360px;
  @media (max-width: 767px) {
    padding: 24px;
    margin-top: -260px;
  }
`
const Section2Box = styled.div`
  display: flex;
  margin-bottom: 30px;
  border-radius: 20px;
  overflow: hidden;
  @media (max-width: 767px) {
   flex-direction: column;
  }
`
const Section2BoxS = styled.div`
  display: flex;
  flex-direction: column;
  width: 543px;
  height: 356px;
  padding: 36px;
  background: #00000080;
  backdrop-filter: blur(20px);
  @media (max-width: 767px) {
   width: 100%;
   height: auto;
   padding: 24px;
   order: 0;
  }
`
const BoxSHeader = styled.div`
  display: flex;
  align-items: center;
`
const BoxSHeaderLogo = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  /* box-shadow: 0px 6px 10px 3px #CE0BFF33; */
`
const BoxSHeaderName = styled.div`
  padding-left: 20px;
  padding-bottom: 10px;
  font-family: Inter;
  font-size: 30px;
  font-weight: 700;
  line-height: 33px;
  text-align: left;
  color: #fff;

`
const BoxSContent = styled.div`
  padding-left: 10px;
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #fff;
`
const BoxBtn = styled.div`
  padding-bottom: 30px;
  padding-left: 10px;
  flex: 1;
  display: flex;
  align-items: end;
  @media (max-width: 767px) {
   padding-bottom: 0;
   padding-top: 20px;
  }
`
const LearnMoreBtn = styled(Button)`
  width: 154px;
  height: 48px;
  border: 0;
  border-radius: 32px;
  font-size: 14px;
  font-weight: 600;
  background: #0049C6;
  color: #fff;
`
const Section2BoxL = styled.img`
  width: 595px;
  height: 356px;
  background-color: #051144;
  @media (max-width: 767px) {
   width: 100%;
   height: auto;
   order: 1;
  }
`

const Section4 = styled.div`
  width: 100%;
  height: 448px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(${section4}) no-repeat;
  background-size: contain;
  background-position: center 100%;
  @media (max-width: 767px) {
    background-size: 200%;
    height: auto;
    padding: 40px 0;
  }
`
const Section4Icon = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
`
const Section4Title = styled.div`
  font-family: Inter;
  font-size: 30px;
  font-weight: 600;
  line-height: 86.4px;
  letter-spacing: -0.2px;
  text-align: center;
  background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.7) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  box-shadow: 0px 1px 0px 0px #00000012;
  @media (max-width: 767px) {
    margin-bottom: 20px;
    font-size: 24px;
  }
`

export default function DeveloperEngine() {

 
  return (
    <ContentWrapper>
      <Section1>
        <Section1Title>Developer Engine</Section1Title>
        <Section1Content>
        Discover best-in-class tooling and APIs to seamlessly build AI-enhanced onchain games on Clique L3
        </Section1Content>
      </Section1>
      <Section2>
        <Section2Box>
          <Section2BoxS>
            <BoxSHeader>
              <BoxSHeaderLogo src={thirdweb}></BoxSHeaderLogo>
              <BoxSHeaderName>thirdweb</BoxSHeaderName>
            </BoxSHeader>
            <BoxSContent>
              Frontend, backend and onchain development tools for your ecosystem.thirdweb's full-stack, open-source development platform can be made available to developers and builders in your ecosystem
            </BoxSContent>
            <BoxBtn>
              <LearnMoreBtn onClick={() =>
                window.open("https://thirdweb.com/", "_blank")
              }>Learn more</LearnMoreBtn>
            </BoxBtn>
          </Section2BoxS>
          <Section2BoxL src={m1}></Section2BoxL>
        </Section2Box>
        <Section2Box>
          <Section2BoxL src={m2}></Section2BoxL>
          <Section2BoxS>
            <BoxSHeader>
              <BoxSHeaderLogo src={goldsky}></BoxSHeaderLogo>
              <BoxSHeaderName>GOLDSKY</BoxSHeaderName>
            </BoxSHeader>
            <BoxSContent>
            Goldsky is the go-to data indexer for web3 builders, offering high-performance subgraph hosting and realtime data replication pipelines.Subgraphs power your app or backend with live data through a zero-maintenance custom endpoint.
            </BoxSContent>
            <BoxBtn>
              <LearnMoreBtn onClick={() =>
                window.open("https://goldsky.com/", "_blank")
              }>Learn more</LearnMoreBtn>
            </BoxBtn>
          </Section2BoxS>
        </Section2Box>
        <Section2Box>
          <Section2BoxS>
            <BoxSHeader>
              <BoxSHeaderLogo src={decent}></BoxSHeaderLogo>
              <BoxSHeaderName>Decent</BoxSHeaderName>
            </BoxSHeader>
            <BoxSContent>
            Decent enables seamless swaps and one-click transactions using any token across chains.
            </BoxSContent>
            <BoxBtn>
              <LearnMoreBtn onClick={() =>
                window.open("https://docs.decent.xyz/", "_blank")
              }>Learn more</LearnMoreBtn>
            </BoxBtn>
          </Section2BoxS>
          <Section2BoxL src={m3}></Section2BoxL>
        </Section2Box>
        <Section2Box>
          <Section2BoxL src={m4}></Section2BoxL>
          <Section2BoxS>
            <BoxSHeader>
              <BoxSHeaderLogo src={zeroDev}></BoxSHeaderLogo>
              <BoxSHeaderName>ZeroDev</BoxSHeaderName>
            </BoxSHeader>
            <BoxSContent>
            ZeroDev is a chain-abstracted smart account for building user-friendly Web3 experiences.
            </BoxSContent>
            <BoxBtn>
              <LearnMoreBtn onClick={() =>
                window.open("https://docs.zerodev.app/", "_blank")
              }>Learn more</LearnMoreBtn>
            </BoxBtn>
          </Section2BoxS>
        </Section2Box>
      </Section2>
     
      <Section4>
        <Section4Icon src={toolIcon}></Section4Icon>
        <Section4Title>More tools coming soon</Section4Title>
      </Section4>
      <Footer></Footer>
    </ContentWrapper>
  )
}