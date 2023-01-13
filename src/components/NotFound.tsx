import React from "react";
import { SadFace } from "../icons";

function NotFound() {
  return (
    <div className="not-found wrapper">
      <SadFace />
      <h2>Page not found</h2>
      <h2>404</h2>
    </div>
  );
}

export default NotFound;
