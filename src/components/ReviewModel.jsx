import React from "react";

const ReviewModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white w-full max-w-3xl rounded-xl shadow-lg p-6 z-10">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-4 border-b pb-2">
          <h2 className="text-lg font-semibold">
            Write A Review
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black text-2xl"
          >
            &times;
          </button>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full bg-gray-100 px-4 py-3 rounded-md text-sm focus:outline-none"
          />

          <input
            type="email"
            placeholder="john.smith@example.com"
            className="w-full bg-gray-100 px-4 py-3 rounded-md text-sm focus:outline-none"
          />

          {/* Rating */}
          <div>
            <p className="text-sm font-medium mb-1">Rating</p>
            <div className="flex gap-1 text-yellow-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <i key={star} className="fa-solid fa-star cursor-pointer"></i>
              ))}
            </div>
          </div>

          <input
            type="text"
            placeholder="Give your review a title"
            className="w-full bg-gray-100 px-4 py-3 rounded-md text-sm focus:outline-none"
          />

          <textarea
            rows="5"
            placeholder="Write your comments here"
            className="w-full bg-gray-100 px-4 py-3 rounded-md text-sm focus:outline-none resize-none"
          />

          {/* Submit */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[var(--color-232f3e)] text-white px-6 py-2 rounded-full text-sm hover:opacity-90 transition"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewModal;
