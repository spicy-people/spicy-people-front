import { getNonFeaturedPost } from "@/service/post";
import PostCard from "@/app/components/PostCard";
import MultiCarousel from "@/app/components/MultiCarousel";

export default async function CarouselPosts() {
  const posts = await getNonFeaturedPost();

  return (
    <section className={"m-4"}>
      <h2 className={"text-2xl font-bold my-2"}>You May Like</h2>
      <MultiCarousel>
        {posts.map((post) => (
          <PostCard key={post.path} post={post} />
        ))}
      </MultiCarousel>
    </section>
  );
}
