// import axios from "axios";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import SubmitingForm from "../../components/SubmitingForm";

// type FormData = {
//   name: string;
//   objective: string;
//   description: string;
//   githubLink: string;
//   techStack: string;
// };

// const ProjectCreationForm = () => {
//   const [error, setError] = useState("");

//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting }
//   } = useForm<FormData>();

//   const navigate = useNavigate();

//   const handleSubmitForm = async (data: FormData) => {
//     try {
//       setError("");

//       const res = await axios.post(
//         `${import.meta.env.VITE_BACKEND_URL}/api/project/create-project`,
//         data,
//         { withCredentials: true }
//       );

//       if (res.status === 201) {
//         navigate(`/project/${res.data.data._id}`);
//       } else {
//         setError("Something went wrong while creating project.");
//       }

//     } catch (error: any) {
//       const message =
//         error?.response?.data?.message ||
//         error?.response?.data?.error ||
//         error?.message ||
//         "Unexpected error occurred.";

//       setError(message);
//     }
//   };

//   if(isSubmitting){
//     return <SubmitingForm/>
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center px-4 py-10">
//       <form
//         onSubmit={handleSubmit(handleSubmitForm)}
//         className="
//           bg-white dark:bg-[#0a0a0a]
//           border border-gray-300 dark:border-white/10
//           shadow-lg
//           rounded-2xl
//           p-8
//           w-full max-w-4xl
//           grid grid-cols-1 lg:grid-cols-2 
//           gap-6
//         "
//       >
//         {/* Project Name */}
//         <div className="flex flex-col gap-2">
//           <label className="text-black dark:text-white font-medium">Project Name</label>
//           <input
//             type="text"
//             placeholder="Enter project name"
//             {...register("name", {
//               required: "Project name is required",
//               minLength: { value: 5, message: "Min length is 5" },
//               maxLength: { value: 15, message: "Max length is 15" }
//             })}
//             className="
//               bg-gray-100 dark:bg-black
//               border border-gray-400 dark:border-white/20
//               px-4 py-3 rounded-xl
//               text-black dark:text-white
//               outline-none
//               transition-all duration-200 
//               focus:ring-2 focus:ring-black dark:focus:ring-white
//             "
//           />
//           {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
//         </div>

//         {/* GitHub Link */}
//         <div className="flex flex-col gap-2">
//           <label className="text-black dark:text-white font-medium">GitHub Link</label>
//           <input
//             type="text"
//             placeholder="Enter GitHub repo link"
//             {...register("githubLink", {
//               required: "GitHub link is required",
//               pattern: {
//                 value: /^(https?:\/\/)?(www\.)?github\.com\/[\w-]+\/[\w-]+\/?$/,
//                 message: "Enter a valid GitHub repository URL"
//               }
//             })}
//             className="
//               bg-gray-100 dark:bg-black
//               border border-gray-400 dark:border-white/20
//               px-4 py-3 rounded-xl
//               text-black dark:text-white
//               outline-none
//               transition-all duration-200 
//               focus:ring-2 focus:ring-black dark:focus:ring-white
//             "
//           />
//           {errors.githubLink && (
//             <p className="text-red-500 text-sm">{errors.githubLink.message}</p>
//           )}
//         </div>

//         {/* Objective */}
//         <div className="flex flex-col gap-2 col-span-1 lg:col-span-2">
//           <label className="text-black dark:text-white font-medium">Objective</label>
//           <textarea
//             placeholder="Explain the main objective of your project..."
//             {...register("objective", {
//               required: "Objective is required",
//               minLength: { value: 20, message: "Minimum length is 20 characters" }
//             })}
//             className="
//               bg-gray-100 dark:bg-black
//               border border-gray-400 dark:border-white/20
//               px-4 py-3 rounded-xl
//               text-black dark:text-white
//               outline-none
//               transition-all duration-200 
//               h-28
//               focus:ring-2 focus:ring-black dark:focus:ring-white
//             "
//           />
//           {errors.objective && (
//             <p className="text-red-500 text-sm">{errors.objective.message}</p>
//           )}
//         </div>

