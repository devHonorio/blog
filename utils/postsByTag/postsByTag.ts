interface PostsByTagProps {
  posts: Posts[];
  tag: string;
}

interface Posts {
  tags: string[];
  title: string;
  image: string;
  content: string;
  date: string;
  description: string;
  slug: string;
}

export const postsByTag = ({ posts, tag = "" }: PostsByTagProps) => {
  return !tag ? posts : posts.filter((post) => post.tags.includes(tag));
};
