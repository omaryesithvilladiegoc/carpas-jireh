import { createContext, useContext, useState, ReactNode } from "react";
import "./styles.css"; // Asegúrate de tener este archivo para los estilos

interface IThemeContext {
  background: string;
  color: string;
  setTheme: (background: string, color: string) => void;
}

const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [background, setBackground] = useState<string>("white");
  const [color, setColor] = useState<string>("black");

  const setTheme = (bg: string, textColor: string) => {
    setBackground(bg);
    setColor(textColor);
    document.body.style.backgroundColor = bg;
    document.body.style.color = textColor;
  };

  return (
    <ThemeContext.Provider value={{ background, color, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};
