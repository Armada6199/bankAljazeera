import React from 'react'
import { CheckBox } from "@mui/icons-material";
import {
    Box,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    TextField,
  } from "@mui/material";
function ServiceDependencyForm() {
    const inputStyle = {
        width: "100%",
        height: "60px",
        backgroundColor: "#fff",
      };
  return (
    <Grid spacing={3} p={4} container >
        <Grid container spacing={2} mb={4}  item  md={12}>
        <FormControl>
  <FormLabel id="demo-radio-buttons-group-label">
  Third Part Dependency
  </FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="yes"
    name="serviceType"
    row
  >
    <FormControlLabel sx={{px:6}}  value="yes" control={<Radio />} label="Yes" />
    <FormControlLabel sx={{px:6}}  value="no" control={<Radio />} label="No" />
  </RadioGroup>
</FormControl>
        </Grid>
        <Grid container spacing={2}  >
            <Grid container spacing={3} item md={12}>
            <Grid item md={6}>
        <TextField
           sx={inputStyle}
      type="text"
     placeholder="Third Party Name"
      />
        </Grid>
        <Grid item md={6}>
        <TextField
      sx={inputStyle}
      type="text"
     placeholder="Third Part Service Suport Contact"
      />
         </Grid>
            </Grid>
            <Grid container spacing={3} item >
            <Grid item md={6}>
            <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Maintenance Schedule</InputLabel>
  <Select
    labelId="Maintenance-Schedule"
    id="Maintenance-Schedule"
    label="Maintenance Schedules"
  >
    <MenuItem >Daily</MenuItem>
    <MenuItem >Weekly</MenuItem>
    <MenuItem >Monthly</MenuItem>
  </Select>
</FormControl>
        </Grid>
        <Grid item md={6}>
        <TextField
      sx={inputStyle}
      type="text"
     placeholder="Constraints"
      />
         </Grid>
            </Grid>
        </Grid>
   
    </Grid>
  )
}

export default ServiceDependencyForm