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
  return (
    <S.container>
      {page > 1 && (
        <S.Left href={`/?tag=${tag}&page=${prevPage}#pagination`}>
          <ChevronLeft />
        </S.Left>
      )}

      <span id="pagination">
        {page} de {total}
      </span>

      {page < total && (
        <S.Right href={`/?tag=${tag}&page=${nextPage}#pagination`} className="">
          <ChevronRight />
        </S.Right>
      )}
    </S.container>
  );
};
