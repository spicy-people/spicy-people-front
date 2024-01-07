import FilterablePosts from "@/app/components/FilterablePosts";
import { getAllPost } from "@/service/post";

export default async function PostsPage() {
  const posts = await getAllPost();
  const categories = [...new Set(posts.map((post) => post.category))];

  return (
    <section>
      <FilterablePosts posts={posts} categories={categories} />
    </section>
  );
}
