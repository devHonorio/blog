import * as S from "./styles";

export const Footer = () => {
  return (
    <S.container>
      <S.creator>
        Created by{" "}
        <a target="_blank" href="https://github.com/devHonorio">
          Jose Honorio
        </a>
      </S.creator>

      <S.social>
        <S.socialItem target="_blank" href="https://github.com/devHonorio">
          <S.github />
        </S.socialItem>

        <S.socialItem
          target="_blank"
          href="https://www.instagram.com/honorio.click/"
        >
          <S.instagram />
        </S.socialItem>

        <S.socialItem target="_blank" href="https://wa.me/5546999784784">
          <S.whatsapp />
        </S.socialItem>
      </S.social>

      <S.copyright>
        Todos os direitos reseverdos © José Honorio 2024
      </S.copyright>
    </S.container>
  );
};
