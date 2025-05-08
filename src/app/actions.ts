"use server";

import type { Post } from "@/types/blog";
import { revalidatePath } from "next/cache";

let posts: Post[] = [
  {
    id: "1",
    title: "Blog 1",
    content: "Blog 1 content",
    createdAt: new Date("2024-01-15T10:00:00Z"),
  },
  {
    id: "2",
    title: "Blog 2",
    content: "Blog 2 content",
    createdAt: new Date("2024-01-16T14:30:00Z"),
  },
  {
    id: "3",
    title: "Blog 3",
    content: "Blog 3 content",
    createdAt: new Date("2024-01-18T09:00:00Z"),
  }
];

export async function getPosts(): Promise<Post[]> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return posts.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
}

export async function addPost(data: { title: string; content: string }): Promise<Post> {
  // API delay
  await new Promise((resolve) => setTimeout(resolve, 300));
  
  const newPost: Post = {
    id: String(Date.now()),
    title: data.title,
    content: data.content,
    createdAt: new Date(),
  };
  posts = [newPost, ...posts];
  
  revalidatePath("/");
  return newPost;
}
