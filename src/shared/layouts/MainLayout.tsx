import React from 'react';
import LayoutHeader from '../../widgets/LayoutHeader';
import LayoutFooter from '../../widgets/LayoutFooter';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="main-layout">
      <LayoutHeader />
      <main className="main-content">
        {children}
      </main>
      <LayoutFooter />
    </div>
  );
};

export default MainLayout;