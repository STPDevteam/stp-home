import "./App.css"
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import stpLogo from './assets/logo.png'
import { ReactComponent as ArrowIcon } from './assets/arrow-right-solid.svg'

import Bannergif from './assets/homepage.gif'
import crossImg1 from './assets/Tokenize_2.png'
import crossImg2 from './assets/013-disk.png'
import crossImg3 from './assets/016-fingers.png'
import crossImg4 from './assets/TradeTransact-1-1.png'

import crossImg1gif from './assets/Tokenize_2-1.gif'
import crossImg2gif from './assets/Reverse-tokenize-2.gif'
import crossImg3gif from './assets/Construct_1.gif'
import crossImg4gif from './assets/Trade-Transact.gif'

import group1 from './assets/Group-1.jpeg'
import group2 from './assets/Group-2.jpeg'
import group3 from './assets/Group-3.jpeg'
import group4 from './assets/Group-4.jpeg'
import group5 from './assets/Group-5.jpeg'
import group6 from './assets/Group-6.jpeg'

import exchange1 from './assets/upbit_logo.png'
import exchange2 from './assets/binance_logo.png'
import exchange3 from './assets/huobi_logo.png'
import exchange4 from './assets/coinone.png'
import exchange5 from './assets/bithumb.png'
import exchange6 from './assets/gate_logo.png'
import exchange7 from './assets/poloniex.png'
import exchange8 from './assets/coindcx.png'
import exchange9 from './assets/bithumb_inv.png'
import exchange10 from './assets/bittrex_logo.png'

import partner1 from './assets/fbg.png'
import partner2 from './assets/ngc_logo.png'
import partner3 from './assets/BlockVC-1.png'
import partner4 from './assets/alphabit-logo.png'
import partner5 from './assets/alpha.png'

import blockzone from './assets/blockzone_logo.png'
import { ReactComponent as Telegram } from "./assets/telegram.svg"
import { ReactComponent as Twitter } from "./assets/twitter.svg"
import { ReactComponent as Medium } from "./assets/medium-fill.svg"
import { ReactComponent as Wechat } from "./assets/wechat.svg"
import { ReactComponent as Email } from "./assets/email.svg"
import Collapse from "@kunukn/react-collapse";

const isClient = typeof window === 'object'

function getSize() {
  return {
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined
  }
}


const exchangeData = [
  {
    logo: exchange1,
     url: "https://upbit.com/home"
  },
  {
    logo: exchange2,
     url: "https://www.binance.com/en"
  },
  {
    logo: exchange3,
     url: "https://www.huobi.com/en-us/"
  },
  {
    logo: exchange4,
     url: "https://coinone.co.kr/"
  },
  {
    logo: exchange5,
     url: "https://en.bithumb.com/"
  },
  {
    logo: exchange6,
     url: "https://www.gate.io/"
  },
  {
    logo: exchange7,
     url: "https://poloniex.com/"
  },
  {
    logo: exchange8,
     url: "https://coindcx.com/"
  },
  {
    logo: exchange9,
     url: "https://www.bithumb.pro/en-us"
  },
  {
    logo: exchange10,
     url: "https://bittrex.com/"
  }
]
const partnersData =[
  {
    logo: partner1,
    url: "https://www.fbg.capital/"
  },
  {
    logo: partner2,
    url: "https://www.ngc.fund/home"
  },
  {
    logo: partner3,
    url: "https://www.blockvc.com/index-en.html"
  },
  {
    logo: partner4,
    url: "https://www.alphabit.fund/"
  },
  {
    logo: partner5,
    url: "http://www.alphacoinfund.com/"
  },
]
const navData = [
  {
    text: "White Paper 2.0",
    url: "https://stp.network/wp-content/uploads/2021/08/STP-2.0-Updated-WP.pdf"
  },
  {
    text: "STP DAO",
    url: "https://stp.network/dao-stp/"
  },
  {
    text: "Gov",
    url: "https://gov.stp.network/"
  },
  {
    text: "KPA",
    url: "https://kpalliances.com/"
  },
]

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    function handleResize() {
      setWindowSize(getSize())
    }

    if (isClient) {
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
    return undefined
  }, [])

  return windowSize
}

