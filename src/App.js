import { Box } from "@mui/material";
import MainHero from "./containers/heroSection/MainHero";
import Navbar from "./containers/navbar/Navbar";
import {  createTheme, ThemeProvider } from "@mui/material";


function App() {
  return (
    <Box>
    <Navbar/>
    <MainHero/>
    </Box>
  );
}

export default App;
