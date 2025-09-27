import React from 'react';

const LayoutHeader: React.FC = () => {
  return (
    <header className="layout-header">
      <h1>Мой Блог</h1>
      <nav>
        <ul>
          <li><a href="#">Главная</a></li>
          <li><a href="#">О нас</a></li>
          <li><a href="#">Контакты</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default LayoutHeader;