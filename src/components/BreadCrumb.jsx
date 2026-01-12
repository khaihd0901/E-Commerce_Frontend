import React from "react";
import { Link } from "react-router";

export const BreadCrumb = (props) => {
  const { title } = props;
  return (
    <div className="py-4 container mx-auto flex justify-center align-middle font-medium cursor-pointer">
      <p>
        <Link to="/" className="text-dark">
          Home &nbsp;
        </Link>
        / {title}
      </p>
    </div>
  );
};
