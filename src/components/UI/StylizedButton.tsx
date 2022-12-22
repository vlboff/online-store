import React, { MouseEventHandler } from "react";

interface IButtonProps {
  name: string;
  style: string;
  onClick?: MouseEventHandler
}

const StylizedButton = ({ name, style, onClick }: IButtonProps) => {
  return <button className={style} onClick={onClick}>{name}</button>;
};

export default StylizedButton;
