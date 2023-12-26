import { POSTS_QUERY } from "@/sanity/lib/queries";
import { getClient } from "@/sanity/lib/client";
import { token } from "@/sanity/lib/token";
import Posts from "@/components/Posts";
import dynamic from "next/dynamic";
import PreviewProvider from "@/components/PreviewProvider";

const PreviewBlogList = dynamic(
  () => import("@/components/Posts/PreviewBlogList")
);

export default async function Home({ draftMode = false }) {
  const client = getClient(draftMode ? token : undefined);
  const posts = await client.fetch<Post[]>(POSTS_QUERY);
  if (draftMode) {
    return (
      <PreviewProvider token={token}>
        <PreviewBlogList posts={posts} />
      </PreviewProvider>
    );
  }
  console.log(posts);
  return <Posts posts={posts} />;
}
