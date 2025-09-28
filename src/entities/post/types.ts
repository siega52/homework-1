export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
}

export interface PostCardProps {
  post: Post;
}