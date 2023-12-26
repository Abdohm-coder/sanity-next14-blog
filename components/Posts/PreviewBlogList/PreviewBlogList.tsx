import { useLiveQuery } from "next-sanity/preview";

import Posts from "..";
import { POSTS_QUERY } from "../../../sanity/lib/queries";

export function PreviewBlogList({ posts = [] }: { posts: Post[] }) {
  const [data] = useLiveQuery<Post[]>(posts, POSTS_QUERY);

  return <Posts posts={data} />;
}
