import React, { useState } from "react";

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      <div style={slideStylesWidthBackground}></div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

const SlideShow = () => {
  const slides = [
    { url: "https://res.cloudinary.com/da80yict4/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1714214366/yt-social-app/ltzyq6wezywoqg6x7fu6.jpg", title: "tournament 1" },

    { url: "https://res.cloudinary.com/da80yict4/image/upload/v1714985798/yt-social-app/m7emxk9h4eme28ejjpyp.jpg", title: "tournament 2" },
    { url: "https://res.cloudinary.com/da80yict4/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1714293612/yt-social-app/hdtyp67pzvi8rikws5c0.jpg", title: "tournament 3" },
    { url: "https://res.cloudinary.com/da80yict4/image/upload/c_thumb,w_200,g_face/v1715618471/badminton-tournament-flyer-design-template_9245-797_ibe2ox.jpg", title: "tournament 4" },
    { url: "https://res.cloudinary.com/da80yict4/image/upload/v1716032233/7271176_lnpntn.jpg", title: "tournament 5" },
  ];
  const containerStyles = {
    width: "100%",
    height: "450px",
    
    padding: "10px 20px"
  };
  return (
    <div>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default SlideShow ;
