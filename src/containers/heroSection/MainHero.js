import styled from "@emotion/styled";
import { Box, Styled, Stack, Button, Link  , } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import AddIcon from '@mui/icons-material/Add';
import React from "react";

// __________________ hero_section_styles____________

const MuiButton = styled(Button)(({ theme }) => ({
    // height: "90vh",
    // background: "red",
    textTransform: "none",
    fontSize:'.7rem',
    color: "white",
    fontWeight:"400",
    background:"white",
    color:"#000",


  }));
const MainHeroSection = styled(Stack)(({ theme }) => ({
  height: "90vh",
  background: "linear-gradient(125.95deg, #C700BF 10.95%, #7DA900 100%), linear-gradient(341.1deg, #00C2FF 7.52%, #4E00B1 77.98%), linear-gradient(222.34deg, #A90000 12.99%, #00FFE0 87.21%), linear-gradient(130.22deg, #8FA600 18.02%, #5A31FF 100%)",
  backgroundBlendMode: "screen, color-dodge, color-dodge, normal",
}));
const HeroStart = styled(Box)(({ theme }) => ({


  display: "flex",
  justifyContent: "space-around",
  alignItems:"center",
  width: "100%",
  padding: "1.5rem 6rem",  

}));
const RightMainHero = styled(Box)(({ theme }) => ({
//   background: "yellow",
  width: "50%",
}));
const LeftMainHero = styled(Box)(({ theme }) => ({
  background: "blue",
  width: "50%",
}));
const MainHero = () => {
  return (
    <MainHeroSection>
      <HeroStart>
        <Stack sx={{ width: "60%" }}>
        <Link
              href="#"
              variant="body1"
              sx={{ color: "#000", textDecoration: "none"  , fontWeight:"500" }}
            >
              66biolinks
            </Link>
        </Stack>
        <Stack direction='row' alignItems='center' spacing={4}  sx={{ width: "40%" }}>
        <Link
              href="#"
              variant="body2"
              sx={{     color: "rgba(0,0,0,.5)",
 textDecoration: "none"  }}
            >
              Directory
            </Link>
            <Link
              href="#"
              variant="body2"
              sx={{     color: "rgba(0,0,0,.5)",
                textDecoration: "none"  }}
            >
              tools
            </Link>
            <MuiButton
              variant="contained"
              size="small"
              disableElevation
              startIcon={<LoginIcon />}
             
            >
              Sign in
            </MuiButton>
            <MuiButton
              variant="contained"
              size="small"
              disableElevation
              startIcon={<AddIcon  />}

             
            >
              Sign up
            </MuiButton>
        </Stack>
      </HeroStart>
      {/* <RightMainHero>
                     lorem200
            </RightMainHero>
            <LeftMainHero>
                     right
            </LeftMainHero> */}
    </MainHeroSection>
  );
};

export default MainHero;
