import React, { useState, useRef } from 'react'
import {
  ContentWrapper,
  GreenBtn,
  Footer
} from "../Home/homepage";
import { Swiper, SwiperSlide, useSwiper, SwiperRef } from "swiper/react";
import { Pagination, Thumbs, FreeMode } from "swiper";
import { Autoplay } from "swiper";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css";
import styled from 'styled-components';
import section1 from '../../assets/images/home/Homepage3.png'
import section2 from '../../assets/images/gamePortal/section2.jpg'
import section3 from '../../assets/images/home/Homepage6.png'
import s5Game1 from "../../assets/images/home/game1.svg"
import s5Game2 from "../../assets/images/home/game2.svg"
import s5Game3 from "../../assets/images/home/game3.svg"
import s5GameLogo1 from "../../assets/images/home/gameLogo1.svg"
import s5GameLogo2 from "../../assets/images/home/gameLogo2.svg"
import s5GameLogo3 from "../../assets/images/home/gameLogo3.svg"

const Section1 = styled.div`
  width: 100%;
  background: #000;
  background: url(${section1}) no-repeat;
  background-size: contain;
  background-position: center;
  min-height: 480px;
  @media (max-width: 767px) {
    background-size: 200%;
    min-height: 320px;
  }
`
const Section1Title = styled.div`
  width: 377px;
  margin: auto;
  padding-top: 120px;
  font-family: Inter;
  font-size: 64px;
  font-weight: 600;
  letter-spacing: 0em;
  text-align: center;
  background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.7) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 767px) {
    padding-top: 90px;
    font-size: 36px;
    width: 100%;
  }
`
const Section2 = styled.div`
  width: 100%;
  height: 876px;
  background: url(${section2}) no-repeat;
  background-size: contain;
  background-position: center;
  @media (max-width: 767px) {
    height: 476px;
    background-size: 200%;
    /* min-height: 360px; */
  }
`
const Section2Title = styled.div`
  width: 150px;
  margin: -40px auto 0 auto;
  font-family: Inter;
  font-size: 48px;
  font-weight: 700;
  line-height: 58px;
  letter-spacing: -0.2px;
  text-align: center;
  background: linear-gradient(107.41deg, #0049C6 23%, #A7F46A 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  box-shadow: 0px 1px 0px 0px #00000012;
  @media (max-width: 767px) {
    font-size: 32px;
  }
`
const Section2SubTitle = styled.div`
  width: 510px;
  margin: auto;
  font-family: Inter;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.2px;
  text-align: center;
  background: linear-gradient(107.41deg, #FFFFFF 65%, rgba(255, 255, 255, 0.43) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 767px) {
    width: 100%;
    font-size: 20px;
  }
`
const Section2Txt = styled.div`
  margin-top: 16px;
  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.2px;
  text-align: center;
  color: #BDBDC0;
  @media (max-width: 767px) {
    font-size: 16px;
  }
`
const AwnsBtn = styled(GreenBtn)`
  background: #A7F46A;
  color: #000;
  margin: 40px auto;
  @media (max-width: 767px) {
    margin-top: 24px;
  }
`
const Section3 = styled.div`
  width: 100%;
  height: 676px;
  background: url(${section3}) no-repeat;
  background-size: contain;
  background-position: center 100%;
  @media (max-width: 767px) {
    height: 320px;
  }
`
const Section3Title = styled.div`
  width: 380px;
  margin: auto;
  font-family: Inter;
  font-size: 48px;
  font-weight: 600;
  letter-spacing: 0em;
  text-align: center;
  background: linear-gradient(107.41deg, #FFFFFF 65%, rgba(255, 255, 255, 0.43) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 767px) {
    width: 220px;
    font-size: 28px;
  }
`
const EcoGame = styled.div`
  width: 1064px;
  margin: auto;
  padding-top: 40px;
  padding-bottom: 50px;
  display: flex;
  gap: 24px;
  @media (max-width: 767px) {
    width: 100%;
    padding-top: 30px;
    padding-bottom: 40px;
  }
`
const StyledThumbs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 240px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
const SwiperGameBig = styled(Swiper)`
  width: 800px;
  height: 450px;
  @media screen and (max-width: 767px) {
      width: 375px;
      padding: 0 24px;
      height: auto;
      margin-bottom: 40px;
  }
`
const SwiperSlideBig = styled(SwiperSlide)`
  position: relative;
`
const GameImgBig = styled.img`
  width: 800px;
  height: 450px;
   @media screen and (max-width: 767px) {
    width: 100%;
    height: auto;
  }
`
const GameImgBigMask = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 124px;
  padding: 20px 40px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  background: #0000004D;
   @media screen and (max-width: 767px) {
    height: 96px;
    padding: 10px 16px;
    border-bottom-left-radius: 22px;
    border-bottom-right-radius: 22px;
  }
