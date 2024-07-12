import * as S from "./styles";
import jose from "public/assets/jose-honorio.jpg";

export const Logo = () => {
  return (
    <S.container>
      <S.image src={jose} alt="José Honorio de Oliveira Sobrinho Neto" />

      <h1>Desenvolvedor WEB</h1>
    </S.container>
  );
};
