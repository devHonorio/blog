import { ChevronLeft, ChevronRight } from "lucide-react";
import * as S from "./styles";

interface PaginationProps {
  page: number;
  limit: number;
  total: number;
  tag: string;
}

export const Pagination = ({ page, tag, total, limit }: PaginationProps) => {
  const prevPage = page - 1;
  const nextPage = page + 1;

  const tagParam = `tag=${tag}`;
  const prevpageParam = `page=${prevPage}`;
  const nextpageParam = `page=${nextPage}`;
  const limitParam = `limit=${limit}`;
  return (
    <S.container>
      {page > 1 && (
        <S.Left
          href={`/?${tagParam}&${prevpageParam}&${limitParam}`}
          scroll={false}
        >
          <ChevronLeft />
        </S.Left>
      )}

      <span>
        {page} de {total}
      </span>

      {page < total && (
        <S.Right
          href={`/?${tagParam}&${nextpageParam}&${limitParam}`}
          scroll={false}
        >
          <ChevronRight />
        </S.Right>
      )}
    </S.container>
  );
};
