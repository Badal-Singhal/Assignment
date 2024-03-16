import React from "react";
import {  HashRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout";
import Signin from "../pages/Signin";
import Joinin from "../pages/Joinin";

export default function UserAuthentication() {
  return (
    <HashRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Signin />} />
        <Route path="/Joinin" element={<Joinin />} />
      </Route>
    </Routes>
    </HashRouter>
  );
}
