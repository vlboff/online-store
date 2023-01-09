import React from "react";

interface IButtonProps {
  name: string;
  onClick?: () => void;
}

const Button = ({ name, onClick }: IButtonProps) => {
  return <button onClick={onClick}>{name}</button>;
};

export default Button;
