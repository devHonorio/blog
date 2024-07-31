import { posts } from "@/.velite";

export const getAllTags = () => {
  const tags = posts.reduce((acc, post) => {
    return [...acc, ...post.tags];
  }, [] as string[]);

  return tags
    .map((tag) => tag.toLowerCase())
    .reduce((acc, tag) => {
      if (!acc.includes(tag)) {
        return [...acc, tag];
      }
      return acc;
    }, [] as string[]);
};
