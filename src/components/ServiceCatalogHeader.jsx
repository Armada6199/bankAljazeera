import { Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { useLocation } from "react-router-dom";
import {LoginContext} from '../hooks/LoginProvider';
import { Link as RouterLink } from "react-router-dom";
function ServiceCatalogHeader() {
  const location = useLocation();
  const {loginData}=useContext(LoginContext)
  const headerText =
    location.pathname === "/dashboard"
      ? "Use this page to manage your service catalogs , the fast and easy way."
      : " This is a list of all bank services";
  return (
    <Box
      width={"100%"}
      height={"20%"}
      sx={{ display: "flex", alignItems: "center", justifyContent:'space-between' }}
    >
      <Box sx={{display:'flex',alignItems:'center',gap:'.7em'}}>
      <Box  
        bgcolor={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "80px",
          height: "80px",
          bgcolor: "#ffffff",
        }}
      >
        <AccountBalanceIcon sx={{ width: "60px", height: "60px" }} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: ".2em",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="h5" component="h5">
          Service Catalog
        </Typography>
        <Typography component="p" variant='body2'>
          {headerText}
        </Typography>
      </Box>
      </Box>
    
      {location.pathname === "/dashboard" &&loginData.isLoggedIn?(
        <Button component={RouterLink} to='/serviceAddForm'  variant="contained"  sx={{width:'20%',color:'white',marginRight:'3em'}}>
            Add Service Catalog
          </Button>
      ):null
      }
    </Box>
  );
}

export default ServiceCatalogHeader;
