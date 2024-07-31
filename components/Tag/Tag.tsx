import * as S from "./styles";

interface TagProps {
  children: React.ReactNode;
}

export const Tag = ({ children }: TagProps) => {
  return <S.container>{children}</S.container>;
};
