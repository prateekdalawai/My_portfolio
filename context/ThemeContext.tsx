import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = "portfolio-theme";
const DARK_SCHEME_MEDIA = "(prefers-color-scheme: dark)";

const isBrowser = typeof window !== "undefined";

const getStoredTheme = (): Theme | null => {
  if (!isBrowser) return null;

  const storedTheme = window.localStorage.getItem(STORAGE_KEY);
  return storedTheme === "light" || storedTheme === "dark" ? storedTheme : null;
};

// 🟢 Default to dark if no stored theme exists
const getInitialTheme = (): Theme => {
  return getStoredTheme() ?? "dark";
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);
  const [hasStoredPreference, setHasStoredPreference] = useState(
    () => getStoredTheme() !== null
  );

  const setTheme = useCallback((nextTheme: Theme) => {
    setThemeState(nextTheme);
    setHasStoredPreference(true);
    if (isBrowser) {
      window.localStorage.setItem(STORAGE_KEY, nextTheme); // Save preference
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [setTheme, theme]);

  useEffect(() => {
    if (!isBrowser) return;

    const classList = document.body.classList;
    classList.remove("theme-light", "theme-dark");
    classList.add(`theme-${theme}`);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    if (!isBrowser || hasStoredPreference) return;

    const mediaQuery = window.matchMedia(DARK_SCHEME_MEDIA);
    const listener = (event: MediaQueryListEvent) => {
      setThemeState(event.matches ? "dark" : "light");
    };

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", listener);
    } else {
      mediaQuery.addListener(listener); // Safari < 14
    }

    return () => {
      if (typeof mediaQuery.removeEventListener === "function") {
        mediaQuery.removeEventListener("change", listener);
      } else {
        mediaQuery.removeListener(listener);
      }
    };
  }, [hasStoredPreference]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme,
    }),
    [setTheme, theme, toggleTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
