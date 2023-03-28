import { ReactElement } from "react";
import { BadgeContainer } from "../../styles/layout/badge";

interface BadgeProps {
  children: ReactElement;
  items: number;
}
const Badge = ({ children, items }: BadgeProps) => {
  return (
    <BadgeContainer>
      <div className="badge">{items}</div>
      {children}
    </BadgeContainer>
  );
};

export default Badge;
