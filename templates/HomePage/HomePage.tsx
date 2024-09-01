"use client";
import * as S from "./styles";

import { posts as postsBlog } from "@/.velite";
import { Grid } from "../../components/Grid";
import { Apresentation } from "./components/Apresentation";
import { Aside } from "../../components/Aside";
import { Posts } from "./components/Posts";
import { Pagination } from "../../components/Pagination";
import { getAllTags } from "@/utils/getAllTags";
import { useParams } from "./hooks";
import { postsByTag } from "@/utils/postsByTag";
import { usePagination } from "@/components/Pagination/hooks/usePagination";

export const HomePage = () => {
  const { tag, page, limit } = useParams();

  const posts = postsByTag({ posts: postsBlog, tag });

  const postspagination = usePagination({ data: posts, page, limit });

  const tags = getAllTags();

  return (
    <>
      <Apresentation />

      <S.container>
        <Aside currentTag={tag} tags={tags} />

        <div>
          <Grid>
            <Posts data={postspagination} />
          </Grid>

          <Pagination
            page={page}
            limit={limit}
            total={Math.ceil(posts.length / limit)}
            tag={tag}
          />
        </div>
      </S.container>
    </>
  );
};
