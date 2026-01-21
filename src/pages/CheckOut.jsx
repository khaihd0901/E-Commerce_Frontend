import React, { useState } from "react";

const CheckOut = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      {/* STEP INDICATOR */}
      <div className="flex items-center justify-between mb-8">
        {["Shipping", "Payment", "Review"].map((label, index) => (
          <React.Fragment key={label}>
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm
                ${
                  step >= index + 1
                    ? "bg-[var(--color-232f3e)] text-white"
                    : "bg-gray-200"
                }`}
              >
                ✓
              </div>
              <p className="text-sm mt-1">{label}</p>
            </div>
            {index < 2 && <div className="flex-1 h-[1px] bg-gray-300 mx-2" />}
          </React.Fragment>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
          {/* STEP 1 – SHIPPING */}
          {step === 1 && (
            <>
              <h2 className="text-xl font-semibold mb-4">
                Shipping Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Full Name",
                  "Phone",
                  "Address",
                  "City",
                  "Postal Code",
                  "Country",
                ].map((label) => (
                  <div key={label}>
                    <label className="text-sm text-gray-500">{label}</label>
                    <input
                      className="w-full mt-1 px-3 py-2 border rounded-lg
                      focus:outline-none focus:ring-2 focus:ring-gray-300"
                    />
                  </div>
                ))}
              </div>
            </>
          )}

          {/* STEP 2 – PAYMENT */}
          {step === 2 && (
            <>
              <h2 className="text-xl font-semibold mb-4">Payment Method</h2>

              <div className="space-y-4">
                {["Credit / Debit Card", "Cash on Delivery", "PayPal"].map(
                  (method, i) => (
                    <label
                      key={method}
                      className="flex items-center gap-3 border p-4 rounded-lg cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="payment"
                        defaultChecked={i === 0}
                      />
                      {method}
                    </label>
                  )
                )}
              </div>
            </>
          )}

          {/* STEP 3 – REVIEW */}
          {step === 3 && (
            <>
              <h2 className="text-xl font-semibold mb-4">Review Order</h2>

              <div className="space-y-3 text-sm">
                <p>
                  <strong>Name:</strong> John Doe
                </p>
                <p>
                  <strong>Address:</strong> San Francisco, CA
                </p>
                <p>
                  <strong>Payment:</strong> Credit Card
                </p>
              </div>
            </>
          )}

          {/* NAV BUTTONS */}
          <div className="flex justify-between mt-6">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="px-6 py-2 border rounded-lg"
              >
                Back
              </button>
            )}

            {step < 3 ? (
              <button
                onClick={() => setStep(step + 1)}
                className="px-6 py-2 bg-[var(--color-232f3e)] text-white rounded-lg"
              >
                Continue
              </button>
            ) : (
              <button className="px-6 py-2 bg-green-600 text-white rounded-lg">
                Place Order
              </button>
            )}
          </div>
        </div>

        {/* RIGHT – ORDER SUMMARY */}
        <div className="bg-white rounded-xl shadow-sm p-6 h-fit">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

          <div className="flex justify-between text-sm mb-2">
            <span>Subtotal</span>
            <span>$250.00</span>
          </div>

          <div className="flex justify-between text-sm mb-2">
            <span>Shipping</span>
            <span>$10.00</span>
          </div>

          <hr className="my-3" />

          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>$260.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
