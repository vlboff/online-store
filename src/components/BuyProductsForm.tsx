import React from "react";
import { useFormik } from "formik";

interface IFormInputs {
  name?: string;
  phone?: string;
  address?: string;
  email?: string;
  cardNumber?: string;
  validThru?: string;
  cvv?: string;
}

const BuyProductsForm = () => {

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      address: '',
      email: '',
      cardNumber: '',
      validThru: '',
      cvv: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  function validate(values: IFormInputs) {
    const errors: IFormInputs = {};
    if (!values.name) {
      errors.name = 'Required';
    } else if (values.name.length < 3) {
      errors.name = 'Must be 15 characters or less';
    }

    if (!values.phone) {
      errors.phone = 'Required';
    } else if (!/^\+\d{9,}$/.test(values.phone)) {
      errors.phone = "Number must start with '+' and contain at least 9 digits";
    }

    if (!values.address) {
      errors.address = 'Required';
    } else if (values.address.length < 5) {
      errors.address = 'Invalid email address';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.cardNumber) {
      errors.cardNumber = 'Required';
    } else if (values.cardNumber.length < 5) {
      errors.cardNumber = 'Invalid email cardNumber';
    }

    if (!values.validThru) {
      errors.validThru = 'Required';
    } else if (values.validThru.length < 5) {
      errors.validThru = 'Invalid email validThru';
    }

    if (!values.cvv) {
      errors.cvv = 'Required';
    } else if (values.cvv.length < 5) {
      errors.cvv = 'Invalid email cvv';
    }

    return errors;
  };

  return (
    <div className="buy-products-form">
      <form className="form" onSubmit={formik.handleSubmit}>
        <div className="form__container">
          <h2>Personal details</h2>
          <div className="form__item">
            <input type="text" placeholder="Name" name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className={formik.touched.name && formik.errors.name ? 'form__item__input form__item__input_invalid' : 'form__item__input'} />
            {formik.touched.name && formik.errors.name ? <div className="form__item__message_invalid">{formik.errors.name}</div> : null}
          </div>
          <div className="form__item">
            <input type="text" placeholder="Phone number" name="phone"
              onChange={formik.handleChange}
              value={formik.values.phone}
              onBlur={formik.handleBlur}
              className={formik.touched.phone && formik.errors.phone ? 'form__item__input form__item__input_invalid' : 'form__item__input'} />
            {formik.touched.phone && formik.errors.phone ? <div className="form__item__message_invalid">{formik.errors.phone}</div> : null}
          </div>
          <div className="form__item">
            <input type="text" placeholder="Delivery address" name="address"
              onChange={formik.handleChange}
              value={formik.values.address}
              onBlur={formik.handleBlur}
              className={formik.touched.address && formik.errors.address ? 'form__item__input form__item__input_invalid' : 'form__item__input'} />
            {formik.touched.address && formik.errors.address ? <div className="form__item__message_invalid">{formik.errors.address}</div> : null}
          </div>
          <div className="form__item">
            <input type="email" placeholder="Email" name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              className={formik.touched.email && formik.errors.email ? 'form__item__input form__item__input_invalid' : 'form__item__input'} />
            {formik.touched.email && formik.errors.email ? <div className="form__item__message_invalid">{formik.errors.email}</div> : null}
          </div>
        </div>
        <div className="form__container">
          <h2>Credit card details</h2>
          <div className="form__credit-cards">
            <div className="form__credit-card__front">
              <div className="form__credit-card__front__logo">
                <img src="https://i.guim.co.uk/img/media/b73cc57cb1d46ae742efd06b6c58805e8600d482/16_0_2443_1466/master/2443.jpg?width=700&quality=85&auto=format&fit=max&s=fb1dca6cdd4589cd9ef2fc941935de71" alt="credit card logo" />
              </div>
              <input type="text" placeholder="CARD NUMBER" name="cardNumber"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cardNumber}
                className={formik.touched.cardNumber && formik.errors.cardNumber ? 'form__credit-card__front__card-number form__credit-card__front__card-number_invalid' : 'form__credit-card__front__card-number'} />
              {formik.touched.cardNumber && formik.errors.cardNumber ? <div className="form__credit-card__front__card-number_message">{formik.errors.cardNumber}</div> : null}
              <input type="text" placeholder="VALID THRU" name="validThru"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.validThru}
                className={formik.touched.validThru && formik.errors.validThru ? 'form__credit-card__front__valid-thru form__credit-card__front__valid-thru_invalid' : 'form__credit-card__front__valid-thru'} />
              {formik.touched.validThru && formik.errors.validThru ? <div className="form__credit-card__front__valid-thru_message">{formik.errors.validThru}</div> : null}
            </div>
            <div className="form__credit-card__back">
              <div className="form__credit-card__back__line"></div>
              <input type="text" placeholder="CVV" name="cvv"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cvv}
                className={formik.touched.cvv && formik.errors.cvv ? 'form__credit-card__back__cvv form__credit-card__back__cvv_invalid' : 'form__credit-card__back__cvv'} />
              {formik.touched.cvv && formik.errors.cvv ? <div className="form__credit-card__back__cvv_message">{formik.errors.cvv}</div> : null}
            </div>
          </div>
        </div>
        <button type="submit" className="form__submit">Confirm details</button>
      </form>
    </div>
  );
};

export default BuyProductsForm;
