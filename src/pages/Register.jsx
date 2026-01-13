import { registerUser } from "@/services/authService";
import { useState } from "react";
import { useNavigate, Link } from "react-router";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData.username,formData.email,formData.password);
        navigate("/login");
    } catch (error) {
      console.error("Register failed:", error);
    }
  };
  return (
    <div className="container mx-auto flex flex-col justify-center items-center py-8 mt-10">
      <form className="flex flex-col w-lg py-10 px-20 bg-white rounded-xl shadow">
        <div className="text-2xl  w-full text-center px-8 py-4">Register</div>
        <div className="flex flex-col ">
          <label htmlFor="username" className="mb-2 text-[16px]">
            User Name
          </label>
          <input
            name="username"
            type="username"
            placeholder="Username"
            className="border border-gray-400 p-2 mb-4 text-sm focus:outline-none resize-none"
            value={formData.username}
            onChange={handleChange}
            required
            autoCapitalize="off"
          />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="email" className="mb-2 text-[16px]">
            Email
          </label>
          <input
            name="email"
            type="email"
            placeholder="email"
            className="border border-gray-400 p-2 mb-4 text-sm focus:outline-none resize-none"
            value={formData.email}
            onChange={handleChange}
            required
            autoCapitalize="off"
          />
        </div>
        <div className="flex flex-col capitalize">
          <label htmlFor="Password" className="mb-2 text-[16px]">
            password
          </label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="border border-gray-400 p-2 mb-4 text-sm focus:outline-none resize-none"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button
          onClick={handleSubmit}
          className="text-center bg-[var(--color-febd69)] text-black p-2 mt-4 hover:bg-[var(--color-fdaa3d)] hover:text-black cursor-pointer border border-gray-400 transition-smooth"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
