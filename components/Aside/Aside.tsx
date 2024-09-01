import { TagLinks } from "./components";
import * as S from "./styles";

interface AsideProps {
  currentTag: string;
  tags: string[];
}

export const Aside = ({ currentTag = "", tags }: AsideProps) => {
  return (
    <S.container>
      <S.link href={`/`} scroll={false} data-active={currentTag === ""}>
        Todos
      </S.link>

      <TagLinks tags={tags} currentTag={currentTag} />
    </S.container>
  );
};
