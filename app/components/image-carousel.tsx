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

// Returns the next image index while looping back to the first slide.
function getNextIndex(currentIndex: number, totalImages: number) {
  return (currentIndex + 1) % totalImages;
}

// Returns the previous image index while looping to the last slide.
function getPreviousIndex(currentIndex: number, totalImages: number) {
  return (currentIndex - 1 + totalImages) % totalImages;
}

// Scrolls the carousel viewport to the selected image.
function scrollToImage(carouselRef: React.RefObject<HTMLDivElement | null>, index: number) {
  const carousel = carouselRef.current;

  if (!carousel) {
    return;
  }

  carousel.scrollTo({
    behavior: "smooth",
    left: carousel.clientWidth * index,
  });
}

// Renders the previous and next navigation buttons for the carousel.
function CarouselControls({
  currentIndex,
  totalImages,
  onSelect,
}: {
  currentIndex: number;
  totalImages: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="carousel-controls" aria-hidden="true">
      <button
        className="carousel-arrow"
        type="button"
        aria-label="Previous image"
        onClick={() => onSelect(getPreviousIndex(currentIndex, totalImages))}
      >
        &#8592;
      </button>

      <button
        className="carousel-arrow"
        type="button"
        aria-label="Next image"
        onClick={() => onSelect(getNextIndex(currentIndex, totalImages))}
      >
        &#8594;
      </button>
    </div>
  );
}

// Manages the carousel state, autoplay, and slide selection.
export function ImageCarousel({ images }: ImageCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const currentIndexRef = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) {
      return;
    }

    const interval = window.setInterval(() => {
      const nextIndex = getNextIndex(currentIndexRef.current, images.length);
      currentIndexRef.current = nextIndex;
      setCurrentIndex(nextIndex);
      scrollToImage(carouselRef, nextIndex);
    }, AUTO_SCROLL_INTERVAL);

    return () => window.clearInterval(interval);
  }, [images.length]);

  // Updates the active slide and scrolls the viewport to that image.
  function selectImage(index: number) {
    currentIndexRef.current = index;
    setCurrentIndex(index);
    scrollToImage(carouselRef, index);
  }

  // Syncs the active index with the user’s scroll position.
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

  // Renders each image slide in the horizontal carousel.
  function renderSlides() {
    return images.map((image, index) => (
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
    ));
  }

  // Renders the dot indicators used to jump to a specific image.
  function renderDots() {
    return images.map((image, index) => (
      <button
        className={`carousel-dot${index === currentIndex ? " is-active" : ""}`}
        key={image.src}
        type="button"
        aria-label={`Show image ${index + 1}`}
        aria-current={index === currentIndex ? "true" : undefined}
        onClick={() => selectImage(index)}
      />
    ));
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
        {renderSlides()}
      </div>

      <CarouselControls
        currentIndex={currentIndex}
        totalImages={images.length}
        onSelect={selectImage}
      />

      <div className="carousel-dots" aria-label="Choose an image">
        {renderDots()}
      </div>
    </section>
  );
}