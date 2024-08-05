"use client";

import * as S from "./styles";

import { posts } from "@/.velite";
import { MdxContent } from "@/components/MdxContent";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";

interface PostProps {
  params: { post: string };
}

export default function Post({ params }: PostProps) {
  const post = posts.find((post) => post.slug === params.post);

  if (!post) return null;

  const dateObj = new Date(post.date);

  return (
    <>
      <S.back onClick={() => window.history.back()}>
        <ChevronLeft />
        Voltar
      </S.back>

      <S.content>
        <S.imageContainer>
          <S.image src={post.image} alt={post.title} fill />
        </S.imageContainer>

        <S.date>
          {Intl.DateTimeFormat("pt-BR", { dateStyle: "long" }).format(dateObj)}
        </S.date>

        <S.title>{post.title}</S.title>

        <S.description>{post.description}</S.description>

        <MdxContent code={post.content} />
      </S.content>
    </>
  );
}
