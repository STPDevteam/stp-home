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

export default function () {
  return (
    <ContentWrapper>
      <Head />
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

const SearchBox = styled(Input)`
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
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 1;
`;

function Search() {
  return (
    <SearchBox placeholder={"Search DAO name"}>
      <BlueButton>Search</BlueButton>
    </SearchBox>
  );
}

function Platforms() {
  return (
    <Box>
      <Search />
    </Box>
  );
}

const DaosList = [
  { icon: BinanceSmartChain, tag: [], desc: "", link: "" },
  { icon: Polygon, tag: [], desc: "", link: "" },
  { icon: Klaytn, tag: [], desc: "", link: "" },
  { icon: Zkevm, tag: [], desc: "", link: "" },
  { icon: ChainlinkLogoBlue, tag: [], desc: "", link: "" },
  { icon: TheGraph, tag: [], desc: "", link: "" },
  { icon: PolygonEcosystemDao, tag: [], desc: "", link: "" },
  { icon: Zetachain, tag: [], desc: "", link: "" },
  { icon: GnosisSafe, tag: [], desc: "", link: "" },
  { icon: Layer3, tag: [], desc: "", link: "" },
  { icon: RaiFinance, tag: [], desc: "", link: "" },
  { icon: MapProtocol, tag: [], desc: "", link: "" },
  { icon: MeterPassport, tag: [], desc: "", link: "" },
  { icon: Define, tag: [], desc: "", link: "" },
  { icon: Immunefi, tag: [], desc: "", link: "" },
  { icon: Cobak, tag: [], desc: "", link: "" },
  { icon: Moviebloc, tag: [], desc: "", link: "" },
  { icon: Deesse, tag: [], desc: "", link: "" },
  { icon: Cere, tag: [], desc: "", link: "" },
  { icon: DeepDao, tag: [], desc: "", link: "" },
  { icon: JennyMetaverseDao, tag: [], desc: "", link: "" },
  { icon: Her, tag: [], desc: "", link: "" },
  { icon: Knnb, tag: [], desc: "", link: "" },
  { icon: VoltSwap, tag: [], desc: "", link: "" },
  { icon: Push, tag: [], desc: "", link: "" },
  { icon: Binance, tag: [], desc: "", link: "" },
  { icon: UpBit, tag: [], desc: "", link: "" },
  { icon: Bithumb, tag: [], desc: "", link: "" },
  { icon: Huobi, tag: [], desc: "", link: "" },
  { icon: GateIo, tag: [], desc: "", link: "" },
  { icon: Coinone, tag: [], desc: "", link: "" },
  { icon: Poloniex, tag: [], desc: "", link: "" },
  { icon: CoinDcx, tag: [], desc: "", link: "" },
];
