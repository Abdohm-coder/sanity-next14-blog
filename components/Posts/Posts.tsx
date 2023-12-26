import dynamic from "next/dynamic";
import Container from "../UI/Container";

const PostItem = dynamic(() => import("./PostItem"));

export function Posts({ posts }: { posts: Post[] }) {
  return (
    <div>
      <hr className="border-[#F7AB0A] mb-10" />
      <Container className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {posts?.length > 0 ? (
          posts.map((post) => <PostItem key={post._id} {...post} />)
        ) : (
          <div className="p-4 text-red-500">No posts found</div>
        )}
      </Container>
    </div>
  );
}
