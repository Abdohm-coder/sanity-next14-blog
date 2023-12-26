import { POSTS_QUERY } from "@/sanity/lib/queries";
import { getClient } from "@/sanity/lib/client";
import { token } from "@/sanity/lib/token";
import Posts from "@/components/Posts";
import dynamic from "next/dynamic";
import PreviewProvider from "@/components/PreviewProvider";
import { draftMode } from "next/headers";
import VisualEditing from "@/components/VisualEditing";

const PreviewBlogList = dynamic(
  () => import("@/components/Posts/PreviewBlogList")
);

export default async function Home() {
  const isDraft = draftMode().isEnabled;
  const client = getClient(isDraft ? token : undefined);
  const posts = await client.fetch<Post[]>(POSTS_QUERY);
  if (isDraft) {
    return (
      <PreviewProvider token={token}>
        <PreviewBlogList posts={posts} />
        {/* <Suspense> */}
        {/* <VisualEditing /> */}
        {/* </Suspense> */}
      </PreviewProvider>
    );
  }
  return <Posts posts={posts} />;
}
