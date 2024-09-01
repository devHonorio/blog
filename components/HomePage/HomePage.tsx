"use client";
import * as S from "./styles";

import { posts as postsBlog } from "@/.velite";
import { Grid } from "../Grid";
import { Apresentation } from "./components/Apresentation";
import { Aside } from "./components/Aside";
import { Posts } from "./components/Posts";
import { Pagination } from "../Pagination";
import { useSearchParams } from "next/navigation";

export const HomePage = () => {
  const searchParams = useSearchParams();

  const tag = searchParams.get("tag") ?? "";
  const page = searchParams.get("page") ?? 1;
  const limit = searchParams.get("limit") ?? 10;

  const posts = !tag
    ? postsBlog
    : postsBlog.filter((post) => post.tags.includes(tag));

  const postspagination = posts.slice((+page - 1) * +limit, +page * +limit);

  return (
    <>
      <Apresentation />

      <S.container>
        <Aside currentTag={tag} />

        <div>
          <Grid>
            <Posts data={postspagination} />
          </Grid>

          <Pagination
            page={+page}
            limit={+limit}
            total={Math.ceil(posts.length / +limit)}
            tag={tag}
          />
        </div>
      </S.container>
    </>
  );
};
