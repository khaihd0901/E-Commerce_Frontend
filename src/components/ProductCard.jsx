import { useUserStore } from "@/stores/userStore";
import { Eye, ShoppingBag, ShoppingBagIcon, ShoppingCart } from "lucide-react";
import { Link } from "react-router";
import { toast } from "sonner";

const ProductCard = ({ product }) => {
  const { userAddProductToWishList } = useUserStore();
  const handleAddToWishList = async (prodId) => {
    if (prodId) {
      await userAddProductToWishList(prodId);
    } else {
      toast.error("something went wrong");
    }
  };
  return (
    <>
      {/* {products.map((pro) => ( */}
      <div className="product-card bg-white rounded-xl shadow-sm p-4 relative hover:shadow-md overflow-hidden transition cursor-pointer">
        {/* Product image */}

        <div>
          <div className="flex justify-center mb-4">
            <img
              src={product.images[0].url}
              alt={product.title}
              className="h-40 object-contain"
            />
          </div>
          {/* Product info */}
          <div className="space-y-1">
            <p className=" text-sm text-gray-800 font-semibold">
              {product.title}
            </p>
            <h3 className="text-sm font-medium leading-snug line-clamp-2">
              {product.brand.name}
            </h3>
            <div className="flex justify-between items-center">
              {/* Rating */}
              <div className="flex text-yellow-400 text-sm">
                {Array.from({ length: 5 }).map((_, i) => (
                  <i
                    key={i}
                    className={`fa-star ${
                      i < product.rating ? "fa-solid" : "fa-regular"
                    }`}
                  ></i>
                ))}
              </div>
              {/* Price */}
              <p className="font-semibold text-lg">${product.price}</p>
            </div>
            <div className="w-full py-1 px-2 flex justify-center items-center bg-[var(--color-fdaa3d)] border border-gray-400 hover:bg-[var(--color-febd69)] gap-2 rounded">
              <p className="text-sm font-semibold uppercase">add to cart</p>
              <ShoppingBag className="w-5" />
            </div>
          </div>
        </div>
        <div className="action-bar flex flex-col absolute top-2 bg-white border border-gray-300 px-1 py-1 rounded">
          <button
            onClick={() => handleAddToWishList(product._id)}
            className=" text-gray-400 hover:text-red-500 transition border-b border-gray-300"
          >
            <i class="fa-solid fa-heart"></i>
          </button>
          <Link to={`/products/${product._id}`}>
            <Eye className=" text-gray-400 hover:text-[var(--color-febd69)] transition w-5" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
