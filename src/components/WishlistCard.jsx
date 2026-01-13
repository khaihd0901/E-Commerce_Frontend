import { Link } from "react-router";
import { BreadCrumb } from "./BreadCrumb";

const WishlistCard = ({ item }) => {
  return (
    <>
    <div className="bg-white rounded-xl shadow-sm p-4 relative">
      {/* Remove */}
      <button
        className="absolute top-3 right-3 text-gray-400 hover:text-red-500"
        title="Remove"
      >
        <i className="fa-solid fa-xmark"></i>
      </button>

      <img
        src={item.image}
        alt={item.title}
        className="w-full h-40 object-contain mb-4"
      />

      <h3 className="text-sm font-semibold line-clamp-2">
        {item.title}
      </h3>

      <p className="text-lg font-bold mt-2">${item.price}</p>

      <div className="flex gap-2 mt-4">
        <button className="flex-1 py-2 bg-[var(--color-232f3e)] text-white rounded-lg text-sm">
          Add to Cart
        </button>

        <Link
          to="/product/1"
          className="flex-1 py-2 border rounded-lg text-center text-sm"
        >
          View
        </Link>
      </div>
    </div>
    </>
  );
};
export default WishlistCard