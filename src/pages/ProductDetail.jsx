import { BreadCrumb } from "@/components/BreadCrumb";
import React, { useEffect, useState } from "react";
import ReviewModal from "@/components/ReviewModel";
import PopularProduct from "@/components/PopularProduct";
import { useParams } from "react-router";
import { useProductStore } from "@/stores/productStore";
const ProductDetail = () => {
  const [open, setOpen] = useState(false);
  const prodId = useParams();
  const { productGetById } = useProductStore();
  const product = useProductStore((s) => s.product);
  useEffect(() => {
    productGetById(prodId.id);
  }, [prodId.id]);

  useEffect(() => {
    console.log("product updated:", product);
  }, [product]);
  return (
    <>
      <BreadCrumb/>

      {/* Product Detail */}
      <div className="py-8">
        <div className="grid grid-cols-2 rounded-xl shadow bg-white relative">
          <div className="grid grid-cols-2 px-4 py-4 gap-4">
            <div className="col-span-2 relative">
              <img
                src={product?.images[0].url}
                alt=""
                className="border border-gray-200"
              />
            {product?.isOrganic && (
              <img
                src="../../public/images/organic.png"
                alt="organic"
                className="max-w-20 absolute top-3 right-3"
              />
            )}
            </div>
          </div>
          <div className="col-span-1 px-4 py-4 relative">
            {/* RIGHT – Product Info */}
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">
                {product?.title}
              </h1>

              <p className="text-lg font-bold">${product?.price}</p>

              {/* Rating */}
              <div className="flex items-center gap-2 text-sm">
                <div className="text-yellow-400">★★★★★</div>
                <span className="text-gray-500">(2 reviews)</span>
                <button
                  onClick={() => setOpen(true)}
                  className="text-blue-600 hover:underline ml-2"
                >
                  Write a review
                </button>
              </div>

              <hr />

              {/* Meta Info */}
              <div className="space-y-4 text-sm ">
                <p>
                  <span className="font-semibold">Type: {product?.category.categoryName}</span> 
                </p>
                <p>
                  <span className="font-semibold">Brand:</span> {product?.brand.name}
                </p>
                <div className="flex gap-2 items-center">
                  <div className="font-semibold">Tags:</div> {product?.tags.map((t)=> (
                    <span className="px-4 py-2 bg-gray-100 rounded shadow">{t}</span>
                  ))}
                </div>
                <p>
                  <span className="font-semibold">Sold: {product?.sold}</span>
                </p>
                <p className="text-green-600">
                  <span className="font-semibold text-gray-800">
                    Availability:
                  </span>{" "}
                  {product?.stock} In Stock
                </p>
              </div>

              <div className="flex gap-2 items-center">
                <p className="font-semibold text-sm">Origin: </p>
                <span className="text-sm">{product?.origin}</span>
              </div>

              <div className="flex gap-2 items-center">
                <p className="font-semibold text-sm">Farm Name: </p>
                <span className="text-sm">{product?.farmName}</span>
              </div>
              <div className="flex gap-2 items-center">
                <p className="font-semibold text-sm">Status: </p>
                <span className="text-sm capitalize">{product?.status}</span>
              </div>

              <div className="flex gap-2 items-center">
                <p className="font-semibold text-sm">Storage: </p>
                <span className="text-sm capitalize">{product?.storage}</span>
              </div>
              {/* Actions */}
              <div className="flex gap-4 pt-4 items-center">
                <p className="font-semibold text-sm">Quantity</p>
                <input
                  type="number"
                  defaultValue={1}
                  className="py-2 pl-4 w-15 border border-gray-400 focus:outline-0"
                />
                <button className="bg-[var(--color-232f3e)] text-white px-6 py-2 rounded-lg hover:opacity-90">
                  Add to Cart
                </button>
                <button className="border px-6 py-2 rounded-lg bg-[var(--color-febd69)] hover:bg-[var(--color-fdaa3d)]">
                  Buy It Now
                </button>
              </div>
            </div>
          </div>
          <i className="fa-solid fa-heart absolute top-4 right-2 text-black hover:text-red-600 cursor-pointer text-2xl"></i>
        </div>
      </div>

      {/* Product Description */}
      <div className="py-8">
        <h1 className="font-bold text-2xl pb-4">Description</h1>
        <div className="rounded-xl shadow bg-white py-4 px-4">
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            facere officia reprehenderit quibusdam ad recusandae eos debitis?
            Magni distinctio et, rem possimus necessitatibus saepe vero eaque
            eveniet, ea adipisci optio hic! Corrupti similique quisquam fugit
            sit numquam provident sequi incidunt ab non tenetur amet ullam
            dignissimos, officiis, esse ut illo. Alias ut voluptas
            exercitationem iure neque sed explicabo, aliquid error eaque, vitae
            non sint numquam quis quae est itaque maxime deserunt. Animi, unde,
            quas cum minus nobis voluptatibus beatae laudantium omnis officia
            praesentium consectetur necessitatibus, asperiores eveniet iure
            earum! Aliquid enim ea fuga omnis, eaque fugiat sunt molestiae
            labore aspernatur?
          </p>
        </div>
      </div>

      {/* Review */}
      <div className="py-8">
        <h1 className="font-bold text-2xl pb-4">Reviews</h1>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center border-b pb-3 mb-6">
            <div>
              <h2 className="text-lg font-semibold">Customer Reviews</h2>
              <div className="flex items-center gap-2 text-sm mt-1">
                <div className="flex text-yellow-400">★★★★☆</div>
                <span className="text-gray-500">Based on 2 reviews</span>
              </div>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="text-sm text-blue-600 hover:underline"
            >
              Write a review
            </button>
            <ReviewModal isOpen={open} onClose={() => setOpen(false)} />
          </div>
          {/* Review List */}
          <div className="space-y-8">
            <div className="border-b pb-6">
              <div className="flex text-yellow-400 mb-1">★★★★☆</div>
              <h3 className="font-semibold">Good</h3>
              <p className="text-sm text-gray-500 italic">
                aaaaaaaaaa on{" "}
                <span className="font-medium text-gray-700">Aug 29, 2022</span>
              </p>
              <p className="text-sm mt-2 text-gray-700">safasf</p>

              <div className="flex justify-end mt-2">
                <button className="text-xs text-gray-400 hover:underline">
                  Report as Inappropriate
                </button>
              </div>
            </div>
            <div>
              <div className="flex text-yellow-400 mb-1">★★★★★</div>
              <h3 className="font-semibold">Nice Quality, I’ll Buy It Again</h3>
              <p className="text-sm text-gray-500 italic">
                admin on{" "}
                <span className="font-medium text-gray-700">Jun 20, 2022</span>
              </p>
              <p className="text-sm mt-2 text-gray-700">
                Great stuff, I think I will get more orders from you guys
              </p>

              {/* Admin Reply */}
              <div className="mt-4 bg-gray-100 p-4 rounded-md">
                <p className="text-sm font-semibold mb-1">– Digitic</p>
                <p className="text-sm text-gray-600">
                  Thank you for your purchase from. Please let us know if we can
                  do anything else for you!
                </p>
              </div>

              <div className="flex justify-end mt-2">
                <button className="text-xs text-gray-400 hover:underline">
                  Report as Inappropriate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Populate Product */}
      {/* <PopularProduct /> */}
    </>
  );
};

export default ProductDetail;
