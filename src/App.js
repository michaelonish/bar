import React from "react";
import { Grid } from "@mui/material";
import './App.css';
import { DepartmentList } from "./component/Departments";
import logo from './logo.jpg';


function App() {
  console.log(logo);

  return (
  <>
  <div>
  <div class = "cont">
  <img src={logo} alt="LOGO" height={50} width={100}  />
  </div>

    <Grid>
    <DepartmentList />
    </Grid>
      
 </div>
  </>
  );
}

      
export default App;