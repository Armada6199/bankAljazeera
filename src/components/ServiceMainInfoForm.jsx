import { Grid } from "@mui/material";
import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import RichTextField from "../components/RichTextField";
import { inputStyle } from "../assets/styles";

function ServiceMainInfoForm() {
  return (
    <Grid container spacing={4} p={4}>
      <Grid item container spacing={4} md={12}>
        <Grid item md={6}>
          <TextField sx={{ width: "100%" }} placeholder="Service Name" />
        </Grid>
        <Grid item md={6}>
          <TextField sx={{ width: "100%" }} placeholder="Service Code" />
        </Grid>
      </Grid>
      <Grid item md={12}>
        <RichTextField />
      </Grid>
      <Grid item container spacing={4} md={12}>
        <Grid item container md={6}>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              Service Type
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Business Banking"
              name="serviceType"
              row
            >
              <FormControlLabel
                value="Business Banking"
                sx={{ px: 3 }}
                control={<Radio />}
                label="Business Banking"
              />
              <FormControlLabel
                value="Business Support"
                sx={{ px: 3 }}
                control={<Radio />}
                label="Business Support"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item container md={6}>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              Financial / Non-Financial Service
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Financial"
              name="Financial"
              row
            >
              <FormControlLabel
                value="Financial"
                control={<Radio />}
                label="Financial"
              />
              <FormControlLabel
                value="Non-Financial"
                control={<Radio />}
                label="Non-Financial"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
      <Grid item container spacing={4} md={12}>
        <Grid item container md={6}>
          <TextField sx={inputStyle} placeholder="Business Owner " />
        </Grid>
        <Grid item container md={6}>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              Common Services
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Business Banking"
              name="serviceType"
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
      <Grid item container spacing={4} md={12}>
        <Grid item container md={6}>
          <TextField
            sx={inputStyle}
            type="text"
            placeholder="Business Priority "
          />
        </Grid>
        <Grid item container md={6}>
          <TextField
            type="text"
            sx={inputStyle}
            placeholder="Business Contacts "
          />
        </Grid>
      </Grid>
      <Grid item container spacing={4} md={12}>
        <Grid item container md={6}>
          <TextField
            type="text"
            sx={inputStyle}
            placeholder="IT Service Owner(s)"
          />
        </Grid>
        <Grid item container md={6}>
          <TextField type="text" sx={inputStyle} placeholder="IT Contact " />
        </Grid>
      </Grid>
    </Grid>
  );
}
export default ServiceMainInfoForm;
