import { BreadCrumb } from "@/components/BreadCrumb";
import FilterSidebar from "@/components/FilterSidebar";
import ProductCard from "@/components/ProductCard";
import { useProductStore } from "@/stores/productStore";
import { useEffect, useState } from "react";

const OurShop = () => {
  const [filters, setFilters] = useState({
    category: "",
    price_gte: "",
    price_lte: "",
    isOrganic: false,
    discount: false,
    sort: "-harvestDate",
  });

  const { searchResults, productSearch, isLoading } = useProductStore();
console.log(searchResults)
  useEffect(() => {
    const params = new URLSearchParams();

    if (filters.category) params.append("category", filters.category);
    if (filters.price_gte) params.append("price[gte]", filters.price_gte);
    if (filters.price_lte) params.append("price[lte]", filters.price_lte);

    if (filters.isOrganic) params.append("isOrganic", true);
    if (filters.discount) params.append("discount", true);

    if (filters.sort) params.append("sort", filters.sort);
    productSearch(params.toString());
  }, [filters, productSearch]);

  return (
    <>
      <BreadCrumb />
      <div className="grid grid-cols-4 gap-4 py-5">
        <FilterSidebar filters={filters} setFilters={setFilters} />

        <div className="col-span-3 grid gap-4">
          {/* SORT */}
          <div className="shadow-sm rounded-xl bg-white py-4 px-4 flex justify-between">
            <div className="flex items-center gap-4">
              <label className="font-semibold text-sm">Sort By:</label>
              <select
                value={filters.sort}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, sort: e.target.value }))
                }
                className="border rounded px-3 py-2 text-sm"
              >
                <option value="-harvestDate">Latest</option>
                <option value="price">Price: Low → High</option>
                <option value="-price">Price: High → Low</option>
                <option value="-rating">Best Rating</option>
              </select>
            </div>

            <p className="text-sm">{searchResults?.length} products</p>
          </div>

          {/* PRODUCTS */}
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {searchResults?.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default OurShop;
