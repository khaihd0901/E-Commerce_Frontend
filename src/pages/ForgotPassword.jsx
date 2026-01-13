import { BreadCrumb } from "@/components/BreadCrumb";
import { forgotPassword } from "@/services/authService";
import React, { useState } from "react";
import { Link } from "react-router";

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await forgotPassword();
    } catch (error) {
      console.error("Forgot Password failed:", error);
    }
  };
  return (
    <div className="py-8 container mx-auto flex justify-center items-center mt-10">
      <div className="w-lg bg-white rounded-xl shadow p-4 px-4 flex-col justify-center items-center">
        <h1 className="text-2xl w-full text-center px-8 py-4">
          Reset Your Password
        </h1>
        <p className="text-center text-gray-500">
          we will send you an email to reset your password
        </p>
        <div className="flex flex-col mt-4">
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="border border-gray-400 p-2 mb-4 text-sm focus:outline-none resize-none"
            value={formData.email}
            onChange={handleChange}
            required
            autoCapitalize="off"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="w-full text-center bg-[var(--color-febd69)] text-black p-2 mb-4 hover:bg-[var(--color-fdaa3d)] hover:text-black cursor-pointer border border-gray-400 transition-smooth"
        >
          Send
        </button>
        <Link to='/login' className="flex justify-center">Cancel</Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
