import { Box, Tab, Tabs } from "@mui/material";
import styled from "styled-components";
import { Button, Divider, Typography } from "antd";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import BottomCircle from "../../assets/images/home/svg/header-bottom-circle.svg";
import DappStorePic from "../../assets/images/home/svg/dapp-store.svg";
import CliqueSdkPic from "../../assets/images/home/svg/clique-sdk.svg";
import DataBg from "../../assets/images/home/svg/data-bg.svg";
import Avatar1 from "../../assets/images/home/svg/avatar-1.svg";
import Avatar2 from "../../assets/images/home/svg/avatar-2.svg";
import Avatar3 from "../../assets/images/home/svg/avatar-3.svg";
import BuildCircle from "../../assets/images/home/svg/elips.svg";
import StpLogo from "../../assets/images/home/svg/stp-logo.svg";
import Logo1 from "../../assets/images/home/svg/logo1.svg";
import Logo2 from "../../assets/images/home/svg/logo2.svg";
import Logo3 from "../../assets/images/home/svg/logo3.svg";
import Logo4 from "../../assets/images/home/svg/logo4.svg";
import Logo5 from "../../assets/images/home/svg/logo5.svg";
import InfrastructurePic from "../../assets/images/home/infrastructure.png";
import Initiatives1 from "../../assets/images/home/initiatives1.png";
import Initiatives2 from "../../assets/images/home/initiatives2.png";
import Initiatives3 from "../../assets/images/home/initiatives3.png";
import Email from "../../assets/images/socialmedia/email.svg";
import Cylinder from "../../assets/images/socialmedia/cylinder.svg";
import Medium from "../../assets/images/socialmedia/medium.svg";
import Tele from "../../assets/images/socialmedia/telegramsvg.svg";
import Twitter from "../../assets/images/socialmedia/twitter.svg";
import Wechat from "../../assets/images/socialmedia/wechat.svg";
import React, { useState } from "react";
import { useHistory } from "react-router";

export const ContentWrapper = styled(Box)`
  position: absolute;
  width: 100vw;
  top: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export default function Homepage() {
  return (
    <ContentWrapper>
      <Head />
      <Infrastructure />
      <Data />
      <Initiatives />
      <Ecosystem />
      <BuildWithUs />
      <Footer />
    </ContentWrapper>
  );
}

export const HeadBox = styled(Box)`
  background: #1b1aff;
  position: relative;
  height: 669px;
  width: 100%;
  padding-left: 252px;
`;
export const HeadH1 = styled(Typography)`
  font-family: "Urbanist";
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 90px;
  padding-top: 179px;
  color: #ffffff;
`;
export const HeadText = styled(Typography)`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  margin-top: 48px;
  font-size: 20px;
  line-height: 30px;
  color: #b4b4b4;
`;
export const GreenBtn = styled(Button)`
  display: flex;
  border: 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  font-weight: 700;
  font-size: 16px;
  height: 56px;
  line-height: 24px;
  gap: 8px;
  background: #a7f46a;
  border-radius: 8px;
`;
const BottomCircleImg = styled("img")`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0%);
  bottom: 0;
`;

function Head() {
  const history = useHistory();
  return (
    <HeadBox>
      <HeadH1>
        An ecosystem <br />
        optimized for DAOs
      </HeadH1>
      <HeadText>
        Launch your DAO on an All-In-One platform offering seamless <br />
        crosschain governance and integration with essential tooling.
      </HeadText>
      <GreenBtn
        style={{ marginTop: "40px" }}
        onClick={() => history.push("/product")}
      >
        Launch DAO
        <ArrowOutwardIcon />
      </GreenBtn>
      <BottomCircleImg src={BottomCircle} />
    </HeadBox>
  );
}

const InfraH1 = styled(Typography)`
  font-family: "Urbanist";
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 90px;
  color: #1b1aff;
`;

const InfraSubH1 = styled(Typography)`
  font-family: "Urbanist";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 110%;
  color: #1b1aff;
`;

const InfraH2 = styled(Typography)`
  font-family: "Urbanist";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 110%;
  margin-top: 48px;
  color: #23262f;
`;

const InfraText = styled(Typography)`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  margin-top: 16px;
  color: #777e91;
`;
const InfraBoxBg = styled(Box)`
  padding: 27px 30px 30px;
  width: 359px;
  height: 205px;
  left: 145px;
  top: 363px;
  flex: 1;
  background: #f8fffe;
  border: 1px solid #d6d6d6;
  border-radius: 16px;
