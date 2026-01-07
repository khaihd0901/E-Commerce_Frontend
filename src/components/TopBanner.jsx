import React, { useEffect, useState } from "react";

export const TopBanner = () => {
  const slides = [
    "/images/ipad-1.png",
    "/images/ipad-2.png",
    "/images/ipad-3.png",
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
      <div className="lg:col-span-2 row-span-2 relative rounded-xl overflow-hidden bg-[#f3e3d8] p-8 flex items-center">
        {/* TEXT */}
        <div className="relative z-10 max-w-md">
          <p className="uppercase text-sm tracking-wide text-gray-600">
            Supercharged for pros
          </p>
          <h2 className="text-4xl font-bold mt-2">iPad S13+ Pro.</h2>
          <p className="mt-3 text-gray-700">
            From $999.00 or $41.62/mo. for 24 mo.
          </p>
          <button className="mt-6 bg-gray-900 text-white px-6 py-3 rounded-full text-sm">
            Buy Now
          </button>
        </div>

        {/* SLIDER IMAGES */}
        {slides.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="iPad Slide"
            className={`absolute right-0 bottom-0 h-full object-cover transition-opacity duration-700 
                ${index === current ? "opacity-100" : "opacity-0"}
              `}
          />
        ))}

        {/* DOTS */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2.5 h-2.5 rounded-full transition
                  ${index === current ? "bg-gray-900" : "bg-gray-400"}
                `}
            />
          ))}
        </div>
      </div>

      {/* RIGHT SMALL BANNERS */}
      <div className="rounded-xl bg-[#cdeaf5] p-6 relative">
        <p className="text-sm uppercase text-gray-600">Best Sale</p>
        <h3 className="text-xl font-semibold mt-1">Laptops Max</h3>
      </div>

      <div className="rounded-xl bg-[#f6e6d9] p-6 relative">
        <p className="text-sm uppercase text-gray-600">New Arrival</p>
        <h3 className="text-xl font-semibold mt-1">Buy iPad Air</h3>
      </div>

      <div className="rounded-xl bg-[#d8f0ea] p-6 relative">
        <p className="text-sm uppercase text-gray-600">15% Off</p>
        <h3 className="text-xl font-semibold mt-1">Smartwatch 7</h3>
      </div>

      <div className="rounded-xl bg-[#f4e1dc] p-6 relative">
        <p className="text-sm uppercase text-gray-600">Free Engraving</p>
        <h3 className="text-xl font-semibold mt-1">AirPods Max</h3>
      </div>
    </div>
  );
};
export default TopBanner;