import React from "react";

interface IButtonProps {
  name: string;
  onClick?: () => void;
}

const Button = ({ name, onClick }: IButtonProps) => {

  return <button
    className={name === 'Details' ? 'product-card_buttons_dark' : ''}
    onClick={onClick}
  > {name}
  </button>;
};

export default Button;
