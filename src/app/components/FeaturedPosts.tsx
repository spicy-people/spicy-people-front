import PostGrid from "@/app/components/PostGrid";
import { getFeaturedPost } from "@/service/post";

export default async function FeaturedPosts() {
  const posts = await getFeaturedPost();
  return (
    <section className={"m-4"}>
      <h2 className={"text-2xl font-bold my-2"}>Featured Posts</h2>
      <PostGrid posts={posts} />
    </section>
  );
}
