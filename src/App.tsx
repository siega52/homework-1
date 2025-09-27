import React from 'react';
import MainLayout from './shared/layouts/MainLayout';
import PostList from './widgets/PostList';
import './App.css';

const App: React.FC = () => {
  return (
    <MainLayout>
      <PostList />
    </MainLayout>
  );
};

export default App;