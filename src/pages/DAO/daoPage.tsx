import {
  BlueButton,
  ContentWrapper,
  Footer,
  GreenBtn,
  HeadBox,
  HeadH1,
  HeadText,
  Row,
} from "../Home/homepage";
import { Box, styled, Typography } from "@mui/material";
import IconAI from "../../assets/images/dao/svg/ai.svg";
import IconArts from "../../assets/images/dao/svg/arts.svg";
import IconDefi from "../../assets/images/dao/svg/defi.svg";
import IconPic from "../../assets/images/dao/svg/pic.svg";
import IconSocial from "../../assets/images/dao/svg/social.svg";
import StarCircle from "../../assets/images/dao/svg/star-circle.svg";
import Chart from "../../assets/images/dao/svg/chart.svg";
import Flag from "../../assets/images/dao/svg/flag.svg";
import Phone from "../../assets/images/dao/svg/phone.svg";
import Roker from "../../assets/images/dao/svg/roker.svg";
import CriteriaElips from "../../assets/images/dao/svg/criteria-elips.svg";
import Ellipse1 from "../../assets/images/dao/svg/Ellipse1.svg";
import Ellipse2 from "../../assets/images/dao/svg/Ellipse2.svg";

export default function () {
  return (
    <ContentWrapper>
      <Head />
      <Mission />
      <Types />
      <Criteria />
      <Footer />
    </ContentWrapper>
  );
}

function Head() {
  return (
    <HeadBox sx={{ background: "white" }}>
      <HeadH1 style={{ color: "#111029" }}>DAO Booster Program</HeadH1>
      <HeadText style={{ color: "#777E90" }}>
        Empowering DAOs on Clique
      </HeadText>
      <Row mt={"48px"} gap={"24px"}>
        <GreenBtn style={{ height: "56px" }}>Learn More</GreenBtn>
        <BlueButton style={{ height: "56px" }}>Apply for Grant</BlueButton>
      </Row>
      <img
        src={Ellipse1}
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
        }}
      />
      <img
        src={Ellipse2}
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
        }}
      />
    </HeadBox>
  );
}

function Mission() {
  return (
    <Box
      sx={{
        width: "100%",
        background: "#1B1AFF",
        height: "410px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography fontWeight={600} fontSize={64} sx={{ color: "white" }}>
        Mission
      </Typography>
      <Typography mt={"24px"} fontSize={16} sx={{ color: "#B4B4B4" }}>
        The DAO Booster Program seeks to bridge this gap by providing funding
        and resources to eligible DAOs to help them jumpstart their DAO and
        achieve their goals.{" "}
      </Typography>
    </Box>
  );
}

const TypesBox = styled(Box)`
  width: 1200px;
  margin: 120px;
  position: relative;
  background: #f5f8fe;
  padding: 100px 164px;
`;

const TypeItemBg = styled(Box)`
  padding: 24px 0;
  display: flex;
  align-items: center;
  width: 436px;
  gap: 24px;
  border-bottom: 1px solid #e9ecf2;
`;

const DaoTitle = styled(Typography)`
  position: absolute;
  top: 50%;
  bottom: 50%;
  font-weight: 700;
  font-size: 48px;
  right: 185px;
  transform: translateY(-50%);
`;

function Types() {
  const TypesList = [
    {
      icon: IconDefi,
      text: "Decentralized finance (DeFi)",
    },
    {
      icon: IconAI,
      text: "Cutting-edge technology, eg, AI, ZK, etc.",
    },
    {
      icon: IconPic,
      text: "Gaming and NFTs",
    },
    {
      icon: IconSocial,
      text: "Social impact and sustainability",
    },
    {
      icon: IconArts,
      text: "Arts and culture",
    },
  ];
  return (
    <TypesBox>
      {TypesList.map((type, idx) => {
        return (
          <TypeItemBg key={idx}>
            <img src={type.icon} />
            <Typography
              sx={{ color: "#1D1E25" }}
              fontSize={20}
              fontWeight={500}
            >
              {type.text}
            </Typography>
          </TypeItemBg>
        );
      })}
      <DaoTitle>DAO Types</DaoTitle>
      <img
        src={StarCircle}
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
        }}
      />
    </TypesBox>
  );
}

const CriteriaBox = styled(Box)`
  width: 100%;
  background: #1b1aff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 246px 0 120px;
  position: relative;
`;

const IconBg = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  z-index: 2;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const CriteriaItemBg = styled(Box)`
  width: 197px;
  height: 189px;
  background: #ffffff;
  padding: 60px 43px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  border-radius: 40px;
  margin-top: -55px;
`;

function CriteriaItem({ icon, text }: { icon: string; text: string }) {
  return (
    <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
      <IconBg>
        <img src={icon} />
      </IconBg>
      <CriteriaItemBg>
        <Typography fontSize={20} fontWeight={500} textAlign={"center"}>
          {text}
        </Typography>
      </CriteriaItemBg>
    </Box>
  );
}

function Criteria() {
  const CriteriaList = [
    {
      icon: Roker,
      text: "Innovation and Creativity",
    },
    {
      icon: Flag,
      text: "Feasibility",
    },
    {
      icon: Phone,
      text: "Community Involvement",
    },
    {
      icon: Chart,
      text: "Sustainability",
    },
  ];
  return (
    <CriteriaBox>
      <Box display={"flex"} gap={"29px"}>
        {CriteriaList.map((item, idx) => (
          <CriteriaItem icon={item.icon} text={item.text} />
        ))}
      </Box>
      <Row mt={"40px"} gap={"24px"}>
        <GreenBtn style={{ height: "56px" }}>Learn More</GreenBtn>
        <GreenBtn style={{ height: "56px" }}>Apply for Grant</GreenBtn>
      </Row>
      <img
        src={CriteriaElips}
        style={{
          position: "absolute",
          top: "-50%",
          left: 0,
        }}
      />
      <Typography
        sx={{
          position: "absolute",
          top: 120,
          left: 120,
          color: "white",
          fontSize: 64,
          fontWeight: 600,
        }}
      >
        Criteria
      </Typography>
    </CriteriaBox>
  );
}
