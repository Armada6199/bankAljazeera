import React from 'react'
import {
    Box,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    TextField,
    Typography,
  } from "@mui/material";
  const inputStyle = {
    width: "100%",
    height: "60px",
    backgroundColor: "#fff",
  };
function ServiceFeatursForm() {
  return (
    <Box display={'flex'} p={2}  flexDirection={'column'}  >
    <Box mb={4}>  
<FormControl >
  <FormLabel id="demo-radio-buttons-group-label">
    Service Level Agreement (SLA)
  </FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="yes"
    name="serviceType"
    row
  >
    <FormControlLabel sx={{px:6}} value="yes" control={<Radio />} label="Yes" />
    <FormControlLabel sx={{px:6}} value="no" control={<Radio />} label="No" />
  </RadioGroup>
</FormControl>
    </Box>
    <Box display={'flex'} gap={4} mb={3} flexDirection={'column'}>
    <Box display={'flex'} gap={3}  >
    <TextField
    sx={inputStyle}
    type="text"
    placeholder="Service Hours"
  />
   <TextField
    sx={inputStyle}
    type="text"
    placeholder="Service Days"
  />
    </Box>
     <Box display={'flex'} gap={3}  >
    <TextField
    sx={inputStyle}
    type="text"
    placeholder="Service Delivery Methods"
  />
   <TextField
    sx={inputStyle}
    type="text"
    placeholder="Channel / Delivery"
  />
    </Box>
    <Box display={'flex'} gap={3}  >
    <TextField
    sx={inputStyle}
    type="text"
    placeholder="Service Qualification"
  />
   <TextField
    sx={inputStyle}
    type="text"
    placeholder="Service lifecycle frequency"
  />
    </Box>
    <Box display={'flex'} gap={3}  >
    <TextField
    sx={inputStyle}
    type="text"
    placeholder="Service Reviews"
  />
   <TextField
    sx={inputStyle}
    type="text"
    placeholder="Request Procedures"
  />
    </Box>
    </Box>
    <Box display={'flex'} flexDirection={'column'} gap={1} width={'100%'}>
    <Typography variant="h6" color={'GrayText'}  component="h6">
    Pricing & Chargeback
   </Typography>
    <Box display={'flex'} gap={3}  >
    <TextField
    sx={inputStyle}
    type="text"
    placeholder="Prices"
  />
   <TextField
    sx={inputStyle}
    type="text"
    placeholder="Fees"
  />
    </Box>
    <Box display={'flex'} sx={{width:'100%'}}   >
    <TextField
    sx={inputStyle}
    type="text"
    placeholder="Commission "
  />
    </Box>
    </Box>
   
</Box>
  )
}

export default ServiceFeatursForm