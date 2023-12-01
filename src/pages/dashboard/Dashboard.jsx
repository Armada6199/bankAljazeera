import React from "react";
import { Box} from "@mui/material";
import PagesNavigation from "../../components/PagesNavigation";
import ServiceCatalogHeader from "../../components/ServiceCatalogHeader";
import ServicesCards from "../../components/ServicesCards";
import DashSidebar from "../../components/DashSidebar";
import DashHeader from '../../components/DashHeader';
import { dashboardContainerStyle } from "../../assets/styles";
 
function Dashboard({services}) {
  return (
    <Box sx={dashboardContainerStyle}>
      {/* side navbar */}
      <DashSidebar/>
      <Box
        display={{
          display: "flex",
          flexDirection: "column",
          width: "80%",
          height: "100%",
          gap: 4,
        }}
      >
        <DashHeader/>
        <ServiceCatalogHeader />
        <ServicesCards services={services} />
        <PagesNavigation />
      </Box>
    </Box>
  );
}

export default Dashboard;
