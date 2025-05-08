import { getPosts } from "@/app/actions";
import { AddPostForm } from "@/components/blog/add-post-form";
import { PostCard } from "@/components/blog/post-card";
import { Separator } from "@/components/ui/separator";

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold tracking-tight text-primary">
          Blogs
        </h1>
      </header>

      <section className="mb-16 flex justify-center">
        <AddPostForm />
      </section>

      <Separator className="my-12" />

      <section>
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Recent blogs
        </h2>
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <img src="https://picsum.photos/seed/empty/400/300" alt="No posts yet" data-ai-hint="empty state" className="mx-auto mb-4 rounded-lg shadow-md" />
            <p className="text-xl text-muted-foreground">
              No blogs yet.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