`;

const InfraBoxTitle = styled(Typography)`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #777e91;
`;

const InfraBoxContent = styled(Typography)`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin-top: 11px;
  color: #777e91;
`;

function InfraBox({ title, content }: { title: string; content: string }) {
  return (
    <InfraBoxBg>
      <InfraBoxTitle>{title}</InfraBoxTitle>
      <InfraBoxContent>{content}</InfraBoxContent>
    </InfraBoxBg>
  );
}

const CliqueBox = styled(Box)`
  position: relative;
  padding: 40px;
  background: rgba(240, 240, 255, 0.4);
  border: 1px solid #d6d6d6;
  border-radius: 16px;
  width: 561px;
  height: 483px;
`;

const CliqueTitle = styled(Typography)`
  font-family: "Urbanist";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 110%;
  color: #23262f;
`;
const CliqueText = styled(Typography)`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #777e91;
`;
const CliqueImg = styled("img")`
  position: absolute;
  left: 50%;
  right: 50%;
  transform: translateX(-50%);
  bottom: 0px;
`;

function DappStore() {
  return (
    <CliqueBox>
      <CliqueTitle>Clique DApp Store</CliqueTitle>
      <CliqueText>
        Scale your DAO with unlimited ecosystem tools and infrastructures.
        Become part of our ecosystem by integrating your dApp with Clique.
      </CliqueText>
      <CliqueImg src={DappStorePic} />
    </CliqueBox>
  );
}

function CliqueSdk() {
  return (
    <CliqueBox style={{ background: "rgba(237, 252, 255, 0.4)" }}>
      <CliqueTitle>Clique SDK</CliqueTitle>
      <CliqueText>
        Create a customized workspace platform for free with Clique SDK.
      </CliqueText>
      <CliqueImg src={CliqueSdkPic} />
    </CliqueBox>
  );
}

const VideoContent = styled(Box)`
  width: 1150px;
  height: 525px;
  margin: 120px auto;

  @media (max-width: 767px) {
    width: 100%;
    padding: 30px 30px 0px 30px;
    /* height: 250px; */
  }

  iframe {
    border: none;
  }
`;

const InfrastructureBox = styled(Box)`
  padding: 120px;
  max-width: 1441px;
`;

function Infrastructure() {
  const CliqueBox = [
    {
      title: "Setup your team framework",
      content:
        "Unleash core members and reward  their contribution based on a customized framework.",
    },
    {
      title: "Legitimize your governance participation",
      content:
        "Encourage community engagement through incentives and social credibility.",
    },
    {
      title: "Manage and execute your tasks",
      content:
        "Enhance teamwork and productivity with Web3-centric tools that turn idea into execution.",
    },
  ];

  return (
    <InfrastructureBox>
      <Box display={"flex"} alignItems={"baseline"} gap={"20px"}>
        <InfraH1>Clique</InfraH1>
        <InfraSubH1>The All-in-One Platform</InfraSubH1>
      </Box>
      <InfraH2>Clique Workspace</InfraH2>
      <InfraText>
        Web3 community workspace for all builders with no code and gas required.
      </InfraText>
      <Box
        display={"flex"}
        mt={"24px"}
        justifyContent={"space-between"}
        gap={"28px"}
      >
        {CliqueBox.map((c, idx) => (
          <InfraBox title={c.title} content={c.content} />
        ))}
      </Box>
      <img style={{ marginTop: "40px" }} src={InfrastructurePic} />
      <Box display={"flex"} justifyContent={"space-between"}>
        <DappStore />
        <CliqueSdk />
      </Box>
      <VideoContent>
        <iframe
          title="youtube"
          src="https://www.youtube.com/embed/ZEDNduNedCc?autoplay=1"
          height="100%"
          width="100%"
        ></iframe>
      </VideoContent>
    </InfrastructureBox>
  );
}

const DataBgBox = styled(Box)`
  background-image: url("${DataBg}");
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 200px;
  padding: 74px 0;
  background-size: cover;
`;

const DataNumber = styled(Typography)`
  font-family: "Urbanist";
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 60px;
  text-align: center;
  color: #ffffff;
