import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Catalog from "./pages/catalog/Catalog";
import Navbar from "./layout/Navbar";
import { Box } from "@mui/material";
import Footer from "./layout/Footer";
import Dashboard from "./pages/dashboard/Dashboard";
import ServiceDetails from "./pages/ServiceDetails/ServiceDetails";
import ServiceForm from "./pages/ServiceAddForm/ServiceForm";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "./hooks/LoginProvider";
import { bankServices } from "./assets/constants";
import {  appOuterContaineStyles } from "./assets/styles";

function App() {
  const [currentFilters,setCurrentFilters]=useState([]);
  const [services,setServices]=useState(bankServices);
  const location=useLocation();
  const {loginData}=useContext(LoginContext);
  useEffect(()=>{
    setServices(bankServices);
  },[]);
  const renderNav=()=>{
    return loginData.isLoggedIn?null:<Navbar/>;}
  return (
    <Box sx={appOuterContaineStyles}>
      {renderNav()}
      <Routes>
          <Route path="/" element={<Catalog currentFilters={currentFilters} setServices={setServices} setCurrentFilters={setCurrentFilters}   services={services} />} />
          <Route path="/dashboard" element={<Dashboard services={services} />} />
          <Route path="/serviceAddForm" element={<ServiceForm />} />
          <Route path="/serviceEdit" element={<ServiceForm />} />
          <Route path="/serviceDetails/:id" element={<ServiceDetails />} />
        </Routes>
        <Footer />
    </Box>
  );
}

export default App;
