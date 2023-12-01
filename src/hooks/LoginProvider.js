import { createContext,useState } from "react";
export const  LoginContext=createContext();
export default function LoginProvider(props){
const [loginData,setLoginData]=useState({isLoggedIn:false});
const  login=()=>{
    try {
        setLoginData({isLoggedIn:true});
    } catch (error) {
        console.log(error);
    }
}
return (
<LoginContext.Provider value={{loginData,login}}>
{props.children}
</LoginContext.Provider>)
}
