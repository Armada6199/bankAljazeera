import React from "react";
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
  Typography,
} from "@mui/material";
import CustomDatePicker from "./DatePicker";
//   const serviceSupportInputs=[
//     {placeHolder:'Service Support Hours ',type:'text'},
//     {placeHolder:'Service Continuity RTO ',type:'text'},
//     {placeHolder:'Service Continuity RPO ',type:'text'},
//     {placeHolder:'Service Continuity RPO ',type:'text'},
//     {placeHolder:'Mean time to Repair (MTTR)  ',type:'text'},
//     {placeHolder:'Availability KPI   ',type:'text'},
//     {placeHolder:'Response Time KPI ',type:'text'},
//     {placeHolder:'Response Time KPI ',type:'text'},
//     {placeHolder:'Supporting Services  ',type:'text'},
//   ]
function ServiceSupportForm() {
  const inputStyle = {
    width: "100%",
    height: "60px",
    backgroundColor: "#fff",
  };
  return (
    <Grid container spacing={2} p={2}>
        <Grid item md={12}>
        <Grid  container spacing={2}>
        <Grid item md={6}>
          <TextField
            sx={inputStyle}
            type="text"
            placeholder="Service Support Hours "
          />
        </Grid>
        <Grid item md={6}>
          <TextField
            sx={inputStyle}
            type="text"
            placeholder="Service Support Days "
          />
        </Grid>
      </Grid>
        </Grid>
  <Grid item md={12}>
  <Grid item container spacing={2}>
        <Grid item md={6}>
          <TextField
            sx={inputStyle}
            type="text"
            placeholder="Service Continuity RTO "
          />
        </Grid>
        <Grid item md={6}>
          <TextField
            sx={inputStyle}
            type="text"
            placeholder="Service Continuity RPO "
          />
        </Grid>
      </Grid>
  </Grid>
     <Grid item md={12}>
     <Grid item container spacing={2}>
        <Grid item md={6}>
          <TextField
            sx={inputStyle}
            type="text"
            placeholder="Mean time to Repair (MTTR)  "
          />
        </Grid>
        <Grid item md={6}>
          <TextField
            sx={inputStyle}
            type="text"
            placeholder="Availability KPI"
          />
        </Grid>
      </Grid>
     </Grid>
      <Grid item md={12}>
      <Grid item container spacing={2}>
        <Grid item md={6}>
          <TextField
            sx={inputStyle}
            type="text"
            placeholder="Response Time KPI "
          />
        </Grid>
        <Grid item md={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Availability KPI{" "}
            </InputLabel>
            <Select
              labelId="Maintenance-Schedule"
              id="Maintenance-Schedule"
              label="Maintenance Schedules"
            >
              <MenuItem>Daily</MenuItem>
              <MenuItem>Weekly</MenuItem>
              <MenuItem>Monthly</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      </Grid>
    <Grid item md={12}>
    <Grid item container spacing={2}>
        <Grid item md={6}>
          <TextField
            sx={inputStyle}
            type="text"
            placeholder="Response Time KPI "
          />
        </Grid>
        <Grid item md={6}>
          <FormControl fullWidth>
            <InputLabel id="Supporting-Services">
              Supporting Services{" "}
            </InputLabel>
            <Select
              labelId="Supporting-Services"
              id="Maintenance-Schedule"
              label="Supporting Services"
            >
              <MenuItem>Daily</MenuItem>
              <MenuItem>Weekly</MenuItem>
              <MenuItem>Monthly</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Grid>
      <Grid item md={12}>
      <Grid item  container spacing={2}>
        <Grid item md={6}>
          <FormControl fullWidth>
            <InputLabel id="Current-Status">Current Status</InputLabel>
            <Select
              labelId="Current-Status"
              id="Current-Status"
              label="Current-Status"
            >
              <MenuItem>Daily</MenuItem>
              <MenuItem>Weekly</MenuItem>
              <MenuItem>Monthly</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid  item md={6}>
          <CustomDatePicker  title={"Go Live Date "} />
        </Grid>
      </Grid>
      </Grid>
<Grid item md={12}>
      <Grid item  container spacing={2}>
        <Grid item md={6}>
        <CustomDatePicker  title={"Retirement Date"} />
        </Grid>
        <Grid  item md={6}>
        <TextField
            sx={inputStyle}
            type="text"
            placeholder="Escalation Contacts"
          />
        </Grid>
      </Grid>
      </Grid>
    </Grid>
  );
}

export default ServiceSupportForm;
