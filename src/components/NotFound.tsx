import React from "react";
import SvgSelector from "./UI/SvgSelector";

function NotFound() {
  return (
    <div className="not-found wrapper">
      <SvgSelector id='sad-face' />
      <h2>Page not found</h2>
      <h2>404</h2>
    </div>
  );
};

export default NotFound;
