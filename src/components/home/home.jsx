import React from "react";
import HeroSection from "./components/heroSection";
import TestimonialSection from "./components/testimonial";
import FeatureSection from "./components/features/features";
import SkillSection from "./components/skillSection";
import VisualSection from "./components/visionSection";
import AndMore from "./components/andmore";
import HeroCTA from "../reusable/HeroCTA";
import CaseStudySection from "./components/caseStudy";
function HomePage() {


  return (
    <>
      <HeroSection />
      <TestimonialSection />
      <SkillSection />
      <VisualSection />
      <FeatureSection />
      <AndMore />
      <CaseStudySection />
      <HeroCTA />
    </>
  );
}

export default HomePage;

