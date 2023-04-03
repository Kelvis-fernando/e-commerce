import { Dispatch, SetStateAction } from "react";

export interface RegisterModalProps {
  onBack?: Dispatch<SetStateAction<boolean>>;
}

export interface ForgotPasswordProps {
  onBack?: Dispatch<SetStateAction<boolean>>;
}
