import React from 'react';
import PostCard from '../../entities/post/ui/PostCard';
import type { Post } from '../../entities/post/types';

const PostList: React.FC = () => {
  const mockPosts: Post[] = [
    {
      id: 1,
      title: 'Первый пост',
      content: 'Содержание первого поста.',
      author: 'Иван Иванов',
      date: '22.09.2025'
    },
    {
      id: 2,
      title: 'Второй пост',
      content: 'Содержание второго поста.',
      author: 'Петр Петров',
      date: '22.09.2025'
    }
  ];

  return (
    <div className="post-list">
      <h2>Список постов</h2>
      {mockPosts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;