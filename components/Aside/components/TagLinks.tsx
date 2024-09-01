import * as S from "./styles";

interface TagLinksProps {
  tags: string[];
  currentTag?: string;
}

export const TagLinks = ({ tags, currentTag }: TagLinksProps) =>
  tags.map((tag) => (
    <S.link
      href={`/?tag=${tag}`}
      key={tag}
      scroll={false}
      data-active={tag === currentTag}
    >
      {tag}
    </S.link>
  ));
