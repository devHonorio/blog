import rehypePrettyCode, { Options } from "rehype-pretty-code";

import { defineConfig, s } from "velite";
import { slugify } from "./utils/slugFy";

export default defineConfig({
  collections: {
    posts: {
      name: "Post",
      pattern: "posts/**/*.mdx",
      schema: s.object({
        title: s.string(),
        date: s.isodate(),
        description: s.string(),
        image: s.string(),
        content: s.mdx(),
        tags: s.array(s.string().toLowerCase()),
        slug: s.path().transform((slug) => {
          return slugify(slug.replace("posts/", ""));
        }),
      }),
    },
  },
  mdx: {
    rehypePlugins: [[rehypePrettyCode, { theme: "dracula" } as Options]],
  },
});
