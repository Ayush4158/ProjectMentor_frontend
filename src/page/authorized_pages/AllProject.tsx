import axios from "axios";
import  { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";

type ProjectType = {
  _id: string;
  name: string;
  status: string;
  techStack: string;
  description: string;
};

type ThemeType = {
  theme: string;
};

const AllProject: React.FC<ThemeType> = ({ theme }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ProjectType[]>([]);

  const navigate = useNavigate()

  useEffect(() => {
    const getProject = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/project/getAllProject`,
          { withCredentials: true }
        );
        if (res.status === 200) {
          setData(res.data.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getProject();
  }, []);

  if (loading) {
    return (
      <Loading/>
    );
  }

  return (
  <div
    className={`min-h-screen w-full px-4 sm:px-6 md:px-10 py-8 transition-all duration-500 
    ${
      theme === "dark"
        ? "bg-gradient-to-br from-[#0a0f1e] via-[#111827] to-[#1e293b] text-gray-100"
        : "bg-gradient-to-br from-gray-50 via-indigo-50/20 to-gray-100 text-gray-800"
    }`}
  >
    
    <div className="mb-10">
      <h1 className="text-2xl sm:text-3xl font-bold mb-2">My Projects</h1>
      <p
        className={`text-sm sm:text-base ${
          theme === "dark" ? "text-gray-400" : "text-gray-600"
        }`}
      >
        View, track, and manage all your projects in one place.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 pb-16">

      {data.length > 0 ? (
        data.map((item) => (
          <div
            key={item._id}
            className={`
              group
              rounded-2xl 
              shadow-xl 
              backdrop-blur-md 
              p-6 
              border
              transition-all duration-300 
              hover:-translate-y-1 
              hover:shadow-2xl

              ${
                theme === "dark"
                  ? "border-white/10 bg-white/5 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]"
                  : "border-gray-200 bg-white hover:shadow-[0_0_20px_rgba(0,0,0,0.07)]"
              }
            `}
          >
            
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold">{item.name}</h2>

              <span
                className={`px-3 py-1 text-xs font-medium rounded-full 
                ${
                  item.status.toLowerCase() === "completed"
                    ? theme === "dark"
                      ? "bg-green-800/30 text-green-300 border border-green-600/30"
                      : "bg-green-100 text-green-700"
                    : theme === "dark"
                    ? "bg-yellow-800/30 text-yellow-300 border border-yellow-600/30"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {item.status}
              </span>
            </div>

            <p
              className={`text-xs font-medium mb-3 
                ${
                  theme === "dark"
                    ? "text-indigo-300/90"
                    : "text-indigo-600"
                }`}
            >
              {item.techStack}
            </p>

            {/* Description — show only 200 chars */}
            <p
              className={`text-sm leading-relaxed mb-5 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {item.description.length > 200
                ? item.description.slice(0, 200) + "..."
                : item.description}
            </p>

            <button
              onClick={() => navigate(`/project/${item._id}`)}
              className="
                bg-blue-600 
                text-white  
                py-2 px-5 
                rounded-lg 
                text-sm 
                font-medium
                transition-all 
                duration-200
                group-hover:scale-105
                hover:bg-blue-700
              "
            >
              Open
            </button>
          </div>
        ))
      ) : (
        <div
          className={`text-center py-20 text-sm italic col-span-full 
            ${
              theme === "dark" ? "text-gray-400" : "text-gray-500"
            }`}
        >
          No projects available yet.
        </div>
      )}

    </div>
  </div>
);


};

export default AllProject;
