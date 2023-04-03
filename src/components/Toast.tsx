import React, { useEffect, useState } from "react";
import { ToastContainer, ToastCloseButton, Progress } from "../styles/toast";
import { ToastProps } from "../types/toast";
import { CheckCircle, WarningCircle, X } from "phosphor-react";

const Toast: React.FC<ToastProps> = ({
  message,
  duration = 3000,
  onClose,
  typeOfToast = "success",
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const step = 10;
    const increment = (step / duration) * 100;
    timer = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + increment;
        if (newProgress >= 100) {
          clearInterval(timer);
          onClose();
          window.location.reload();
        }
        return newProgress;
      });
    }, step);
    return () => clearInterval(timer);
  }, [duration, onClose]);

  return (
    <ToastContainer>
      {typeOfToast === "success" ? (
        <CheckCircle size={32} style={{ color: "#2D5731" }} />
      ) : (
        <WarningCircle size={32} style={{ color: "#BD2A2E" }} />
      )}
      <span>{message}</span>
      <Progress style={{ width: `${progress}%` }} />
      <ToastCloseButton onClick={onClose}>
        <X size={20} />
      </ToastCloseButton>
    </ToastContainer>
  );
};

export default Toast;
