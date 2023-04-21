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
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import React from "react";
import Star from "../../assets/images/ecosystem/svg/star-ecosystem.svg";
import { Box, Input, Stack, styled, Typography } from "@mui/material";
import Zkevm from "../../assets/images/ecosystem/svg/platform/zkevm.svg";
import BinanceSmartChain from "../../assets/images/ecosystem/svg/platform/binance-smart-chain.svg";
import Binance from "../../assets/images/ecosystem/svg/platform/binance.svg";
import Bithumb from "../../assets/images/ecosystem/svg/platform/bithumb.svg";
import Cere from "../../assets/images/ecosystem/svg/platform/cere.svg";
import ChainlinkLogoBlue from "../../assets/images/ecosystem/svg/platform/Chainlink_Logo_Blue.svg";
import Cobak from "../../assets/images/ecosystem/svg/platform/cobak.svg";
import CoinDcx from "../../assets/images/ecosystem/svg/platform/coin-dcx.svg";
import Coinone from "../../assets/images/ecosystem/svg/platform/coinone.svg";
import DeepDao from "../../assets/images/ecosystem/svg/platform/deep-dao.svg";
import Deesse from "../../assets/images/ecosystem/svg/platform/deesse.svg";
import Define from "../../assets/images/ecosystem/svg/platform/define.svg";
import GateIo from "../../assets/images/ecosystem/svg/platform/gate-io.svg";
import GnosisSafe from "../../assets/images/ecosystem/svg/platform/gnosis-safe.svg";
import Her from "../../assets/images/ecosystem/svg/platform/her.svg";
import Huobi from "../../assets/images/ecosystem/svg/platform/huobi.svg";
import Immunefi from "../../assets/images/ecosystem/svg/platform/immunefi.svg";
import JennyMetaverseDao from "../../assets/images/ecosystem/svg/platform/jenny-metaverse-dao.svg";
import Klaytn from "../../assets/images/ecosystem/svg/platform/klaytn.svg";
import Knnb from "../../assets/images/ecosystem/svg/platform/knnb.svg";
import Layer3 from "../../assets/images/ecosystem/svg/platform/layer3.svg";
import MapProtocol from "../../assets/images/ecosystem/svg/platform/map-protocol.svg";
import MeterPassport from "../../assets/images/ecosystem/svg/platform/meter-passport.svg";
import Moviebloc from "../../assets/images/ecosystem/svg/platform/moviebloc.svg";
import Poloniex from "../../assets/images/ecosystem/svg/platform/poloniex.svg";
import PolygonEcosystemDao from "../../assets/images/ecosystem/svg/platform/polygon-ecosystem-dao.svg";
import Polygon from "../../assets/images/ecosystem/svg/platform/polygon.svg";
import Push from "../../assets/images/ecosystem/svg/platform/push.svg";
import RaiFinance from "../../assets/images/ecosystem/svg/platform/rai-finance.svg";
import TheGraph from "../../assets/images/ecosystem/svg/platform/the-graph.svg";
import UpBit from "../../assets/images/ecosystem/svg/platform/up-bit.svg";
import VoltSwap from "../../assets/images/ecosystem/svg/platform/volt-swap.svg";
import Zetachain from "../../assets/images/ecosystem/svg/platform/zetachain.svg";
import Grid2 from "@mui/material/Unstable_Grid2";

export default function () {
  return (
    <ContentWrapper>
      <Head />
      <Platforms />
      <Footer />
    </ContentWrapper>
  );
}
const Tag = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px 32px;
  gap: 8px;
  height: 37px;
  background: #a7f46a;
  border-radius: 24px;
`;

const FilterTitle = styled(Typography)`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #ededed;
`;

function Head() {
  const filterList = [
    {
      title: "Category",
      tags: ["All", "Partnership", "Integration", "Listed Exchanges"],
    },
    {
      title: "Sector",
      tags: ["All", "Defi", "Social", "NFT", "Infrastructure"],
    },
  ];
  return (
    <HeadBox>
      <HeadH1>Ecosystem</HeadH1>
      <HeadText>
        Our ecosystem is supported by the existing 15,000 on-chain token holder
        community.
      </HeadText>
      <GreenBtn style={{ marginTop: "24px" }}>
        DAO Booster Program <ArrowOutwardIcon />
      </GreenBtn>
      <Stack spacing={"24px"} mt={"80px"}>
        {filterList.map((type, idx) => {
          return (
            <Row gap={"16px"} alignItems={"center"}>
              <FilterTitle key={idx}>{type.title}</FilterTitle>
              <Row gap={"4px"}>
                {type.tags.map((tag, tagIdx) => (
                  <Tag
                    key={tagIdx}
                    sx={{ background: tag === "All" ? "#a7f46a" : "white" }}
                  >
                    {tag}
                  </Tag>
                ))}
              </Row>
            </Row>
          );
        })}
      </Stack>
      <img
        src={Star}
        style={{
          position: "absolute",
          right: "0",
          bottom: "106px",
        }}
      />
    </HeadBox>
  );
}

const SearchBg = styled(Box)`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 17px 16px 17px 22px;
  gap: 13px;
  width: 464px;
  height: 70px;
  background: #ffffff;
  border: 1px solid #d6d6d6;
  border-radius: 15px;
`;

const SearchBox = styled(Input)`
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 1;
`;

function Search() {
  return (
    <SearchBg>
      <SearchBox placeholder={"Search DAO name"} disableUnderline={true} />
      <BlueButton
        style={{
          position: "absolute",
          height: "52px",
          top: "50%",
          bottom: "50%",
          right: "8px",
          transform: "translateY(-50%)",
        }}
      >
        Search
      </BlueButton>
    </SearchBg>
  );
}

const PlatformBox = styled(Box)`
  padding: 24px 40px;
  height: 235px;
  background: #ffffff;
  box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
