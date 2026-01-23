import React, { useEffect } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router";
import { useAuthStore } from "@/stores/authStore.js";

const Layout = () => {
  const { accessToken, user, authRefreshToken, authMe } =
    useAuthStore();
  const init = async () => {
    if (!accessToken) {
      await authRefreshToken();
    }
    if (accessToken && !user) {
      await authMe();
    }
  };

  useEffect(() => {
    init();
  }, []);
  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-100">
      <Header user={user} />

      <main className="mx-auto container">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
