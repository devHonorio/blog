import { Apresentation } from "@/components/HomePage/components/Apresentation";
import { Grid } from "@/components/Grid";
import { MdxContent } from "@/components/MdxContent";
import { PostCard } from "@/components/PostCard";
import { posts } from "@/velite";
import { HomePage } from "@/components/HomePage";

interface PageProps {
  searchParams: { [key: string]: string };
}
export default function Page({ searchParams }: PageProps) {
  return (
    <HomePage
      tag={searchParams.tag}
      pagination={{ limit: 3, page: Number(searchParams.page) || 1 }}
    />
  );
}
