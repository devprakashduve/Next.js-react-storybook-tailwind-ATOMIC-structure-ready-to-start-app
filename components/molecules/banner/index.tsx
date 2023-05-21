import React, { useState } from "react";
import { BannerProps } from "./_banner.interface";

import Img from "../../atoms/img";

const Banner = (props: BannerProps) => {
  const items = [
    {
      imageUrl: "/images/image-1.jpg",
      caption: "Slide 1",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? items.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === items.length - 1 ? 0 : currentSlide + 1);
  };
  return (
    <div className="relative w-full h-40">
      {items.map((item: any, index: any) => (
        <div
          key={index}
          className={`absolute w-full h-full ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          } transition-opacity duration-500 ease-in-out`}
        >
          <Img
            src={item.imageUrl}
            alt={item.caption}
            classes="w-full h-full object-cover filter"
          />
          {props.caption ? (
            <p className="absolute bottom-4 left-4 text-white text-lg font-semibold">
              {item.caption}
            </p>
          ) : null}
        </div>
      ))}
      {props.isIndicator ? (
        <>
          <div className="absolute bottom-1/2 left-4 z-10">
            <button
              onClick={prevSlide}
              className="bg-black text-white px-4 py-2 rounded-md"
            >
              Previous
            </button>
          </div>
          <div className="absolute bottom-1/2 right-4 z-10">
            <button
              onClick={nextSlide}
              className="bg-black text-white px-4 py-2 rounded-md"
            >
              Next
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Banner;
