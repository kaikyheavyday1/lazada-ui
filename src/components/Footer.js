import React from "react";
import { Box, Container, Typography, Grid, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import footer1 from "../image/footer/footer-1.jpg";
import footer2 from "../image/footer/footer-2.jpg";
import footer3 from "../image/footer/footer-3.jpg";
import logo from "../image/logo-footer.png";
import android from "../image/footer/android_download.png";
import ios from "../image/footer/ios_download.png";
const useStyles = makeStyles((theme) => ({
  section1: {
    borderTop: "1px solid #e2e2e2",
    paddingTop: 24,
    paddingBottom: 24,
  },
  section2: {
    paddingTop: 24,
    paddingBottom: 24,
  },
  textSection2: {
    color: "#0f136d",
  },
  linkSection2: {
    lineHeight: "17px",
  },
}));
export default function Footer() {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.section1}>
        <Container>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <img src={footer1} alt="footer" width="100%" />
            </Grid>
            <Grid item xs={4}>
              <img src={footer2} alt="footer" width="100%" />
            </Grid>
            <Grid item xs={4}>
              <img src={footer3} alt="footer" width="100%" />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box className={classes.section2}>
        <Container>
          <Grid container>
            <Grid item xs={3} className={classes.textSection2}>
              <Box pb={0.5}>
                <Typography variant="heading2">ศูนย์ดูแลลูกค้า</Typography>
              </Box>
              <Box className={classes.linkSection2}>
                <Link variant="subtitle2" href="#" color="#0f136d">
                  ศูนย์ช่วยเหลือ
                </Link>
              </Box>
              <Box className={classes.linkSection2}>
                <Link variant="subtitle2" href="#" color="#0f136d">
                  ศูนย์ช่วยเหลือ
                </Link>
              </Box>
              <Box className={classes.linkSection2}>
                <Link variant="subtitle2" href="#" color="#0f136d">
                  ศูนย์ช่วยเหลือ
                </Link>
              </Box>
              <Box className={classes.linkSection2}>
                <Link variant="subtitle2" href="#" color="#0f136d">
                  ศูนย์ช่วยเหลือ
                </Link>
              </Box>
              <Box className={classes.linkSection2}>
                <Link variant="subtitle2" href="#" color="#0f136d">
                  ศูนย์ช่วยเหลือ
                </Link>
              </Box>
              <Box className={classes.linkSection2}>
                <Link variant="subtitle2" href="#" color="#0f136d">
                  ศูนย์ช่วยเหลือ
                </Link>
              </Box>
            </Grid>
            <Grid item xs={3} className={classes.textSection2}>
              <Box pb={0.5}>
                <Typography variant="heading2">ศูนย์ดูแลลูกค้า</Typography>
              </Box>
              <Box className={classes.linkSection2}>
                <Link variant="subtitle2" href="#" color="#0f136d">
                  ศูนย์ช่วยเหลือ
                </Link>
              </Box>
              <Box className={classes.linkSection2}>
                <Link variant="subtitle2" href="#" color="#0f136d">
                  ศูนย์ช่วยเหลือ
                </Link>
              </Box>
              <Box className={classes.linkSection2}>
                <Link variant="subtitle2" href="#" color="#0f136d">
                  ศูนย์ช่วยเหลือ
                </Link>
              </Box>
              <Box className={classes.linkSection2}>
                <Link variant="subtitle2" href="#" color="#0f136d">
                  ศูนย์ช่วยเหลือ
                </Link>
              </Box>
              <Box className={classes.linkSection2}>
                <Link variant="subtitle2" href="#" color="#0f136d">
                  ศูนย์ช่วยเหลือ
                </Link>
              </Box>
              <Box className={classes.linkSection2}>
                <Link variant="subtitle2" href="#" color="#0f136d">
                  ศูนย์ช่วยเหลือ
                </Link>
              </Box>
              <Box className={classes.linkSection2}>
                <Link variant="subtitle2" href="#" color="#0f136d">
                  ศูนย์ช่วยเหลือ
                </Link>
              </Box>
              <Box className={classes.linkSection2}>
                <Link variant="subtitle2" href="#" color="#0f136d">
                  ศูนย์ช่วยเหลือ
                </Link>
              </Box>
              <Box className={classes.linkSection2}>
                <Link variant="subtitle2" href="#" color="#0f136d">
                  ศูนย์ช่วยเหลือ
                </Link>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box display="flex">
                <img src={logo} width={42} height={42} alt="mock" />
                <Box>
                  <Box>
                    <Typography variant="heading2" color="#f36f36">
                      Go where your heart beats
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle3" color="#0f136d">
                      Download the App
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box display="flex" justifyContent="space-around">
                <img src={ios} width={126} height={42} />
                <img src={android} width={126} height={42} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
