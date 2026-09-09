import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const STORAGE_KEY = "apc-theme";

type Theme = "light" | "dark";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = typeof window !== "undefined" ? (window.localStorage.getItem(STORAGE_KEY) as Theme | null) : null;
    const initial: Theme = saved === "dark" ? "dark" : "light";
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  // Render a stable placeholder during SSR to avoid hydration mismatch.
  if (!mounted) {
    return (
      <span
        className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground/50 ${className}`}
        aria-hidden="true"
      >
        <Sun className="h-5 w-5" />
      </span>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`group relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-border bg-card text-foreground shadow-soft transition-all hover:border-brand hover:text-brand hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${className}`}
    >
      <span
        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isDark ? "translate-y-0 rotate-0 opacity-100" : "-translate-y-full rotate-90 opacity-0"}`}
      >
        <Moon className="h-5 w-5" />
      </span>
      <span
        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isDark ? "translate-y-full rotate-90 opacity-0" : "translate-y-0 rotate-0 opacity-100"}`}
      >
        <Sun className="h-5 w-5" />
      </span>
    </button>
  );
}
