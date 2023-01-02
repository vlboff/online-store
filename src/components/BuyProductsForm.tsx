import React from "react";
import StylizedButton from "./UI/StylizedButton";

const BuyProductsForm = () => {
  return (
    <div className="buy-products-form">
      <form className="form">
        <div className="form__container">
          <h2>Personal details</h2>
          <div className="form__item">
            <input type="text" placeholder="Name" />
          </div>
          <div className="form__item">
            <input type="text" placeholder="Phone number" />
          </div>
          <div className="form__item">
            <input type="text" placeholder="Delivery address" />
          </div>
          <div className="form__item">
            <input type="email" placeholder="Email" />
          </div>
        </div>
        <div className="form__container">
          <h2>Credit card details</h2>
          <div className="form__credit-cards">
            <div className="form__credit-card__front">
              <div className="form__credit-card__front__logo">
                <img src="https://i.guim.co.uk/img/media/b73cc57cb1d46ae742efd06b6c58805e8600d482/16_0_2443_1466/master/2443.jpg?width=700&quality=85&auto=format&fit=max&s=fb1dca6cdd4589cd9ef2fc941935de71" alt="credit card logo" />
              </div>
              <input type="text" placeholder="CARD NUMBER" className="form__credit-card__front__card-number" />
              <input type="text" placeholder="VALID THRU" className="form__credit-card__front__valid-thru" />
            </div>
            <div className="form__credit-card__back">
              <div className="form__credit-card__back__line"></div>
              <input type="text" placeholder="CVV" className="form__credit-card__back__cvv" />
            </div>
          </div>
        </div>
        <button type="submit">Confirm details</button>
      </form>

    </div>
  );
};

export default BuyProductsForm;
