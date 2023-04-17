import { ReactNode } from "react";
import { DropdownContainer } from "../styles/dropdown";

interface DropdownProps {
  children: ReactNode;
  isOpen: boolean;
}

const Dropdown = ({ children, isOpen }: DropdownProps) => {
  return <DropdownContainer isOpen={isOpen}>{children}</DropdownContainer>;
};

export default Dropdown;
