import React, { ReactNode } from "react";

interface IModalChildren {
  children?: ReactNode
}

const ModalWindow = ({children}: IModalChildren) => {
  return (
    <div className="modal-window modal-window_active">
      <div className="modal-window__content">
        {children}
      </div>
    </div>
  );
};

export default ModalWindow;
