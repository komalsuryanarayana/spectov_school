import React, { useEffect, useRef, useState } from 'react';
import '../styles/AboutUs.css';

const images = [
  '/images/1.jpg',
  '/images/2.jpg',
  '/images/3.jpg',
  '/images/4.jpg',
  '/images/5.jpg',
  '/images/6.jpg',
  '/images/7.jpg',
  '/images/8.jpg'
];

const AboutUs = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let intervalId;
    const scrollInterval = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: scrollRef.current.clientWidth / 3, behavior: 'smooth' });
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    };

    const startScrolling = () => {
      intervalId = setInterval(() => {
        scrollInterval();
      }, 3000); // Change image every 3 seconds
    };

    startScrolling();

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollRef.current.clientWidth / 3, behavior: 'smooth' });
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollRef.current.clientWidth / 3, behavior: 'smooth' });
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  const handleClick = (index) => {
    setCurrentIndex(index);
    if (scrollRef.current) {
      const scrollAmount = (index - currentIndex) * (scrollRef.current.clientWidth / 3);
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="about-us">
      <h2>About Us</h2>
      <div className="image-scroll-wrapper">
        <button className="scroll-button left" onClick={scrollLeft}>❮</button>
        <div className="image-scroll" ref={scrollRef}>
          {images.map((src, index) => (
            <div className="image-container" key={index} onClick={() => handleClick(index)}>
              <img src={src} alt={`About us ${index}`} className="scroll-image" />
            </div>
          ))}
        </div>
        <button className="scroll-button right" onClick={scrollRight}>❯</button>
      </div>
    </div>
  );
};

export default AboutUs;
