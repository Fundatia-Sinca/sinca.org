'use client'
import { useState, useRef, useEffect } from 'react';
import { PrismicNextLink, PrismicNextImage } from '@prismicio/next';

// SVG Icons
const ArrowLeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if(nextIndex == items.length-2){
            setIsTransitioning(false);
            return 0;
        }
        return nextIndex >= items.length ? 0 : nextIndex;
      });
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    }
  };

  // Automatically advance the carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); 

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Handle transition end to reset transitioning state
  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  const itemsToShow = 3;
  const itemWidthPercentage = 100 / itemsToShow;

  return (
    <div className="carousel-container relative overflow-hidden">
      {/* Previous and Next buttons */}
      <div className="flex justify-end items-center gap-4 sm:mx-0 mb-5">
        <button onClick={prevSlide} className="transform bg-brand-brown text-brand-light px-5 py-1 rounded-md z-10">
          <ArrowLeftIcon className="h-6 w-6 mr-1 hover:bg-brand-light hover:text-brand-brown" />
        </button>
        <button onClick={nextSlide} className="transform bg-brand-brown text-brand-light px-5 py-1 rounded-md z-10">
          <ArrowRightIcon className="h-6 w-6 ml-1 hover:bg-brand-light hover:text-brand-brown" />
        </button>
      </div>

      <div
        className="carousel flex transition-transform duration-500 gap-10 sm:gap-44 p-5 items-center"
        style={{
          transform: `translateX(-${currentIndex * itemWidthPercentage}%)`,
        }}
        ref={containerRef}
        onTransitionEnd={handleTransitionEnd}
      >
        {items.map((item, index) => (
          <div key={index} className="carousel-item flex-shrink-0 w-full sm:w-auto">
            <div className="rounded-lg pb-8">
              <PrismicNextLink
                field={item.link}
                className="block w-full h-full rounded-lg overflow-hidden justify-center items-center"
              >
                <PrismicNextImage className="w-auto max-w-full max-h-32" field={item.image} />
              </PrismicNextLink>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute flex gap-1 bottom-2 left-1/2 -translate-x-1/2">
        {items.slice(1, items.length - 1).map((_, index) => (
          <span
            key={index + 1}
            className={`block w-1.5 h-1.5 rounded-full border-2 border-gray-600 ${
              (currentIndex === index + 1) ? 'bg-slate-600' : ''
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
