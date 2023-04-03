import { useState } from "react";

const useLoginModal = () => {
  const [registerModalOPen, setRegisterModalOPen] = useState(false);
  const [forgotPasswordModalOPen, setForgotPasswordModalOPen] = useState(false);
  return {
    registerModalOPen,
    setRegisterModalOPen,
    forgotPasswordModalOPen,
    setForgotPasswordModalOPen,
  };
};

export default useLoginModal;
