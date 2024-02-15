import React from "react";
import HomePage from "./components/homePage/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import About from "./components/about";
import NoPage from "./components/invalidPage";
import BottomNavBar from "./components/bottom-nav_bar";
import WhatWeDo from "./components/whatWeDo";
import ContactPage from "./components/contact/contact";
export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <BottomNavBar />
    </BrowserRouter>
  );
}
