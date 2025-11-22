import { Sun, Moon } from "lucide-react";
import * as Styled from './ThemeToggleButton.styles.js';
import useTheme from 'context/useTheme.js';

const ThemeToggleButton = () => {
  const { currentTheme, toggleTheme } = useTheme();

  const isDark = currentTheme.name === 'dark' ? true : false;

  return (
    <Styled.Root
      checked={isDark}
      onCheckedChange={toggleTheme}
    >
      <Styled.Thumb $isDark={isDark}>
        {isDark ? <Moon size={20} /> : <Sun size={20} />}
      </Styled.Thumb>
    </Styled.Root>
  );
}

export default ThemeToggleButton;
