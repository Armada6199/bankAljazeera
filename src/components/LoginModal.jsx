import  React,{useContext, useState} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import loginLogo from "../assets/loginLogo.png";
import { Checkbox, Divider, FormControl, FormControlLabel,  Link,  TextField } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { blue } from "@mui/material/colors";
import { LoginContext } from "../hooks/LoginProvider";
import { useForm } from "react-hook-form"
import '../App.css'
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: '35%',
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  bgcolor: "#F5F7F9",
  borderRadius: "20px", 
  height: "75vh",
};
export const imageStyle = {
  width: "413px",
  height: "102.99px",
};
const innerBoxesStyles = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  alignItems: "center",
  width:'100%',
  gap:1
};

const linkStyle={
  underline:"none",
  width:'70%',
  fontWeight:'500',
  fontSize:'1rem',
  bgcolor:'#0E416B',
  borderRadius:'5px',
  textAlign:'center',
  color:'white',
  p:2,
};
const inputStyle={
  width:'60%',
  height:'60px',
  backgroundColor:'#ffffff'
}
const loginButtonStyle={
  width:'60%',
  backgroundColor:'#0E416B',
  height:'50px'
}
export default function LoginModal({ handleClose, open }) {
    const {login,loginData}=useContext(LoginContext);
    const form=useForm({
      defaultValues:{
        email:'',
        password:''
      }
    }) ;
    const {register,handleSubmit,formState}=form;
    const {errors}=formState;
    const navigate=useNavigate()
    const onSubmit=(data)=>{
      login()
      navigate('/dashboard')
    };
  return (  
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              height: "100%",
              gap:1
            }}
          >
            <Box
              component="img"
              sx={imageStyle}
              alt="The house from the offer."
              src={loginLogo}
            />
            <Box sx={innerBoxesStyles}>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Hi,Welcome Back
              </Typography>
              <Typography variant="subtitle1" color={"GrayText"}>
                Enter Your Credentials to continue
              </Typography>
            </Box>
            <Box as='form' noValidate sx={{...innerBoxesStyles,gap:3}} onSubmit={handleSubmit(onSubmit)} >
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                type="email"
                sx={inputStyle}
                {...register('email',{
                  required:'Email Is Required'
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
              <TextField
                id="password"
                label="password"
                variant="outlined"
                type="password"
                sx={inputStyle}
                {...register('password',{
                  required:'Password Is Required'
                })}
                error={!!errors.password}
                helperText={errors.password?.password}
              />
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              sx={{ width: "469.32px", height: "60px", alignItems: "center" }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: blue[900],
                      "&.Mui-checked": {
                        color: blue[900],
                      },
                    }}
                    value={"rememberMe"}
                  />
                }
                label="Remember Me"
              />
              <Link underline="none" fontWeight={'500'} color={'#212121'} href="#">Forgot Password</Link>
            </Box>
            <Button type="submit" sx={loginButtonStyle} variant="contained">Login</Button>
            </Box> 
            <Divider/>
            <Link underline="none" fontWeight={'500'} color={'#212121'}  href="#">Don't have an account</Link> 
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
