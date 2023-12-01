import { Box, Button, Typography, Divider, FormGroup, FormControlLabel, Checkbox, Grid } from "@mui/material";
import React from "react";
import { formSideSectionsContainers,glassmorphismStyle } from '../assets/styles';

function ServicesCatagorySidebar() {
  return (
    <Box  sx={{...formSideSectionsContainers,...glassmorphismStyle}} minHeight={'332px'}>
      <Box display={'flex'} justifyContent={'space-between'}>
        <Typography variant="h5" component="h5">
          Service Categories
        </Typography>
        <Button
          height={"46px"}
          sx={{
            color: "black",
            width: "45%",
            fontWeight: "bold",
          }}
          bgcolor="#3FA1DA"
          variant="outlined"
        >
          Add Category
        </Button>
      </Box>
      <Divider/>
      <Grid container direction={'column'} spacing={2} >
        <Grid item>
        <FormControlLabel control={<Checkbox  defaultChecked />} label="IT & Computer" />
        </Grid>
        <Grid item>
        <FormControlLabel  control={<Checkbox />} label="Sales & Marketing" />
        </Grid>
        <Grid item>
        <FormControlLabel  control={<Checkbox />} label="Financial Services" />
        </Grid>
        <Grid item>
        <FormControlLabel  control={<Checkbox />} label="Finance And Business" />
        </Grid>
        </Grid>
    </Box>
  );
}

export default ServicesCatagorySidebar;
