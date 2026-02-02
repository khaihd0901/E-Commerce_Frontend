import { useState, useEffect, useRef } from "react";
import ProductCard from "./ProductCard";

const VISIBLE_COUNT = 5;

const TopSelling = ({ products }) => {
  const [index, setIndex] = useState(VISIBLE_COUNT);
  const [transition, setTransition] = useState(true);
  const sliderRef = useRef(null);

  // clone items
  const extendedProducts = [
    ...products.slice(-VISIBLE_COUNT),
    ...products,
    ...products.slice(0, VISIBLE_COUNT),
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setIndex((prev) => prev - 1);
  };

  // reset position when reaching clones
  useEffect(() => {
    if (index === extendedProducts.length - VISIBLE_COUNT) {
      setTimeout(() => {
        setTransition(false);
        setIndex(VISIBLE_COUNT);
      }, 300);
    }

    if (index === 0) {
      setTimeout(() => {
        setTransition(false);
        setIndex(extendedProducts.length - VISIBLE_COUNT * 2);
      }, 300);
    }
  }, [index]);

  // re-enable transition
  useEffect(() => {
    if (!transition) {
      requestAnimationFrame(() => {
        setTransition(true);
      });
    }
  }, [transition]);
  return (
    <div className="py-8 overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Top Selling</h2>
        <div className="flex gap-3">
          <button onClick={handlePrev}>
            <i className="fa-solid fa-chevron-left hover:text-[var(--color-febd69)]" />
          </button>
          <button onClick={handleNext}>
            <i className="fa-solid fa-chevron-right hover:text-[var(--color-febd69)]" />
          </button>
        </div>
      </div>
      {/* Slider */}
      <div className="relative">
        <div
          ref={sliderRef}
          className={`flex ${
            transition ? "transition-transform duration-300" : ""
          }`}
          style={{
            transform: `translateX(-${index * 20}%)`,
          }}
        >
          {extendedProducts.map((product, i) => (
            <div key={i} className="w-1/5 px-1 shrink-0">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSelling;
