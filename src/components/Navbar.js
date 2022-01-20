import React from "react";
import { Box, Container, Link, Paper, InputBase } from "@mui/material";
import { makeStyles } from "@mui/styles";
import logo from "../image/logo.png";
import promotion from "../image/navbar/promotion.jpg";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "rgba(0,0,0,.03)",
  },
  boxnavbar: {
    display: "flex",
    justifyContent: "flex-end",
  },
  menu: {
    marginRight: 30,
  },
  textmenu: {
    "&:hover": {
      color: "orange",
    },
  },
  search: {
    background: "#fff",
    paddingTop: 10,
    paddingBottom: 25,
  },
  boxsearch: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.root}>
        <Container>
          <Box className={classes.boxnavbar}>
            <Box className={classes.menu}>
              <Link
                variant="subtitle1"
                href="#"
                underline="none"
                color="#000"
                className={classes.textmenu}
              >
                ช้อปคุ้มกว่าเดิมบนแอป
              </Link>
            </Box>
            <Box className={classes.menu}>
              <Link
                variant="subtitle1"
                href="#"
                underline="none"
                color="#000"
                className={classes.textmenu}
              >
                ขายสินค้ากับลาซาด้า
              </Link>
            </Box>
            <Box className={classes.menu}>
              <Link
                variant="subtitle1"
                href="#"
                underline="none"
                color="#9e9e9e"
                className={classes.textmenu}
              >
                ช่วยเหลือ
              </Link>
            </Box>
            <Box className={classes.menu}>
              <Link
                variant="subtitle1"
                href="#"
                underline="none"
                color="#9e9e9e"
                className={classes.textmenu}
              >
                ติดตามสินค้า
              </Link>
            </Box>
            <Box className={classes.menu}>
              <Link
                variant="subtitle1"
                href="#"
                underline="none"
                color="#9e9e9e"
                className={classes.textmenu}
              >
                ลงชื่อเข้าใช้
              </Link>
            </Box>
            <Box className={classes.menu}>
              <Link
                variant="subtitle1"
                href="#"
                underline="none"
                color="#9e9e9e"
                className={classes.textmenu}
              >
                สมัครสมาชิก
              </Link>
            </Box>
            <Box>
              <Link
                variant="subtitle1"
                href="#"
                underline="none"
                color="#9e9e9e"
                className={classes.textmenu}
              >
                CHANGE LANGUAGE
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box className={classes.search}>
        <Container>
          <Box className={classes.boxsearch}>
            <img src={logo} width="140" height="40" alt="logo" />
            <Box ml={6}>
              <Paper
                component="form"
                sx={{
                  backgroundColor: "#eff0f5",
                  display: "flex",
                  color: "#212121",
                  alignItems: "center",
                  width: { sm: "100%", md: 480, lg: 680 },
                  boxShadow: "none",
                }}
              >
                <InputBase
                  sx={{ ml: 2, flex: 1, p: 1 }}
                  placeholder="ค้นหาในลาซาด้า"
                  inputProps={{ "aria-label": "ค้นหาในลาซาด้า" }}
                />

                <Box style={{ backgroundColor: "#f57224" }}>
                  <IconButton
                    sx={{ p: "10px", color: "#fff" }}
                    aria-label="directions"
                  >
                    <SearchIcon />
                  </IconButton>
                </Box>
              </Paper>
            </Box>
            <Box ml={3}>
              <IconButton sx={{ p: "10px" }} aria-label="directions">
                <ShoppingCartOutlinedIcon
                  sx={{ color: "#00296b" }}
                  fontSize="large"
                />
              </IconButton>
            </Box>
            <img src={promotion} width="188" height="45" alt="promotion" />
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
