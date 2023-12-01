import React from 'react'
import { Box ,Button,Divider, Typography} from '@mui/material'
import { formSideSectionsContainers,glassmorphismStyle } from '../assets/styles';

function LinkedServicesSidebar() {
  return (
    <Box  sx={{...formSideSectionsContainers,...glassmorphismStyle}} minHeight={'209px'} >
    <Box display={'flex'} justifyContent={'space-between'} gap={1}>
    <Typography variant="h5" component="h5">
    Linked Services
    </Typography>
    <Button 
    height={'46px'}
     sx={{color:'black',width:'50%',fontSize:".7rem",fontWeight:'bold'}}
       bgcolor='#3FA1DA'  variant="outlined" 
       >Add Linked Services
       </Button>
    </Box>
    <Divider/>
    <Typography  variant='subtitle1' color={'GrayText'}  component="h5">
    You can add linked service from this section
    </Typography>
    
</Box>
  )
}

export default LinkedServicesSidebar;