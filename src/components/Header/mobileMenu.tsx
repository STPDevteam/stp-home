import React, { useState, useCallback } from "react";
import { ExpandMore } from "@mui/icons-material";
import { Box, styled, Drawer, Typography, Stack } from "@mui/material";
import { MenuList } from "./index";
import { GreenBtn } from "../../pages/Home/homepage";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const navLinkSx = {
  cursor: "pointer",
  textDecoration: "none",
  fontSize: 16,
  color: "#B4B4B4",
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
  background: #1b1aff;
`;

export default function MobileMenu({
  isOpen,
  onDismiss,
}: {
  isOpen: boolean;
  onDismiss: () => void;
}) {
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
              <Accordion children={item.subtitle} placeholder={item.title} />
            );
          }
          return (
            <Typography
              onClick={() => window.open(item.link, "_blank")}
              sx={navLinkSx}
            >
              {item.title}
            </Typography>
          );
        })}
        <GreenBtn
          style={{ width: "191px" }}
          onClick={() =>
            window.open("https://www.myclique.io/creator", "_blank")
          }
        >
          Build DAO
          <ArrowOutwardIcon />
        </GreenBtn>
      </MenuBox>
    </Drawer>
  );
}

function Accordion({
  children,
  placeholder,
}: {
  children: React.ReactNode;
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
      {isOpen && <Box>{children}</Box>}
    </>
  );
}
