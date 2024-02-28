import React from "react";
import HomePage from "./components/home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/reusable/navbar";
import About from "./components/about/about";
import NotFound from "./components/reusable/invalidPage";
import BottomNavBar from "./components/reusable/bottom-nav_bar";
import WhatWeDo from "./components/what-we-do/whatWeDo";
import ContactPage from "./components/contact/contact";
import UiUxPage from "./components/what-we-do/UI/UX/UiUx-page";
import DevelopmentPage from "./components/what-we-do/Development/development-page";
import FaqPage from "./components/faq";
import Insights from "./components/others/insights";
import ScrollToTop from './ScrollTOTop'




export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/what-we-do/development" element={<DevelopmentPage />} />
        <Route path="/what-we-do/ui-ux" element={<UiUxPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/faqs" element={<FaqPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <BottomNavBar />
    </BrowserRouter>
  );
}
