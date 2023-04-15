import { CircleNotch } from "phosphor-react";
import { LoadingContainer, LoadingContent } from "../../styles/layout/loading";

interface LoagingProps {
  message?: string;
}

const Loading = ({ message = "Carregando..." }: LoagingProps) => {
  return (
    <LoadingContainer>
      <LoadingContent>
        <CircleNotch size={25} />
        <h1>{message}</h1>
      </LoadingContent>
    </LoadingContainer>
  );
};

export default Loading;
