import {
  AppBar,
  Box,
  Button,
  Link,
  Stack,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import React from "react";

// ______________________ section styles _________________ 
const StyledToolBar = styled(Toolbar)(({theme})=>({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap:"wrap"
 
}));

const LogoSection = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",

}));

const MenuSection = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "8px",

  
}));

const Navbar = () => {
  return (
    <Box>
      <AppBar position="static" elevation={0} sx={{ bgcolor: "#161A38"}}>
        <StyledToolBar>
          <LogoSection>
            {/* <img src='https://altumcode.com/themes/altum/assets/images/data:image/jpeg;base64,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.svg' alt='logo'/> */}
            <Link
              href="#"
              variant="body2"
              sx={{ color: "white", textDecoration: "none" }}
            >
              66biolinks by AltumCode
            </Link>
          </LogoSection>
          <MenuSection>
            <Link
              href="#"
              variant="body2"
              sx={{ color: "white", textDecoration: "none" }}
            >
              Any questions?
            </Link>
            <EmailIcon
              sx={{ color: "white", fontSize: ".95rem", marginRight: ".8rem" }}
            />
            <Button
              variant="contained"
              size="small"
              sx={{
                color: "white",
                textTransform: "capitalize",
                padding: ".1rem .9rem",
              }}
            >
              Buy 66biolinks
            </Button>
          </MenuSection>
        </StyledToolBar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
