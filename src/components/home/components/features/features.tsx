import React, { useEffect, useRef, useState } from 'react';
import sections from './components/models';
import './feature.css';
import CenterBox from '../../components/../../reusable/centerBOX'

import SliderBox from './slider-box';
function FeatureSection() {

  return (
    <>
      <div className="container mx-auto px-4">
        <SliderBox other="We are" highlight="Different" />
      </div>
      <div className="flex flex-col items-center my-20">

        {sections.map((section, index) => {
          return (

            <CenterBox
              title={section.title}
              sub_title=""
              content={section.text}
              image={section.image}
              imgLeft={!section.reverse} // Pass the reverse prop to determine image position
            />
          )
        })}
      </div>
    </>
  );
}

export default FeatureSection;
