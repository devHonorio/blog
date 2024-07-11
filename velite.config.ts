import { defineConfig, s } from "velite";

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
      }),
    },
  },
});
