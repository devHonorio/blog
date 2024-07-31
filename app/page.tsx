import { HomePage } from "@/components/HomePage";

interface PageProps {
  searchParams: { [key: string]: string };
}
export default function Page({ searchParams }: PageProps) {
  return (
    <HomePage
      tag={searchParams.tag}
      pagination={{ limit: 10, page: Number(searchParams.page) || 1 }}
    />
  );
}
