import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
//import withCaption from 'react-awesome-slider/dist/autoplay';
//import 'react-awesome-slider/dist/captioned.css';
import Image_1 from "./public/image/1.png"
import Image_2 from "./public/image/2.png"
import Image_3 from "./public/image/3.png"

const AutoplaySlider = withAutoplay(AwesomeSlider);

//const CaptionedSlider = withCaption(AwesomeSlider);

function Slider() {
  return (
    <div>
    <AwesomeSlider>
        <div><img src={Image_1} alt="1"/></div>
        <div><img src={Image_2} alt="1"/></div>
        <div><img src={Image_3} alt="1"/></div>
    </AwesomeSlider>
    <AwesomeSlider animation="cubeAnimation">
        <div data-src={Image_1} />
        <div data-src={Image_2} />
        <div data-src={Image_3} />
    </AwesomeSlider>
    <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={6000}
    >
        <div data-src={Image_1}/>
        <div data-src={Image_2}  />
        <div data-src={Image_3} />
    </AutoplaySlider>
    {/* <CaptionedSlider
    // startupScreen={StartupScreen}
    // cssModule={CaptionedStyles}
    screens={[
      {
        backgroundColor: '#4a9c8c',
        media:{Image_1},
        caption: 'I want to see what you got.',
      },
      {
        backgroundColor: '#4a9c8c',
        media: {Image_2},
        caption: "The answer is -- Don't think about it.",
      },
    ]}
  /> */}
    </div>
  );
}

export default Slider;
