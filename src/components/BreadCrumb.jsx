import React from "react";
import { Link, useLocation } from "react-router";

export const BreadCrumb = () => {
    const location = useLocation();
      const pathnames = location.pathname
    .split("/")
    .filter((x) => x);
  return (
    <div className="py-4 container mx-auto flex justify-center align-middle font-medium cursor-pointer">
      <nav className="breadcrumb">
      <Link to="/">Home</Link>

      {pathnames.map((name, index) => {
        const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
        const isLast = index === pathnames.length - 1;

        return (
          <span className=" capitalize" key={routeTo}>
            {" / "}
            {isLast ? (
              <span>{decodeURIComponent(name)}</span>
            ) : (
              <Link to={routeTo}>{decodeURIComponent(name)}</Link>
            )}
          </span>
        );
      })}
    </nav>
    </div>
  );
};
