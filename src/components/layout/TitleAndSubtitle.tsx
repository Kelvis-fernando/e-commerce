import { TitleAndSubtitleContainer } from "../../styles/layout/titleAndSubtitle";
import { TitleAndSubtitleProps } from "../../types/titleAndSubtitle";

const TitleAndSubtitle = ({ title, subtitle }: TitleAndSubtitleProps) => {
  return (
    <TitleAndSubtitleContainer>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </TitleAndSubtitleContainer>
  );
};

export default TitleAndSubtitle;
