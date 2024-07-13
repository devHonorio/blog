import * as S from "./styles";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return <S.conatainer>{children}</S.conatainer>;
};
