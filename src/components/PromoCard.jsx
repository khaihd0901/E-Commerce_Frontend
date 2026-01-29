import React from "react";
import { Link } from "react-router";

const PromoCard = () => {
  return (
    <div className="pt-16 pb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {/* Card 2 */}
        <div className="flex justify-center relative">
          <img
            src="../../public/images/banneroffers-01.webp"
            alt="Display"
            className="object-contain"
          />
          <div className="absolute left-0 p-5">
            <p className="text-xs uppercase tracking-wide text-gray-100 underline">
              Get off 15%
            </p>
            <h2 className="text-2xl font-bold mt-2 text-gray-100 mb-5 capitalize">Sea Food</h2>
            <Link to={`/products`} className="px-2 py-2 bg-[var(--color-fdaa3d)] rounded font-semibold"> Shop Now </Link>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex justify-center relative">
          <img
            src="../../public/images/banneroffers-02.webp"
            alt="Display"
            className="object-contain"
          />
          <div className="absolute left-0 p-5">
            <p className="text-xs uppercase tracking-wide text-gray-100 underline">
              Get off 25%
            </p>
            <h2 className="text-2xl font-bold mt-2 text-gray-100 mb-5 capitalize">Freshly baked bread</h2>
            <Link to={`/products`} className="px-2 py-2 bg-[var(--color-fdaa3d)] rounded font-semibold"> Shop Now </Link>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex justify-center relative">
          <img
            src="../../public/images/banneroffers-03.webp"
            alt="Display"
            className="object-contain"
          />
          <div className="absolute left-0 p-5">
            <p className="text-xs uppercase tracking-wide text-gray-100 underline">
              Get off 30%
            </p>
            <h2 className="text-2xl font-bold mt-2 text-gray-100 mb-5 capitalize">Fruits and vegetables</h2>
            <Link to={`/products`} className="px-2 py-2 bg-[var(--color-fdaa3d)] rounded font-semibold"> Shop Now </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoCard;
