import { useState, FormEvent } from "react";
import { getFormData } from "../../utils/getFormData";

const useRegisterModal = () => {
  const [typeOfUser, setTypeOfUser] = useState<string>();
  const handleSubmitRegister = async (event: FormEvent) => {
    getFormData(event).then((formData) => console.log(formData));
  };
  return { typeOfUser, setTypeOfUser, handleSubmitRegister };
};

export default useRegisterModal;
