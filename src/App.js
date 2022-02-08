import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/global.scss";

import Home from "./pages/Home";
import Side from "./pages/side";
import Form from "./pages/form";
import ErrorPage from "./pages/404";

import Layout from "./components/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="side" element={<Side />} />
          <Route path="form" element={<Form />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