`;

const DataContent = styled(Typography)`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #b4b4b4;
`;

function Data() {
  const dataList = [
    { number: "+200", desc: "DAOs Created" },
    { number: "+100,000", desc: "Community Members" },
    { number: "+3,000", desc: "Proposals" },
  ];
  return (
    <DataBgBox>
      {dataList.map((d, idx) => {
        return (
          <Box>
            <DataNumber>{d.number}</DataNumber>
            <DataContent>{d.desc}</DataContent>
          </Box>
        );
      })}
    </DataBgBox>
  );
}

const InitH1 = styled(Typography)`
  font-family: "Urbanist";
  font-style: normal;
  font-weight: 600;
  margin-top: 120px;
  font-size: 64px;
  line-height: 90px;
  text-align: center;
  color: #23262f;
`;

const InitBox = styled(Box)`
  position: relative;
  padding: 42px 47px;
  background: #ffffff;
  opacity: 0.9;
  border: 1px solid #e9ecf2;
  box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  height: 676px;
`;

const InitListH1 = styled(Typography)`
  margin-left: 8px;
  font-family: "Urbanist";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 110%;
  color: #23262f;
`;

const InitTag = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 24px;
  gap: 12px;
  background: #fffcf8;
  border: 1px solid #d4d7e2;
  border-radius: 6px;
  color: #0049c6;
`;

const InitListDesc = styled(Box)`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #777e91;
`;

interface InitiativesData {
  pic: string;
  avatar: string;
  title: string;
  tag: string[];
  tagColor: string[];
  desc: string;
}

export const Row = styled(Box)`
  display: flex;
`;

const InitRow = styled(Row)`
  margin-top: 32px;
  align-items: center;
`;

function InitList({ data }: { data: InitiativesData }) {
  return (
    <InitBox>
      <img src={data.pic} />
      <InitRow>
        <img src={data.avatar} />
        <InitListH1>{data.title}</InitListH1>
      </InitRow>
      <Row gap={"16px"} mt={"16px"}>
        {data.tag.map((tag, idx) => (
          <InitTag key={idx} sx={{ background: data.tagColor[idx] }}>
            {tag}
          </InitTag>
        ))}
      </Row>
      <InitListDesc mt={"24px"}>{data.desc}</InitListDesc>
      <GreenBtn
        style={{ position: "absolute", bottom: "42px", right: "47px" }}

      >
        Learn more
        <ArrowOutwardIcon />
      </GreenBtn>
    </InitBox>
  );
}

const Main = styled(Box)`
  display: flex;
  width: 100vw;
  overflow: hidden;
  margin-bottom: 120px;
`;

const GroupMain = styled.div`
  display: flex;
  @keyframes slide {
    0% {
      transform: translateX(0); /* 初始位置 */
    }
    100% {
      transform: translateX(-100%); /* 移动到最左边 */
    }
  }
  animation: slide 15s linear infinite;
`;

function Initiatives() {
  const dataList: InitiativesData[] = [
    {
      pic: Initiatives1,
      avatar: Avatar1,
      title: "Mighty Magic DAO",
      tag: ["On-chain Game", "Zero-knowledge Proof"],
      tagColor: ["#F8FEFF", "#ECFCF1"],
      desc: "Mighty Magic DAO is a ecosystem to empower fully on chain games and bring the magic back to gaming.",
    },
    {
      pic: Initiatives1,
      avatar: Avatar1,
      title: "ChatGPT DAO",
      tag: ["Artificial Intellegience"],
      tagColor: ["#F8FEFF"],
      desc: "The Web3.0 space for all ChatGPT & AI enthusiasts.",
    },
    {
      pic: Initiatives2,
      avatar: Avatar2,
      title: "Bubble DAO",
      tag: ["Social", "Digital Identity"],
      tagColor: ["#FFFCF8", "#FCECF8"],
      desc: "Support an inclusive and diverse community by building meaningful relationships in Web3. Members form close-knit bonds in a safe environment free from judgment, surrounded by like-minded individuals.",
    },
    {
      pic: Initiatives3,
      avatar: Avatar3,
      title: "Mighty Magic DAO",
      tag: ["Social", "Infrastructure"],
      tagColor: ["#FFFCF8", "#ECF0FC"],
      desc: "Sonet is an open-source platform providing AWS-like services across Web2 and Web3 applications.",
    },
  ];

  return (
    <Box sx={{ background: "#F8FBFF" }} width={"100vw"}>
      <InitH1>Leading DAO Initiatives</InitH1>
      <Main gap={"43px"} mt={"48px"}>
        <GroupMain>
          {dataList.map((d, idx) => (
            <InitList data={d} key={idx} />
          ))}
        </GroupMain>
      </Main>
    </Box>
  );
}

