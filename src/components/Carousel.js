import React, { useState, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Container, Box, Link, Popover, Typography } from "@mui/material";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import carouselpic1 from "../image/carousel/carousel-1.jpg";
import carouselpic2 from "../image/carousel/carousel-2.jpg";
import carouselpic3 from "../image/carousel/carousel-3.jpg";
import carouselpic4 from "../image/carousel/carousel-4.jpg";
import carouselpic5 from "../image/carousel/carousel-5.jpg";
import carouselpic6 from "../image/carousel/carousel-6.jpg";
import carouselpic7 from "../image/carousel/carousel-7.jpg";
import carouselpic8 from "../image/carousel/carousel-8.jpg";
import CarouselMenu from "./CarouselMenu";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  img: {
    width: "83%",
    cursor: "pointer",
    [theme.breakpoints.down("lg")]: {
      width: "100%",
    },
  },
  containerImg: {
    textAlign: "end",
  },
  menu: {
    position: "absolute",
    zIndex: 100,
    backgroundColor: "#fff",
    width: "200px",
    boxShadow: "0 0 2px 0 rgb(0 0 0 / 25%)",
    padding: "6px 0 10px",
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  },
  textmenu: {
    cursor: "pointer",
    padding: 1.2,
    "&:hover": {
      backgroundColor: "rgba(0,0,0,.09)",
      color: "#f36d00",
    },
  },
  popover: {
    pointerEvents: "none",
  },
  paper: {
    pointerEvents: "auto",
    padding: "6px 0 10px",
    marginTop: -10,
  },
}));

export default function Carousel() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handlePopoverOpen = (event) => {
    const id = event.target.id;
    switch (id) {
      case "electronics":
        setData([
          {
            id: "telephone",
            name: "โทรศัพท์มือถือ",
          },
          {
            id: "tablet",
            name: "แท็บเล็ต",
          },
          {
            id: "laptop",
            name: "แล็ปท็อป",
          },
          {
            id: "computer",
            name: "คอมพิวเตอร์ตั้งโต๊ะ",
          },
          {
            id: "dslr",
            name: "กล้อง DSLR",
          },
          {
            id: "mirrorless",
            name: "กล้องมิลเลอร์เล็ต",
          },
        ]);
        break;
      default:
        setData([
          {
            id: "mockup",
            name: "mockup",
          },
        ]);
        break;
    }
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <Box>
      <Container>
        <Box className={classes.menu}>
          <Box
            className={classes.textmenu}
            id="electronics"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            <Link href="#" variant="subtitle1" underline="none" color="#757575">
              อุปกรณ์ อิเล็กทรอนิกส์
            </Link>
            <Popover
              id="mouse-over-popover"
              className={classes.popover}
              classes={{
                paper: classes.paper,
              }}
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              onClose={handlePopoverClose}
              disableRestoreFocus
            >
              <CarouselMenu data={data} />
            </Popover>
          </Box>
          <Box
            className={classes.textmenu}
            id="sub-electronics"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            <Link href="#" variant="subtitle1" underline="none" color="#757575">
              อุปกรณ์เสริม อิเล็กทรอนิกส์
            </Link>
          </Box>
          <Box
            className={classes.textmenu}
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            <Link href="#" variant="subtitle1" underline="none" color="#757575">
              ทีวีและเครื่องใช้ ไฟฟ้าในบ้าน
            </Link>
          </Box>
          <Box
            className={classes.textmenu}
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            <Link href="#" variant="subtitle1" underline="none" color="#757575">
              สุขภาพและความงาม
            </Link>
          </Box>
          <Box
            className={classes.textmenu}
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            <Link href="#" variant="subtitle1" underline="none" color="#757575">
              เด็กอ่อน และของเล่น
            </Link>
          </Box>
          <Box
            className={classes.textmenu}
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            <Link href="#" variant="subtitle1" underline="none" color="#757575">
              ซูเปอร์มาร์เก็ต และสัตว์เลี้ยง
            </Link>
          </Box>
          <Box
            className={classes.textmenu}
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            <Link href="#" variant="subtitle1" underline="none" color="#757575">
              บ้านและไลฟ์สไตล์
            </Link>
          </Box>
          <Box
            className={classes.textmenu}
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            <Link href="#" variant="subtitle1" underline="none" color="#757575">
              แฟชั่นผู้หญิง
            </Link>
          </Box>
          <Box
            className={classes.textmenu}
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            <Link href="#" variant="subtitle1" underline="none" color="#757575">
              แฟชั่นผู้ชาย
            </Link>
          </Box>
          <Box
            className={classes.textmenu}
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            <Link href="#" variant="subtitle1" underline="none" color="#757575">
              เครื่องประดับ
            </Link>
          </Box>
          <Box
            className={classes.textmenu}
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            <Link href="#" variant="subtitle1" underline="none" color="#757575">
              กีฬาและ การเดินทาง
            </Link>
          </Box>
          <Box
            className={classes.textmenu}
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            <Link href="#" variant="subtitle1" underline="none" color="#757575">
              ยานยนต์ และอุปกรณ์
            </Link>
          </Box>
        </Box>
      </Container>
      <Splide
        options={{
          type: "fade",
          rewind: true,
          arrows: false,
          perPage: 1,
          autoHeight: true,
          height: "auto",
        }}
      >
        <SplideSlide>
          <Box style={{ backgroundColor: "#0e54cd" }}>
            <Container className={classes.containerImg}>
              <img
                src={carouselpic1}
                className={classes.img}
                alt="carouselpic1"
              />
            </Container>
          </Box>
        </SplideSlide>
        <SplideSlide>
          <Box style={{ backgroundColor: "#fff" }}>
            <Container className={classes.containerImg}>
              <img
                src={carouselpic2}
                className={classes.img}
                alt="carouselpic2"
              />
            </Container>
          </Box>
        </SplideSlide>
        <SplideSlide>
          <Box style={{ backgroundColor: "#004143" }}>
            <Container className={classes.containerImg}>
              <img
                src={carouselpic3}
                className={classes.img}
                alt="carouselpic3"
              />
            </Container>
          </Box>
        </SplideSlide>
        <SplideSlide>
          <Box style={{ backgroundColor: "#baddf0" }}>
            <Container className={classes.containerImg}>
              <img
                src={carouselpic4}
                className={classes.img}
                alt="carouselpic4"
              />
            </Container>
          </Box>
        </SplideSlide>
        <SplideSlide>
          <Box style={{ backgroundColor: "#fff" }}>
            <Container className={classes.containerImg}>
              <img
                src={carouselpic5}
                className={classes.img}
                alt="carouselpic5"
              />
            </Container>
          </Box>
        </SplideSlide>
        <SplideSlide>
          <Box style={{ backgroundColor: "#282220" }}>
            <Container className={classes.containerImg}>
              <img
                src={carouselpic6}
                className={classes.img}
                alt="carouselpic6"
              />
            </Container>
          </Box>
        </SplideSlide>
        <SplideSlide>
          <Box style={{ backgroundColor: "#fff" }}>
            <Container className={classes.containerImg}>
              <img
                src={carouselpic7}
                className={classes.img}
                alt="carouselpic7"
              />
            </Container>
          </Box>
        </SplideSlide>
        <SplideSlide>
          <Box style={{ backgroundColor: "#047a62" }}>
            <Container className={classes.containerImg}>
              <img
                src={carouselpic8}
                className={classes.img}
                alt="carouselpic8"
              />
            </Container>
          </Box>
        </SplideSlide>
      </Splide>
    </Box>
  );
}
