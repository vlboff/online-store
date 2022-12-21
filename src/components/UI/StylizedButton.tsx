import React from "react";

interface IButtonProps {
  name: string;
  style: string;
}

const StylizedButton = ({ name, style }: IButtonProps) => {
  return <button className={style}>{name}</button>;
};

export default StylizedButton;