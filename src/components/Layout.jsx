import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router";

const Layout = ({ user }) => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header user={user} />

      <main className="mx-auto container">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};


export default Layout;
