import React, { useState } from 'react';
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img1 from '../assets/images/image1.jpg';
import img2 from '../assets/images/image2.jpg';
import img3 from '../assets/images/image3.jpg';
import img4 from '../assets/images/image4.jpg';

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    img1,
    img2,
    img3,
    img4,
  ];

  const previousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <header className="carousel__header">
        <div className="carousel__contents">
          <h1 className="carousel__title">MobileCutz</h1>
        </div>
        <div className="icon-box">
          <FontAwesomeIcon icon={faAngleLeft} className="angle-left" onClick={previousImage} />
          <FontAwesomeIcon icon={faAngleRight} className="angle-right" onClick={nextImage} />
        </div>
        <div className="carousel__fadeBottom" />
      </header>
      <div className="carousel__image">
        <button className="carousel__button" onClick={previousImage}>
          Previous
        </button>
        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
        <button className="carousel__button" onClick={nextImage}>
          Next
        </button>
      </div>
    </div>
  );
}
