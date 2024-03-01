import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/reusable/navbar";
import HomePage from "./components/home/home";
import About from "./components/about/about";
import NotFound from "./components/reusable/invalidPage";
import BottomNavBar from "./components/reusable/bottom-nav_bar";
import WhatWeDo from "./components/services/whatWeDo";
import ContactPage from "./components/contact/contact";
import UiUxPage from "./components/services/UI/UX/UiUx-page";
import DevelopmentPage from "./components/services/Development/development-page";
import FaqPage from "./components/others/faq";
import BlogPage from './components/others/BlogPage'
import ScrollToTop from './ScrollTOTop'
import AMUL from "./components/others/sub-blogs/amul";
import APUBT from "./components/others/sub-blogs/apubt";
import AWSBlog from "./components/others/sub-blogs/aws";
import MaintenancePage from './components/reusable/maintenance'

export default function App() {
  return (
    <div className="bg-bg_primary text-t_Primary font-mono">
      <BrowserRouter>
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<WhatWeDo />} />
          <Route path="/services/development" element={<DevelopmentPage />} />
          <Route path="/services/ui-ux" element={<UiUxPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blogs" element={<BlogPage />} />
          {/* Redirect /services or /service to /services */}
          <Route path="/what-we-do" element={<Navigate to="/services" />} />
          <Route path="/service" element={<Navigate to="/services" />} />
          {/*  BLOGS START */}
          <Route path="/blogs/amul" element={<AMUL />} />
          <Route path="/blogs/apubt" element={<APUBT />} />
          <Route path="/blogs/aws" element={<AWSBlog />} />
          {/* BLOGSEND*/}


          <Route path="/faqs" element={<FaqPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <BottomNavBar />
      </BrowserRouter>
    </div>

  );
}

