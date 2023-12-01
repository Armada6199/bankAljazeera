import { Box, Button, Checkbox, Divider, FormControlLabel, Typography } from '@mui/material'
import React from 'react'
import ToggleOffIcon from '@mui/icons-material/ToggleOff';import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import { formSideSectionsContainers,glassmorphismStyle } from '../assets/styles';
function PublishSidebar() {
  return (
    <Box width={'100%'} sx={{...formSideSectionsContainers,...glassmorphismStyle}} bgcolor={'#fff'} borderRadius={'10px'}  >
    <Box
    display={'flex'}
    flexDirection={'column'}
    p={2}
    minHeight={'460px'}
    justifyContent={'space-around'}
     gap={2}>
        <Typography variant="h5" component='h5'>
    Publish
    </Typography>
    <Box display={'flex'} alignItems={'center'} gap={2}>
    <Checkbox
   icon={<ToggleOffIcon sx={{width:'48px',height:'40px'}}/>}
   checkedIcon={<ToggleOnIcon  color='#185534'  sx={{width:'48px',height:'40px',color:'#185534'}} />}
    />
    <Typography variant='h6' component={'h6'}>Published</Typography>
    </Box>
    <Divider/>
    <Box display={'flex'} alignItems={'center'} gap={3}>
    <Typography variant="subtitle1" color={'GrayText'} component='h6'>
    Status
    </Typography>
    <Typography variant="h6"  component='h6'>
    Draft
    </Typography>
    </Box>
    <Box display={'flex'} alignItems={'center'} gap={3}>
    <Typography variant="subtitle1" color={'GrayText'} component='h6'>
    Visibility
    </Typography>
    <Typography variant="h6"  component='h6'>
    Visible
    </Typography>
    </Box>
    <Divider/>
    <Box display={'flex'}  justifyContent={'space-between'}>
        <Button height={'46px'} sx={{color:'black',width:'45%',fontSize:"10px",fontWeight:'bold'}}  bgcolor='#3FA1DA'  variant="outlined" >Preview</Button>
        <Button height={'46px'} sx={{color:'black',width:'45%',fontSize:"10px",fontWeight:'bold'}} variant="outlined">Save as Draft</Button>
    </Box>
    <Button variant="contained">Publish Now</Button>
    </Box>
</Box>
  )
}

export default PublishSidebar