import useDarkMode from "@/app/hooks/use-dark-mode";
import Button from "./Button";
import { Moon, Sun } from "lucide-react";

const DarkModeToggle = ({ defaultmode = "dark" }) => {
  const { theme, toggleTheme } = useDarkMode(defaultmode);
  return (
    <Button variant="ghost" size="sm" onClick={toggleTheme}>
      {theme === "light" && <Moon className="w-10 h-8 p-2" />}
      {theme === "dark" && (
        <Sun className="w-10 h-8 text-white bg-black rounded p-2" />
      )}
    </Button>
  );
};

export default DarkModeToggle;
