import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext/UserContext";

 
export const ProtectedRoutes = () => {
   const navigate = useNavigate();
  
   const { user } = useContext(UserContext);
    
   useEffect(() => {
     if(!user){
         navigate("/")
     }
   }, [])
  
   return (
     <>
         {user ? <Outlet /> : <span>Carregando...</span> }
     </>
   )
  }
  
   