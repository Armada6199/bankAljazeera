import { Box, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ServiceCard from "./ServiceCard";
import TableRowsIcon from "@mui/icons-material/TableRows";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import { iconsContainerStyle } from "../assets/styles";
function ServicesCards({services}) {
  return (
    <Box
      width={"90%"}
      sx={{ display: "flex", flexDirection: "column", gap: 4 }}
    >
      <TextField
        id="input-with-search-icon"
        label="Search"
        placeholder="Search with category ,name ..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="p" component="p">
          Showing Results For {"  "}
          <Box sx={{ display: "inline-block", fontWeight: "bold" }}>
            {services.length} Services
          </Box>
        </Typography>
        <Box display={'flex'} >
          <Box sx={{...iconsContainerStyle,borderTopLeftRadius:'5px',borderBottomLeftRadius:'5px',  backgroundColor:"#0E416B"}}>
          <ViewModuleIcon
            sx={{
              width: "32px",
              height: "32px",
              color: "white",
            }}
          />
          </Box>
       <Box sx={{...iconsContainerStyle,borderTopRightRadius:'5px',borderBottomRightRadius:'5px',backgroundColor:"#fff"}} >
       <TableRowsIcon
            sx={{
              width: "32px",
              height: "32px",
              color: "#0E416B",
            }}
          />
       </Box>
        </Box>
      </Box>
      {/* services cards */}
      <Grid
        container
        spacing={1}
      >
        {services.map((service, index) => (
          <Grid item  xs={12} md={4}>
          <ServiceCard key={service.id} service={service} index={index} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ServicesCards;
