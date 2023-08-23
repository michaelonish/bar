import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import logo from './logo.jpg';

 
export const DepartmentList = () => {
  const departments = ["Order", "Logistics", "Sustainability", "Packaging", "Accounting", "Pharmacy"] ;
  console.log(logo);

  return (
    <Autocomplete
      style={{ margin: "auto", width: "50%" }}
      img src={logo} alt="LOGO" height={50} width={100}
      options={departments}
      renderInput={(params) => (
        <TextField label='Enter Department' {...params} />
      )}
    ></Autocomplete>
  );
};