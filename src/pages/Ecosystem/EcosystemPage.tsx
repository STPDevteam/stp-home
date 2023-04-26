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
import React, { useEffect, useState } from "react";
import Star from "../../assets/images/ecosystem/svg/star-ecosystem.svg";
import { Box, Stack, styled, Input, Typography, Grid } from "@mui/material";
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
import {
  categoryFilterDataList,
  EcosystemDataList,
  sectorFilterDataList,
} from "./index";
import useBreakpoint from "../../hooks/useBreakpoint";
import { useHistory } from "react-router";

export default function () {
  const [categorySelect, setCategorySelect] = useState("All");
  const [sectorSelect, setSectorSelect] = useState("All");
  return (
    <ContentWrapper>
      <Head
        categorySelect={categorySelect}
        setCategorySelect={setCategorySelect}
        sectorSelect={sectorSelect}
        setSectorSelect={setSectorSelect}
      />
      <Platforms categorySelect={categorySelect} sectorSelect={sectorSelect} />
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
  border-radius: 24px;
  background: white;

  &:hover {
    cursor: pointer;
  }

  &.active {
    background: #a7f46a;
  }

  @media (max-width: 767px) {
    font-size: 14px;
    line-height: 150%;
  }
`;

const FilterTitle = styled(Typography)`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #ededed;
  @media (max-width: 767px) {
    font-size: 14px;
    line-height: 150%;
  }
`;

function Head({
  categorySelect,
  setCategorySelect,
  sectorSelect,
  setSectorSelect,
}: {
  categorySelect: string;
  setCategorySelect: (category: string) => void;
  sectorSelect: string;
  setSectorSelect: (sector: string) => void;
}) {
  const isDownSm = useBreakpoint("sm");
  const history = useHistory();
  return (
    <HeadBox>
      <HeadH1>Ecosystem</HeadH1>
      <HeadText>
        Our ecosystem is supported by the existing 15,000 on-chain token holder
        community.
      </HeadText>
      <GreenBtn
        style={{ marginTop: "24px" }}
        onClick={() => history.push("/dao")}
      >
        DAO Booster Program <ArrowOutwardIcon />
      </GreenBtn>
      <Stack spacing={"24px"} mt={"80px"}>
        <Row gap={"16px"} alignItems={"flex-start"}>
          <FilterTitle>Category</FilterTitle>
          <Row
            gap={"4px"}
            sx={{
              flexWrap: "wrap",
            }}
          >
            {categoryFilterDataList.map((tag, tagIdx) => (
              <Tag
                key={tagIdx}
                onClick={() => {
                  setCategorySelect(tag);
                }}
                className={categorySelect === tag ? "active" : ""}
              >
                {tag}
              </Tag>
            ))}
          </Row>
        </Row>
        <Row gap={"16px"} alignItems={"flex-start"}>
          <FilterTitle>Sector</FilterTitle>
          <Row
            gap={"4px"}
            sx={{
              flexWrap: "wrap",
            }}
          >
            {sectorFilterDataList.map((tag, tagIdx) => (
              <Tag
                key={tagIdx}
                onClick={() => {
                  setSectorSelect(tag);
                }}
                className={sectorSelect === tag ? "active" : ""}
              >
                {tag}
              </Tag>
            ))}
          </Row>
        </Row>
      </Stack>
      <img
        src={Star}
        style={{
          position: "absolute",
          right: "0",
          bottom: isDownSm ? "inherit" : "106px",
          width: isDownSm ? "85px" : "auto",
          top: isDownSm ? "157px" : "inherit",
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
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const SearchBox = styled(Input)`
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 1;
`;

function Search({ onSearch }: { onSearch: (input: string) => void }) {
  const [input, setInput] = useState("");
  return (
    <SearchBg>
      <SearchBox
        placeholder={"Search DAO Name"}
        value={input}
        disableUnderline={true}
        onChange={(e) => setInput(e.target.value)}
      />
      <BlueButton
        style={{
          position: "absolute",
          height: "52px",
          top: "50%",
          bottom: "50%",
          right: "8px",
          transform: "translateY(-50%)",
        }}
        onClick={() => {
          onSearch(input);
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
  box-shadow: 0 4px 60px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  @media (max-width: 767px) {
    height: auto;
    width: 100%;
  }
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

function Platforms({
  categorySelect,
  sectorSelect,
}: {
  categorySelect: string;
  sectorSelect: string;
}) {
  const [ecosystemDisplay, setEcosystemDisplay] = useState(EcosystemDataList);
  const TagColors = ["#F9F9FF", "#F8FFFE", "#F8FEFF", "#FFF8F8", "#FAF8FF"];
  const isDownSm = useBreakpoint("sm");

  function existOneIncludeTwo(oneStr: string, twoStr: string) {
    return oneStr.toUpperCase().includes(twoStr.toUpperCase());
  }

  const onSearch = (value: string) => {
    console.log(value);
    const result = [];
    for (let i in EcosystemDataList) {
      let arr = Object.values(EcosystemDataList[i]);

      if (
        arr.some((item) => {
          return existOneIncludeTwo(item, value);
        })
      ) {
        result.push(EcosystemDataList[i]);
      }
    }

    setEcosystemDisplay(result);
  };
  useEffect(() => {
    setEcosystemDisplay(
      EcosystemDataList.filter((item) => {
        return (
          (categorySelect !== "All"
            ? item.category === categorySelect
            : true) &&
          (sectorSelect !== "All" ? item.sector === sectorSelect : true)
        );
      })
    );
  }, [categorySelect, sectorSelect]);

  return (
    <Box
      sx={{
        maxWidth: "1441px",
        width: "100%",
        padding: isDownSm ? "80px 21px" : "80px 0 120px",
      }}
    >
      <Search onSearch={onSearch} />
      <Grid
        container
        spacing={"30px"}
        mt={isDownSm ? "21px" : "39px"}
        direction={isDownSm ? "column" : "row"}
      >
        {ecosystemDisplay.map((dao, idx) => {
          return (
            <Grid item xs={12} md={4} width={"100%"}>
              <PlatformBox>
                <Row justifyContent={"space-between"} width={"100%"}>
                  <img
                    src={dao.img}
                    style={{ height: isDownSm ? "48px" : "auto" }}
                  />
                  <Box
                    sx={{
                      ":hover": {
                        cursor: "pointer",
                      },
                    }}
                    onClick={() => window.open(dao.website, "_blank")}
                  >
                    <ArrowOutwardIcon sx={{ color: "#1B1AFF" }} />
                  </Box>
                </Row>
                <Row gap={"4px"} mt={"24px"}>
                  {dao.category && (
                    <TagBox
                      key={idx}
                      sx={{
                        background:
                          TagColors[
                            Math.floor(Math.random() * TagColors.length)
                          ],
                      }}
                    >
                      {dao.category}
                    </TagBox>
                  )}
                  {dao.sector && (
                    <TagBox
                      key={idx}
                      sx={{
                        background:
                          TagColors[
                            Math.floor(Math.random() * TagColors.length)
                          ],
                      }}
                    >
                      {dao.sector}
                    </TagBox>
                  )}
                </Row>
                <PlatformDesc>{dao.desc}</PlatformDesc>
              </PlatformBox>
            </Grid>
          );
        })}
      </Grid>
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
