import { logIn } from "@/services/authService";
import { useState } from "react";
import { useNavigate, Link } from "react-router";

function Login({ setUser }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await logIn(formData.username, formData.password);
      console.log(data);
      localStorage.setItem("token", data.accessToken);
      setUser(data.user);
      navigate("/");
      window.location.reload();
    } catch (error) {
      localStorage.removeItem("token");
      console.error("Signin failed:", error);
    }
  };
  return (
    <div className="container mx-auto flex flex-col justify-center items-center py-8 mt-10">
      <form className="flex flex-col w-lg py-10 px-20 bg-white rounded-xl shadow">
        <div className="text-2xl  w-full text-center px-8 py-4">Login</div>
        <div className="flex flex-col ">
          <label htmlFor="username" className="mb-2 text-[16px]">
            Username
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
        <div className="flex justify-between items-center mb-4">
          <div className="remember_me flex items-center">
            <input type="checkbox" className="mr-1 cursor-pointer" />
            <label htmlFor="remember me" className="text-[16px]  ">
              remember me
            </label>
          </div>
          <div className="lost_password">
            <Link
              to="/forgot-password"
              className="text-[16px] text-black hover:underline"
            >
              Lost your password?
            </Link>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="bg-[var(--color-febd69)] text-black p-2 hover:bg-[var(--color-fdaa3d)] hover:text-black cursor-pointer border border-gray-400 transition-smooth"
        >
          Sign In
        </button>

        <span className="py-4 text-center font-[8px] text-gray-400">
          or join with us
        </span>

        <Link
          to="/register"
          className="text-center bg-[var(--color-febd69)] text-black p-2 hover:bg-[var(--color-fdaa3d)] hover:text-black cursor-pointer border border-gray-400 transition-smooth"
        >
          Create Account
        </Link>
      </form>
    </div>
  );
}

export default Login;
