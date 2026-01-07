import React from "react";
const ServicesBar = () => {
  const services = [
    {
      icon: "fa-truck-fast",
      title: "Free Shipping",
      desc: "From all orders over $100",
    },
    {
      icon: "fa-gift",
      title: "Daily Surprise Offers",
      desc: "Save up to 25% off",
    },
    {
      icon: "fa-headset",
      title: "Support 24/7",
      desc: "Shop with an expert",
    },
    {
      icon: "fa-tag",
      title: "Affordable Prices",
      desc: "Get Factory direct price",
    },
    {
      icon: "fa-credit-card",
      title: "Secure Payments",
      desc: "100% Protected Payments",
    },
  ];

  return (
    <section className="border-b">
      <div className="px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3"
            >
              <i className={`fa-solid ${item.icon} text-2xl`} />
              <div>
                <h4 className="font-semibold text-sm">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-500">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesBar;
