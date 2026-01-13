import { BreadCrumb } from "@/components/BreadCrumb";
import React from "react";

const cartItems = [
  {
    id: 1,
    title: "Kids Headphones",
    price: 100,
    quantity: 1,
    image: "/images/headphone.png",
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 150,
    quantity: 2,
    image: "/images/watch.png",
  },
];

const ShoppingCart = () => {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
    <BreadCrumb title='My Cart'/>
    <div className="max-w-5xl mx-auto py-10 grid grid-cols-1 lg:grid-cols-3 gap-6">

      {/* LEFT – Cart Items */}
      <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-6">Shopping Cart</h2>

        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b py-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain border rounded"
              />
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500">${item.price}</p>
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-3">
              <button className="w-7 h-7 border rounded">-</button>
              <span>{item.quantity}</span>
              <button className="w-7 h-7 border rounded">+</button>
            </div>

            {/* Total */}
            <p className="font-semibold">
              ${(item.price * item.quantity).toFixed(2)}
            </p>

            {/* Remove */}
            <button className="text-red-500 text-sm hover:underline">
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* RIGHT – Summary */}
      <div className="bg-white rounded-xl shadow-sm p-6 h-fit">
        <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

        <div className="flex justify-between text-sm mb-2">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-sm mb-2">
          <span>Shipping</span>
          <span>$10.00</span>
        </div>

        <hr className="my-3" />

        <div className="flex justify-between font-semibold mb-6">
          <span>Total</span>
          <span>${(subtotal + 10).toFixed(2)}</span>
        </div>

        <button className="w-full bg-[var(--color-fdaa3d)] text-black py-3 rounded-lg hover:opacity-90 transition">
          Proceed to Checkout
        </button>
      </div>
    </div>
    </>
  );
};

export default ShoppingCart;