function App() {
  const { width } = useWindowSize()
  console.log("width", width)
  return (
    <div className="App">
      <Header>
        <div className="container headerContent" >
          <HeaderLogo src={stpLogo} />
          <HeaderRight>
            <ul>
              {navData.map((data) => {
                return (
                  <li>
                    <a href={data.url} >
                      {data.text}
                    </a>
                  </li>
                )
              })}
              <li>
                <a className="buttonLink" href="http://app.stp.network/" >
                  <AppButton>
                    <ButtonContent>
                      Go to APP <br/>
                      (Testnet)
                    </ButtonContent>
                    <ArrowIcon />
                  </AppButton>
                </a>
              </li>
            </ul>
          </HeaderRight>
        </div>
      </Header>
      <Banner>
        <BannerTitle>
          STANDARD TOKENIZATION PROTOCOL
        </BannerTitle>
        <BannerDescription>
          Evolution of Tokenization on web 3.0
        </BannerDescription>
      </Banner>
      <Title>About Us</Title>
      <Description>
        STP 2.0 gives users access to multi-chain assets and new financial products on different blockchains without heavy over-collateralization or expensive bridge fees.
      </Description>
      <Title>Cross-chain Tokenization</Title>
      <Description>
        Enabling the issuance and trading of assets and indices on web 3.0
      </Description>
      <CrossWraper>
        <div className="columns is-centered">
          <div className="column">
            <CrossImgWraper>
              <CrossImg src={crossImg1} />
              <CrossImg src={crossImg1gif} />
            </CrossImgWraper>
            <CrossTitle>
              Tokenize
            </CrossTitle>
            <CrossDescription>
              Anyone can tokenize an asset by locking up collateral in the form of stablecoin. 
            </CrossDescription>
          </div>
          <div className="column">
            <CrossImgWraper>
              <CrossImg src={crossImg2} />
              <CrossImg src={crossImg2gif} />
            </CrossImgWraper>
            <CrossTitle>
              Reverse-tokenize
            </CrossTitle>
            <CrossDescription>
              Burn the amount initially issued to receive the locked collateral amount.
            </CrossDescription>
          </div>
          <div className="column">
            <CrossImgWraper>
              <CrossImg src={crossImg3} />
              <CrossImg src={crossImg3gif} />
            </CrossImgWraper>
            <CrossTitle>
              Construct
            </CrossTitle>
            <CrossDescription>
              Anyone can create their own basket of assets by locking up collateral in the form of stablecoin. 
            </CrossDescription>
          </div>
          <div className="column">
            <CrossImgWraper>
              <CrossImg src={crossImg4} />
              <CrossImg src={crossImg4gif} />
            </CrossImgWraper>
            <CrossTitle>
              Trade/Transact
            </CrossTitle>
            <CrossDescription>
              Anyone can create their own basket of assets by locking up collateral in the form of stablecoin. 
            </CrossDescription>
          </div>
        </div>
      </CrossWraper>
      <Title>Evolution of STP</Title>
      <Description>
        STP 2.0 will allow users to gain exposure to a multitude of different assets across chains in a principled way.
      </Description>
      <FeatureWraper>
        <FeatureRow>
          <FeatureItem1>
            <FeatureContent>
              Enables cross-chain capability, allowing for faster, cheaper transactions than the increasingly crowded Ethereum ecosystem.
            </FeatureContent>
          </FeatureItem1>
          <FeatureItem2>
            <FeatureContent>
              Track the performance of a group of underlying assets across various blockchain platforms.
            </FeatureContent>
          </FeatureItem2>
        </FeatureRow>
        <FeatureRow>
          <FeatureItem3>
            <FeatureContent>
              Ensure that minters have sufficient collateral to hold their positions.
            </FeatureContent>
          </FeatureItem3>
          <FeatureItem4>
            <FeatureContent>
              Choose the pricing function in a more principled way, allowing pools to offer tighter trades.
            </FeatureContent>
          </FeatureItem4>
        </FeatureRow>
        <FeatureRow>
          <FeatureItem5>
            <FeatureContent>
              Create optimal experience for quickly swap and give minters choice in what sources of debt they are exposed to.
            </FeatureContent>
          </FeatureItem5>
          <FeatureItem6>
            <FeatureContent>
              Enhance product adoption and the growth of both the number of assets offered and the activity on each asset.
            </FeatureContent>
          </FeatureItem6>
        </FeatureRow>
      </FeatureWraper>
      <Title>Where you can buy STPT?</Title>
      <ExchangeList>
        {exchangeData.map(data => {
          return <a href={data.url}>
            <ExchangeLogoWraper>
              <ExchangeLogo src={data.logo} />
            </ExchangeLogoWraper>
          </a>
        })}
      </ExchangeList>
      <Title>Partners</Title>
      <PartnerRow>
        {partnersData.slice(0, 2).map(data => {
              return (
                  <a href={data.url} >
                    <PartnerImgWraper>
                      <PartnerImg src={data.logo} />
                    </PartnerImgWraper>
                  </a>
              )
            })}
        </PartnerRow>

        <PartnerRow>
          {partnersData.slice(2, 5).map(data => {
              return (
                  <a href={data.url} >
                    <PartnerImgWraper>
                      <PartnerImg src={data.logo} />
                    </PartnerImgWraper>
                  </a>
              )
            })}
        </PartnerRow>
      <Title>One-stop Community Platform for STPT</Title>
      <BlockZoneLogo src={blockzone} />
      <Title>Contact Us</Title>
        <Media>
          <MediaWraper><Twitter /></MediaWraper>
          <MediaWraper><Telegram /></MediaWraper>
          <MediaWraper><Medium /></MediaWraper>
          <MediaWraper><Wechat /></MediaWraper>
          <MediaWraper><Email /></MediaWraper>
        </Media>
    </div>
  );
}

