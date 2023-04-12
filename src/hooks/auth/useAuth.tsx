import { FormEvent } from "react";
import { getFormData } from "../../utils/getFormData";
import authService from "../../services/authService";

const useAuth = () => {
  const handleGetAuthFormData = async (
    event: FormEvent<Element>,
    type: string
  ) => {
    const formData = await getFormData(event);
    const { loginRequest } = authService();

    switch (type) {
      case "login":
        loginRequest(formData).then((result: any) => {
          if (result.code) {
            return console.log(result.response.data);
          }
          return console.log(result.data);
        });
        break;
      case "register":
        console.log(formData, "register");
        break;
      case "forgot":
        console.log(formData, "forgot");
        break;
    }
  };

  return { handleGetAuthFormData };
};

export default useAuth;
