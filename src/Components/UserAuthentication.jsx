import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout";
import Signin from "../pages/Signin";
import Joinin from "../pages/Joinin";

export default function UserAuthentication() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Signin />} />
        <Route path="/Joinin" element={<Joinin />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}
