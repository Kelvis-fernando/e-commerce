/* eslint-disable react-hooks/rules-of-hooks */
import { Dispatch, FormEvent, SetStateAction } from "react";
import { getFormData } from "../../utils/getFormData";
import authService from "../../services/authService";

const useAuth = (
  handleButtonClick?: Dispatch<SetStateAction<boolean>>,
  setErrorToast?: Dispatch<SetStateAction<boolean>>
) => {
  const handleGetAuthFormData = async (
    event: FormEvent<Element>,
    type: string
  ) => {
    const formData = await getFormData(event);
    const { loginRequest, registerRequest, forgotPasswordRequest } =
      authService();

    switch (type) {
      case "login":
        loginRequest(formData).then((result: any) => {
          if (result.code && setErrorToast !== undefined) {
            setErrorToast(true);
            return;
          }
          handleButtonClick !== undefined && handleButtonClick(true);
          return;
        });
        break;
      case "register":
        registerRequest(formData).then((result: any) => {
          if (result.code) {
            return console.log(result.response.data);
          }
          return console.log(result.data);
        });
        break;
      case "forgot":
        forgotPasswordRequest(formData).then((result: any) => {
          if (result.code && setErrorToast !== undefined) {
            setErrorToast(true);
            return;
          }
          handleButtonClick !== undefined && handleButtonClick(true);
          return;
        });
        break;
    }
  };

  return { handleGetAuthFormData };
};

export default useAuth;
