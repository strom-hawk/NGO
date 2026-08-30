"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const AUTO_SCROLL_INTERVAL = 3000;

type CarouselImage = {
  src: string;
  alt: string;
};

type ImageCarouselProps = {
  images: CarouselImage[];
};

export function ImageCarousel({ images }: ImageCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const currentIndexRef = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) {
      return;
    }

    const interval = window.setInterval(() => {
      const nextIndex = (currentIndexRef.current + 1) % images.length;
      currentIndexRef.current = nextIndex;
      setCurrentIndex(nextIndex);
      carouselRef.current?.scrollTo({
        behavior: "smooth",
        left: carouselRef.current.clientWidth * nextIndex,
      });
    }, AUTO_SCROLL_INTERVAL);

    return () => window.clearInterval(interval);
  }, [images.length]);

  function selectImage(index: number) {
    currentIndexRef.current = index;
    setCurrentIndex(index);
    carouselRef.current?.scrollTo({
      behavior: "smooth",
      left: carouselRef.current.clientWidth * index,
    });
  }

  function handleScroll() {
    const carousel = carouselRef.current;

    if (!carousel || carousel.clientWidth === 0) {
      return;
    }

    const nextIndex = Math.round(carousel.scrollLeft / carousel.clientWidth);

    if (nextIndex !== currentIndexRef.current) {
      currentIndexRef.current = nextIndex;
      setCurrentIndex(nextIndex);
    }
  }

  if (images.length === 0) {
    return <p className="carousel-empty">Add images to display the carousel.</p>;
  }

  return (
    <section className="image-carousel" aria-label="Featured images">
      <div
        className="carousel-viewport"
        ref={carouselRef}
        onScroll={handleScroll}
        role="region"
        tabIndex={0}
        aria-roledescription="carousel"
        aria-label={`Image ${currentIndex + 1} of ${images.length}`}
      >
        {images.map((image, index) => (
          <div className="carousel-slide" key={image.src}>
            <Image
              className="carousel-image"
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 76rem"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      <div className="carousel-controls" aria-hidden="true">
        <button
          className="carousel-arrow"
          type="button"
          aria-label="Previous image"
          onClick={() => selectImage((currentIndex - 1 + images.length) % images.length)}
        >
          &#8592;
        </button>

        <button
          className="carousel-arrow"
          type="button"
          aria-label="Next image"
          onClick={() => selectImage((currentIndex + 1) % images.length)}
        >
          &#8594;
        </button>
      </div>

      <div className="carousel-dots" aria-label="Choose an image">
        {images.map((image, index) => (
          <button
            className={`carousel-dot${index === currentIndex ? " is-active" : ""}`}
            key={image.src}
            type="button"
            aria-label={`Show image ${index + 1}`}
            aria-current={index === currentIndex ? "true" : undefined}
            onClick={() => selectImage(index)}
          />
        ))}
      </div>
    </section>
  );
}