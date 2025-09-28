import React from 'react';
import MainLayout from './shared/layouts/MainLayout';
import PostList from './widgets/PostList';
import { ThemeProvider } from './shared/lib/theme/ThemeContext';
import './App.css';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <MainLayout>
        <PostList />
      </MainLayout>
    </ThemeProvider>
  );
};

export default App;