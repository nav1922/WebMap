"use client";
import { SnackbarProvider } from 'notistack';
import React from 'react'


const Template = ({children}) => {

    // useEffect(() => {
    // require("bootstrap/dist/js/bootstrap.bundle.min.js");
    // },[]);

  return (
    <div>
     
     <SnackbarProvider >
       

      {children}

      </SnackbarProvider>
    </div>
  )
}

export default Template
