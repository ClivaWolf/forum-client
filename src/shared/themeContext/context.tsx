import { Dispatch, SetStateAction, createContext } from "react";

interface ThemeContextType {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
    themes: string[];
  }

export const ThemeContext = createContext<ThemeContextType>({ theme: 'light', setTheme: () => {} , themes: ['light', 'dark']});