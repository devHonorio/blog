"use client";

import * as S from "./styles";

import { posts } from "@/.velite";
import { MdxContent } from "@/components/MdxContent";
import { ChevronLeft } from "lucide-react";

interface PostProps {
  params: { post: string };
}

export default function Post({ params }: PostProps) {
  const post = posts.find((post) => post.slug === params.post);

  if (!post) return null;

  return (
    <>
      <S.back onClick={() => window.history.back()}>
        <ChevronLeft />
        Voltar
      </S.back>
      <MdxContent code={post.content} />;
    </>
  );
}
