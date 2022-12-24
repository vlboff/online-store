import React from "react";
import SvgSelector from "./UI/SvgSelector";

function NotFoundProducts() {
  return (
    <div className="product-card_field_not-found">
      <SvgSelector id='neutral-face' />
      <h2>Sorry, but nothing was found</h2>
    </div>
  );
};

export default NotFoundProducts;
