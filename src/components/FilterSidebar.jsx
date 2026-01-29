import { useCategoryStore } from "@/stores/categoryStore";
import { ChevronLast, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
const randomProducts = [
  {
    id: 1,
    title: "Kids Headphones Bulk 10 Pack Multi Colored For...",
    price: 100,
    image: "/images/cat-headphone.png",
  },
  {
    id: 2,
    title: "APPLE Watch Series 2 - 42 MM Stainless Steel...",
    price: 100,
    image: "/images/cat-watch.png",
  },
    {
    id: 3,
    title: "APPLE Watch Series 2 - 42 MM Stainless Steel...",
    price: 100,
    image: "/images/cat-gaming.png",
  },
];
const FilterSidebar = () => {
  const { categories } = useCategoryStore();
  return (
    <>
      <div className="col-span-1 flex flex-col justify-between row-span-3 gap-4 self-start">
        <div className="">
          <div className="bg-white p-4 h-fit rounded-xl shadow-sm">
            <h2 className="font-semibold text-lg mb-4">Shop By Categories</h2>

            <ul className="space-y-2 text-sm text-gray-600 leading-8">
              {categories.map((cate, index) => (
                <li
                  key={index}
                  className="cursor-pointer w-full flex items-center gap-1 hover:text-black transition"
                >
                  <ChevronRight className="w-5" />
                  {cate.categoryName}
                  <span>[{cate.products.length}]</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="">
          <div className="bg-white p-4 rounded-xl shadow-sm space-y-6 h-full">
            <h2 className="font-semibold text-lg">Filter By</h2>

            {/* Availability */}
            <div>
              <h3 className="font-semibold mb-2">Status</h3>
              <div className="space-y-1 text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Is Organic (21)
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Discount (21)
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Available (21)
                </label>
              </div>
            </div>

            {/* Price */}
            <div>
              <h3 className="font-semibold mb-2">Price</h3>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="$ From"
                  className="w-1/2 border rounded px-2 py-1 text-sm"
                />
                <input
                  type="number"
                  placeholder="$ To"
                  className="w-1/2 border rounded px-2 py-1 text-sm"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="">
          <div className="bg-white p-4 rounded-xl shadow-sm h-full">
            <h2 className="font-semibold text-lg mb-4">Product Tag</h2>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTag(tag)}
                  className={`
              px-3 py-1 text-sm rounded-md transition
              ${
                activeTag === tag
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }
            `}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div> */}
        <div className="">
          <div className="bg-white p-4 rounded-xl shadow-sm h-full">
            <h2 className="font-semibold text-lg mb-4">Recommend Products</h2>

            <div className="space-y-4">
              {randomProducts.map((product) => (
                <div key={product.id} className="flex gap-4 items-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-14 h-14 object-contain border rounded-md p-1"
                  />

                  <div className="flex-1">
                    <p className="text-sm font-medium leading-tight line-clamp-2">
                      {product.title}
                    </p>

                    <div className="flex items-center gap-1 mt-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <i
                          key={i}
                          className={`fa-star text-xs fa-solid ${
                            i < 4 ? "text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>

                    <p className="text-sm font-semibold mt-1">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;