const EcoH1 = styled(Typography)`
  margin: 120px 0 48px;
  font-family: "Urbanist";
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 90px;
  /* identical to box height, or 141% */

  text-align: center;

  color: #1b1aff;
`;

const EcoButton = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 191px;
  height: 48px;
  border: 1px solid #b4b4b4;
  border-radius: 80px;
`;

function Ecosystem() {
  const [value, setValue] = useState();
  const partners = [Logo1, Logo2, Logo3, Logo4, Logo5];
  return (
    <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
      <EcoH1>Ecosystem</EcoH1>
      <Tabs value={value} onChange={(e, value) => setValue(value)}>
        <Tab label="Partners" />
        <Tab label="Integrations" />
        <Tab label="Listed exchanges" />
      </Tabs>
      <Row mt={"60px"} gap={"80px"}>
        {partners.map((logo, idx) => (
          <img key={idx} src={logo} />
        ))}
      </Row>
      <EcoButton style={{ marginTop: "50px", marginBottom: "120px" }}>
        Learn More
      </EcoButton>
    </Box>
  );
}

const BuildBox = styled(Box)`
  width: 100vw;
  height: 506px;
  position: relative;
  padding: 120px;
  background: #1b1aff;
`;

const BuildH1 = styled(Typography)`
  font-family: "Urbanist";
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 90px;
  color: #ffffff;
`;

const BuildContent = styled(Typography)`
  font-family: "DM Sans";
  font-style: normal;
  margin-top: 24px;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #b4b4b4;
`;

function BuildWithUs() {
  return (
    <BuildBox>
      <BuildH1>Build with Us</BuildH1>
      <BuildContent>
        Explore partnership and integration possibilities for your project.
      </BuildContent>
      <GreenBtn style={{ marginTop: "66px" }}>
        <a
          href="mailto:contact@stp.network"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Contact <ArrowOutwardIcon style={{ marginLeft: "8px" }} />
        </a>
      </GreenBtn>
      <img
        style={{ position: "absolute", right: 0, bottom: 0 }}
        src={BuildCircle}
      />
    </BuildBox>
  );
}

export const BlueButton = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 42px;
  gap: 8px;
  background: #0049c6;
  color: white;
  border-radius: 8px;
  font-weight: 700;
  border: 0;
`;

const FooterH1 = styled(Typography)`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  margin-top: 16px;
  font-size: 20px;
  line-height: 30px;
  color: #ffffff;
`;

const FooterText = styled(Typography)`
  font-family: "DM Sans";
  margin-top: 16px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #d6d6d6;
`;

const SocialMedia = styled.img`
  width: 20px;
  height: 20px;
`;

export function Footer() {
  const footList = [
    [
      "Products",
      "Web3 Community Workspace",
      "DAO Tooling Aggregator",
      "Governance SDK",
    ],
    ["DAOs", "Mighty Magic DAO", "Bubble DAO", "DeSci DAO", "AI DAO"],
    ["Resources", "Whitepaper", "Github", "Wiki"],
  ];
  return (
    <Box
      sx={{ width: "100%", background: "#101010", padding: "120px 105px 80px" }}
    >
      <Box
        display={"flex"}
        width={"100%"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <img src={StpLogo} />
        <BlueButton>Build DAO</BlueButton>
      </Box>
      <Divider style={{ background: "#757B8A" }} />
      <Box display={"flex"} gap={"120px"}>
        {footList.map((coloum, idx) => {
          return (
            <Box>
              {coloum.map((item, i) => {
                if (i === 0) {
                  return <FooterH1>{item}</FooterH1>;
                } else {
                  return <FooterText>{item}</FooterText>;
                }
              })}
            </Box>
          );
        })}
        <Box>
          <FooterH1>Ecosystem</FooterH1>
          <FooterH1>News</FooterH1>
          <FooterH1>FAQ</FooterH1>
        </Box>
      </Box>
      <Box display={"flex"} justifyContent={"flex-end"} gap={"40px"}>
        <SocialMedia src={Tele} />
        <SocialMedia src={Twitter} />
        <SocialMedia src={Medium} />
        <SocialMedia src={Cylinder} />
        <SocialMedia src={Wechat} />
        <SocialMedia src={Email} />
      </Box>
    </Box>
  );
}
