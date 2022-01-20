import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton,
  Rating,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import lazmall from "../image/icon/lazmall.png";
import coupon from "../image/icon/coupon.png";
import lazglobal from "../image/icon/lazglobal.png";
import telephone from "../image/icon/telephone.png";
import mockup from "../image/mockup.webp";
import mockup2 from "../image/mockup2.webp";
import watson from "../image/watson.webp";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 15,
    paddingBottom: 50,
  },
  mainmenu: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 40,
    padding: 5,
    backgroundColor: "#fff",
    "&:hover": {
      boxShadow: "2px 2px 10px -4px #A3968D",
    },
  },
  flashsale: {
    backgroundColor: "#fff",
    paddingBottom: 30,
  },
  flashsaleTitle: {
    padding: "20px",
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid #d5d5d5",
    alignItems: "center",
  },
  flashsaleShop: {
    color: "#f57224",
    border: "1px solid #f57224",
    padding: 5,
  },
  flashsaleContent: {
    paddingTop: 15,
  },
  flashsaleItem: {
    cursor: "pointer",
    "&:hover": {
      boxShadow: "2px 2px 10px -4px #A3968D",
    },
  },
  flashsaleTextBox: {
    padding: 5,
  },
  flashsaleText: {
    display: "-webkit-box",
    boxOrient: "vertical",
    lineClamp: 2,
    overflow: "hidden",
  },
  flashsalePrice: {
    color: "#f57224",
    marginTop: "4px",
  },
  collection: {
    backgroundColor: "#fff",
    marginTop: 10,
  },
  collectionItem: {
    textAlign: "center",
    padding: 10,
    cursor: "pointer",
    "&:hover": {
      boxShadow: "2px 2px 20px -4px #A3968D",
    },
  },
  lazmall: {
    backgroundColor: "#fff",
    marginTop: 10,
  },
  lazmallItem: {
    cursor: "pointer",
    backgroundColor: "#fff",
    "&:hover": {
      boxShadow: "2px 2px 20px -4px #A3968D",
    },
  },
  lazmalllogo: {
    width: "52px ",
    height: "52px",
    margin: "-25px auto 0",
    boxShadow: "0 0 4px 0 rgb(0 0 0 / 25%)",
    padding: "4px",
  },
  lazmallText: {
    textAlign: "center",
  },
  catagory: {
    display: "grid",
    gridTemplateColumns: "repeat(8, 1fr)",
  },
  catagoryItem: {
    cursor: "pointer",
    backgroundColor: "#fff",
    "&:hover": {
      boxShadow: "2px 2px 20px -4px #A3968D",
    },
    borderRight: "1px solid #ccc",
    borderBottom: "1px solid #ccc",
    paddingTop: 16,
    paddingBottom: 16,
    textAlign: "center",
  },
  catagoryItem2: {
    cursor: "pointer",
    backgroundColor: "#fff",
    borderRight: "1px solid #ccc",
    "&:hover": {
      boxShadow: "2px 2px 20px -4px #A3968D",
    },
    paddingTop: 16,
    paddingBottom: 16,
    textAlign: "center",
  },
  catagoryItem3: {
    cursor: "pointer",
    borderBottom: "1px solid #ccc",
    backgroundColor: "#fff",
    "&:hover": {
      boxShadow: "2px 2px 20px -4px #A3968D",
    },
    paddingTop: 16,
    paddingBottom: 16,
    textAlign: "center",
  },
  loadmore: {
    textAlign: "center",
    paddingTop: 20,
  },
  loadmoreButton: {
    cursor: "pointer",
    padding: "10px 170px",
    border: "1px solid #1a9cb8",
    color: "#1a9cb8",
  },
}));
export default function Content() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={3} className={classes.mainmenu}>
            <img src={lazmall} alt="lazmall" width={32} height={32} />
            <Typography variant="heading1" marginLeft={1}>
              Lazmall
            </Typography>
          </Grid>
          <Grid item xs={3} className={classes.mainmenu}>
            <img src={telephone} alt="telephone" width={32} height={32} />
            <Typography variant="heading1" marginLeft={1}>
              เติมเงิน&ดีลอาหาร
            </Typography>
          </Grid>
          <Grid item xs={3} className={classes.mainmenu}>
            <img src={coupon} alt="coupon" width={32} height={32} />
            <Typography variant="heading1" marginLeft={1}>
              คูปองลดเพิ่ม
            </Typography>
          </Grid>
          <Grid item xs={3} className={classes.mainmenu}>
            <img src={lazglobal} alt="lazglobal" width={32} height={32} />
            <Typography variant="heading1" marginLeft={1}>
              Lazglobal
            </Typography>
          </Grid>
        </Grid>
        <Box pt={3}>
          <Typography variant="h6">Flash Sale</Typography>
          <Box className={classes.flashsale}>
            <Box className={classes.flashsaleTitle}>
              <Box display="flex">
                <Typography variant="subtitle3">ขณะนี้ลดราคาอยู่</Typography>
                <Box ml={7}>
                  <Typography variant="subtitle3">จะสิ้นสุดใน</Typography>
                </Box>
              </Box>
              <Box>
                <Typography
                  className={classes.flashsaleShop}
                  variant="subtitle3"
                >
                  ช็อปสินค้าทั้งหมด
                </Typography>
              </Box>
            </Box>
            <Box className={classes.flashsaleContent}>
              <Grid container spacing={0.5}>
                <Grid item xs={2} className={classes.flashsaleItem}>
                  <img src={mockup} alt="mock" width="100%" />
                  <Box className={classes.flashsaleTextBox}>
                    <Typography
                      variant="subtitle3"
                      className={classes.flashsaleText}
                    >
                      แจกฟรี❗❗ Vivo Y12a (3GB+32GB) โทรศัพท์มือถือ จอ 6.51"
                      แบตฯ 5000 mAh l SD 439 Octa Core l กล้องหลัง 2 ตัว
                      คมชัดสูงสุด 13MP [ONEDERFUL WALLET วันที่ 20 ม.ค. 65] - 1
                      สิทธิ์/ลูกค้า
                    </Typography>
                    <Typography
                      variant="heading1"
                      className={classes.flashsalePrice}
                    >
                      ฿1.00
                    </Typography>
                    <Box display="flex">
                      <Typography
                        variant="subtitle1"
                        style={{
                          textDecoration: "line-through",
                          color: "#9e9e9e",
                        }}
                      >
                        B4679.00
                      </Typography>
                      <Typography variant="subtitle1" ml={1} color="#212121">
                        -99%
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={2} className={classes.flashsaleItem}>
                  <img src={mockup} alt="mock" width="100%" />
                  <Typography
                    variant="subtitle3"
                    className={classes.flashsaleText}
                  >
                    แจกฟรี❗❗ Vivo Y12a (3GB+32GB) โทรศัพท์มือถือ จอ 6.51" แบตฯ
                    5000 mAh l SD 439 Octa Core l กล้องหลัง 2 ตัว คมชัดสูงสุด
                    13MP [ONEDERFUL WALLET วันที่ 20 ม.ค. 65] - 1 สิทธิ์/ลูกค้า
                  </Typography>
                  <Typography
                    variant="heading1"
                    className={classes.flashsalePrice}
                  >
                    ฿1.00
                  </Typography>
                  <Box display="flex">
                    <Typography
                      variant="subtitle1"
                      style={{
                        textDecoration: "line-through",
                        color: "#9e9e9e",
                      }}
                    >
                      B4679.00
                    </Typography>
                    <Typography variant="subtitle1" ml={1} color="#212121">
                      -99%
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={2} className={classes.flashsaleItem}>
                  <img src={mockup} alt="mock" width="100%" />
                  <Typography
                    variant="subtitle3"
                    className={classes.flashsaleText}
                  >
                    แจกฟรี❗❗ Vivo Y12a (3GB+32GB) โทรศัพท์มือถือ จอ 6.51" แบตฯ
                    5000 mAh l SD 439 Octa Core l กล้องหลัง 2 ตัว คมชัดสูงสุด
                    13MP [ONEDERFUL WALLET วันที่ 20 ม.ค. 65] - 1 สิทธิ์/ลูกค้า
                  </Typography>
                  <Typography
                    variant="heading1"
                    className={classes.flashsalePrice}
                  >
                    ฿1.00
                  </Typography>
                  <Box display="flex">
                    <Typography
                      variant="subtitle1"
                      style={{
                        textDecoration: "line-through",
                        color: "#9e9e9e",
                      }}
                    >
                      B4679.00
                    </Typography>
                    <Typography variant="subtitle1" ml={1} color="#212121">
                      -99%
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={2} className={classes.flashsaleItem}>
                  <img src={mockup} alt="mock" width="100%" />
                  <Typography
                    variant="subtitle3"
                    className={classes.flashsaleText}
                  >
                    แจกฟรี❗❗ Vivo Y12a (3GB+32GB) โทรศัพท์มือถือ จอ 6.51" แบตฯ
                    5000 mAh l SD 439 Octa Core l กล้องหลัง 2 ตัว คมชัดสูงสุด
                    13MP [ONEDERFUL WALLET วันที่ 20 ม.ค. 65] - 1 สิทธิ์/ลูกค้า
                  </Typography>
                  <Typography
                    variant="heading1"
                    className={classes.flashsalePrice}
                  >
                    ฿1.00
                  </Typography>
                  <Box display="flex">
                    <Typography
                      variant="subtitle1"
                      style={{
                        textDecoration: "line-through",
                        color: "#9e9e9e",
                      }}
                    >
                      B4679.00
                    </Typography>
                    <Typography variant="subtitle1" ml={1} color="#212121">
                      -99%
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={2} className={classes.flashsaleItem}>
                  <img src={mockup} alt="mock" width="100%" />
                  <Typography
                    variant="subtitle3"
                    className={classes.flashsaleText}
                  >
                    แจกฟรี❗❗ Vivo Y12a (3GB+32GB) โทรศัพท์มือถือ จอ 6.51" แบตฯ
                    5000 mAh l SD 439 Octa Core l กล้องหลัง 2 ตัว คมชัดสูงสุด
                    13MP [ONEDERFUL WALLET วันที่ 20 ม.ค. 65] - 1 สิทธิ์/ลูกค้า
                  </Typography>
                  <Typography
                    variant="heading1"
                    className={classes.flashsalePrice}
                  >
                    ฿1.00
                  </Typography>
                  <Box display="flex">
                    <Typography
                      variant="subtitle1"
                      style={{
                        textDecoration: "line-through",
                        color: "#9e9e9e",
                      }}
                    >
                      B4679.00
                    </Typography>
                    <Typography variant="subtitle1" ml={1} color="#212121">
                      -99%
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={2} className={classes.flashsaleItem}>
                  <img src={mockup} alt="mock" width="100%" />
                  <Typography
                    variant="subtitle3"
                    className={classes.flashsaleText}
                  >
                    แจกฟรี❗❗ Vivo Y12a (3GB+32GB) โทรศัพท์มือถือ จอ 6.51" แบตฯ
                    5000 mAh l SD 439 Octa Core l กล้องหลัง 2 ตัว คมชัดสูงสุด
                    13MP [ONEDERFUL WALLET วันที่ 20 ม.ค. 65] - 1 สิทธิ์/ลูกค้า
                  </Typography>
                  <Typography
                    variant="heading1"
                    className={classes.flashsalePrice}
                  >
                    ฿1.00
                  </Typography>
                  <Box display="flex">
                    <Typography
                      variant="subtitle1"
                      style={{
                        textDecoration: "line-through",
                        color: "#9e9e9e",
                      }}
                    >
                      B4679.00
                    </Typography>
                    <Typography variant="subtitle1" ml={1} color="#212121">
                      -99%
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
        <Box pt={3}>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h6">คอลเลคชั่น</Typography>
            <Box>
              <Typography variant="subtitle3" color="#1a9cb7">
                เลือกซื้อสินค้าต่อ
              </Typography>
              <IconButton
                sx={{ p: "10px", color: "#1a9cb7" }}
                aria-label="directions"
              >
                <ArrowForwardIosOutlinedIcon sx={{ fontSize: 14 }} />
              </IconButton>
            </Box>
          </Box>
          <Grid container className={classes.collection}>
            <Grid
              item
              xs={3}
              className={classes.collectionItem}
              style={{
                borderRight: "1px solid #ccc",
                borderBottom: "1px solid #ccc",
              }}
            >
              <Typography variant="subtitle3">
                {"สร้างครัวสวยด้วยมือเรา >"}
              </Typography>
              <Typography variant="subtitle1" color="#757575" marginTop="6px">
                2,725 สินค้า
              </Typography>
              <Box display="flex" justifyContent="space-around" mt={3}>
                <img src={mockup} alt="mock" height={67} width={67} />
                <img src={mockup} alt="mock" height={67} width={67} />
                <img src={mockup} alt="mock" height={67} width={67} />
              </Box>
            </Grid>
            <Grid
              item
              xs={3}
              className={classes.collectionItem}
              style={{
                borderRight: "1px solid #ccc",
                borderBottom: "1px solid #ccc",
              }}
            >
              <Typography variant="subtitle3">
                {"สร้างครัวสวยด้วยมือเรา >"}
              </Typography>
              <Typography variant="subtitle1" color="#757575" marginTop="6px">
                2,725 สินค้า
              </Typography>
              <Box display="flex" justifyContent="space-around" mt={3}>
                <img src={mockup} alt="mock" height={67} width={67} />
                <img src={mockup} alt="mock" height={67} width={67} />
                <img src={mockup} alt="mock" height={67} width={67} />
              </Box>
            </Grid>
            <Grid
              item
              xs={3}
              className={classes.collectionItem}
              style={{
                borderRight: "1px solid #ccc",
                borderBottom: "1px solid #ccc",
              }}
            >
              <Typography variant="subtitle3">
                {"สร้างครัวสวยด้วยมือเรา >"}
              </Typography>
              <Typography variant="subtitle1" color="#757575" marginTop="6px">
                2,725 สินค้า
              </Typography>
              <Box display="flex" justifyContent="space-around" mt={3}>
                <img src={mockup} alt="mock" height={67} width={67} />
                <img src={mockup} alt="mock" height={67} width={67} />
                <img src={mockup} alt="mock" height={67} width={67} />
              </Box>
            </Grid>
            <Grid
              item
              xs={3}
              className={classes.collectionItem}
              style={{
                borderBottom: "1px solid #ccc",
              }}
            >
              <Typography variant="subtitle3">
                {"สร้างครัวสวยด้วยมือเรา >"}
              </Typography>
              <Typography variant="subtitle1" color="#757575" marginTop="6px">
                2,725 สินค้า
              </Typography>
              <Box display="flex" justifyContent="space-around" mt={3}>
                <img src={mockup} alt="mock" height={67} width={67} />
                <img src={mockup} alt="mock" height={67} width={67} />
                <img src={mockup} alt="mock" height={67} width={67} />
              </Box>
            </Grid>
            <Grid
              item
              xs={3}
              className={classes.collectionItem}
              style={{
                borderRight: "1px solid #ccc",
              }}
            >
              <Typography variant="subtitle3">
                {"สร้างครัวสวยด้วยมือเรา >"}
              </Typography>
              <Typography variant="subtitle1" color="#757575" marginTop="6px">
                2,725 สินค้า
              </Typography>
              <Box display="flex" justifyContent="space-around" mt={3}>
                <img src={mockup} alt="mock" height={67} width={67} />
                <img src={mockup} alt="mock" height={67} width={67} />
                <img src={mockup} alt="mock" height={67} width={67} />
              </Box>
            </Grid>
            <Grid
              item
              xs={3}
              className={classes.collectionItem}
              style={{
                borderRight: "1px solid #ccc",
              }}
            >
              <Typography variant="subtitle3">
                {"สร้างครัวสวยด้วยมือเรา >"}
              </Typography>
              <Typography variant="subtitle1" color="#757575" marginTop="6px">
                2,725 สินค้า
              </Typography>
              <Box display="flex" justifyContent="space-around" mt={3}>
                <img src={mockup} alt="mock" height={67} width={67} />
                <img src={mockup} alt="mock" height={67} width={67} />
                <img src={mockup} alt="mock" height={67} width={67} />
              </Box>
            </Grid>
            <Grid
              item
              xs={3}
              className={classes.collectionItem}
              style={{
                borderRight: "1px solid #ccc",
              }}
            >
              <Typography variant="subtitle3">
                {"สร้างครัวสวยด้วยมือเรา >"}
              </Typography>
              <Typography variant="subtitle1" color="#757575" marginTop="6px">
                2,725 สินค้า
              </Typography>
              <Box display="flex" justifyContent="space-around" mt={3}>
                <img src={mockup} alt="mock" height={67} width={67} />
                <img src={mockup} alt="mock" height={67} width={67} />
                <img src={mockup} alt="mock" height={67} width={67} />
              </Box>
            </Grid>
            <Grid item xs={3} className={classes.collectionItem}>
              <Typography variant="subtitle3">
                {"สร้างครัวสวยด้วยมือเรา >"}
              </Typography>
              <Typography variant="subtitle1" color="#757575" marginTop="6px">
                2,725 สินค้า
              </Typography>
              <Box display="flex" justifyContent="space-around" mt={3}>
                <img src={mockup} alt="mock" height={67} width={67} />
                <img src={mockup} alt="mock" height={67} width={67} />
                <img src={mockup} alt="mock" height={67} width={67} />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box pt={3}>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h6">Lazmall</Typography>
            <Box>
              <Typography variant="subtitle3" color="#1a9cb7">
                เลือกซื้อสินค้าต่อ
              </Typography>
              <IconButton
                sx={{ p: "10px", color: "#1a9cb7" }}
                aria-label="directions"
              >
                <ArrowForwardIosOutlinedIcon sx={{ fontSize: 14 }} />
              </IconButton>
            </Box>
          </Box>
          <Grid container className={classes.lazmall}>
            <Grid item xs={2} className={classes.lazmallItem}>
              <img src={mockup2} width="100%" alt="mock" />
              <Box className={classes.lazmalllogo}>
                <img src={watson} width="100%" alt="watson" />
              </Box>
              <Box className={classes.lazmallText}>
                <Typography variant="subtitle3">Watsons</Typography>
                <Typography variant="subtitle1" color="#9e9e9e" mt={1}>
                  LOOK GOOD FEEL GREAT
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.lazmallItem}>
              <img src={mockup2} width="100%" alt="mock" />
              <Box className={classes.lazmalllogo}>
                <img src={watson} width="100%" alt="watson" />
              </Box>
              <Box className={classes.lazmallText}>
                <Typography variant="subtitle3">Watsons</Typography>
                <Typography variant="subtitle1" color="#9e9e9e" mt={1}>
                  LOOK GOOD FEEL GREAT
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.lazmallItem}>
              <img src={mockup2} width="100%" alt="mock" />
              <Box className={classes.lazmalllogo}>
                <img src={watson} width="100%" alt="watson" />
              </Box>
              <Box className={classes.lazmallText}>
                <Typography variant="subtitle3">Watsons</Typography>
                <Typography variant="subtitle1" color="#9e9e9e" mt={1}>
                  LOOK GOOD FEEL GREAT
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.lazmallItem}>
              <img src={mockup2} width="100%" alt="mock" />
              <Box className={classes.lazmalllogo}>
                <img src={watson} width="100%" alt="watson" />
              </Box>
              <Box className={classes.lazmallText}>
                <Typography variant="subtitle3">Watsons</Typography>
                <Typography variant="subtitle1" color="#9e9e9e" mt={1}>
                  LOOK GOOD FEEL GREAT
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.lazmallItem}>
              <img src={mockup2} width="100%" alt="mock" />
              <Box className={classes.lazmalllogo}>
                <img src={watson} width="100%" alt="watson" />
              </Box>
              <Box className={classes.lazmallText}>
                <Typography variant="subtitle3">Watsons</Typography>
                <Typography variant="subtitle1" color="#9e9e9e" mt={1}>
                  LOOK GOOD FEEL GREAT
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.lazmallItem}>
              <img src={mockup2} width="100%" alt="mock" />
              <Box className={classes.lazmalllogo}>
                <img src={watson} width="100%" alt="watson" />
              </Box>
              <Box className={classes.lazmallText}>
                <Typography variant="subtitle3">Watsons</Typography>
                <Typography variant="subtitle1" color="#9e9e9e" mt={1}>
                  LOOK GOOD FEEL GREAT
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box pt={3}>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h6">หมวดหมู่</Typography>
            <Box>
              <Typography variant="subtitle3" color="#1a9cb7">
                เลือกซื้อสินค้าต่อ
              </Typography>
              <IconButton
                sx={{ p: "10px", color: "#1a9cb7" }}
                aria-label="directions"
              >
                <ArrowForwardIosOutlinedIcon sx={{ fontSize: 14 }} />
              </IconButton>
            </Box>
          </Box>
          <Box className={classes.catagory}>
            <Box className={classes.catagoryItem}>
              <Box>
                <img src={mockup} width="80px" height="80px" alt="mock" />
              </Box>
              <Typography variant="subtitle3" mt={1}>
                โทรศัพท์มือถือ
              </Typography>
            </Box>
            <Box className={classes.catagoryItem}>
              <Box>
                <img src={mockup} width="80px" height="80px" alt="mock" />
              </Box>
              <Typography variant="subtitle3" mt={1}>
                โทรศัพท์มือถือ
              </Typography>
            </Box>
            <Box className={classes.catagoryItem}>
              <Box>
                <img src={mockup} width="80px" height="80px" alt="mock" />
              </Box>
              <Typography variant="subtitle3" mt={1}>
                โทรศัพท์มือถือ
              </Typography>
            </Box>
            <Box className={classes.catagoryItem}>
              <Box>
                <img src={mockup} width="80px" height="80px" alt="mock" />
              </Box>
              <Typography variant="subtitle3" mt={1}>
                โทรศัพท์มือถือ
              </Typography>
            </Box>
            <Box className={classes.catagoryItem}>
              <Box>
                <img src={mockup} width="80px" height="80px" alt="mock" />
              </Box>
              <Typography variant="subtitle3" mt={1}>
                โทรศัพท์มือถือ
              </Typography>
            </Box>
            <Box className={classes.catagoryItem}>
              <Box>
                <img src={mockup} width="80px" height="80px" alt="mock" />
              </Box>
              <Typography variant="subtitle3" mt={1}>
                โทรศัพท์มือถือ
              </Typography>
            </Box>
            <Box className={classes.catagoryItem}>
              <Box>
                <img src={mockup} width="80px" height="80px" alt="mock" />
              </Box>
              <Typography variant="subtitle3" mt={1}>
                โทรศัพท์มือถือ
              </Typography>
            </Box>
            <Box className={classes.catagoryItem3}>
              <Box>
                <img src={mockup} width="80px" height="80px" alt="mock" />
              </Box>
              <Typography variant="subtitle3" mt={1}>
                โทรศัพท์มือถือ
              </Typography>
            </Box>
            <Box className={classes.catagoryItem2}>
              <Box>
                <img src={mockup} width="80px" height="80px" alt="mock" />
              </Box>
              <Typography variant="subtitle3" mt={1}>
                โทรศัพท์มือถือ
              </Typography>
            </Box>
            <Box className={classes.catagoryItem2}>
              <Box>
                <img src={mockup} width="80px" height="80px" alt="mock" />
              </Box>
              <Typography variant="subtitle3" mt={1}>
                โทรศัพท์มือถือ
              </Typography>
            </Box>
            <Box className={classes.catagoryItem2}>
              <Box>
                <img src={mockup} width="80px" height="80px" alt="mock" />
              </Box>
              <Typography variant="subtitle3" mt={1}>
                โทรศัพท์มือถือ
              </Typography>
            </Box>
            <Box className={classes.catagoryItem2}>
              <Box>
                <img src={mockup} width="80px" height="80px" alt="mock" />
              </Box>
              <Typography variant="subtitle3" mt={1}>
                โทรศัพท์มือถือ
              </Typography>
            </Box>
            <Box className={classes.catagoryItem2}>
              <Box>
                <img src={mockup} width="80px" height="80px" alt="mock" />
              </Box>
              <Typography variant="subtitle3" mt={1}>
                โทรศัพท์มือถือ
              </Typography>
            </Box>
            <Box className={classes.catagoryItem2}>
              <Box>
                <img src={mockup} width="80px" height="80px" alt="mock" />
              </Box>
              <Typography variant="subtitle3" mt={1}>
                โทรศัพท์มือถือ
              </Typography>
            </Box>
            <Box className={classes.catagoryItem2}>
              <Box>
                <img src={mockup} width="80px" height="80px" alt="mock" />
              </Box>
              <Typography variant="subtitle3" mt={1}>
                โทรศัพท์มือถือ
              </Typography>
            </Box>
            <Box className={classes.catagoryItem3}>
              <Box>
                <img src={mockup} width="80px" height="80px" alt="mock" />
              </Box>
              <Typography variant="subtitle3" mt={1}>
                โทรศัพท์มือถือ
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box pt={3}>
          <Typography variant="heading1">สินค้าเพื่อคุณโดยเฉพาะ</Typography>
          <Grid container spacing={0.5} mt={1}>
            <Grid item xs={2} className={classes.flashsaleItem}>
              <img src={mockup} alt="mock" width="100%" />
              <Box className={classes.flashsaleTextBox}>
                <Typography
                  variant="subtitle3"
                  className={classes.flashsaleText}
                >
                  แจกฟรี❗❗ Vivo Y12a (3GB+32GB) โทรศัพท์มือถือ จอ 6.51" แบตฯ
                  5000 mAh l SD 439 Octa Core l กล้องหลัง 2 ตัว คมชัดสูงสุด 13MP
                  [ONEDERFUL WALLET วันที่ 20 ม.ค. 65] - 1 สิทธิ์/ลูกค้า
                </Typography>
                <Typography
                  variant="heading1"
                  className={classes.flashsalePrice}
                >
                  ฿1.00
                </Typography>
                <Box display="flex">
                  <Typography
                    variant="subtitle1"
                    style={{
                      textDecoration: "line-through",
                      color: "#9e9e9e",
                    }}
                  >
                    B4679.00
                  </Typography>
                  <Typography variant="subtitle1" ml={1} color="#9e9e9e">
                    -99%
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Rating
                    name="half-rating"
                    defaultValue={5}
                    sx={{ fontSize: 12 }}
                  />
                  <Typography variant="subtitle1" color="#9e9e9e" ml={0.5}>
                    (1699)
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.flashsaleItem}>
              <img src={mockup} alt="mock" width="100%" />
              <Box className={classes.flashsaleTextBox}>
                <Typography
                  variant="subtitle3"
                  className={classes.flashsaleText}
                >
                  แจกฟรี❗❗ Vivo Y12a (3GB+32GB) โทรศัพท์มือถือ จอ 6.51" แบตฯ
                  5000 mAh l SD 439 Octa Core l กล้องหลัง 2 ตัว คมชัดสูงสุด 13MP
                  [ONEDERFUL WALLET วันที่ 20 ม.ค. 65] - 1 สิทธิ์/ลูกค้า
                </Typography>
                <Typography
                  variant="heading1"
                  className={classes.flashsalePrice}
                >
                  ฿1.00
                </Typography>
                <Box display="flex">
                  <Typography
                    variant="subtitle1"
                    style={{
                      textDecoration: "line-through",
                      color: "#9e9e9e",
                    }}
                  >
                    B4679.00
                  </Typography>
                  <Typography variant="subtitle1" ml={1} color="#9e9e9e">
                    -99%
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Rating
                    name="half-rating"
                    defaultValue={5}
                    sx={{ fontSize: 12 }}
                  />
                  <Typography variant="subtitle1" color="#9e9e9e" ml={0.5}>
                    (1699)
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.flashsaleItem}>
              <img src={mockup} alt="mock" width="100%" />
              <Box className={classes.flashsaleTextBox}>
                <Typography
                  variant="subtitle3"
                  className={classes.flashsaleText}
                >
                  แจกฟรี❗❗ Vivo Y12a (3GB+32GB) โทรศัพท์มือถือ จอ 6.51" แบตฯ
                  5000 mAh l SD 439 Octa Core l กล้องหลัง 2 ตัว คมชัดสูงสุด 13MP
                  [ONEDERFUL WALLET วันที่ 20 ม.ค. 65] - 1 สิทธิ์/ลูกค้า
                </Typography>
                <Typography
                  variant="heading1"
                  className={classes.flashsalePrice}
                >
                  ฿1.00
                </Typography>
                <Box display="flex">
                  <Typography
                    variant="subtitle1"
                    style={{
                      textDecoration: "line-through",
                      color: "#9e9e9e",
                    }}
                  >
                    B4679.00
                  </Typography>
                  <Typography variant="subtitle1" ml={1} color="#9e9e9e">
                    -99%
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Rating
                    name="half-rating"
                    defaultValue={5}
                    sx={{ fontSize: 12 }}
                  />
                  <Typography variant="subtitle1" color="#9e9e9e" ml={0.5}>
                    (1699)
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.flashsaleItem}>
              <img src={mockup} alt="mock" width="100%" />
              <Box className={classes.flashsaleTextBox}>
                <Typography
                  variant="subtitle3"
                  className={classes.flashsaleText}
                >
                  แจกฟรี❗❗ Vivo Y12a (3GB+32GB) โทรศัพท์มือถือ จอ 6.51" แบตฯ
                  5000 mAh l SD 439 Octa Core l กล้องหลัง 2 ตัว คมชัดสูงสุด 13MP
                  [ONEDERFUL WALLET วันที่ 20 ม.ค. 65] - 1 สิทธิ์/ลูกค้า
                </Typography>
                <Typography
                  variant="heading1"
                  className={classes.flashsalePrice}
                >
                  ฿1.00
                </Typography>
                <Box display="flex">
                  <Typography
                    variant="subtitle1"
                    style={{
                      textDecoration: "line-through",
                      color: "#9e9e9e",
                    }}
                  >
                    B4679.00
                  </Typography>
                  <Typography variant="subtitle1" ml={1} color="#9e9e9e">
                    -99%
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Rating
                    name="half-rating"
                    defaultValue={5}
                    sx={{ fontSize: 12 }}
                  />
                  <Typography variant="subtitle1" color="#9e9e9e" ml={0.5}>
                    (1699)
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.flashsaleItem}>
              <img src={mockup} alt="mock" width="100%" />
              <Box className={classes.flashsaleTextBox}>
                <Typography
                  variant="subtitle3"
                  className={classes.flashsaleText}
                >
                  แจกฟรี❗❗ Vivo Y12a (3GB+32GB) โทรศัพท์มือถือ จอ 6.51" แบตฯ
                  5000 mAh l SD 439 Octa Core l กล้องหลัง 2 ตัว คมชัดสูงสุด 13MP
                  [ONEDERFUL WALLET วันที่ 20 ม.ค. 65] - 1 สิทธิ์/ลูกค้า
                </Typography>
                <Typography
                  variant="heading1"
                  className={classes.flashsalePrice}
                >
                  ฿1.00
                </Typography>
                <Box display="flex">
                  <Typography
                    variant="subtitle1"
                    style={{
                      textDecoration: "line-through",
                      color: "#9e9e9e",
                    }}
                  >
                    B4679.00
                  </Typography>
                  <Typography variant="subtitle1" ml={1} color="#9e9e9e">
                    -99%
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Rating
                    name="half-rating"
                    defaultValue={5}
                    sx={{ fontSize: 12 }}
                  />
                  <Typography variant="subtitle1" color="#9e9e9e" ml={0.5}>
                    (1699)
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.flashsaleItem}>
              <img src={mockup} alt="mock" width="100%" />
              <Box className={classes.flashsaleTextBox}>
                <Typography
                  variant="subtitle3"
                  className={classes.flashsaleText}
                >
                  แจกฟรี❗❗ Vivo Y12a (3GB+32GB) โทรศัพท์มือถือ จอ 6.51" แบตฯ
                  5000 mAh l SD 439 Octa Core l กล้องหลัง 2 ตัว คมชัดสูงสุด 13MP
                  [ONEDERFUL WALLET วันที่ 20 ม.ค. 65] - 1 สิทธิ์/ลูกค้า
                </Typography>
                <Typography
                  variant="heading1"
                  className={classes.flashsalePrice}
                >
                  ฿1.00
                </Typography>
                <Box display="flex">
                  <Typography
                    variant="subtitle1"
                    style={{
                      textDecoration: "line-through",
                      color: "#9e9e9e",
                    }}
                  >
                    B4679.00
                  </Typography>
                  <Typography variant="subtitle1" ml={1} color="#9e9e9e">
                    -99%
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Rating
                    name="half-rating"
                    defaultValue={5}
                    sx={{ fontSize: 12 }}
                  />
                  <Typography variant="subtitle1" color="#9e9e9e" ml={0.5}>
                    (1699)
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.flashsaleItem}>
              <img src={mockup} alt="mock" width="100%" />
              <Box className={classes.flashsaleTextBox}>
                <Typography
                  variant="subtitle3"
                  className={classes.flashsaleText}
                >
                  แจกฟรี❗❗ Vivo Y12a (3GB+32GB) โทรศัพท์มือถือ จอ 6.51" แบตฯ
                  5000 mAh l SD 439 Octa Core l กล้องหลัง 2 ตัว คมชัดสูงสุด 13MP
                  [ONEDERFUL WALLET วันที่ 20 ม.ค. 65] - 1 สิทธิ์/ลูกค้า
                </Typography>
                <Typography
                  variant="heading1"
                  className={classes.flashsalePrice}
                >
                  ฿1.00
                </Typography>
                <Box display="flex">
                  <Typography
                    variant="subtitle1"
                    style={{
                      textDecoration: "line-through",
                      color: "#9e9e9e",
                    }}
                  >
                    B4679.00
                  </Typography>
                  <Typography variant="subtitle1" ml={1} color="#9e9e9e">
                    -99%
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Rating
                    name="half-rating"
                    defaultValue={5}
                    sx={{ fontSize: 12 }}
                  />
                  <Typography variant="subtitle1" color="#9e9e9e" ml={0.5}>
                    (1699)
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.flashsaleItem}>
              <img src={mockup} alt="mock" width="100%" />
              <Box className={classes.flashsaleTextBox}>
                <Typography
                  variant="subtitle3"
                  className={classes.flashsaleText}
                >
                  แจกฟรี❗❗ Vivo Y12a (3GB+32GB) โทรศัพท์มือถือ จอ 6.51" แบตฯ
                  5000 mAh l SD 439 Octa Core l กล้องหลัง 2 ตัว คมชัดสูงสุด 13MP
                  [ONEDERFUL WALLET วันที่ 20 ม.ค. 65] - 1 สิทธิ์/ลูกค้า
                </Typography>
                <Typography
                  variant="heading1"
                  className={classes.flashsalePrice}
                >
                  ฿1.00
                </Typography>
                <Box display="flex">
                  <Typography
                    variant="subtitle1"
                    style={{
                      textDecoration: "line-through",
                      color: "#9e9e9e",
                    }}
                  >
                    B4679.00
                  </Typography>
                  <Typography variant="subtitle1" ml={1} color="#9e9e9e">
                    -99%
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Rating
                    name="half-rating"
                    defaultValue={5}
                    sx={{ fontSize: 12 }}
                  />
                  <Typography variant="subtitle1" color="#9e9e9e" ml={0.5}>
                    (1699)
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.flashsaleItem}>
              <img src={mockup} alt="mock" width="100%" />
              <Box className={classes.flashsaleTextBox}>
                <Typography
                  variant="subtitle3"
                  className={classes.flashsaleText}
                >
                  แจกฟรี❗❗ Vivo Y12a (3GB+32GB) โทรศัพท์มือถือ จอ 6.51" แบตฯ
                  5000 mAh l SD 439 Octa Core l กล้องหลัง 2 ตัว คมชัดสูงสุด 13MP
                  [ONEDERFUL WALLET วันที่ 20 ม.ค. 65] - 1 สิทธิ์/ลูกค้า
                </Typography>
                <Typography
                  variant="heading1"
                  className={classes.flashsalePrice}
                >
                  ฿1.00
                </Typography>
                <Box display="flex">
                  <Typography
                    variant="subtitle1"
                    style={{
                      textDecoration: "line-through",
                      color: "#9e9e9e",
                    }}
                  >
                    B4679.00
                  </Typography>
                  <Typography variant="subtitle1" ml={1} color="#9e9e9e">
                    -99%
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Rating
                    name="half-rating"
                    defaultValue={5}
                    sx={{ fontSize: 12 }}
                  />
                  <Typography variant="subtitle1" color="#9e9e9e" ml={0.5}>
                    (1699)
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.flashsaleItem}>
              <img src={mockup} alt="mock" width="100%" />
              <Box className={classes.flashsaleTextBox}>
                <Typography
                  variant="subtitle3"
                  className={classes.flashsaleText}
                >
                  แจกฟรี❗❗ Vivo Y12a (3GB+32GB) โทรศัพท์มือถือ จอ 6.51" แบตฯ
                  5000 mAh l SD 439 Octa Core l กล้องหลัง 2 ตัว คมชัดสูงสุด 13MP
                  [ONEDERFUL WALLET วันที่ 20 ม.ค. 65] - 1 สิทธิ์/ลูกค้า
                </Typography>
                <Typography
                  variant="heading1"
                  className={classes.flashsalePrice}
                >
                  ฿1.00
                </Typography>
                <Box display="flex">
                  <Typography
                    variant="subtitle1"
                    style={{
                      textDecoration: "line-through",
                      color: "#9e9e9e",
                    }}
                  >
                    B4679.00
                  </Typography>
                  <Typography variant="subtitle1" ml={1} color="#9e9e9e">
                    -99%
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Rating
                    name="half-rating"
                    defaultValue={5}
                    sx={{ fontSize: 12 }}
                  />
                  <Typography variant="subtitle1" color="#9e9e9e" ml={0.5}>
                    (1699)
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.flashsaleItem}>
              <img src={mockup} alt="mock" width="100%" />
              <Box className={classes.flashsaleTextBox}>
                <Typography
                  variant="subtitle3"
                  className={classes.flashsaleText}
                >
                  แจกฟรี❗❗ Vivo Y12a (3GB+32GB) โทรศัพท์มือถือ จอ 6.51" แบตฯ
                  5000 mAh l SD 439 Octa Core l กล้องหลัง 2 ตัว คมชัดสูงสุด 13MP
                  [ONEDERFUL WALLET วันที่ 20 ม.ค. 65] - 1 สิทธิ์/ลูกค้า
                </Typography>
                <Typography
                  variant="heading1"
                  className={classes.flashsalePrice}
                >
                  ฿1.00
                </Typography>
                <Box display="flex">
                  <Typography
                    variant="subtitle1"
                    style={{
                      textDecoration: "line-through",
                      color: "#9e9e9e",
                    }}
                  >
                    B4679.00
                  </Typography>
                  <Typography variant="subtitle1" ml={1} color="#9e9e9e">
                    -99%
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Rating
                    name="half-rating"
                    defaultValue={5}
                    sx={{ fontSize: 12 }}
                  />
                  <Typography variant="subtitle1" color="#9e9e9e" ml={0.5}>
                    (1699)
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.flashsaleItem}>
              <img src={mockup} alt="mock" width="100%" />
              <Box className={classes.flashsaleTextBox}>
                <Typography
                  variant="subtitle3"
                  className={classes.flashsaleText}
                >
                  แจกฟรี❗❗ Vivo Y12a (3GB+32GB) โทรศัพท์มือถือ จอ 6.51" แบตฯ
                  5000 mAh l SD 439 Octa Core l กล้องหลัง 2 ตัว คมชัดสูงสุด 13MP
                  [ONEDERFUL WALLET วันที่ 20 ม.ค. 65] - 1 สิทธิ์/ลูกค้า
                </Typography>
                <Typography
                  variant="heading1"
                  className={classes.flashsalePrice}
                >
                  ฿1.00
                </Typography>
                <Box display="flex">
                  <Typography
                    variant="subtitle1"
                    style={{
                      textDecoration: "line-through",
                      color: "#9e9e9e",
                    }}
                  >
                    B4679.00
                  </Typography>
                  <Typography variant="subtitle1" ml={1} color="#9e9e9e">
                    -99%
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Rating
                    name="half-rating"
                    defaultValue={5}
                    sx={{ fontSize: 12 }}
                  />
                  <Typography variant="subtitle1" color="#9e9e9e" ml={0.5}>
                    (1699)
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box className={classes.loadmore} mt={3}>
          <Typography variant="subtitle3" className={classes.loadmoreButton}>
            โหลดเพิ่มเติม
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
