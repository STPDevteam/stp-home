import Stars from "../../assets/images/header/stars.svg";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Box, Typography } from "@mui/material";
import { YellowBtn } from "../../pages/Home/homepage";
import useBreakpoint from "../../hooks/useBreakpoint";

const NoticeBgLine = styled(Box)`
  border: 1px solid transparent;
  padding: 0 1px 1px 1px;
  margin: -1px;
  background-image: linear-gradient(
    90deg,
    #3e2909 0%,
    #ffd688 51%,
    #3e2909 99.5%
  );
  background-origin: border-box;
  background-clip: padding-box, border-box;
  border-radius: 0 0 40px 40px;
  @media (max-width: 767px) {
    border-radius: 0;
  }
`;
const NoticeBg = styled(Box)`
  border-radius: 0 0 40px 40px;
  background-image: linear-gradient(
    90deg,
    #150d00 0%,
    #835c21 49%,
    #150d00 100%
  );
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 80px;
  display: flex;
  padding: 0 60px;
  @media (max-width: 767px) {
    border-radius: 0;
    flex-direction: column;
    height: auto;
    padding-bottom: 20px;
    position: fixed;
    z-index: 99;
    left: 0;
    bottom: 0;
  }
`;
const NoticeContent = styled(Box)`
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  @media (max-width: 767px) {
    flex-direction: column;
    height: auto;
    gap: 0;
    padding: 10px;
  }
`;
const NoticeText = styled(Typography)`
  font-family: Inter;
  font-size: 22px;
  font-weight: 600;
  line-height: 29.05px;
  letter-spacing: 0.2px;
  text-align: left;
  text-shadow: 0 3px 4px #00000069;
  color: white;
  @media (max-width: 767px) {
    font-size: 20px;
    text-align: center;
    line-height: 28px;
  }
`;
const CloseBtn = styled(YellowBtn)`
  color: white;
  background-color: transparent;
  border-radius: 50px;
  border: 1px solid #f4d177;
`;
const BtnBox = styled(Box)`
  display: flex;
  gap: 16px;
`;
export default function Notice() {
  const isSmallScreen = useBreakpoint();
  const [isShow, setIsShow] = useState(true);
  return isShow ? (
    <NoticeBgLine>
      <NoticeBg>
        <NoticeContent>
          <img src={Stars} />
          <NoticeText>
            Clique’s Flagship Game: Eternal Legacy is Now in Beta with Bounty
            Rewards
          </NoticeText>
          {!isSmallScreen && <img src={Stars} />}
        </NoticeContent>
        <BtnBox>
          <YellowBtn
            onClick={() => {
              window.open("https://eternallegacy.xyz ", "_blank");
            }}
          >
            Battle Now
          </YellowBtn>
          <CloseBtn onClick={() => setIsShow(false)}>Close</CloseBtn>
        </BtnBox>
      </NoticeBg>
    </NoticeBgLine>
  ) : (
    <></>
  );
}
