import React from 'react'
import { Link as RouterLink} from 'react-router-dom';
import Link from '@mui/material/Link';
import loginLogo from "../assets/logo.png";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PeopleIcon from "@mui/icons-material/People";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Box,  Typography } from "@mui/material";
import face from '../assets/face.jpg'
function DashSidebar() {
    const sideNavbarStyle = {
        width: "15%",
        height:'1rm',  
        backgroundColor: "#0E416B",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        paddingTop: "2em",
      };
      const sideNavIconsStyle = {
        width: "24px",
        height: "24px",
        color: "white",
      };
  return (
    <Box sx={sideNavbarStyle}>
        <Box
          component="img"
          sx={{ width: "100%" }}
          alt="al jazeera bank"
          src={loginLogo}
        />
        <Box display={'flex'} gap={1} flexDirection={'column'} alignItems={'center'}>
        <Box
          component="img"
          sx={{ width: "80px",height:'80px',borderRadius:'50%' }}
          alt="al jazeera bank"
          src={face}
          border={'.1px solid rgba(0,0,0,.5)'}
        />
          <Typography color={"white"} variant="h5" component="h6">
            Mike Ahmad
          </Typography>
          <Typography variant="subtitle.2" color={"white"} component="p">
            System Admin
          </Typography>
        </Box>
        <Box
          sx={{
            width: "80%",
            height: "1px",
            alignSelf: "center",
            backgroundColor: "white",
          }}
        />
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2,paddingLeft:2 }}>
          <Box
            sx={{
              display: "flex",
              gap: ".5em",
              justifyContent: "flex-start",
           
              minWidth: "100%",
            }}
          >
            <MenuBookIcon sx={sideNavIconsStyle} />
            <Link underline="none" color='white' component={RouterLink} to="/">
              Services Catalog
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: ".5em",
              justifyContent: "flex-start",
           
              minWidth: "100%",
            }}
          >
            <PeopleIcon sx={sideNavIconsStyle} />
            <Link underline="none" color='white' component={RouterLink} to="/">
              Users
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: ".5em",
              justifyContent: "flex-start",
           
              minWidth: "100%",
            }}
          >
            <AdminPanelSettingsIcon sx={sideNavIconsStyle} />
            <Link underline="none" color='white' component={RouterLink} to="/">
              Roles & Permissions
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: ".5em",
              justifyContent: "flex-start",
           
              minWidth: "100%",
            }}
          >
            <SettingsIcon sx={sideNavIconsStyle} />
            <Link underline="none" color='white' component={RouterLink} to="/">
              Settings
            </Link>
          </Box>
        </Box>
      </Box>
  )
}

export default DashSidebar