`
const MaskName = styled.div`
  font-family: Inter;
  font-size: 24px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: -0.02em;
  color: #fff;
   @media screen and (max-width: 767px) {
      font-size: 16px;
  }
`
const MaskLogo = styled.img`
  @media screen and (max-width: 767px) {
    width: 24px;
  }
`
const MaskDes = styled.div`
  margin-top: 2px;
  padding-left: 40px;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: -0.02em;
  color: #B2B2B2;
   @media screen and (max-width: 767px) {
    font-size: 14px;
    padding-left: 30px;
  }
`
const GameImgSmallBox = styled.div<{ active: boolean }>`
  position: relative;
  & > div {
    display: ${props => props.active ? 'none' : 'block'};
  }
`
const GameImgSmallMask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #00000080;
  border-radius: 16px;
`
const GameImgSmall = styled.img`
  width: 240px;
  height: 135px;
`
const GameLearnMore = styled(GreenBtn)`
  position: absolute;
  right: 40px;
  top: 24px;
  z-index: 9;
  margin: 0;
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  @media (max-width: 767px) {
    top: 10px;
    right: 24px;
    padding: 0 16px;
  }
`

export default function GamePortal() {
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef<SwiperRef>(null);

  const Games = [
    {
      src: s5Game1,
      logo: s5GameLogo1,
      name: 'Eternal Legacy',
      des: 'A New Era of AI Enhanced Gaming',
      link: ''
    },
    {
      src: s5Game2,
      logo: s5GameLogo2,
      name: 'Ancient Forest',
      des: '',
      link: 'https://ancientforest.xyz/'
    },
    {
      src: s5Game3,
      logo: s5GameLogo3,
      name: 'Dice Game',
      des: 'Simple Fun dice rolling game, complete 6 moves to get a bonus, good luck!',
      link: 'https://lootdice.xyz/'
    }
  ]
  const changeSlide = (index: any) => {
    console.log(swiperRef);
    setActiveIndex(index)
    if (swiperRef && swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index, 0, false);
    }
  }
  const handleSwiper = (swiper: any) => {
    console.log(swiper);
    setActiveIndex(swiper.activeIndex)
  }
  return (
    <ContentWrapper>
      <Section1>
        <Section1Title>Game Portal</Section1Title>
      </Section1>
      <Section2>
        <Section2Title>AWNS</Section2Title>
        <Section2SubTitle>Your Autonomous Onchain Agent</Section2SubTitle>
        <Section2Txt>Search and register AWNS</Section2Txt>
        <AwnsBtn onClick={() => { window.open('https://awns.stp.network/', '_blank') }}>Create an AWNS</AwnsBtn>
      </Section2>
      <Section3>
        <Section3Title>Gaming Console</Section3Title>
        <EcoGame>
          <StyledThumbs >
            {
              Games.map((item, index) => (
                <GameImgSmallBox active={activeIndex === index} onClick={() => { changeSlide(index) }}>
                  <GameImgSmall src={item.src} ></GameImgSmall>
                  <GameImgSmallMask>
                  </GameImgSmallMask>
                </GameImgSmallBox>
              ))
            }
          </StyledThumbs>
          <SwiperGameBig ref={swiperRef} modules={[Autoplay]} autoplay={{
            delay: 4000,
          }} spaceBetween={10} onSlideChange={(swiper) => { handleSwiper(swiper) }}>
            {
              Games.map(item => (
                <SwiperSlideBig>
                  <GameImgBig src={item.src}></GameImgBig>
                  <GameImgBigMask>
                    <MaskName><MaskLogo src={item.logo}></MaskLogo> {item.name}</MaskName>
                    <MaskDes>{item.des}</MaskDes>
                    <GameLearnMore
                      onClick={() => { item.link && window.open(item.link, '_blank') }}
                    >
                      {
                        item.link ? 'Learn More' : 'Coming Soon'
                      }

                    </GameLearnMore>
                  </GameImgBigMask>
                </SwiperSlideBig>
              ))
            }
          </SwiperGameBig>
        </EcoGame>
      </Section3>
      <Footer btnShow={false} />
    </ContentWrapper>
  )
}
