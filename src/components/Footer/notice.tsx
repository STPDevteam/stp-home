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
`;
const NoticeBg = styled(Box)`
  position: relative;
  border-radius: 0 0 40px 40px;
  background-image: linear-gradient(
    90deg,
    #150d00 0%,
    #835c21 49%,
    #150d00 100%
  );
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 80px;
  display: flex;
  @media (max-width: 767px) {
    flex-direction: column;
    height: auto;
    position: fixed;
    z-index: 99;
    left: 0;
    bottom: 0;
  }
`;
const NoticeContent = styled(Box)`
  width: 100vw;
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
const PlayBtn = styled(YellowBtn)`
  position: absolute;
  top: 50%;
  right: 60px;
  transform: translateY(-50%);
  @media (max-width: 767px) {
    position: unset;
    transform: translate(0);
    right: 0;
    margin-bottom: 12px;
  }
`;
export default function Notice() {
  const isSmallScreen = useBreakpoint();

  return (
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
        <PlayBtn
          onClick={() => {
            window.open("https://eternallegacy.xyz ", "_blank");
          }}
        >
          Battle Now
        </PlayBtn>
      </NoticeBg>
    </NoticeBgLine>
  );
}
