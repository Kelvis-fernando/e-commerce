import { useState } from "react";

const useRegisterModal = () => {
  const [typeOfUser, setTypeOfUser] = useState<string>();
  return { typeOfUser, setTypeOfUser };
};

export default useRegisterModal;
