import { useEffect, useState } from "react";
import { ToastContainer } from "../../styles/layout/toast";
import { ToastProps } from "../../types/toast";

const Toast = ({ title, message, duration = 1 }: ToastProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => prevProgress + 1);
    }, duration / 100);

    return () => {
      clearInterval(interval);
    };
  }, [duration]);

  return (
    <ToastContainer>
      <h1>{title}</h1>
      <p>{message}</p>
      {progress}
    </ToastContainer>
  );
};

export default Toast;
