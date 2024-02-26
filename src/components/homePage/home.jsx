import React, { useEffect, useRef } from 'react';
import HeroSection from "./components/heroSection";
import TestimonialSection from "./components/testimonial";
import FeatureSection from "./components/features/features";
import SkillSection from "./components/skillSection";
import VisualSection from "./components/visionSection";
import AndMore from "./components/andmore";

function HomePage() {


  return (
    <>
      <HeroSection />
      <TestimonialSection />
      <SkillSection />
      <VisualSection />
      {/* <HelloWorldComponent /> */}
      <FeatureSection />
      <AndMore />
    </>
  );
}

export default HomePage;


