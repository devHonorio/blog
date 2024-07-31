import Link from "next/link";

import * as S from "./styles";

import { Tag } from "../Tag";

export interface PostCardProps {
  image: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
}
export const PostCard = ({
  image,
  title,
  description,
  date,
  tags,
}: PostCardProps) => {
  return (
    <Link href="/posts/first-post-1">
      <S.container>
        <S.imageContainer>
          <S.image
            fill
            priority
            src={image}
            alt={title}
            sizes="(100px, 100px)"
          />
        </S.imageContainer>

        <S.time>13 de junho de 2023 • 4 minutos de leitura</S.time>

        <S.title>{title}</S.title>

        <S.description>{description}</S.description>

        <S.tagContainer>
          <Tags tags={tags} />
        </S.tagContainer>
      </S.container>
    </Link>
  );
};

const Tags = ({ tags }: { tags: string[] }) =>
  tags?.map((tag) => <Tag key={tag}>{tag}</Tag>);
