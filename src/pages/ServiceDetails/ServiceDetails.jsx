import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { bankServices } from "../../assets/constants";
import { useParams } from "react-router-dom";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { Link as RouterLink, MemoryRouter } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AdditionalInformation from "../../components/AdditionalInformation";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import {subServicesName,linkedServicesList,additionInformationNavigation,businessDetails} from '../../assets/constants'
import AdditionalInformationNav from "../../components/AdditionalInformationNav";
import DashHeader from "../../components/DashHeader";
import { innerContainerDetailsStyle,glassmorphismStyle, linkedDetailsContainerStyles,subServicesDetailsContainerStyles } from "../../assets/styles";
const pricesAndChargeback=['Price','Fees','Commission'];
const detailsLeftContainersStyle={
  display:"flex",
  bgcolor:"#fff",
  width:"70%",
  height:"459px",
  justifyContent:"space-around",
  flexDirection:"column",
  gap:"1rm",
  alignItems:"flex-start",
  borderRadius:"10px",
  padding:2,
  boxShadow: '2px 4px 14px 7px rgba(77,65,65,0.15)'
}
function ServiceDetails() {
  const { id } = useParams();
  const [targetService, setTargetService] = useState({});
  const [currentService,setCurrentService]=useState('Service Features');
  useEffect(() => {
    const target = bankServices.find((item) => item.id == id);
    setTargetService(target);
  }, []);
  return (
      <Box sx={innerContainerDetailsStyle}>
        {/* first container  */}
        {/* <DashHeader/> */}
        <Box display={"flex"} gap={8} width={"100%"}>
          {/* left side information */}
          <Box sx={{...detailsLeftContainersStyle,...glassmorphismStyle}}>
            <Box display={"flex"} gap={4} alignItems={"center"}>
              <AccountBalanceIcon
                sx={{
                  width: "100px",
                  height: "100px",
                  color: targetService.color,
                }}
              />
              <Box>
                <Typography variant="h5" color={'black'} component="div">
                  {targetService.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="MenuText">
                  {targetService.category}
                </Typography>
                <Typography
                  bgcolor={"#f6f6f6"}
                  padding={".1em"}
                  borderRadius={"2px"}
                  sx={{ mb: 1.5 }}
                  color="text.secondary"
                >
                  Business Banking, Finacal Service, common service
                </Typography>
              </Box>
              <Button
                to={"/"}
                variant="contained"
                sx={{
                  height: "60px",
                  color: "white",
                  width:'50%'
                }}
                
                component={RouterLink}
              >
                <ArrowBackIcon />
                Go back to all services
              </Button>
            </Box>
            <Typography variant="h5" color="GrayText" component="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              ea neque ad at ipsa praesentium natus laborum provident harum
              quis.
            </Typography>
            <Grid container spacing={3}>
              {businessDetails.map((data) => (
                <Grid key={data.title} item xs={12} sm={6} md={4}>
                  <Typography variant="p" color="GrayText" component="p">
                    {data.title}
                  </Typography>
                  <Typography variant="h6" color="black" component="p">
                    {data.description}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
          {/* right first  container  */}
          <Box
           sx={{...subServicesDetailsContainerStyles,...glassmorphismStyle}}
          >
            <Box display={"flex"} gap={1} mb={4} alignItems={"center"}>
              <ManageAccountsIcon />
              <Typography variant="h6" color="#0E416B" component="p">
                Sub Service List
              </Typography>
            </Box>
            <Box
              display={"flex"}
              height={"80%"}
              gap={2}
              alignItems={"flex-start"}
              flexDirection={"column"}
            >
              {subServicesName.map((subService) => (
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  key={subService.title}
                >
                  <Typography variant="h6" component="h6">
                    {subService.title}
                  </Typography>
                  <Typography variant="p" color="GrayText" component="p">
                    {subService.description}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
        {/* second container */}
        <Box display={"flex"} gap={8} width={"100%"}>
          {/* left second container */}
          <Box sx={{...detailsLeftContainersStyle,...glassmorphismStyle}}>
            <Typography variant="h4" color="#0E416B" component="h4">
              Additional information
            </Typography>
            <AdditionalInformationNav currentService={currentService} setCurrentService={setCurrentService}/>
            <AdditionalInformation />
            <Typography variant="h6" color="GrayText" component="h6">
              Pricing & Chargeback
            </Typography>
            <Grid
              container
            spacing={2}
            >
            {pricesAndChargeback.map(data=>(
              <Grid item md={4} sm={6} >
                    <Typography variant="h6" component="h6">
                    {data}
                  </Typography>
                  <Typography variant="p" color="GrayText" component="p">
                    {data}
                  </Typography>
              </Grid>
            ))}
            </Grid>
          </Box>
          {/* right container */}
          <Box
           sx={{...linkedDetailsContainerStyles,...glassmorphismStyle}}
          >
            <Box
              display={"flex"}
              gap={1}
              flexDirection={"column"}
            >
              <Box display={"flex"} gap={1} mb={4} alignItems={"center"}>
                <CompareArrowsIcon/>
                <Typography variant="h6" color="#0E416B" component="p">
                  Linked Services List
                </Typography>
              </Box>
              <Box
                display={"flex"}
                height={"80%"}
                gap={2}
                alignItems={"flex-start"}
                flexDirection={"column"}
              >
                {linkedServicesList.map((linked) => (
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"flex-start"}
                    key={linked.title}
                  >
                    <Typography
                      variant="h6"
                      component="h6"
                    >
                      {linked.title}
                    </Typography>
                    <Typography variant="p" color="GrayText" component="p">
                      {linked.description}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
  );
}

export default ServiceDetails;
