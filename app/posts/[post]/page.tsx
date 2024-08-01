import { posts } from "@/.velite";
import { MdxContent } from "@/components/MdxContent";

interface PostProps {
  params: { post: string };
}

export default function Post({ params }: PostProps) {
  const post = posts.find((post) => post.slug === params.post);

  if (!post) return null;

  return <MdxContent code={post.content} />;
}
