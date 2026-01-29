import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";

export const TopBanner = () => {
  const slides = [
    "../../public/images/slide1.png",
    "../../public/images/slide2.png",
    "../../public/images/slide3.png",
  ];

  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 py-8">
      {/* LEFT BIG BANNER */}
      <div className="lg:col-span-2 row-span-2 relative rounded-xl overflow-hidden bg-white p-8 flex items-center">
        {/* TEXT */}
        <div className="relative z-10 max-w-md">
          <p className="uppercase text-2xl font-bold tracking-wide text-black">
            Supercharged for pros
          </p>
          <h2 className="text-4xl font-bold mt-2 text-black">Freshest </h2>
          <p className="mt-3 font-bold text-black mb-4">From $1.00 to $99</p>
          <NavLink to='/products' className=" bg-[var(--color-fdaa3d)] text-black px-6 py-3 rounded text-sm">
            Buy Now
          </NavLink>
        </div>
        {/* SLIDER IMAGES */}
        {slides.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className={`absolute right-0 bottom-0 h-full object-cover transition-all duration-700
                ${index === current ? "opacity-100" : "opacity-0"}
              `}
          />
        ))}
      </div>

      {/* RIGHT SMALL BANNERS */}
      <div className="rounded-xl bg-[#cdeaf5] p-6 relative">
        <h3 className="text-xl font-semibold mt-1">“Fresh from Farm, Cut with Care.”</h3>
      </div>

      <div className="rounded-xl bg-[#f6e6d9] p-6 relative">
        <h3 className="text-xl font-semibold mt-1">“Pure Vegetables. Premium Meat. Daily Fresh.”</h3>
      </div>

      <div className="rounded-xl bg-[#d8f0ea] p-6 relative">
        <h3 className="text-xl font-semibold mt-1">“Where Freshness Meets Quality.”</h3>
      </div>

      <div className="rounded-xl bg-[#f4e1dc] p-6 relative">
        <h3 className="text-xl font-semibold mt-1">“From Green Fields to Fresh Cuts.”</h3>
      </div>
    </div>
  );
};
export default TopBanner;
