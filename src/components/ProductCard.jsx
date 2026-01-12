import { Link } from "react-router";

const ProductCard = ({product}) => {
  return (
    <>
      {/* {products.map((pro) => ( */}
        <div className="product-card bg-white rounded-xl shadow-sm p-4 relative hover:shadow-md overflow-hidden transition cursor-pointer">
          {/* Wishlist icon */}
          <button className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition">
            <i class="fa-solid fa-heart"></i>
          </button>
          {/* Product image */}
          <div className="flex justify-center mb-4">
            <img
              src={product.image}
              alt={product.title}
              className="h-40 object-contain"
            />
          </div>
          {/* Product info */}
          <div className="space-y-1">
            <p className="text-sm text-orange-600 font-semibold">
              {product.brand}
            </p>

            <h3 className="text-sm font-medium leading-snug line-clamp-2">
              {product.title}
            </h3>
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

          <div className="action-bar flex mt-3 flex-col gap-2 absolute top-[10%]">
            <Link><i class="fa-solid fa-eye text-gray-400 hover:text-[var(--color-febd69)] transition"></i></Link>
            <Link><i class="fa-solid fa-left-right text-gray-400 hover:text-[var(--color-febd69)] transition"></i></Link>
            <Link><i class="fa-solid fa-cart-plus text-gray-400 hover:text-[var(--color-febd69)] transition"></i></Link>
          </div>
        </div>
      {/* ))} */}
    </>
  );
};

export default ProductCard;
