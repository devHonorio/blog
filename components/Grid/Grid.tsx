import * as S from "./styles";

interface GridProps {
  children: React.ReactNode;
}

export const Grid = ({ children }: GridProps) => {
  return <S.container>{children}</S.container>;
};
