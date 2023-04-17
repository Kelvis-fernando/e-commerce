import { useState } from "react";

const useLoginModal = () => {
  const [registerModalOPen, setRegisterModalOPen] = useState(false);
  const [forgotPasswordModalOPen, setForgotPasswordModalOPen] = useState(false);
  const [resetPasswordModalOPen, setResetPasswordModalOPen] = useState(false);
  return {
    registerModalOPen,
    setRegisterModalOPen,
    forgotPasswordModalOPen,
    setForgotPasswordModalOPen,
    resetPasswordModalOPen,
    setResetPasswordModalOPen,
  };
};

export default useLoginModal;
