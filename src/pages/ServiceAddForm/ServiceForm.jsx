import React, { useState } from "react";
import DashSidebar from "../../components/DashSidebar";
import {
  Box,
  Button,
  Typography,
} from "@mui/material";
import AddCardIcon from "@mui/icons-material/AddCard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link as RouterLink } from "react-router-dom";
import PublishSidebar from "../../components/PublishSidebar";
import ServicesCatagorySidebar from "../../components/ServicesCatagorySidebar";
import SubServices from "../../components/SubServices";
import LinkedServicesSidebar from "../../components/LinkedServicesSidebar";
import AddImageSidebar from "../../components/AddImageSidebar";
import ServicesFormHoc from "../../components/ServicesFormHoc";
import DashHeader from "../../components/DashHeader";
import AdditionalInformationNav from "../../components/AdditionalInformationNav";
import { serviceFormContainer } from "../../assets/styles";
import ServiceMainInfoForm from "../../components/ServiceMainInfoForm";
const logoContainerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "118px",
  height: "110px",
  bgcolor: "#fff",
  borderRadius: "10px",
};
function ServiceAddForm() {
  const [currentService,setCurrentService]=useState('Service Features');
  return (
    <Box sx={serviceFormContainer}>
      <DashSidebar />
      <Box width={'100%'}>
        <DashHeader/>
      <Box width={'100%'} gap={3} display={'flex'} height={'100%'}>
        {/* left container */}
        <Box width={'70%'} display={'flex'} flexDirection={'column'} gap={5}>
          {/* first container */}
          <Box borderRadius={'10px'}  boxShadow='-5px 3px 13px 13px rgba(105,93,93,0.21)' >
            <Box  display={"flex"}  alignItems={"center"} gap={4}>
              <Box sx={logoContainerStyle}>
                <AddCardIcon
                  sx={{ width: "50px", height: "69px", color: "#0E416B" }}
                />
              </Box>
              <Box>
                <Typography variant="h5" component="h5">
                  Add New Service Catalog
                </Typography>
                <Typography variant="subtitle1" color="GrayText" component="p">
                  Fill in the fields below to create a new service
                </Typography>
              </Box>
              <Button
                to={"/dashboard"}
                variant="contained"
                sx={{
                  height: "60px",
                  color: "white",
                  width: "30%",
                }}
                component={RouterLink}
              >
                <ArrowBackIcon />
                Go back to all services
              </Button>
            </Box>
            <ServiceMainInfoForm/>
          </Box>
          {/* second container */}
          <Box bgcolor={"#fff"} borderRadius={'10px'}  boxShadow='-5px 3px 13px 13px rgba(105,93,93,0.21)' width={"100%"} display={'flex'} flexDirection={'column'} gap={3} height={'839px'}  >
            <Typography padding={2} variant="h4" color="#0E416B" component="h4">
              Additional information
            </Typography>
            <AdditionalInformationNav setCurrentService={setCurrentService} currentService={currentService}/>
          <ServicesFormHoc currentService={currentService}/>
          </Box>
        </Box>
        {/* right container */}
        <Box display={'flex'} gap={5} flexDirection={'column'} justifyContent={'flex-start'} width={'25%'} >
      <PublishSidebar />
      <ServicesCatagorySidebar />
      <SubServices />
      <LinkedServicesSidebar />
      <AddImageSidebar />
        </Box>
      </Box>
      </Box>
    </Box>
  );
}

export default ServiceAddForm;