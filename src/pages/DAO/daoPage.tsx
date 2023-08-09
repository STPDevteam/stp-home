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
import useBreakpoint from "../../hooks/useBreakpoint";

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
  const isDownSm = useBreakpoint("sm");
  return (
    <HeadBox style={{ background: "white" }}>
      <HeadH1 style={{ color: "#111029" }}>Clique World Launchpad</HeadH1>
      <HeadText style={{ color: "#777E90" }}>
        Empowering Shared World Creation
      </HeadText>
      <Row
        mt={"48px"}
        gap={"24px"}
        flexDirection={isDownSm ? "column" : "row"}
        width={"178px"}
      >
        {/* <GreenBtn
          style={{ height: "56px" }}
          onClick={() => {
            window.open(
              "https://mirror.xyz/0xB9d761AF53845D1F3C68f99c38f4dB6fcCfB66A1/rRQ7limbMglccq68gojGxh3Wbf4Hy2rTODHfkKragjA",
              "_blank"
            );
          }}
        >
          Learn More
        </GreenBtn> */}
        {/* <BlueButton
          style={{ height: "56px" }}
          onClick={() => {
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSdSl2HuWLXMQDRjB4npQP0BoAcpGL2e3BQK9HldkU7TZMgSRQ/viewform",
              "_blank"
            );
          }}
        >
          Apply for Grant
        </BlueButton> */}
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
  const isDownSm = useBreakpoint("sm");
  return (
    <Box
      sx={{
        width: "100%",
        background: "#1B1AFF",
        height: "410px",
        display: "flex",
        justifyContent: "center",
        alignItems: isDownSm ? "left" : "center",
        padding: isDownSm ? "0 80px 0 20px" : 0,
        flexDirection: "column",
      }}
    >
      <Typography
        fontWeight={600}
        fontSize={isDownSm ? 48 : 64}
        lineHeight={isDownSm ? "58px" : "90px"}
        sx={{ color: "white" }}
      >
        Mission
      </Typography>
      <Typography
        mt={"24px"}
        fontSize={isDownSm ? 20 : 16}
        lineHeight={isDownSm ? "30px" : "28px"}
        sx={{ color: "#B4B4B4" }}
        textAlign={isDownSm ? "left" : "center"}
      >
        STP seeks to bridge the on-chain gap by providing funding and resources to eligible Worlds
        <br /> to help them form and achieve their goals.
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
  @media (max-width: 767px) {
    width: 100%;
    margin: 0;
    padding: 80px 20px;
  }
`;

const TypeItemBg = styled(Box)`
  padding: 24px 0;
  display: flex;
  align-items: center;
  width: 436px;
  gap: 24px;
  border-bottom: 1px solid #e9ecf2;
  @media (max-width: 767px) {
    width: auto;
  }
`;

const DaoTitle = styled(Typography)`
  position: absolute;
  top: 50%;
  bottom: 50%;
  font-weight: 700;
  font-size: 48px;
  right: 185px;
  transform: translateY(-50%);
  @media (max-width: 767px) {
    position: unset;
    transform: translateY(0%);
  }
`;

function Types() {
  const isDownSm = useBreakpoint("sm");
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
      <DaoTitle>DAO Types</DaoTitle>
      {TypesList.map((type, idx) => {
        return (
          <TypeItemBg key={idx}>
            <img
              src={type.icon}
              style={{ width: isDownSm ? "48px" : "auto" }}
            />
            <Typography
              sx={{ color: "#1D1E25" }}
              fontSize={isDownSm ? 16 : 20}
              fontWeight={500}
            >
              {type.text}
            </Typography>
          </TypeItemBg>
        );
      })}
      {!isDownSm && (
        <img
          src={StarCircle}
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
          }}
        />
      )}
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
  const isDownSm = useBreakpoint("sm");
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
      <Box
        display={"flex"}
        gap={"29px"}
        flexDirection={isDownSm ? "column" : "row"}
      >
        {CriteriaList.map((item, idx) => (
          <CriteriaItem icon={item.icon} text={item.text} />
        ))}
      </Box>
      <Row mt={"40px"} gap={"24px"} flexDirection={isDownSm ? "column" : "row"}>
        {/* <GreenBtn
          style={{ height: "56px" }}
          onClick={() =>
            window.open(
              "https://mirror.xyz/0xB9d761AF53845D1F3C68f99c38f4dB6fcCfB66A1/rRQ7limbMglccq68gojGxh3Wbf4Hy2rTODHfkKragjA",
              "_blank"
            )
          }
        >
          Learn More
        </GreenBtn> */}
        {/* <GreenBtn
          style={{ height: "56px" }}
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSdSl2HuWLXMQDRjB4npQP0BoAcpGL2e3BQK9HldkU7TZMgSRQ/viewform",
              "_blank"
            )
          }
        >
          Apply for Grant
        </GreenBtn> */}
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
          top: isDownSm ? 80 : 120,
          left: isDownSm ? 20 : 120,
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
