import { STORAGE_KEY } from "../constants/keys";

type Theme = "light" | "dark";

export function useTheme() {
  const theme = useState<Theme>("theme", () => "light");

  function applyTheme(value: Theme): void {
    if (import.meta.client) {
      const root = document.documentElement;
      if (value === "dark") {
        root.setAttribute("data-theme", "dark");
      } else {
        root.removeAttribute("data-theme");
      }
      localStorage.setItem(STORAGE_KEY, value);
    }
    theme.value = value;
  }

  function toggleTheme(): void {
    applyTheme(theme.value === "dark" ? "light" : "dark");
  }

  function initTheme(): void {
    if (!import.meta.client) return;
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    applyTheme(stored ?? "light");
  }

  const isDark = computed(() => theme.value === "dark");

  return { theme, isDark, toggleTheme, initTheme };
}
