import { useState, useEffect, useRef } from "react";
import {products} from "../lib/testData";
import ProductCard from "./ProductCard";

const VISIBLE_COUNT = 3;
const PopularProduct = () => {
  const categories = [
    { name: "Smart Watch", active: true },
    { name: "Speaker" },
    { name: "Laptops" },
  ];
  // clone items
  const extendedProducts = [
    ...products.slice(-VISIBLE_COUNT),
    ...products,
    ...products.slice(0, VISIBLE_COUNT),
  ];

  const [index, setIndex] = useState(VISIBLE_COUNT);
  const [transition, setTransition] = useState(true);
  const sliderRef = useRef(null);

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
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Our Popular Products</h2>
        <div className="flex gap-3">
          <button onClick={handlePrev}>
            <i className="fa-solid fa-chevron-left hover:text-[var(--color-febd69)]" />
          </button>
          <button onClick={handleNext}>
            <i className="fa-solid fa-chevron-right hover:text-[var(--color-febd69)]" />
          </button>
        </div>
      </div>
      <div className="relative grid grid-cols-12 gap-2 overflow-hidden ">
        {/* Sidebar */}
        <aside className="col-span-12 md:col-span-2 bg-white rounded-xl p-4 shadow-sm">
          <h3 className="font-semibold mb-4">Categories</h3>
          <ul className="space-y-3">
            {categories.map((c) => (
              <li
                key={c.name}
                className={`cursor-pointer text-sm font-medium px-3 py-2 rounded-lg ${
                  c.active
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {c.name}
              </li>
            ))}
          </ul>
        </aside>
        {/* Banner */}
        <div className="col-span-12 md:col-span-3 bg-slate-900 rounded-xl text-white p-6 flex flex-col justify-between">
          <div>
            <span className="text-xs text-orange-400 font-semibold">
              15% OFF
            </span>
            <h2 className="text-2xl font-bold mt-2">Home Speakers</h2>
            <p className="text-sm text-gray-300 mt-2">
              From $399 or $16.62/mo. for 24 mo.
            </p>
          </div>
          <div className="mt-6">
            <div className="h-32 bg-orange-400 rounded-full" />
          </div>
        </div>
      {/* Products */}
      <div className="relative col-span-12 md:col-span-7 overflow-hidden">
        <div
          ref={sliderRef}
          className={`flex ${
            transition ? "transition-transform duration-300" : ""
          }`}
          style={{
            transform: `translateX(-${index * (100 / VISIBLE_COUNT)}%)`,
          }}
        >
          {extendedProducts.map((product, i) => (
            <div
              key={i}
              className="w-1/3 px-1 shrink-0"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default PopularProduct;
