import { useAuthStore } from "@/stores/authStore";
import React from "react";
import { Check } from "lucide-react";

const Profile = () => {
  const {user} = useAuthStore()
  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* LEFT – PROFILE CARD */}
        <div className="bg-white rounded-xl shadow-sm p-6 text-center">
          <img
            src={user.avatar}
            alt="User"
            className="w-28 h-28 rounded-full mx-auto object-cover"
          />

          <h2 className="text-xl font-semibold mt-4">{user.name}</h2>
          <p className="text-sm text-gray-500">{user.email}</p>

          <button className="mt-4 w-full py-2 text-sm bg-[var(--color-232f3e)] text-white rounded-lg">
            Edit Profile
          </button>

          <button className="mt-2 w-full py-2 text-sm border rounded-lg text-red-500 hover:bg-red-50">
            Logout
          </button>
        </div>

        {/* RIGHT – DETAILS */}
        <div className="lg:col-span-3 space-y-6">
          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-gray-500">Orders</p>
              <p className="text-2xl font-bold">{user.orders}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Wish List</p>
              <p className="text-2xl font-bold">{user.wishlist}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Review</p>
              <p className="text-2xl font-bold">{user.reviews}</p>
            </div>
          </div>

          {/* PERSONAL INFO */}
          <div className="bg-white rounded-xl shadow-sm p-6 w-full">
            <h3 className="text-lg font-semibold mb-4">Personal Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-500">Full Name</label>
                <input
                  type="text"
                  defaultValue={user.name}
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500">Email</label>
                <input
                  type="email"
                  defaultValue={user.email}
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
                <Check/>
              </div>

              <div>
                <label className="text-sm text-gray-500">Phone</label>
                <input
                  type="text"
                  defaultValue={user.phone}
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500">Address</label>
                <input
                  type="text"
                  defaultValue={user.address}
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>
            </div>

            <button className="mt-6 px-6 py-2 bg-[var(--color-232f3e)] text-white rounded-lg hover:opacity-90">
              Save Changes
            </button>
          </div>

          {/* QUICK ACTIONS */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>

            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-100">
                My Orders
              </button>
              <button className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-100">
                Wishlist
              </button>
              <button className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-100">
                Change Password
              </button>
              <button className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-100">
                Manage Addresses
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
