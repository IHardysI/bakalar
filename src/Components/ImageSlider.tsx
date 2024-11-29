// src/components/ImageSlider.tsx
import React, { useState, useEffect } from 'react';

const images: string[] = [
  'http://www.hcslavojvelkepopovice.cz/uvod/TH_24/DSC_0061.jpg',
  'http://www.hcslavojvelkepopovice.cz/uvod/TH_24/DSC_0074.jpg',
  'http://www.hcslavojvelkepopovice.cz/uvod/TH_24/DSC_0077.jpg',
  'http://www.hcslavojvelkepopovice.cz/uvod/TH_24/DSC_0099.jpg',
  'http://www.hcslavojvelkepopovice.cz/uvod/TH_24/DSC_0016.jpg',
];

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // Start fade-out
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setFade(false); // Start fade-in
      }, 100); // Match this duration with the CSS transition duration (100ms)
    }, 8000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Preload next image for smoother transitions
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % images.length;
    const img = new Image();
    img.src = images[nextIndex];
  }, [currentIndex]);

  return (
    <div className="rounded-xl w-full mx-auto overflow-hidden">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className={`object-cover w-full h-auto transition-opacity duration-100 ease-in-out ${
          fade ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <p className='rounded-b-xl py-3 w-full bg-black/70 text-center -translate-y-5'>TÝDEN HOKEJE 2024</p>
    </div>
  );
};

export default ImageSlider;
