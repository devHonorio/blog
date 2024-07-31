import * as S from "./styles";

import { posts as postsBlog } from "@/.velite";
import { Grid } from "../Grid";
import { Apresentation } from "./components/Apresentation";
import { Aside } from "./components/Aside";
import { Posts } from "./components/Posts";
import { Pagination } from "../Pagination";

interface HomePageProps {
  tag?: string;
  pagination?: {
    page: number;
    limit: number;
  };
}
export const HomePage = ({ tag = "", pagination }: HomePageProps) => {
  const posts = !tag
    ? postsBlog
    : postsBlog.filter((post) => post.tags.includes(tag));

  const postspagination = pagination
    ? posts.slice(
        (pagination.page - 1) * pagination.limit,
        pagination.page * pagination.limit,
      )
    : posts;

  return (
    <>
      <Apresentation />

      <S.container>
        <Aside />

        <div>
          <Grid>
            <Posts data={postspagination} />
          </Grid>

          {pagination && (
            <Pagination
              page={pagination.page}
              limit={pagination.limit}
              total={Math.ceil(posts.length / pagination.limit)}
              tag={tag}
            />
          )}
        </div>
      </S.container>
    </>
  );
};
