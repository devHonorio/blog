import Link from "next/link";

import * as S from "./styles";

import { Tag } from "../Tag";

export interface PostCardProps {
  image: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  slug: string;
}
export const PostCard = ({
  image,
  title,
  description,
  date,
  tags,
  slug,
}: PostCardProps) => {
  const dateObj = new Date(date);
  return (
    <Link href={`/posts/${slug}`}>
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

        <S.time>
          {Intl.DateTimeFormat("pt-BR", { dateStyle: "long" }).format(dateObj)}{" "}
          • 4 minutos de leitura
        </S.time>

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
