import * as S from "./styles";

import { getAllTags } from "@/utils/getAllTags";

interface AsideProps {
  currentTag?: string;
}

export const Aside = ({ currentTag = "" }: AsideProps) => {
  const tags = getAllTags();

  return (
    <S.container>
      <S.link href={`/#tags`} data-active={currentTag === ""}>
        Todos
      </S.link>

      <TagLinks tags={tags} currentTag={currentTag} />
    </S.container>
  );
};

interface TagLinksProps {
  tags: string[];
  currentTag?: string;
}
const TagLinks = ({ tags, currentTag }: TagLinksProps) =>
  tags.map((tag) => (
    <S.link
      href={`/?tag=${tag}#tags`}
      key={tag}
      data-active={tag === currentTag}
    >
      {tag}
    </S.link>
  ));
