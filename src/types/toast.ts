export interface ToastProps {
  message: string;
  duration?: number;
  typeOfToast?: "success" | "error";
  onClose: () => void;
}
