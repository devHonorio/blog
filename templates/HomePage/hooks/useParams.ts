"use client";
import { useSearchParams } from "next/navigation";

export const useParams = () => {
  const searchParams = useSearchParams();

  const tag = searchParams.get("tag") ?? "";
  const page = searchParams.get("page") ?? 1;
  const limit = searchParams.get("limit") ?? 10;

  return { tag, page: +page, limit: +limit };
};
