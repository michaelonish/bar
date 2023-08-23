import React from "react";
import './App.css';
import { DepartmentList } from "./component/Departments";
import logo from './logo.jpg';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="LOGO" height={50} width={100} />
      <DepartmentList />
    </div>
  );
}

export default App;
