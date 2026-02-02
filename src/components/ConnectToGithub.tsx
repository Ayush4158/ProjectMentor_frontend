// import { FaGithub } from "react-icons/fa";
// import { MdOutlineWebhook } from "react-icons/md";
// import { FaArrowsAltH } from "react-icons/fa";
// import { Link } from "react-router-dom";

// type ThemeType = {
//   theme: string;
// };

// const ConnectToGithub:React.FC<ThemeType> = ({theme}) => {
//   return (
//     <div className="max-h-screen flex justify-center items-center px-4 ">

//       <div className="
//         w-full max-w-3xl py-6 px-6 
//         bg-white dark:bg-[#0a0a0a] 
//         rounded-2xl shadow-xl 
//         flex flex-col justify-center items-center
//         border border-gray-200 dark:border-white/10
//       ">

//         <div className="p-5 mb-2 font-extrabold text-2xl text-center text-black dark:text-white">
//           <p>Authenticate yourself with GitHub to use this feature</p>
//         </div>

//         {/* Icons Row */}
//         <div className="flex gap-6 justify-center items-center mt-4">

//           {/* GitHub */}
//           <FaGithub className="text-black dark:text-white w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32" />

//           <FaArrowsAltH className="text-gray-700 dark:text-white/70 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" />

//           {/* Webhook */}
//           <MdOutlineWebhook className="text-black dark:text-white w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32" />

//         </div>

//         {/* Description */}
//         <div className="text-center p-5 mt-4 text-gray-700 dark:text-white/80 leading-relaxed max-w-lg">
//           <p>
//             Connecting your GitHub allows Project Mentor to analyze your project’s real
//             commit activity and give you smart, personalized suggestions.
//             We only access the permissions required to read your commits — nothing is modified,
//             deleted, or pushed on your behalf.
//             <br /><br />
//             Your data stays secure, and you stay in full control.
//           </p>
//         </div>

//         {/* Button */}
//         <Link
//           to={`${import.meta.env.VITE_BACKEND_URL}/api/github/auth`}
//           className="
//             mt-4 py-3 px-8 rounded-xl font-semibold
//             text-white bg-black dark:bg-white 
//             hover:opacity-90 transition 
//             dark:text-black
//           "
//         >
//           Connect your GitHub
//         </Link>

//       </div>

//     </div>
//   );
// };

// export default ConnectToGithub;


import { FaGithub, FaArrowsAltH } from "react-icons/fa";
import { MdOutlineWebhook } from "react-icons/md";
import { Link } from "react-router-dom";

type ThemeType = {
  theme: string;
};

const ConnectToGithub: React.FC<ThemeType> = ({ theme }) => {
  return (
    <div
      className={`min-h-screen w-full flex justify-center items-center px-4 transition-all duration-500
        ${
          theme === "dark"
            ? "bg-gradient-to-br from-[#0a0f1e] via-[#111827] to-[#1e293b] text-gray-100"
            : "bg-gradient-to-br from-gray-50 via-indigo-50/20 to-gray-100 text-gray-800"
        }
      `}
    >
      <div
        className={`
          w-full max-w-3xl p-8 rounded-2xl shadow-xl backdrop-blur-md border
          transition-all duration-300
          ${
            theme === "dark"
              ? "bg-white/5 border-white/10 hover:bg-white/10"
              : "bg-white border-gray-200"
          }
        `}
      >
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          Authenticate yourself with GitHub to use this feature
        </h1>

        {/* Icons */}
        <div className="flex items-center justify-center gap-6 my-8">
          <FaGithub
            className={`w-24 h-24 ${
              theme === "dark" ? "text-gray-100" : "text-gray-800"
            }`}
          />

          <FaArrowsAltH
            className={`w-12 h-12 ${
              theme === "dark" ? "text-gray-400" : "text-gray-500"
            }`}
          />

          <MdOutlineWebhook
            className={`w-24 h-24 ${
              theme === "dark" ? "text-gray-100" : "text-gray-800"
            }`}
          />
        </div>

        {/* Description */}
        <p
          className={`text-center max-w-xl mx-auto leading-relaxed mb-8
            ${theme === "dark" ? "text-gray-300" : "text-gray-700"}
          `}
        >
          Connecting your GitHub allows Project Mentor to analyze your project’s
          real commit activity and give you smart, personalized suggestions.
          We only access the permissions required to read your commits — nothing
          is modified, deleted, or pushed on your behalf.
          <br />
          <br />
          Your data stays secure, and you stay in full control.
        </p>

        {/* Button */}
        <div className="flex justify-center">
          <Link
            to={`${import.meta.env.VITE_BACKEND_URL}/api/github/auth`}
            className="
              bg-blue-600 text-white
              py-3 px-8 rounded-xl font-medium
              transition-all duration-200
              hover:bg-blue-700 hover:scale-105
            "
          >
            Connect your GitHub
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConnectToGithub;