//         {/* Description */}
//         <div className="flex flex-col gap-2 col-span-1 lg:col-span-2">
//           <label className="text-black dark:text-white font-medium">Description</label>
//           <textarea
//             placeholder="Describe your project in detail..."
//             {...register("description", {
//               required: "Description is required",
//               minLength: { value: 40, message: "Minimum length is 40 characters" }
//             })}
//             className="
//               bg-gray-100 dark:bg-black
//               border border-gray-400 dark:border-white/20
//               px-4 py-3 rounded-xl
//               text-black dark:text-white
//               outline-none
//               transition-all duration-200 
//               h-32
//               focus:ring-2 focus:ring-black dark:focus:ring-white
//             "
//           />
//           {errors.description && (
//             <p className="text-red-500 text-sm">{errors.description.message}</p>
//           )}
//         </div>

//         {/* Tech Stack */}
//         <div className="flex flex-col gap-2">
//           <label className="text-black dark:text-white font-medium">Tech Stack</label>
//           <input
//             type="text"
//             placeholder="React, Node.js, JWT..."
//             {...register("techStack", { required: "Tech stack is required" })}
//             className="
//               bg-gray-100 dark:bg-black
//               border border-gray-400 dark:border-white/20
//               px-4 py-3 rounded-xl
//               text-black dark:text-white
//               outline-none
//               transition-all duration-200 
//               focus:ring-2 focus:ring-black dark:focus:ring-white
//             "
//           />
//           {errors.techStack && (
//             <p className="text-red-500 text-sm">{errors.techStack.message}</p>
//           )}
//         </div>

//         {/* Submit Button */}
//         <div className="col-span-1 lg:col-span-2 flex justify-center">
//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="
//               bg-black dark:bg-white 
//               text-white dark:text-black 
//               px-10 py-3 rounded-xl 
//               font-semibold 
//               hover:opacity-85 
//               transition-all duration-200
//               w-full lg:w-auto
//             "
//           >
//             {isSubmitting ? "Submitting..." : "Create Project"}
//           </button>
//         </div>
//       </form>

//       {/* GLOBAL ERROR MESSAGE */}
//       {error && (
//         <div className="absolute bottom-6 w-full max-w-lg text-center">
//           <p className="bg-red-600 text-white py-3 px-5 rounded-xl shadow-lg mx-auto">
//             {error}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProjectCreationForm;








import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import SubmitingForm from "../../components/SubmitingForm";

type FormData = {
  name: string;
  objective: string;
  description: string;
  githubLink: string;
  techStack: string;
};

type ThemeType = {
  theme: string;
};

