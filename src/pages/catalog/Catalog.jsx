import {
  Box,
} from "@mui/material";
import React from "react";
import PagesNavigation from "../../components/PagesNavigation";
import SideBar from "../../components/SideBar";
import ServiceCatalogHeader from "../../components/ServiceCatalogHeader";
import ServicesCards from "../../components/ServicesCards";
import DashHeader from "../../components/DashHeader";
import { useContext,useEffect } from "react";
import { LoginContext } from "../../hooks/LoginProvider";
import { bankServices } from "../../assets/constants";
import { catalogContainerStyle } from "../../assets/styles";
function Catalog({services,currentFilters,setCurrentFilters,setServices}) {
  const {loginData}=useContext(LoginContext);
  function handleFilterCatagories(selectedCatagory){
   const isExistingFilter=currentFilters.includes(selectedCatagory);
   if(isExistingFilter){
    setCurrentFilters(curr=>curr.filter(filter=>filter!==selectedCatagory));
   }else{
    setCurrentFilters(curr=>[...curr,selectedCatagory])
   }
  };
  useEffect(()=>{
    if(currentFilters.length>0){
      setServices(curr=>bankServices.filter(service=>currentFilters.includes(service.category)));
    }else setServices(bankServices);
  },[currentFilters])
  return (
      <Box
      sx={catalogContainerStyle}
      >
        {loginData.isLoggedIn&&
        <DashHeader/>}
        <ServiceCatalogHeader />
        <Box width={"100%"} sx={{display:'flex'}} gap={'30px'}>
          {/* left side bar */}
         <SideBar services={services} handleFilterCatagories={handleFilterCatagories} />
          {/* services section */}
       <ServicesCards services={services}/>
        </Box>
        <PagesNavigation/>
      </Box>
  );
}

export default Catalog;
