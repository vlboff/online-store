import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const BuyProductsForm = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string()
      .required()
      .label("Full name")
      .test(
        "is-full-name",
        "Please enter both your first and last name",
        function (value) {
          return !!value && value.split(" ").length >= 2;
        }
      )
      .test(
        "is-more-than-3-characters",
        "Each word must be at least 3 characters long",
        function (value) {
          return (
            !!value && value.split(" ").every((value) => value.length >= 3)
          );
        }
      ),
    phone: Yup.string()
      .required()
      .label("Phone number")
      .test(
        "starts-with-plus",
        'Phone number must starts with "+"',
        function (value) {
          return value ? value.startsWith("+") : false;
        }
      )
      .test("is-digits", "Phone number must be digits", function (value) {
        return value
          ? value
              .slice(1)
              .split("")
              .every((value) => parseInt(value))
          : false;
      })
      .test(
        "is-9-digits",
        "Phone number must be at least 9 digits long",
        function (value) {
          return value ? value.slice(1).split("").length > 8 : false;
        }
      ),
    address: Yup.string()
      .required()
      .label("Address")
      .test("is-full-address", "Please enter valid address", function (value) {
        return !!value && value.split(" ").length >= 3;
      })
      .test(
        "is-more-than-5-characters",
        "Each word must be at least 5 characters long",
        function (value) {
          return (
            !!value && value.split(" ").every((value) => value.length >= 5)
          );
        }
      ),
    email: Yup.string().required().label("Email").email(),
    cardNumber: Yup.string()
      .required()
      .label("Card number")
      .test("is-digits", "Card number must be digits", function (value) {
        return value
          ? value.split("").every((value) => parseInt(value))
          : false;
      })
      .length(16, "Сard number must consist of 16 digits"),
    validThru: Yup.string()
      .required()
      .label("Valid thru")
      .matches(/^[0-9]{2}\/[0-9]{2}$/, "Valid thru must be 4 digits")
      .test("is-correct-month", "Invalid month value", function (value) {
        const validMonths = [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
        ];
        return value ? validMonths.includes(value.slice(0, 2)) : false;
      }),
    cvv: Yup.string()
      .required("Required")
      .matches(/^[0-9]{3}$/, "CVV must be 3 digits"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      address: "",
      email: "",
      cardNumber: "",
      validThru: "",
      cvv: "",
    },
    validationSchema,
    onSubmit: (_values) => {
      alert(
        "Your order was placed successfully! You will be redirected to the main page"
      );
      setTimeout(() => {
        navigate("/");
        window.localStorage.setItem("onlineStore", "[]");
        window.dispatchEvent(new Event("storage"));
      }, 3000);
    },
  });

  function formatValidThru(value: string) {
    if (value.length > 2) {
      return (
        value.replace(/\//g, "").substring(0, 2) +
        (value.length > 2 ? "/" : "") +
        value.replace(/\//g, "").substring(2, 4)
      );
    }
  }

  return (
    <div className="buy-products-form">
      <form className="form" onSubmit={formik.handleSubmit}>
        <div className="form__container">
          <h2>Personal details</h2>
          <div className="form__item">
            <input
              type="text"
              placeholder="Full name"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className={`form__item__input ${
                formik.touched.name && formik.errors.name
                  ? "form__item__input_invalid"
                  : ""
              }`}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="form__item__message_invalid">
                {formik.errors.name}
              </div>
            ) : null}
          </div>
          <div className="form__item">
            <input
              type="text"
              placeholder="Phone number"
              name="phone"
              onChange={formik.handleChange}
              value={formik.values.phone}
              onBlur={formik.handleBlur}
              className={`form__item__input ${
                formik.touched.phone && formik.errors.phone
                  ? "form__item__input_invalid"
                  : ""
              }`}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="form__item__message_invalid">
                {formik.errors.phone}
              </div>
            ) : null}
          </div>
          <div className="form__item">
            <input
              type="text"
              placeholder="Delivery address"
              name="address"
              onChange={formik.handleChange}
              value={formik.values.address}
              onBlur={formik.handleBlur}
              className={`form__item__input ${
                formik.touched.address && formik.errors.address
                  ? "form__item__input_invalid"
                  : ""
              }`}
            />
            {formik.touched.address && formik.errors.address ? (
              <div className="form__item__message_invalid">
                {formik.errors.address}
              </div>
            ) : null}
          </div>
          <div className="form__item">
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              className={`form__item__input ${
                formik.touched.email && formik.errors.email
                  ? "form__item__input_invalid"
                  : ""
              }`}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="form__item__message_invalid">
                {formik.errors.email}
              </div>
            ) : null}
          </div>
        </div>
        <div className="form__container">
          <h2>Credit card details</h2>
          <div className="form__credit-cards">
            <div className="form__credit-card__front">
              <div className="form__credit-card__front__logo">
                <img
                  src={
                    formik.values.cardNumber[0] === "5"
                      ? "https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg"
                      : formik.values.cardNumber[0] === "4"
                      ? "https://upload.wikimedia.org/wikipedia/commons/d/d6/Visa_2021.svg"
                      : formik.values.cardNumber[0] === "9"
                      ? "https://upload.wikimedia.org/wikipedia/commons/5/5a/Logotip-belkart.png"
                      : "https://i.guim.co.uk/img/media/b73cc57cb1d46ae742efd06b6c58805e8600d482/16_0_2443_1466/master/2443.jpg?width=700&quality=85&auto=format&fit=max&s=fb1dca6cdd4589cd9ef2fc941935de71"
                  }
                  alt="credit card logo"
                />
              </div>
              <input
                type="text"
                placeholder="CARD NUMBER"
                name="cardNumber"
                onChange={(e) => {
                  if (e.target.value.length > 16) return;
                  formik.handleChange(e);
                }}
                onBlur={formik.handleBlur}
                value={formik.values.cardNumber}
                className={`form__credit-card__front__card-number ${
                  formik.touched.cardNumber && formik.errors.cardNumber
                    ? "form__credit-card__front__card-number_invalid"
                    : ""
                }`}
              />
              {formik.touched.cardNumber && formik.errors.cardNumber ? (
                <div className="form__credit-card__front__card-number_message">
                  {formik.errors.cardNumber}
                </div>
              ) : null}
              <input
                type="text"
                placeholder="VALID THRU"
                name="validThru"
                onChange={(e) => {
                  formik.handleChange(e);
                }}
                onBlur={formik.handleBlur}
                value={formatValidThru(formik.values.validThru)}
                className={`form__credit-card__front__valid-thru ${
                  formik.touched.validThru && formik.errors.validThru
                    ? "form__credit-card__front__valid-thru_invalid"
                    : ""
                }`}
              />
              {formik.touched.validThru && formik.errors.validThru ? (
                <div className="form__credit-card__front__valid-thru_message">
                  {formik.errors.validThru}
                </div>
              ) : null}
            </div>
            <div className="form__credit-card__back">
              <div className="form__credit-card__back__line"></div>
              <input
                type="text"
                placeholder="CVV"
                name="cvv"
                onChange={(e) => {
                  if (e.target.value.length > 3) return;
                  formik.handleChange(e);
                }}
                onBlur={formik.handleBlur}
                value={formik.values.cvv}
                className={`form__credit-card__back__cvv ${
                  formik.touched.cvv && formik.errors.cvv
                    ? "form__credit-card__back__cvv_invalid"
                    : ""
                }`}
              />
              {formik.touched.cvv && formik.errors.cvv ? (
                <div className="form__credit-card__back__cvv_message">
                  {formik.errors.cvv}
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <button type="submit" className="form__submit">
          Confirm details
        </button>
      </form>
    </div>
  );
};

export default BuyProductsForm;
