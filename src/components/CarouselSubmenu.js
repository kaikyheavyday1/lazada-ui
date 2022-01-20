import React from "react";
import { Box, Link, Popover } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  textmenu: {
    cursor: "pointer",
    padding: 1.5,
    "&:hover": {
      backgroundColor: "rgba(0,0,0,.09)",
      color: "#f36d00",
    },
  },
}));
export default function CarouselSubmenu({ subdata }) {
  const classes = useStyles();
  return (
    <Box style={{ width: 200, height: 330 }}>
      {subdata.map((d) => {
        return (
          <Box className={classes.textmenu} key={d.id}>
            <Link href="#" variant="subtitle1" underline="none" color="#757575">
              {d.name}
            </Link>
          </Box>
        );
      })}
    </Box>
  );
}
