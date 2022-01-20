import React, {useState} from "react";
import { Box, Link, Popover } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CarouselSubmenu from "./CarouselSubmenu";
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
export default function CarouselMenu({ data }) {
  const classes = useStyles();
  const [subdata, setSubdata] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
    const id = event.target.id;
    console.log(id)
    switch (id) {
      case "telephone":
        setSubdata([
          {
            id: "telephone",
            name: "โทรศัพท์มือถือ",
          },
        ]);
        break;
      default:
        setSubdata([
          {
            id: "mockup",
            name: "mockup",
          },
        ]);
        break;
    }
    
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  console.log(subdata)
  return (
    <Box style={{ width: 200, height: 330 }}>
      {data.map((d) => {
        return (
          <Box
            className={classes.textmenu}
            key={d.id}
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            <Link href="#" variant="subtitle1" underline="none" color="#757575">
              {d.name}
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
              <CarouselSubmenu subdata={subdata} />
            </Popover>
          </Box>
        );
      })}
    </Box>
  );
}