`;

const TagBox = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 5px 16px;
  gap: 8px;
  border: 1px solid #d6d6d6;
  border-radius: 14px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const PlatformDesc = styled(Typography)`
  font-family: "DM Sans";
  margin-top: 24px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  /* or 21px */

  display: flex;
  align-items: center;

  /* text */

  color: #777e91;
`;

function Platforms() {
  const TagColors = ["#F9F9FF", "#F8FFFE", "#F8FEFF", "#FFF8F8", "#FAF8FF"];
  return (
    <Box
      sx={{
        maxWidth: "1441px",
        padding: "80px 0 120px",
      }}
    >
      <Search />
      <Grid2 container spacing={"36px"} mt={"39px"}>
        {DaosList.map((dao, idx) => {
          return (
            <Grid2 md={4}>
              <PlatformBox>
                <Row justifyContent={"space-between"} width={"100%"}>
                  <img src={dao.icon} />
                  <ArrowOutwardIcon sx={{ color: "#1B1AFF" }} />
                </Row>
                <Row gap={"4px"} mt={"24px"}>
                  {dao.tag.map((t, idx) => (
                    <TagBox
                      key={idx}
                      sx={{
                        background:
                          TagColors[
                            Math.floor(Math.random() * TagColors.length)
                          ],
                      }}
                    >
                      {t}
                    </TagBox>
                  ))}
                </Row>
                <PlatformDesc>{dao.desc}</PlatformDesc>
              </PlatformBox>
            </Grid2>
          );
        })}
      </Grid2>
    </Box>
  );
}

const DaosList = [
  {
    icon: BinanceSmartChain,
    tag: ["Integration"],
    desc: "BNB chain",
    link: "",
  },
  {
    icon: Polygon,
    tag: ["Integration", "Infrastructure"],
    desc: "Polygon believes in Web3 for all. ",
    link: "",
  },
  {
    icon: Klaytn,
    tag: ["Integration", "Infrastructure"],
    desc: "An open-source public blockchain for all who wish to build, work, or play in the metaverse.",
    link: "",
  },
  { icon: Zkevm, tag: ["Integration"], desc: "Polygon zkevm", link: "" },
  {
    icon: ChainlinkLogoBlue,
    tag: ["Partnership", "Infrastructure"],
    desc: "Chainlink is the oracle to source external information on-chain ",
    link: "",
  },
  {
    icon: TheGraph,
    tag: ["Partnership", "Infrastructure"],
    desc: "The Graph",
    link: "",
  },
  {
    icon: PolygonEcosystemDao,
    tag: ["Partnership"],
    desc: "Polygon DAO",
    link: "",
  },
  { icon: Zetachain, tag: ["Partnership"], desc: "Zetachain", link: "" },
  {
    icon: GnosisSafe,
    tag: ["Partnership", "Infrastructure"],
    desc: "Gnosis Safe ",
    link: "",
  },
  {
    icon: Layer3,
    tag: ["Partnership", "Social"],
    desc: "The fastest smart contracts platform in the blockchain industry.",
    link: "",
  },
  {
    icon: RaiFinance,
    tag: ["Partnership", "DeFi"],
    desc: "DEX/IDO Platforms",
    link: "",
  },
  { icon: MapProtocol, tag: ["Partnership"], desc: "Map Protocol ", link: "" },
  {
    icon: MeterPassport,
    tag: ["Partnership", "Infrastructure"],
    desc: "Cross-chain Bridge",
    link: "",
  },
  {
    icon: Define,
    tag: ["Partnership", "NFT"],
    desc: "NFT Marketplaces",
    link: "",
  },
  { icon: Immunefi, tag: ["Partnership"], desc: "Immunefi", link: "" },
  {
    icon: Cobak,
    tag: ["Partnership", "Social"],
    desc: "Community Projects",
    link: "",
  },
  {
    icon: Moviebloc,
    tag: ["Partnership", "Social"],
    desc: "Entertainment Projects",
    link: "",
  },
  {
    icon: Deesse,
    tag: ["Partnership", "NFT"],
    desc: "Gamefi Projects",
    link: "",
  },
  {
    icon: Cere,
    tag: ["Partnership", "Infrastructure"],
    desc: "Decentralized Storage Projects",
    link: "",
  },
  { icon: DeepDao, tag: ["Partnership"], desc: "DeepDAO", link: "" },
  {
    icon: JennyMetaverseDao,
    tag: ["Partnership"],
    desc: "Jenny DAO",
    link: "",
  },
  { icon: Her, tag: ["Partnership"], desc: "H.E.R. DAO", link: "" },
  { icon: Knnb, tag: ["Partnership"], desc: "Knn3 Network", link: "" },
  { icon: VoltSwap, tag: ["Partnership", "DeFi"], desc: "Voltswap", link: "" },
  { icon: Push, tag: ["Partnership"], desc: "Push protocol ", link: "" },
  { icon: Binance, tag: ["Listed Exchanges"], desc: "Binance", link: "" },
  { icon: UpBit, tag: ["Listed Exchanges"], desc: "Upbit ", link: "" },
  { icon: Bithumb, tag: ["Listed Exchanges"], desc: "Bithumb", link: "" },
  { icon: Huobi, tag: ["Listed Exchanges"], desc: "Huobi", link: "" },
  { icon: GateIo, tag: ["Listed Exchanges"], desc: "Gate", link: "" },
  { icon: Coinone, tag: ["Listed Exchanges"], desc: "Coinone", link: "" },
  { icon: Poloniex, tag: ["Listed Exchanges"], desc: "Poloniex", link: "" },
  { icon: CoinDcx, tag: ["Listed Exchanges"], desc: "CoinDCX", link: "" },
];
