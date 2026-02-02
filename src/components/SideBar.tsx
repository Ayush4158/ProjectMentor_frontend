// import { useState } from "react";
// import { Menu, X, LayoutDashboard, Folder, PlusCircle, Cpu, LogOut, Sparkles } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import ThemeToggleBtn from "./ThemeToggleBtn";

// type ThemeType = {
//   theme: string;
//   setTheme: React.Dispatch<React.SetStateAction<string>>;
// };

// const Sidebar: React.FC<ThemeType> = ({ theme, setTheme }) => {
//   const [isMobileOpen, setIsMobileOpen] = useState(false);
//   const [hoverOpen, setHoverOpen] = useState(false);

//   const navigate = useNavigate()

//   const navItems = [
//     { icon: LayoutDashboard, label: "Dashboard", link: '/dashboard' },
//     { icon: Folder, label: "All Projects", link: '/all-projects' },
//     { icon: PlusCircle, label: "Create Project", link: '/create-project' },
//     { icon: Cpu, label: "Intellio", link: '/intellio' },
//   ];

//   const handleLogout = async() => {
//     try {
//       console.log('Hell0')
//       const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/logout`, {}, {withCredentials: true})

//       if(res.status === 200){
//         navigate('/login')
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error)
//     }
//   }

//   return (
//     <>
//       {/* ---------------------- MOBILE SIDEBAR ---------------------- */}
//       <aside
//         className={`fixed left-0 top-0 h-full z-[100] md:hidden flex flex-col justify-between border-r
//           overflow-hidden transition-all duration-300 ease-in-out 
//           ${theme === "dark" ? "bg-main-dark border-gray-400" : "bg-main-light border-gray-400"}
//           ${isMobileOpen ? "w-54 p-5" : "w-0"}
//         `}
//       >
//         <button
//           className="absolute left-4 top-4"
//           onClick={() => setIsMobileOpen(false)}
//         >
//           <X className="w-7 h-7 text-light dark:text-dark" />
//         </button>

//         <div>
//         <div
//       className={`flex justify-between items-center px-2 mt-8
//       transition-colors ${isMobileOpen ? "" : "hidden"} ${theme === "dark"? "bg-[#0f172a]/70 border-gray-700": "bg-white/70 border-gray-200"}`}>
//         <Sparkles className="w-7 h-7 mr-5 text-indigo-600" />
//         <ThemeToggleBtn theme={theme} setTheme={setTheme} />
//       </div>

//         <nav className="mt-4 flex flex-col   gap-6">
//           {navItems.map(({ icon: Icon, label, link }) => (
//             <Link to={link} onClick={() => setIsMobileOpen(false)}
//               key={label}
//               className="flex items-center gap-3 text-lg p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 "
//             >
//               <Icon className="w-6 h-6 dark:text-dark text-light" />
//               <span className="whitespace-nowrap dark:text-dark text-light">{label}</span>
//             </Link>
//           ))}

//         </nav>

//         </div>
//           <button onClick={handleLogout} className="flex items-center gap-3 text-lg p-2 mt-10 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
//             <LogOut className="w-6 h-6" />
//             <span className="whitespace-nowrap">Logout</span>
//           </button>
//       </aside>

//       {/* ---------------------- DESKTOP SIDEBAR ---------------------- */}
//       <aside
//         onMouseEnter={() => setHoverOpen(true)}
//         onMouseLeave={() => setHoverOpen(false)}
//         className={`hidden md:flex fixed left-0 top-0 h-full z-[100] flex-col justify-between
//           border-r  transition-all duration-300 ease-in-out p-3
//           ${theme === "dark" ? "bg-main-dark border-gray-400" : "bg-main-light border-gray-400"}
//           ${hoverOpen ? "w-54" : "w-24"} // <- increased collapsed width
//         `}
//       >
//       <div
//       className={`flex justify-between items-center px-2
//       transition-colors ${hoverOpen ? "" : "hidden"} ${theme === "dark"? "bg-main-dark border-gray-400": "bg-main-light border-gray-400"}`}>
//         <Sparkles className="w-7 h-7 mr-5 text-indigo-600" />
//         <ThemeToggleBtn theme={theme} setTheme={setTheme} />
//       </div>
//         <nav className="flex flex-col mt-10 gap-6">
//           {navItems.map(({ icon: Icon, label, link }) => (
//             <Link to={link}
//               key={label}
//               className={`flex items-center justify-center ${hoverOpen ? "justify-start" : "justify-center"} gap-4 p-2 rounded-lg hover:bg-[#3f5e79] dark:hover:bg-gray-800 transition-colors`}
//             >
//               <Icon className="w-6 h-6 dark:text-dark text-light" />
//               <span
//                 className={`whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out dark:text-dark text-light
//                   ${hoverOpen ? "opacity-100 max-w-full ml-2" : "opacity-0 max-w-0"}
//                 `}
//               >
//                 {label}
//               </span>
//             </Link>
//           ))}
//         </nav>

