import { Box } from '@mui/system'
import React from 'react'
import { additionInformationNavigation } from '../assets/constants'
import { Button } from '@mui/material'

function AdditionalInformationNav({currentService,setCurrentService}) {
  return (
    <Box display={"flex"} bgcolor={"#f6f6f6"} p={1} gap={2}>
              {additionInformationNavigation.map((service, i) => (
                <Button
                onClick={()=>setCurrentService(service)}
                key={i}
                variant={currentService===service?'contained':''}
                sx={{ color: `${currentService===service? "#fff" : "#0E416B"}`,height:'45px',fontWeight:'bold' }}
                >
                  {service}
                </Button>
              ))}
            </Box>
  )
}

export default AdditionalInformationNav