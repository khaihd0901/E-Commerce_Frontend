import { useFormik } from "formik";
import * as Yup from "yup";
import { useUserStore } from "@/stores/userStore";
import { useContext, useEffect } from "react";
import { RecoveryContext } from "./ForgotPassword";

const ResetPassword = () => {
  const { userResetPassword, isLoading, isSuccess,clearState } = useUserStore();
    const {setPage, email, OTP } = useContext(RecoveryContext);

  const validationSchema = Yup.object({
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("New password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords do not match")
      .required("Confirm password is required"),
  });

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      await userResetPassword(OTP, values.password, email);
      clearState();
    },
  });
useEffect(() =>{
  if(isSuccess === true){
    setPage('recovered')
  }
},[isSuccess])
  return (
    <div className="my-20 flex items-center justify-center bg-gray-100">
      <form
        onSubmit={formik.handleSubmit}
        className="w-full max-w-md bg-white rounded-xl shadow-lg p-6"
      >
        <h2 className="text-2xl font-semibold text-center mb-2">
          Reset Password
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Enter your new password below
        </p>

        {/* New Password */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            New Password
          </label>
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border border-gray-300 rounded-lg p-2
              focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.password}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border border-gray-300 rounded-lg p-2
              focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          {formik.touched.confirmPassword &&
            formik.errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.confirmPassword}
              </p>
            )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center items-center gap-2
            bg-yellow-400 hover:bg-yellow-500
            text-black font-medium py-2 rounded-lg
            disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
              Resetting...
            </>
          ) : (
            "Reset Password"
          )}
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
