import { PostCard, PostCardProps } from "@/components/PostCard";

interface PostsProps {
  data: PostCardProps[];
}

export const Posts = ({ data }: PostsProps) => {
  return data?.map(({ title, description, image, date, tags, slug }, index) => {
    return (
      <PostCard
        key={`${title}-${index}`}
        image={image}
        title={title}
        description={description}
        date={date}
        tags={tags}
        slug={slug}
      />
    );
  });
};
