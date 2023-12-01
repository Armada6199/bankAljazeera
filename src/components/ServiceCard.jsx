import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Divider, Grid } from "@mui/material";
import Link from "@mui/material/Link";
import { Link as RouterLink,} from "react-router-dom";
import {LoginContext} from '../hooks/LoginProvider';
import Popper from '@mui/material/Popper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { editIconStyle,popperStyles,glassmorphismStyle } from "../assets/styles";

export default function ServiceCard({ service }) {
  const serviceCardStyles = {
    borderLeft: `10px solid ${service.color}`,
    height: "383px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: "10px",
    color:service.color,
    backgroundColor:'#fff',
    boxShadow:'1px -2px 6px 6px rgba(105,93,93,0.15)'
  };
  const {loginData}=React.useContext(LoginContext);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <Box   sx={serviceCardStyles}>
      {loginData.isLoggedIn?
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
            marginRight:2,
          }}
        >
            <MoreVertIcon  onClick={handleClick} sx={editIconStyle} />
            <Popper sx={popperStyles} id={id} open={open} anchorEl={anchorEl}>
              <Link underline="none" to={'/serviceEdit'} component={RouterLink} >
              <Box display={'flex'} gap={1}>
                <EditIcon sx={{color:'#0E416B'}}/>
                <Typography sx={{color:'#0E416B'}} fontWeight={'bold'}>Edit</Typography>
              </Box>
              </Link>
              <Divider/>
              <Box display={'flex'} gap={1}>
                <DeleteIcon sx={{color:'#0E416B'}}/>
                <Typography variant="subtitle1" fontWeight={'bold'} sx={{color:'#0E416B'}}>Delete</Typography>
              </Box>
            </Popper>
        </Box>:null}
        <AccountBalanceIcon sx={{ width: "100px", height: "100px" }} />
        <Link  underline="none" component={RouterLink} to={`/serviceDetails/${service.id}`}>
        <CardContent>
          <Typography variant="h5" color='black' component="div">
            {service.title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {service.category}
          </Typography>
          <Typography color='black' variant="body2">
            {service.description}
          </Typography>
        </CardContent>
        </Link>
    </Box>
  );
}
