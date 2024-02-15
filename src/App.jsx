import React from "react";
import HomePage from "./components/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import About from "./components/about";
import NoPage from "./components/invalidPage";
import BottomNavBar from "./components/bottom-nav_bar";
import whatWeDo from "./components/what-we-do";
export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/what-we-do" element={<whatWeDo />} />

        <Route path="*" element={<NoPage />} />
      </Routes>
      <BottomNavBar />
    </BrowserRouter>
  );
}
