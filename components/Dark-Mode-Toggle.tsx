import useDarkMode from "@/app/hooks/use-dark-mode";
import Button from "./Button";
import { Moon, Sun } from "lucide-react";

const DarkModeToggle = ({ defaultmode = "dark" }) => {
  const { theme, toggleTheme } = useDarkMode(defaultmode);
  return (
    <Button variant="ghost" size="sm" onClick={toggleTheme}>
      {theme === "light" && <Moon className="w-6 h-6" />}
      {theme === "dark" && <Sun className="w-6 h-6" />}
    </Button>
  );
};

export default DarkModeToggle;
