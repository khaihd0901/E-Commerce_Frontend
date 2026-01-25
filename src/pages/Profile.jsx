import { useAuthStore } from "@/stores/authStore";
import React from "react";
import * as Yub from "yup";
import { useFormik } from "formik";
import { useUserStore } from "@/stores/userStore";
const Profile = () => {
  const { authSignOut } = useAuthStore();
  const user = useAuthStore((s) => s.user)
  const { userUpdate, isLoading } = useUserStore();
  const handleLogout = async () => {
    try {
      await authSignOut();
    } catch (err) {
      console.log(err);
    }
  };

  let validationSchema = Yub.object({
    firstName: Yub.string(),
    lastName: Yub.string(),
    phone: Yub.number(),
    address: Yub.string(),
  });
  const formik = useFormik({
    initialValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      phone: user?.phone || "",
      address: user?.address || "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const data = {
        ...values,
      };
      await userUpdate(user._id, data);
    },
  });
  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* LEFT – PROFILE CARD */}
        <div className="bg-white rounded-xl shadow-sm p-6 text-center">
          <img
            src="../../public/images/profile.png"
            alt="User"
            className="w-28 h-28 rounded-full mx-auto object-cover"
          />

          <h2 className="text-xl font-semibold mt-4">{user.fullName}</h2>
          <p className="text-sm text-gray-500">{user.email}</p>

          <button className="mt-4 w-full py-2 text-sm bg-[var(--color-232f3e)] text-white rounded-lg">
            Change Password
          </button>

          <button
            onClick={handleLogout}
            className="mt-2 w-full py-2 text-sm border rounded-lg text-red-500 hover:bg-red-50"
          >
            Logout
          </button>
        </div>

        {/* RIGHT – DETAILS */}
        <div className="lg:col-span-3 space-y-4 ">
          {/* PERSONAL INFO */}
          <form
            onSubmit={formik.handleSubmit}
            className="bg-white rounded-xl shadow-sm p-6 w-full"
          >
            <h3 className="text-lg font-semibold mb-4">Personal Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm text-gray-500">First Name</label>
                <input
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="text"
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>
              <div>
                <label className="text-sm text-gray-500">Last Name</label>
                <input
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="text"
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500">Full Name</label>
                <input
                  type="text"
                  readOnly
                  defaultValue={user.fullName}
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>
              <div className="col-span-3 grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-500">Phone</label>
                  <input
                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="text"
                    className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-500">Email</label>
                  <input
                    type="text"
                    readOnly
                    defaultValue={user.email}
                    className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                  />
                </div>
              </div>
              <div className="col-span-3">
                <label className="text-sm text-gray-500">Address</label>
                <input
                  name="address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="text"
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className={`flex items-center justify-center gap-2
    bg-[var(--color-febd69)] text-black p-2 mb-4
    hover:bg-[var(--color-fdaa3d)]
    border border-gray-400 transition-smooth
    disabled:opacity-60 disabled:cursor-not-allowed mt-6 px-6 py-2 rounded`}
            >
              {isLoading ? (
                <>
                  <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  Loading...
                </>
              ) : (
                "Save Change"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
