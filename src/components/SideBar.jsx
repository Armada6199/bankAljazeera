import { Box, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material'
import React from 'react'
import { serviceCatagory, serviceTypes } from '../assets/constants'
import { sideBarFilterStyle } from '../assets/styles'

function SideBar({handleFilterCatagories}) {
  return (
    <Box  sx={sideBarFilterStyle}>
            {/* service catagory  section*/}
            <Box>
              <Typography  variant='h6' component="h6">
                SERVICE CATEGORIES
              </Typography>
              <FormGroup onChange={(e)=>handleFilterCatagories(e.target.value)}>
                {serviceCatagory.map(service=><FormControlLabel key={service.title} control={<Checkbox value={service.title} />} label={`${service.title} (${(service.avaiableServices)})`} />)}
              </FormGroup>
            </Box>
            {/* service Type section */}
            <Box>
            <Typography marginBottom={2}  variant='subtitle2' component="h6">
                SERVICE TYPE
              </Typography>
              <FormGroup>
                {serviceTypes.map(service=><FormControlLabel key={service}  control={<Checkbox />} label={service}/>)}
              </FormGroup>
            </Box>
          </Box>
  )
}

export default SideBar