import React, { useRef, useEffect, useState } from 'react';
import Card from './Card';
import './Carousel.css';

interface CarouselProps {
  items: Array<{
    title: string;
    description: string;
    image: string;
    link: string;
  }>;
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(items.length);

  const duplicatedItems = [...items, ...items, ...items];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const itemWidth = container.clientWidth / items.length;
      const index = Math.round(scrollLeft / itemWidth);

      if (index < items.length) {
        container.scrollLeft = itemWidth * (index + items.length);
        setCurrentIndex(index + items.length);
      } else if (index >= 2 * items.length) {
        container.scrollLeft = itemWidth * (index - items.length);
        setCurrentIndex(index - items.length);
      } else {
        setCurrentIndex(index);
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [items]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const itemWidth = container.clientWidth / items.length;
    container.scrollLeft = itemWidth * items.length;
  }, [items]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const itemWidth = scrollContainerRef.current.clientWidth / items.length;
      const newIndex = direction === "left" ? currentIndex - 1 : currentIndex + 1;
      scrollContainerRef.current.scrollTo({
        left: itemWidth * newIndex,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="carousel-container">
      <div className="scroll-buttons">
        <button
          onClick={() => scroll("left")}
          aria-label="Previous slide"
          className="scroll-button left"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 8"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.292892 0.292894C0.683416 -0.0976306 1.31658 -0.0976315 1.70711 0.292892L7.00002 5.58579L12.2929 0.292894C12.6834 -0.0976306 13.3166 -0.0976315 13.7071 0.292892C14.0976 0.683416 14.0976 1.31658 13.7071 1.70711L7.70713 7.70711C7.51959 7.89464 7.26524 8 7.00002 8C6.7348 8 6.48045 7.89464 6.29291 7.70711L0.292894 1.70711C-0.0976306 1.31658 -0.0976315 0.683419 0.292892 0.292894Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <button
          onClick={() => scroll("right")}
          aria-label="Next slide"
          className="scroll-button right"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 8"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.292892 0.292894C0.683416 -0.0976306 1.31658 -0.0976315 1.70711 0.292892L7.00002 5.58579L12.2929 0.292894C12.6834 -0.0976306 13.3166 -0.0976315 13.7071 0.292892C14.0976 0.683416 14.0976 1.31658 13.7071 1.70711L7.70713 7.70711C7.51959 7.89464 7.26524 8 7.00002 8C6.7348 8 6.48045 7.89464 6.29291 7.70711L0.292894 1.70711C-0.0976306 1.31658 -0.0976315 0.683419 0.292892 0.292894Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
      <div className="carousel-scroll-container" ref={scrollContainerRef}>
        {duplicatedItems.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;