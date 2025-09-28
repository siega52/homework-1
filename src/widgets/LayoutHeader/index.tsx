import React, { useState } from 'react';
import Button from '../../shared/ui/Button';
import ThemeSwitcher from '../../features/ThemeSwitcher/ui';
import Modal from '../../shared/ui/Modal';

const LayoutHeader: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="layout-header">
        <h1>Мой Блог</h1>
        <nav>
          <ul>
            <li><a href="#">Главная</a></li>
            <li>
              <Button onClick={() => setIsModalOpen(true)} variant="secondary">
                О проекте
              </Button>
            </li>
            <li><ThemeSwitcher /></li>
          </ul>
        </nav>
      </header>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="О проекте"
      >
        <div className="project-info">
          <h3>Блог приложение</h3>
          <p>Это учебный проект, реализованный с помощью:</p>
          <ul>
            <li>React + TypeScript</li>
            <li>Vite</li>
            <li>Context API для управления темой</li>
            <li>React Portal для модальных окон</li>
          </ul>
          <p><strong>Функциональность:</strong></p>
          <ul>
            <li>Просмотр списка постов</li>
            <li>Переключение светлой/тёмной темы</li>
            <li>Модальное окно с информацией</li>
          </ul>
        </div>
      </Modal>
    </>
  );
};

export default LayoutHeader;