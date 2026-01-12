import { BreadCrumb } from "@/components/BreadCrumb";
import React from "react";

const Contact = () => {
  return (
    <>
      <BreadCrumb title="Contact Us" />
      <div className="flex-col">
        <div className="w-full mb-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8856.00440605787!2d105.91588720668594!3d21.05303578417295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135a9a0a78b480b%3A0xde012606025bd95e!2zVG_DoCBuaMOgIFbEg24gcGjDsm5nIFN5bXBob255!5e0!3m2!1svi!2s!4v1768232609424!5m2!1svi!2s"
            className="border-0 w-full h-[400px]"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <section className="py-8">
      <div className="">
        <div className="bg-white rounded-xl shadow-sm p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-xl font-semibold mb-6">
              Contact
            </h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-gray-100 px-4 py-3 rounded-md text-sm focus:outline-none"
              />

              <input
                type="email"
                placeholder="Email *"
                className="w-full bg-gray-100 px-4 py-3 rounded-md text-sm focus:outline-none"
              />

              <input
                type="text"
                placeholder="Phone number"
                className="w-full bg-gray-100 px-4 py-3 rounded-md text-sm focus:outline-none"
              />

              <textarea
                rows="5"
                placeholder="Comment"
                className="w-full bg-gray-100 px-4 py-3 rounded-md text-sm focus:outline-none resize-none"
              />

              <button
                type="submit"
                className="bg-[var(--color-232f3e)] text-white px-6 py-2 rounded-full text-sm hover:opacity-90 transition"
              >
                Send
              </button>
            </form>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-6">
              Get In Touch With Us
            </h2>

            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-location-dot mt-1"></i>
                <span>
                  33 New Montgomery St, Ste 750 San Francisco, CA, USA 94105
                </span>
              </li>

              <li className="flex items-center gap-3">
                <i className="fa-solid fa-phone"></i>
                <span>(+91)-723-4608</span>
              </li>

              <li className="flex items-center gap-3">
                <i className="fa-solid fa-envelope"></i>
                <span>demo@company.com</span>
              </li>

              <li className="flex items-center gap-3">
                <i className="fa-solid fa-clock"></i>
                <span>Monday – Friday 10 AM – 8 PM</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
      </div>
    </>
  );
};

export default Contact;
