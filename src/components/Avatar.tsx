import useAvatar from "../hooks/useAvatar";
import { AvatarContainer } from "../styles/avatar";

interface AvatarProps {
  name: string;
}

const Avatar = ({ name }: AvatarProps) => {
  const { getInitialLettersFromName } = useAvatar(name);

  return (
    <AvatarContainer>
      <span>{getInitialLettersFromName()}</span>
      <h1>{name}</h1>
    </AvatarContainer>
  );
};

export default Avatar;
