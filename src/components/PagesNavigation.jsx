import { Box, Button } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
function PagesNavigation() {
  return (
    <Box width={'70%'}  sx={{display:'flex',height:'80px',alignItems:'center',justifyContent:'flex-end',bgcolor:'#ffffff',alignSelf:'flex-end',borderRadius:'10px'}} >
    <Box display={'flex'} gap={'2em'} marginRight={'5em'}>
    <Button variant="outlined"><ArrowBackIcon/></Button>
    <Button variant="contained">1</Button>
    <Button variant="outlined">2</Button>
    <Button variant="outlined">3</Button>
    <Button variant="outlined"><ArrowForwardIcon/></Button>
    </Box>
  </Box>
  )
}

export default PagesNavigation