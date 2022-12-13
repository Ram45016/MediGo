import { Checkbox } from "@mui/material";
import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Doctor from "./Medigo/Doctor";
export default function App(){
  return(
    <BrowserRouter>
    <ul>
      <li>
        <Link to="/Doctor">Doctor</Link>
      </li>
    </ul>
    <Routes>
      <Route path="/Doctor" element={<Doctor/>}/>
      <Route path="/Checkbox" element={<Checkbox/>}/>
    </Routes>
    </BrowserRouter>
  )
}