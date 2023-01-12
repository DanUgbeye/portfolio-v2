import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import PrimaryLayout from "../layouts/Primary.layout";

// pages imports
import HomePage from "../pages/home";
import AboutPage from "../pages/about";
import ProjectsPage from "../pages/project";
import NotFoundPage from "../pages/404";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route element={<PrimaryLayout />}>
            <Route index path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