const Header = styled.div`
  .headerContent {
    height: 78.8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media(max-width: 767px) {
    
  }
`

const HeaderLogo = styled.img`
  width: 135px;

`

const HeaderRight = styled.div`
  ul {
    display: flex;
    li {
      display: flex;
        a {
          color: #FFFFFF;
          padding: 13px 20px;
          font-size: 15px;
          font-weight: bold;
          display: flex;
          align-items: center;
        }
    }
  }
`

const AppButton = styled.span`
  display: flex;
  padding: 12px 24px;
  border-radius: 3px;
  border: 1px solid #FFFFFF;
  line-height: 16px;
  &:hover {
    background-color: #0085C8;
  }
  svg {
    width: 13px;
    height: 25px;
    margin-left: 5px;
  }
`

const MobileDappButton = styled.span`
  width: 210px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  border-radius: 3px;
  border: 1px solid #FFFFFF;
  line-height: 16px;
  &:hover {
    background-color: #0085C8;
  }
  svg {
    width: 13px;
    height: 25px;
    margin-left: 5px;
  }
`
const ButtonContent = styled.span`
  
`

const Banner = styled.div`
  text-align: center;
  background-image: url(${Bannergif});
  background-size: cover;
  background-position: bottom center;
    background-repeat: no-repeat;
  height: calc(100vh - 78.8px);
`
const BannerTitle = styled.div`
  font-size: 48px;
  font-weight: bold;
  color: #FFFFFF;
  padding-top: 60px;
  margin-bottom: 15px;
`

const BannerDescription = styled.div`
  margin-bottom: 15px;
  color: #3399CC;
  font-size: 36px;
`

const Title = styled.div`
  color: rgb(51, 153, 204);
  font-size: 48px;
  margin-bottom: 15px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 15px;
  margin-top: 100px;
`

