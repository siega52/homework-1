import React from 'react';
import type { PostCardProps } from '../types';

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <div className="post-meta">
        <span>Автор: {post.author} </span>
        <span>Дата: {post.date} </span>
      </div>
    </div>
  );
};

export default PostCard;