import { useState } from "react";

const useProducer = () => {
  const [login, setIsLogin] = useState(false);
  return { login, setIsLogin };
};

export default useProducer;
