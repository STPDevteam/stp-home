import React from 'react'
// import { Button } from "antd";
import { Button, Divider } from "antd";

import { ContentWrapper,Footer, } from '../Home/homepage'
import styled from 'styled-components'
import section1A from "../../assets/images/home/cliqueS1.png"
import cliqueLogo from "../../assets/images/home/cliqueLogo.svg"
import c1 from "../../assets/images/clique/c1.png"
import c2 from "../../assets/images/clique/c2.png"
import logoOkx from '../../assets/images/clique/okx-seeklogo.svg';
import logometaMask from '../../assets/images/clique/metamask-seeklogo.svg';
import logoWalletconnect from '../../assets/images/clique/walletconnect-seeklogo.svg';
import logoCoinbase from '../../assets/images/clique/coinbase-coin-seeklogo.svg'
import s3Icon1 from "../../assets/images/clique/Coins.svg"
import s3Icon2 from "../../assets/images/clique/ToTheMoon.svg"
import s3Icon3 from "../../assets/images/clique/Locker.svg"
import section4 from '../../assets/images/home/Homepage6.png'


const Section1 = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 980px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  padding-top: 100px;
  background: url(${section1A}) no-repeat;
  background-size: contain;
  background-position: center;
  text-align: center;
  @media (max-width: 767px) {
    background-size: 300%;
    padding: 24px;
    min-height: 680px;
  }
`
const Section1Logo = styled.img`
  margin-top: 80px;
  width: 356px;
  @media (max-width: 767px) {
    width: 280px;
  }
`
const Section1Content = styled.div`
  width: 620px;
  margin-top: 40px;
  font-family: Inter;
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
  text-align: center;
  color: #fff;
  @media (max-width: 767px) {
    width: 100%;
  }
`
const SectionBtns = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 40px;
`
//@ts-ignore
export const BlueBtn = styled(Button)`
  display: flex;
  border: 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 50px;
  font-weight: 700;
  font-size: 14px;
  height: 48px;
  line-height: 24px;
  gap: 8px;
  background: #0049C6;
  color: #fff;
  border-radius: 32px;
  @media (max-width: 767px) {
    height: 40px;
    font-size: 14px;
    line-height: 150%;
  }
`
export const GreenBtn = styled(BlueBtn)`
  
  background: #A7F46A;
  color: #020035;
  @media (max-width: 767px) {
    height: 40px;
    font-size: 14px;
    line-height: 150%;
  }
`
const Section2 = styled.div`
  margin-top: -360px;
  @media (max-width: 767px) {
    margin-top: -300px;
  }
`
const Section2Box = styled.div`
  width: 1098px;
  height: 832px;
  padding: 24px 30px;
  border-radius: 20px;
  background-color: #1D1C20;
  @media (max-width: 767px) {
    width: 100%;
    height: auto;
  }
`
const Section2Head = styled.div`
  width: 404px;
  height: 54px;
  margin: auto;
  display: flex;
  border-radius: 32px;
  border: 1px solid #FFFFFF14;
  @media (max-width: 767px) {
    width: 100%;
  }
`
const Section2Tab = styled.div<{active: boolean}>`
  flex: 1;
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: 0.2px;
  color: #949CB9;
  text-align: center;
  border-radius: 32px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props=>props.active?'#363636':'transparent'};
  @media (max-width: 767px) {
    font-size: 12px;
  }
`
const Section2Content = styled.div`
  position: relative;
  width: 1040px;
  height: 422px;
  margin-top: 36px;
  background: url(${c2}) no-repeat;
  background-size: 100%;
  @media (max-width: 767px) {
    width: 100%;
    height: auto;
    min-height: 240px;
    background: none;
  }
`
const ContentBox = styled.div`
  width: 750px;
  height: 318px;
  position: absolute;
  top: 50px;
  right: 24px;
  @media (max-width: 767px) {
    width: 100%;
    height: auto;
    top: 0px;
    right: 0px;
  }
`
const CodeItem = styled.div`
  width: 100%;
`
const SpanGary = styled.span`
  color: #666;
  padding-right: 30px;
  @media (max-width: 767px) {
    padding-right: 16px;
  }
`
const SpanWhite = styled.span`
  color: #fff;
`
const SpanGreen = styled.span`
  color: #66bb6b;
`
const SpanYellow = styled.span`
  color: #fff975;
`
const Section2Logos = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 767px) {
    width: 100%;
    margin-bottom: 10px;
  }
