import { TPost } from "@/service/post";
import PostCard from "@/app/components/PostCard";

type Props = { posts: TPost[] };

export default function PostGrid({ posts }: Props) {
  return (
    <ul
      className={
        "grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      }
    >
      {posts.map((post) => (
        <li key={post.path}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
