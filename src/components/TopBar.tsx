import ThemeToggleBtn from "./ThemeToggleBtn";
import { Sparkles } from "lucide-react";

type Props = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

const Topbar: React.FC<Props> = ({ theme, setTheme }) => {
  return (
    <div
      className={`fixed top-0 right-0 left-0 p-4 flex justify-end items-center gap-x-8 z-[90]
  backdrop-blur-xl border-b transition-colors
  ${
    theme === "dark"
      ? "bg-[#0f172a]/70 border-gray-700"
      : "bg-white/70 border-gray-200"
  }`}
    >
      <ThemeToggleBtn theme={theme} setTheme={setTheme} />

      <Sparkles className="w-7 h-7 mr-5 text-indigo-600" />

    </div>
  );
};

export default Topbar;
