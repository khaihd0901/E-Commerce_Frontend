import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router";

const Layout = ({user}) => {
  return (
    <div className="">
      <Header user={user} />
      <main  className="flex justify-center container mx-auto px-4">
        <Outlet/>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
