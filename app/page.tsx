import { MdxContent } from "@/components/mdx-content";
import { posts } from "@/velite";

export default function Page() {
  return (
    <div className="px-10">
      <MdxContent code={posts[0].content} />
    </div>
  );
}
