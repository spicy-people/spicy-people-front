import path from "path";
import { readFile } from "fs/promises";

export type TPost = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};
export type TPostData = TPost & {
  content: string;
  next: TPost | null;
  prev: TPost | null;
};

export async function getAllPost(): Promise<TPost[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  return readFile(filePath, "utf-8")
    .then<TPost[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}

export async function getFeaturedPost(): Promise<TPost[]> {
  return getAllPost().then((post) => post.filter((p) => p.featured));
}
export async function getNonFeaturedPost(): Promise<TPost[]> {
  return getAllPost().then((post) => post.filter((p) => !p.featured));
}

export async function getPostData(fileName: string): Promise<TPostData> {
  const filePath = path.join(process.cwd(), "data", "posts", `${fileName}.md`);
  const posts = await getAllPost();
  const post = posts.find((post) => post.path === fileName);

  if (!post) throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`);

  const index = posts.indexOf(post);
  const next = index > 0 ? posts[index - 1] : null;
  const prev = index < posts.length - 1 ? posts[index + 1] : null;

  const content = await readFile(filePath, "utf-8");
  return { ...post, content, next, prev };
}
