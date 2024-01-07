"use client";
import PostGrid from "@/app/components/PostGrid";
import { TPost } from "@/service/post";
import { useState } from "react";
import Categories from "@/app/components/Categories";

type TProps = {
  posts: TPost[];
  categories: string[];
};

const ALL_POST = "All Posts";
export default function FilterablePosts({ posts, categories }: TProps) {
  const [selected, setSelected] = useState<string>(ALL_POST);
  const filtered =
    selected === ALL_POST
      ? posts
      : posts.filter((post) => post.category === selected);

  return (
    <section className={"flex m-4"}>
      <PostGrid posts={filtered} />
      <Categories
        categories={[ALL_POST, ...categories]}
        selected={selected}
        onClick={setSelected}
      />
    </section>
  );
}
