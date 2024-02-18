import React from "react";
import HomePage from "./components/homePage/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import About from "./components/about";
import NoPage from "./components/invalidPage";
import BottomNavBar from "./components/bottom-nav_bar";
import WhatWeDo from "./components/what-we-do/whatWeDo";
import ContactPage from "./components/contact/contact";
import UiUxPage from "./components/what-we-do/UI/UX/UiUx-page";
import developmentPage from "./components/what-we-do/Development/development-page";
export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/what-we-do/development" element={< developmentPage/>} />
        <Route path="/what-we-do/ui-ux" element={< UiUxPage/>} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <BottomNavBar />
    </BrowserRouter>
  );
}
