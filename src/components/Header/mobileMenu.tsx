import React, { useState, useCallback } from "react";
import { ExpandMore } from "@mui/icons-material";
import { Box, styled, Drawer, Typography, Stack } from "@mui/material";
import { MenuList } from "./index";
import { GreenBtn } from "../../pages/Home/homepage";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Tele from "../../assets/images/socialmedia/telegramsvg.svg";
import Twitter from "../../assets/images/socialmedia/twitter.svg";
import Email from "../../assets/images/socialmedia/email.svg";
import Cylinder from "../../assets/images/socialmedia/cylinder.svg";
import Wechat from "../../assets/images/socialmedia/wechat.svg";
import dune from "../../assets/images/socialmedia/dune2.svg";
import github from "../../assets/images/socialmedia/github.svg";
import WechatQR from "../../assets/images/home/QR.jpeg";
import { SocialMedia } from "../../pages/Home/homepage";
import { useHistory } from "react-router";
const navLinkSx = {
  cursor: "pointer",
  textDecoration: "none",
  fontSize: 16,
  color: "#ECECEC",
  padding: "8px 0px",
  width: "100%",
  textAlign: "left",
  display: "flex",
  justifyContent: "flex-start",
  "&.active": {
    color: "#A7F46A",
  },
  "&:hover": {
    color: "#A7F46A",
  },
} as const;

const MenuBox = styled(Stack)`
  padding: 0 20px 30px;
  background: #000228;
`;

export default function MobileMenu({
  isOpen,
  onDismiss,
}: {
  isOpen: boolean;
  onDismiss: () => void;
}) {
  const history = useHistory();
  return (
    <Drawer
      open={isOpen}
      onClose={onDismiss}
      anchor="top"
      BackdropProps={{ sx: { backgroundColor: "transparent" } }}
      PaperProps={{
        sx: {
          top: (theme) => ({ xs: "66px " }),
        },
      }}
      sx={{
        zIndex: (theme) => theme.zIndex.appBar,
        overflow: "hidden",
        top: (theme) => ({ xs: "66px " }),
      }}
    >
      <MenuBox display="grid" gap="15px">
        {MenuList.map((item, idx) => {
          if (item.subtitle) {
            return (
              <Accordion
                children={item.subtitle}
                placeholder={item.title}
                onDismiss={onDismiss}
              />
            );
          }
          return (
            <Typography
              onClick={() => {
                if (item.link) {
                  history.push(item.link);
                }
                onDismiss();
              }}
              sx={navLinkSx}
            >
              {item.title}
            </Typography>
          );
        })}
        <GreenBtn
          style={{ width: "191px" }}
          onClick={() =>
            // window.open("https://www.myclique.io/creator", "_blank")
            window.open("https://explorer.myclique.io/", "_blank")
          }
        >
          Build on Clique
          {/* <ArrowOutwardIcon /> */}
        </GreenBtn>
        <Box
          display={"flex"}
          gap={"40px"}
          sx={{
            justifyContent: "space-between",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          <SocialMedia
            src={Tele}
            onClick={() => window.open("https://t.me/STPofficial", "_blank")}
          />
          <SocialMedia
            src={Twitter}
            onClick={() =>
              window.open("https://twitter.com/STP_Network", "_blank")
            }
          />
          {/* <SocialMedia
          src={Medium}
          onClick={() =>
            window.open("https://medium.com/@versenetwork", "_blank")
          }
        /> */}
          <SocialMedia
            src={Cylinder}
            onClick={() =>
              window.open(
                "https://mirror.xyz/0xB9d761AF53845D1F3C68f99c38f4dB6fcCfB66A1",
                "_blank"
              )
            }
          />
          <SocialMedia
            src={dune}
            onClick={() => window.open("https://dune.com/awns_stp", "_blank")}
          />
          <SocialMedia
            src={Email}
            onClick={() => window.open("mailto:jeff@stp.network", "_blank")}
          />
          <SocialMedia
            src={github}
            onClick={() => window.open("https://github.com/STPDevteam/", "_blank")}
          />
        </Box>
      </MenuBox>
    </Drawer>
  );
}

function Accordion({
  children,
  onDismiss,
  placeholder,
}: {
  children: React.ReactNode;
  onDismiss: () => void;
  placeholder: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = useCallback(() => {
    setIsOpen((state) => !state);
  }, []);
  return (
    <>
      <Box
        sx={navLinkSx}
        display="flex"
        gap={"4px"}
        onClick={handleClick}
        alignItems={"center"}
      >
        {placeholder}
        <ExpandMore
          sx={{
            width: "16px",
            height: "16px",
            transform: isOpen ? "rotate(180deg)" : "",
          }}
        />
      </Box>
      {isOpen && <Box onClick={onDismiss}>{children}</Box>}
    </>
  );
}
