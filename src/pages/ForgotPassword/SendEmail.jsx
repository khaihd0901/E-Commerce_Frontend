import React, { useContext, useEffect } from "react";
import { RecoveryContext } from "./ForgotPassword";
import { Link } from "react-router";
import * as Yub from "yup";
import { useFormik } from "formik";
import { useUserStore } from "@/stores/userStore";

const SendEmail = () => {
  const { setEmail, setPage, email } = useContext(RecoveryContext);

  const { userForgotPassword, clearState } = useUserStore();
  const isLoading = useUserStore((s) => s.isLoading);
  const isSuccess = useUserStore((s) => s.isSuccess);
  let validationSchema = Yub.object({
    email: Yub.string().required("Email is required to reset your password"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (email) => {
      await userForgotPassword(email);
    },
  });
  useEffect(() => {
    if (isSuccess == true) {
      setPage("inputOtp");
      setEmail(formik.values.email);
      clearState();
    }
  }, [isSuccess]);
  return (
    <div className="py-8 container mx-auto flex justify-center items-center mt-10">
      <form
        onSubmit={formik.handleSubmit}
        className="w-lg bg-white rounded-xl shadow p-4 px-4 flex-col justify-center items-center"
      >
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
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border border-gray-400 p-2 mb-4 text-sm focus:outline-none resize-none"
            required
            autoCapitalize="off"
          />
        </div>
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500 text-sm">{formik.errors.email}</div>
        ) : null}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full flex items-center justify-center gap-2
    bg-[var(--color-febd69)] text-black p-2 mb-4
    hover:bg-[var(--color-fdaa3d)]
    border border-gray-400 transition-smooth
    disabled:opacity-60 disabled:cursor-not-allowed`}
        >
          {isLoading ? (
            <>
              <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            "Send"
          )}
        </button>
        <Link to="/login" className="flex justify-center">
          Cancel
        </Link>
      </form>
    </div>
  );
};

export default SendEmail;
