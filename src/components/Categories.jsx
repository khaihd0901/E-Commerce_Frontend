import React from 'react'

const Categories = () => {
  const categories = [
  {
    name: "Computers & Laptop",
    items: 8,
    image: "../../public/images/cat-laptop.png",
  },
  {
    name: "Cameras & Videos",
    items: 10,
    image: "../../public/images/cat-camera.png",
  },
  {
    name: "Smart Television",
    items: 12,
    image: "../../public/images/cat-tv.png",
  },
  {
    name: "Smartwatches",
    items: 13,
    image: "../../public/images/cat-watch.png",
  },
  {
    name: "Music & Gaming",
    items: 4,
    image: "../../public/images/cat-gaming.png",
  },
  {
    name: "Mobiles & Tablets",
    items: 5,
    image: "../../public/images/cat-mobile.png",
  },
  {
    name: "Headphones",
    items: 6,
    image: "../../public/images/cat-headphone.png",
  },
  {
    name: "Accessories",
    items: 10,
    image: "../../public/images/cat-accessories.png",
  },
  {
    name: "Portable Speakers",
    items: 8,
    image: "../../public/images/cat-speaker.png",
  },
  {
    name: "Home Appliances",
    items: 6,
    image: "../../public/images/cat-home.png",
  },
];
  return (
    <section className="py-8">
      <div className="">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {categories.map((cat, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border border-gray-100 hover:bg-gray-50 transition cursor-pointer"
              >
                <div>
                  <h3 className="text-sm font-semibold">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {cat.items} Items
                  </p>
                </div>

                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-30 h-30 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default Categories