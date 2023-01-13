import React from "react";
import { NeutralFace } from "../icons";

function NotFoundProducts() {
  return (
    <div className="product-card_field_not-found">
      <NeutralFace />
      <h2>Sorry, but nothing was found</h2>
    </div>
  );
}

export default NotFoundProducts;
