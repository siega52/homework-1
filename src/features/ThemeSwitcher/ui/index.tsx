import React from 'react';
import { useTheme } from '../../../shared/lib/theme/useTheme';
import Button from '../../../shared/ui/Button';

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme}>
      {theme === 'light' ? '🌙 Тёмная' : '☀️ Светлая'}
    </Button>
  );
};

export default ThemeSwitcher;