`
const LogoItem = styled.div`
  margin-top: 80px;
  padding: 0 58px;
  border-right: 1px solid #4E4E4E99;
  &:last-of-type {
   border-right: none;
  }
  @media (max-width: 767px) {
    padding: 0 20px;
  }
`
const Logo = styled.img`
  @media (max-width: 767px) {
    width: 80%;
  }
`
const SectionsBtns = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  @media (max-width: 767px) {
    width: 100%;
    flex-direction: column;
  }
`
const BtnsItem = styled.div`
  min-width: 335px;
  margin-top: 60px;
  padding: 18px 30px;
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 36px;
  text-align: center;
  color: #fff;
  border: 1px solid #35343A;
  cursor: pointer;
  @media (max-width: 767px) {
    width: 100%;
    margin-top: 10px;
    padding: 10px;
  }
`
const Section3 = styled.div`

`
const Section3Title = styled.div`
  width: 1040px;
  margin-top: 120px;
  font-family: Inter;
  font-size: 64px;
  font-weight: 600;
  line-height: 86.4px;
  letter-spacing: -0.2px;
  text-align: center;
  background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.7) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 767px) {
    width: 100%;
    padding: 16px;
    font-size: 32px;
    line-height: 1.3;
  }
`
const Section3Content = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 40px;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`
const Section3ContentItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ContentItemIcon = styled.img`
  width: 230px;
  @media (max-width: 767px) {
    width: 160px;
  }
`
const ContentItemName = styled.div`
  margin: 20px 0;
  font-family: Inter;
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
  color: #F0F4FF;
  text-align: center;