//         {/* Logout at bottom */}
//         <button onClick={handleLogout} className={`flex items-center ${hoverOpen ? "justify-start" : "hidden"} gap-4 p-2 mb-10 bg-red-500 rounded dark:text-dark text-light  mt-auto`}>
//           <LogOut className="w-6 h-6" />
//           <span
//             className={`whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out
//               ${hoverOpen ? "opacity-100 max-w-full ml-2" : "opacity-0 max-w-0"}
//             `}
//           >
//             Logout
//           </span>
//         </button>
//       </aside>

//       {/* ---------------------- MOBILE MENU BUTTON ---------------------- */}
//       <button
//         className="md:hidden fixed left-4 top-4 z-[95]"
//         onClick={() => setIsMobileOpen(true)}
//       >
//         <Menu className="w-8 h-8 text-gray-800 dark:text-gray-200" />
//       </button>
//     </>
//   );
// };

// export default Sidebar;



import { useState } from "react";
import {
  Menu,
  X,
  LayoutDashboard,
  Folder,
  PlusCircle,
  Cpu,
  LogOut,
  Sparkles,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ThemeToggleBtn from "./ThemeToggleBtn";

type ThemeType = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

const Sidebar: React.FC<ThemeType> = ({ theme, setTheme }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [hoverOpen, setHoverOpen] = useState(false);

  const navigate = useNavigate();

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", link: "/dashboard" },
    { icon: Folder, label: "All Projects", link: "/all-projects" },
    { icon: PlusCircle, label: "Create Project", link: "/create-project" },
    { icon: Cpu, label: "Intellio", link: "/intellio" },
  ];

  const handleLogout = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/logout`,
        {},
        { withCredentials: true }
      );
      if (res.status === 200) navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* ---------------------- MOBILE SIDEBAR ---------------------- */}
      <aside
        className={`fixed left-0 top-0 h-full z-[100] app-bg md:hidden flex flex-col justify-between border-r
          overflow-hidden transition-all duration-300 ease-in-out
          bg-surface border-surface
          ${isMobileOpen ? "w-54 p-5" : "w-0"}
        `}
      >
        <button
          className="absolute left-4 top-4"
          onClick={() => setIsMobileOpen(false)}
        >
          <X className="w-7 h-7 icon-main" />
        </button>

        <div>
          <div
            className={`flex justify-between items-center px-2 mt-8
            transition-colors ${isMobileOpen ? "" : "hidden"}
            bg-surface-inner border-surface`}
          >
            <Sparkles className="w-7 h-7 mr-5 icon-accent" />
            <ThemeToggleBtn theme={theme} setTheme={setTheme} />
          </div>

          <nav className="mt-4 flex flex-col gap-6">
            {navItems.map(({ icon: Icon, label, link }) => (
              <Link
                to={link}
                onClick={() => setIsMobileOpen(false)}
                key={label}
                className="flex items-center gap-3 text-lg p-2 rounded-lg hover-surface"
              >
                <Icon className="w-6 h-6 icon-main" />
                <span className="whitespace-nowrap text-main">{label}</span>
              </Link>
            ))}
          </nav>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 text-lg p-2 mt-10 rounded-lg hover-surface"
        >
          <LogOut className="w-6 h-6 text-red-500" />
          <span className="whitespace-nowrap text-red-500">Logout</span>
        </button>
      </aside>

      {/* ---------------------- DESKTOP SIDEBAR ---------------------- */}
      <aside
        onMouseEnter={() => setHoverOpen(true)}
        onMouseLeave={() => setHoverOpen(false)}
        className={`hidden md:flex fixed left-0 top-0 h-full z-[100] flex-col justify-between
          border-r transition-all duration-300 app-bg ease-in-out p-3
          bg-surface border-surface
          ${hoverOpen ? "w-54" : "w-24"}
        `}
      >
        <div
          className={`flex justify-between items-center px-2
          transition-colors ${hoverOpen ? "" : "hidden"}`}
        >
          <Sparkles className="w-7 h-7 mr-5 icon-accent" />
          <ThemeToggleBtn theme={theme} setTheme={setTheme} />
        </div>

        <nav className="flex flex-col mt-10 gap-6">
          {navItems.map(({ icon: Icon, label, link }) => (
            <Link
              to={link}
              key={label}
              className={`flex items-center ${
                hoverOpen ? "justify-start" : "justify-center"
              } gap-4 p-2 rounded-lg hover-surface transition-colors`}
            >
              <Icon className="w-6 h-6 icon-main" />
              <span
                className={`whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out text-main
                  ${hoverOpen ? "opacity-100 max-w-full ml-2" : "opacity-0 max-w-0"}
                `}
              >
                {label}
              </span>
            </Link>
          ))}
        </nav>

        <button
          onClick={handleLogout}
          className={`flex items-center ${
            hoverOpen ? "justify-start" : "hidden"
          } gap-4 p-2 mb-10 logout-bg mt-auto`}
        >
          <LogOut className="w-6 h-6" />
          <span>Logout</span>
        </button>
      </aside>

      {/* ---------------------- MOBILE MENU BUTTON ---------------------- */}
      <button
        className="md:hidden fixed left-4 top-4 z-[95]"
        onClick={() => setIsMobileOpen(true)}
      >
        <Menu className="w-8 h-8 icon-main" />
      </button>
    </>
  );
};

export default Sidebar;