const Description = styled.div`
  font-size: 25px;
  max-width: 780px;
  margin: 0 auto;
  margin-bottom: 15px;
  text-align: center;
`
const CrossImg = styled.img`
  /* width: 100px; */
`

const CrossWraper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-top: 120px;
  .column {
    text-align: center;
  }
`

const CrossTitle = styled.div`
  color: #3399CC;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
`

const CrossDescription = styled.div`
  max-width: 164px;
  margin: 0 auto;
`

const CrossImgWraper = styled.div`
  min-height: 124px;
  position: relative;
  img {
    position: absolute;
    top: 0;
    left: 50%;
    background-color: #000000;
    transform: translate(-50%, 0);
    &:first-child {
    z-index: 1;
    }
    &:hover {
      &:first-child {
        opacity: 0;
      }
    }
  }
`

const FeatureWraper = styled.div`

`

const FeatureRow = styled.div`
  display: flex;
  justify-content: center;
  @media(max-width: 767px) {
    flex-direction: column;
  }
`

const FeatureContent = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  padding: 30px 40px 35px 40px;
  background: rgba(0, 0, 0, .8);
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  color: #FFFFFF;
  transition-duration: 0.3s;
`

const FeatureItem1 = styled.div`
  width: 375px;
  height: 176px;
  background-size: cover;
  background-image: url(${group1});
  &:hover {
    ${FeatureContent} {
      opacity: 1;
    }
  }
`

const FeatureItem2 = styled.div`
  width: 375px;
  height: 176px;
  background-size: cover;
  background-image: url(${group2});
  &:hover {
    ${FeatureContent} {
      opacity: 1;
    }
  }
`

const FeatureItem3 = styled.div`
  width: 375px;
  height: 176px;
  background-size: cover;
  background-image: url(${group3});
  &:hover {
    ${FeatureContent} {
      opacity: 1;
    }
  }
`

const FeatureItem4 = styled.div`
  width: 375px;
  height: 176px;
  background-size: cover;
  background-image: url(${group4});
  &:hover {
    ${FeatureContent} {
      opacity: 1;
    }
  }
`

const FeatureItem5 = styled.div`
  width: 375px;
  height: 176px;
  background-size: cover;
  background-image: url(${group5});
  &:hover {
    ${FeatureContent} {
      opacity: 1;
    }
  }
`

const FeatureItem6 = styled.div`
  width: 375px;
  height: 176px;
  background-size: cover;
  background-image: url(${group6});
  &:hover {
    ${FeatureContent} {
      opacity: 1;
    }
  }
`
const ExchangeLogoWraper = styled.div`
  width: 180px;
  height: 105px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`
const ExchangeLogo = styled.img`
  width: 100%;
`
const ExchangeList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
  flex-wrap: wrap;
`

const PartnerImg = styled.img`
  transition-duration: .3s;
  transition-property: transform;
  transition-timing-function: ease-out;
  &:hover {
    transform: translateY(8px);
  }
`
const PartnerImgWraper = styled.div`
  width: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
`

const PartnerRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width: 767px) {
    flex-direction: column;
  }
`
const BlockZoneLogo = styled.img`
  margin: 40px 0;
  cursor: pointer;
  transition-duration: .3s;
  transition-property: transform;
  transition-timing-function: ease-out;
  &:hover {
    transform: translateY(8px);
  }
`


const MediaWraper = styled.div`
  cursor: pointer;
  border-radius: 25px 25px 25px 25px;
  width: 50px;
  height: 50px;
  background-color: #4A4A4A;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 25px;
  margin-right: 25px;
  transition: all .3s;
  svg {
    width: 25px;
  }
  &:hover {
    background-color: #3399CC;
  }
`

const Media = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 100px;
`
const MobileHeader = styled.div`
  /* display: flex; */
  /* justify-content: space-between; */
  padding: 20px;
  text-align: left;
`
export default App;
