import React from "react";

const PromoCard = () => {
  return (
    <div className="bg-gray-50 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {/* Card 1 */}
        <div className="rounded-2xl bg-black text-white p-6 flex flex-col justify-between shadow-sm">
          <div>
            <p className="text-xs uppercase tracking-wide text-gray-400">Big Screen</p>
            <h2 className="text-2xl font-bold mt-2">Smart Watch Series 7</h2>
            <p className="text-sm text-gray-300 mt-2">
              From $399 or $16.62/mo. for 24 mo.*
            </p>
          </div>
          <div className="mt-6 flex justify-center">
            <img
              src="../../public/images/smartwatch_bg_black.jpg"
              alt="Smart Watch"
              className="object-contain"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="rounded-2xl bg-white p-6 flex flex-col justify-between shadow-sm">
          <div>
            <p className="text-xs uppercase tracking-wide text-gray-400">Studio Display</p>
            <h2 className="text-2xl font-bold mt-2">600 nits of brightness.</h2>
            <p className="text-sm text-gray-500 mt-2">27-inch 5K Retina display</p>
          </div>
          <div className="mt-6 flex justify-center">
            <img
              src="../../public/images/cat-laptop.png"
              alt="Display"
              className="object-contain"
            />
          </div>
        </div>

        {/* Card 3 */}
        <div className="rounded-2xl bg-white p-6 flex flex-col justify-between shadow-sm">
          <div>
            <p className="text-xs uppercase tracking-wide text-gray-400">Smartphones</p>
            <h2 className="text-2xl font-bold mt-2">Smartphone 13 Pro.</h2>
            <p className="text-sm text-gray-500 mt-2">
              Now in Green. From $999.00 or $41.62/mo. for 24 mo.
            </p>
          </div>
          <div className="mt-6 flex justify-center">
            <img
              src="../../public/images/cat-mobile.png"
              alt="Phone"
              className="object-contain"
            />
          </div>
        </div>

        {/* Card 4 */}
        <div className="rounded-2xl bg-white p-6 flex flex-col justify-between shadow-sm">
          <div>
            <p className="text-xs uppercase tracking-wide text-gray-400">Home Speakers</p>
            <h2 className="text-2xl font-bold mt-2">Room-filling sound.</h2>
            <p className="text-sm text-gray-500 mt-2">
              From $699 or $116.58/mo. for 12 mo.*
            </p>
          </div>
          <div className="mt-6 flex justify-center gap-4">
            <img
              src="../../public/images/cat-speaker.png"
              alt="Speaker"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PromoCard
