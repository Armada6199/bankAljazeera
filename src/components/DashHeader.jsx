import { Box } from '@mui/material'
import React from 'react'
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PublicIcon from "@mui/icons-material/Public";
import { Link } from 'react-router-dom';
import { dashHeaderIconsStyle } from '../assets/styles';
function DashHeader() {
  return (
    <Box  display={'flex'} bgcolor={'#fff'} justifyContent={'flex-end'}  height={'97px'}>
    <Box sx={{display:'flex',gap:2,alignItems:'center'} } >
    <NotificationsIcon sx={dashHeaderIconsStyle} />
    <PublicIcon sx={dashHeaderIconsStyle}/>
    <Box as={Link} to='/dashboard'>
    <AccountCircleIcon   sx={dashHeaderIconsStyle}/>
    </Box>
    </Box>
    </Box>
  )
}

export default DashHeader