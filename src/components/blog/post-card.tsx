import type { Post } from "@/types/blog";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="flex flex-col h-full shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{post.title}</CardTitle>
        <CardDescription>
          Posted on {format(new Date(post.createdAt), "MMMM d, yyyy 'at' h:mm a")}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-4">{post.content}</p>
      </CardContent>
    </Card>
  );
}
