import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

interface LayoutProps {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const Layout = ({ theme, setTheme }: LayoutProps) => {
  return (
    <div
      className={`min-h-screen flex flex-col md:flex-row transition-all duration-500 
      ${
        theme === "dark"
          ? "bg-sec-dark"
          : "bg-sec-light"
      }`}
    >
      {/* Sidebar appears on all nested pages */}
      <SideBar theme={theme} setTheme={setTheme} />
      {/* <Topbar theme={theme} setTheme={setTheme} /> */}

      {/* Outlet renders the child routes */}
      <main className="md:pt-0 pt-12 md:ml-20 flex-1  md:p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