`
const ContentItemDes = styled.div`
  width: 334px;
  font-family: Inter;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 2px;
  text-align: center;
  line-height: 1.3;
  color: #949CB9;
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
const Section4Title = styled.div`
  margin-bottom: 80px;
  font-family: Inter;
  font-size: 64px;
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
    font-size: 32px;
  }
`
const loot = {
  id: 5151706,
  name: 'Loot Mainnet',
  network: 'loot',
  nativeCurrency: {
    decimals: 18,
    name: 'AGLD',
    symbol: 'AGLD',
  },
  rpcUrls: {
    public: { http: ['https://rpc.lootchain.com/http'] },
    default: { http: ['https://rpc.lootchain.com/http'] },
  },
  blockExplorers: {
    etherscan: { name: 'LootScan', url: 'https://explorer.lootchain.com/' },
    default: { name: 'LootScan', url: 'https://explorer.lootchain.com/' },
  },
}
// export const walletClient = createWalletClient({
//   chain: loot,
//   //@ts-ignore
//   transport: window.ethereum ? custom(window.ethereum) : http(),
// })
export default function Clique() {

  const addToMetaMask = async () => {
    //@ts-ignore
    if (window.ethereum) {
      try {
        //@ts-ignore
        await (window.ethereum as any).request({
          method: 'wallet_switchEthereumChain',
          params: [{
            chainId: "0x2295" // 
          }]
        })
        console.log('wallet_switchEthereumChain');
      } catch (e) {
        console.log('(e as any).code', (e as any).code);
        if ((e as any).code === 4902) {
          try {
            console.log('wallet_addEthereumChain');
            //@ts-ignore
            await (window.ethereum as any).request({
                method: 'wallet_addEthereumChain',
                params: [
                  {
                    chainId: "0x2295", // 
                    chainName: 'Clique',
                    nativeCurrency: {
                      name: 'ETH',
                      symbol: 'ETH',
                      decimals: 18
                    },
                    rpcUrls: ['https://rpc.myclique.io'], // 
                    blockExplorerUrls: ['https://explorer.myclique.io/']
                  
                  }
                ]
              })
          } catch (ee) {
            //
          }
        } else if ((e as any).code === 4001) return
      }
    }
    
  }
  const addToMetaMaskTest = async () => {
    //@ts-ignore
    if (window.ethereum) {
      try {
        //@ts-ignore
        await (window.ethereum as any).request({
          method: 'wallet_switchEthereumChain',
          params: [{
            chainId: "0x20bf" // 目标链ID
          }]
        })
        console.log('wallet_switchEthereumChain');
      } catch (e) {
        console.log('(e as any).code', (e as any).code);
        if ((e as any).code === 4902) {
          try {
            console.log('wallet_addEthereumChain');
            //@ts-ignore
            await (window.ethereum as any).request({
                method: 'wallet_addEthereumChain',
                params: [
                  {
                    chainId: "0x20bf", // 目标链ID
                    chainName: 'CliqueTest',
                    nativeCurrency: {
                      name: 'ETH',
                      symbol: 'ETH',
                      decimals: 18
                    },
                    rpcUrls: ['https://rpc-clique-test-8sprt15usx.t.conduit.xyz'], // 
                    blockExplorerUrls: ['https://explorerl2new-clique-test-8sprt15usx.t.conduit.xyz']
                  }
                ]
              })
          } catch (ee) {
            //
          }
        } else if ((e as any).code === 4001) return
      }
    }
    
  }
  return (
    <ContentWrapper>
      <Section1>
        <Section1Logo src={cliqueLogo}></Section1Logo>
        <Section1Content>
        Leverage frontier technology in Autonomous Worlds, AI Agents, Account Abstraction
        </Section1Content>
        <SectionBtns>
          <BlueBtn onClick={()=>{window.open('https://bridge.myclique.io/')}}>Bridge</BlueBtn>
          <GreenBtn onClick={()=>{window.open('https://explorer.myclique.io/')}}>Explorer</GreenBtn>
        </SectionBtns>
      </Section1>
      <Section2>
        <Section2Box>
          <Section2Head>
            <Section2Tab active={true}>L3 Rollup</Section2Tab>
            {/* <Section2Tab active={false}>L2 Rollup</Section2Tab> */}
            <Section2Tab active={false} onClick={()=>{window.open('https://bridge.myclique.io/')}}>Bridge</Section2Tab>
          </Section2Head>
          <Section2Content>
            <ContentBox>
              <CodeItem><SpanGary>1</SpanGary> <SpanWhite>{`{`}</SpanWhite></CodeItem>
              <CodeItem><SpanGary>2</SpanGary> <SpanGreen className='pl10'>{`"L3 Main Network" :`}</SpanGreen><SpanWhite> {`{`}</SpanWhite></CodeItem>
              <CodeItem><SpanGary>3</SpanGary> <SpanGreen className='pl10'>{`"RPC URL" : "https://rpc.myclique.io",`}</SpanGreen></CodeItem>
              <CodeItem><SpanGary>4</SpanGary> <SpanGreen className='pl10'>{`"Websocket" : "wss:https://rpc.myclique.io",`}</SpanGreen></CodeItem>
              <CodeItem><SpanGary>5</SpanGary> <SpanGreen className='pl10'>{`"Explorer" : "https://explorer.myclique.io/",`}</SpanGreen></CodeItem>
              <CodeItem><SpanGary>6</SpanGary> <SpanGreen className='pl10'>{`"Chain Id" :`}</SpanGreen><SpanYellow> {`8853`}</SpanYellow></CodeItem>
              <CodeItem><SpanGary>7</SpanGary> <SpanWhite className='pl10'>{`},`}</SpanWhite></CodeItem>
              {/* <CodeItem><SpanGary>8</SpanGary> <SpanWhite className='pl10'>{`{`}</SpanWhite></CodeItem>
              <CodeItem><SpanGary>9</SpanGary> <SpanGreen className='pl10'>{`"L3 Testnet" :`}</SpanGreen><SpanWhite> {`{`}</SpanWhite></CodeItem>
              <CodeItem><SpanGary>10</SpanGary> <SpanGreen className='pl10'>{`"RPC URL" : "https://rpc-clique-test-8sprt15usx.t.conduit.xyz",`}</SpanGreen></CodeItem>
              <CodeItem><SpanGary>11</SpanGary> <SpanGreen className='pl10'>{`"Websocket" : "wss://rpc-clique-test-8sprt15usx.t.conduit.xyz",`}</SpanGreen></CodeItem>
              <CodeItem><SpanGary>12</SpanGary> <SpanGreen className='pl10'>{`"Explorer" : "https://explorerl2new-clique-test-8sprt15usx.t.conduit.xyz",`}</SpanGreen></CodeItem>
              <CodeItem><SpanGary>13</SpanGary> <SpanGreen className='pl10'>{`"Chain Id" :`}</SpanGreen><SpanYellow> {`8383`}</SpanYellow></CodeItem>
              <CodeItem><SpanGary>14</SpanGary> <SpanWhite className='pl10'>{`}`}</SpanWhite></CodeItem> */}
              <CodeItem><SpanGary>8</SpanGary> <SpanWhite>{`}`}</SpanWhite></CodeItem>
            </ContentBox>
          </Section2Content>
          <Section2Logos>
            <LogoItem><Logo src={logoOkx}></Logo></LogoItem>
            <LogoItem><Logo src={logometaMask}></Logo></LogoItem>
            <LogoItem><Logo src={logoCoinbase}></Logo></LogoItem>
            <LogoItem><Logo src={logoWalletconnect}></Logo></LogoItem>
          </Section2Logos>
          <SectionsBtns>
            <BtnsItem onClick={addToMetaMask}>Add L3 Main Network to Your Wallet</BtnsItem>
            {/* <BtnsItem onClick={addToMetaMaskTest}>Add L3 Testnet to Your Wallet</BtnsItem> */}
            {/* <BtnsItem>Add L2 Testnet to Your Wallet</BtnsItem> */}
          </SectionsBtns>
        </Section2Box>
      </Section2>
      <Section3>
        <Section3Title>
        Securely Code, Deploy and Operate your Gaming
        </Section3Title>
        <Section3Content>
            <Section3ContentItem>
              <ContentItemIcon src={s3Icon1}></ContentItemIcon>
              <ContentItemName>Lower Gas Fee</ContentItemName>
              <ContentItemDes>The Data Availability (DA) network utilised can make blockchain transactions much cheaper.</ContentItemDes>
            </Section3ContentItem>
            <Section3ContentItem>
              <ContentItemIcon src={s3Icon2}></ContentItemIcon>
              <ContentItemName>Faster</ContentItemName>
              <ContentItemDes>Deployment using whitelisted addresses effectively reduces blockchain congestion</ContentItemDes>
            </Section3ContentItem>
            <Section3ContentItem>
              <ContentItemIcon src={s3Icon3}></ContentItemIcon>
              <ContentItemName>Security</ContentItemName>
              <ContentItemDes>Develop using security best practices, community-vetted libraries, and the most commonly adopted ERC standards.</ContentItemDes>
            </Section3ContentItem>
        </Section3Content>
      </Section3>
      <Section4>
        <Section4Title>Get Started</Section4Title>
        <GreenBtn
          onClick={() =>
            window.open("https://explorer.myclique.io/", "_blank")
          }
        >
          Build on Clique
        </GreenBtn>
      </Section4>
      <Footer btnShow={false}></Footer>
    </ContentWrapper>
  )
}
