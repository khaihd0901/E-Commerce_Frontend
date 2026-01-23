  import { Link, useNavigate } from "react-router";
  import * as Yup from "yup";
  import { useFormik } from "formik";
  import { useAuthStore } from "@/stores/authStore";
  const Register = () => {
    const navigate = useNavigate();
    const { authSignUp,isLoading } = useAuthStore();
    let validationSchema = Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
      confirmPassword: Yup.string().required("Password is required"),
    });
    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: validationSchema,
      onSubmit: async (email, password) => {
        await authSignUp(email, password);
        // navigate("/login");
      },
    });
    console.log(isLoading)
    return (
      <div className="container mx-auto flex flex-col justify-center items-center py-8 mt-10">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col w-lg py-10 px-20 bg-white rounded-xl shadow"
        >
          <div className="text-2xl  w-full text-center px-8 py-4">Register</div>
          <div className="flex flex-col ">
            <label htmlFor="email" className="mb-2 text-[16px]">
              Email
            </label>
            <input
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="email"
              className="border border-gray-400 p-2 mb-4 text-sm focus:outline-none resize-none"
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              placeholder="Password"
              className="border border-gray-400 p-2 mb-4 text-sm focus:outline-none resize-none"
            />
          </div>

          <div className="flex flex-col capitalize">
            <label htmlFor="confirmPassword" className="mb-2 text-[16px]">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              placeholder="Confirm Password"
              className="border border-gray-400 p-2 mb-4 text-sm focus:outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            className="text-center bg-[var(--color-febd69)] text-black p-2 mt-4 hover:bg-[var(--color-fdaa3d)] hover:text-black cursor-pointer border border-gray-400 transition-smooth"
          >
            Register
          </button>
        </form>
      </div>
    );
  };

  export default Register;
