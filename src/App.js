import "./App.css";
import { makeStyles } from "@mui/styles";
import {Box} from '@mui/material'
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
  typography: {
    subtitle1: {
      fontSize: 12,
    },
    subtitle2:{
      fontSize: 13,
    },
    subtitle3:{
      fontSize: 14,
    },
    heading1:{
      fontSize: 18
    },
    heading2 :{
      fontSize: 16
    }
  },
});
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor : '#e7e8ec'
  },
}));
function App() {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Carousel />
        <Content />
        <Footer />
      </ThemeProvider>
    </Box>
  );
}

export default App;
