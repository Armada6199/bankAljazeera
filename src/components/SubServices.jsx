import { Box ,Button,Divider, Typography} from '@mui/material'
import React from 'react'
import { formSideSectionsContainers,glassmorphismStyle } from '../assets/styles';

function SubServices() {
  return (
    <Box  sx={{...formSideSectionsContainers,...glassmorphismStyle}} minHeight={' 222px'}>
        <Box display={'flex'} justifyContent={'space-between'} gap={1}>
        <Typography variant="h5" component="h5">
          Sub Services
        </Typography>
        <Button 
        height={'46px'}
         sx={{color:'black',width:'45%',fontSize:'.8rem',fontWeight:'bold'}}
           bgcolor='#3FA1DA'  variant="outlined" 
           >Add Sub Services
           </Button>

        </Box>
        <Divider/>
        <Typography  variant='subtitle1' color={'GrayText'}  component="h5">
        You can add sub-service from this section
        </Typography>
    </Box>
  )
}

export default SubServices