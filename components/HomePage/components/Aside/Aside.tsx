"use client";
import * as S from "./styles";

import { usePathname } from "next/navigation";
import { getAllTags } from "@/utils/getAllTags";

export const Aside = () => {
  const path = usePathname();
  const tags = getAllTags();

  return (
    <S.container>
      <S.link href={`/#tags`} data-active={path === `/`}>
        Todos
      </S.link>

      <TagLinks tags={tags} path={path} />
    </S.container>
  );
};

interface TagLinksProps {
  tags: string[];
  path?: string;
}
const TagLinks = ({ tags, path }: TagLinksProps) =>
  tags.map((tag) => (
    <S.link
      href={`/?tag=${tag}#tags`}
      key={tag}
      data-active={path === `/${tag}`}
    >
      {tag}
    </S.link>
  ));
