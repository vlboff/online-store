import React from "react";

interface IButtonProps {
  name: string;
}

const Button = ({ name }: IButtonProps) => {
  return <button>{name}</button>;
};

export default Button;