const ProjectCreationForm: React.FC<ThemeType> = ({ theme }) => {
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormData>();

  const navigate = useNavigate();

  const handleSubmitForm = async (data: FormData) => {
    try {
      setError("");

      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/project/create-project`,
        data,
        { withCredentials: true }
      );

      if (res.status === 201) {
        navigate(`/project/${res.data.data._id}`);
      } else {
        setError("Something went wrong while creating project.");
      }
    } catch (error: any) {
      const message =
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        error?.message ||
        "Unexpected error occurred.";

      setError(message);
    }
  };

  if (isSubmitting) {
    return <SubmitingForm />;
  }

  return (
    <div
      className={`min-h-screen w-full px-4 py-10 flex items-center justify-center transition-all duration-500
         ${
      theme === "dark"
        ? "bg-gradient-to-br from-[#0a0f1e] via-[#111827] to-[#1e293b] text-gray-100"
        : "bg-gradient-to-br from-gray-50 via-indigo-50/20 to-gray-100 text-gray-800"
    }`}
    >
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className={`
          w-full max-w-4xl
          grid grid-cols-1 lg:grid-cols-2 gap-6
          p-8 rounded-2xl backdrop-blur-md
          border shadow-xl transition-all duration-300
          ${
            theme === "dark"
              ? "bg-white/5 border-white/10 hover:bg-white/10"
              : "bg-white border-gray-200"
          }
        `}
      >
        {/* Project Name */}
        <div className="flex flex-col gap-2">
          <label
            className={`text-sm font-medium ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Project Name
          </label>
          <input
            type="text"
            placeholder="Enter project name"
            {...register("name", {
              required: "Project name is required",
              minLength: { value: 5, message: "Min length is 5" },
              maxLength: { value: 15, message: "Max length is 15" }
            })}
            className={`
              px-4 py-3 rounded-xl outline-none transition-all duration-200
              border text-sm
              ${
                theme === "dark"
                  ? "bg-white/5 border-white/10 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-indigo-300/40"
                  : "bg-gray-100 border-gray-300 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500/40"
              }
            `}
          />
          {errors.name && (
            <p className="text-red-500 text-xs">{errors.name.message}</p>
          )}
        </div>

        {/* GitHub Link */}
        <div className="flex flex-col gap-2">
          <label
            className={`text-sm font-medium ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            GitHub Link
          </label>
          <input
            type="text"
            placeholder="Enter GitHub repo link"
            {...register("githubLink", {
              required: "GitHub link is required",
              pattern: {
                value: /^(https?:\/\/)?(www\.)?github\.com\/[\w-]+\/[\w-]+\/?$/,
                message: "Enter a valid GitHub repository URL"
              }
            })}
            className={`
              px-4 py-3 rounded-xl outline-none transition-all duration-200
              border text-sm
              ${
                theme === "dark"
                  ? "bg-white/5 border-white/10 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-indigo-300/40"
                  : "bg-gray-100 border-gray-300 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500/40"
              }
            `}
          />
          {errors.githubLink && (
            <p className="text-red-500 text-xs">
              {errors.githubLink.message}
            </p>
          )}
        </div>

        {/* Objective */}
        <div className="flex flex-col gap-2 col-span-1 lg:col-span-2">
          <label
            className={`text-sm font-medium ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Objective
          </label>
          <textarea
            placeholder="Explain the main objective of your project..."
            {...register("objective", {
              required: "Objective is required",
              minLength: { value: 20, message: "Minimum length is 20 characters" }
            })}
            className={`
              h-28 resize-none
              px-4 py-3 rounded-xl outline-none transition-all duration-200
              border text-sm
              ${
                theme === "dark"
                  ? "bg-white/5 border-white/10 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-indigo-300/40"
                  : "bg-gray-100 border-gray-300 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500/40"
              }
            `}
          />
          {errors.objective && (
            <p className="text-red-500 text-xs">
              {errors.objective.message}
            </p>
          )}
        </div>

        {/* Description */}
        <div className="flex flex-col gap-2 col-span-1 lg:col-span-2">
          <label
            className={`text-sm font-medium ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Description
          </label>
          <textarea
            placeholder="Describe your project in detail..."
            {...register("description", {
              required: "Description is required",
              minLength: { value: 40, message: "Minimum length is 40 characters" }
            })}
            className={`
              h-32 resize-none
              px-4 py-3 rounded-xl outline-none transition-all duration-200
              border text-sm
              ${
                theme === "dark"
                  ? "bg-white/5 border-white/10 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-indigo-300/40"
                  : "bg-gray-100 border-gray-300 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500/40"
              }
            `}
          />
          {errors.description && (
            <p className="text-red-500 text-xs">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-col gap-2">
          <label
            className={`text-sm font-medium ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Tech Stack
          </label>
          <input
            type="text"
            placeholder="React, Node.js, JWT..."
            {...register("techStack", { required: "Tech stack is required" })}
            className={`
              px-4 py-3 rounded-xl outline-none transition-all duration-200
              border text-sm
              ${
                theme === "dark"
                  ? "bg-white/5 border-white/10 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-indigo-300/40"
                  : "bg-gray-100 border-gray-300 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500/40"
              }
            `}
          />
          {errors.techStack && (
            <p className="text-red-500 text-xs">
              {errors.techStack.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="col-span-1 lg:col-span-2 flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="
              bg-blue-600 text-white
              px-10 py-3 rounded-xl
              font-semibold text-sm
              transition-all duration-200
              hover:bg-blue-700
              w-full lg:w-auto
            "
          >
            {isSubmitting ? "Submitting..." : "Create Project"}
          </button>
        </div>
      </form>

      {/* Error */}
      {error && (
        <div className="absolute bottom-6 w-full max-w-lg text-center">
          <p className="bg-red-600 text-white py-3 px-5 rounded-xl shadow-lg mx-auto text-sm">
            {error}
          </p>
        </div>
      )}
    </div>
  );
};

export default ProjectCreationForm;
