import { TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function ServiceTrail() {
  return (
    <Box p={3}>
       <TextField
    type="text"
    sx={{width:'50%'}}
    placeholder="Linked CI(s)"
  />
    </Box>
  )
}

export default ServiceTrail