import { BreadCrumb } from "@/components/BreadCrumb";
import FilterSidebar from "@/components/FilterSidebar";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/testData";
import React, { useState } from "react";

const OurShop = () => {
  const [value, setValue] = useState("default");
  return (
    <>
      <BreadCrumb title="Our Store" />
      <div className="grid grid-cols-4 gap-4 py-5">
        <FilterSidebar />
        <div className="col-span-3 grid gap-4">
          <div className="col-span-3 shadow-sm rounded-xl h-fit">
            <div className="bg-white flex justify-between items-center py-4 px-4">
              <div className="flex items-center gap-5 sticky top-4 h-fit">
                <label className="text-sm font-semibold mb-1">Sort By:</label>
                <select
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="w-56 px-3 py-2 border border-gray-300 rounded-lg
                   text-sm focus:outline-none bg-white"
                >
                  <option value="default">Default</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                  <option value="latest">Latest</option>
                  <option value="rating">Best Rating</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-[14px]">{products.length} products</p>
              </div>
            </div>
          </div>
          {/* List Products */}
          <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 row-span-10 gap-4">
            {products.map((product) => (
                <ProductCard product={product} key={product._id} />
            ))}
          </div>

          <div className="bg-white rounded-xl shadow col-span-3 row-span-1 h-fit">
            <div className="flex justify-between items-center py-2 px-4">
              <p>Showing 15 of 21</p>
              <div className="flex gap-4 py-2">
                <button>
                  <i className="fa-solid fa-chevron-left hover:text-[var(--color-febd69)]" />
                </button>

                <div className="flex gap-5">
                  <span>1</span>
                  <span className="bg-black text-white w-7 text-center rounded-full">2</span>
                  <span>3</span>
                </div>

                <button>
                  <i className="fa-solid fa-chevron-right hover:text-[var(--color-febd69)]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurShop;
