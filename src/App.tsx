import { Route, Routes } from "react-router-dom";
import NotFound from "./page/NotFound";
import { lazy, Suspense, useState } from "react";
import Layout from "./components/Layout"; // 👈 Import layout
import AllProject from "./page/authorized_pages/AllProject";
import Project from "./page/authorized_pages/Project";
import AiAssistance from "./page/authorized_pages/AiAssistance";
import AiGithubPushEventSuggestion from "./page/authorized_pages/AiGithubPushEventSuggestion";
import ProjectCreationForm from "./page/authorized_pages/ProjectCreationForm";
import ProtectedRoute from "./components/ProtectedRoute";
import Loading from "./components/Loading";

const LandingPage = lazy(() => import("./page/LandingPage"));
const Login = lazy(() => import("./page/Login"));
const SignUp = lazy(() => import("./page/SignUp"));
const Dashboard = lazy(() => import("./page/authorized_pages/Dashboard"));

const App = () => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") ?? "light"
  );


  return (
    <Suspense fallback={<Loading/>}>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected routes with sidebar layout */}
        <Route element={<ProtectedRoute />}>
          <Route element={<Layout theme={theme} setTheme={setTheme} />}>
            <Route
              path="/dashboard"
              element={<Dashboard theme={theme} />}
            />
            <Route
              path="/all-projects"
              element={<AllProject theme={theme}/>}
            />
            <Route
              path="/project/:id"
              element={<Project/>}
            />
            <Route
              path="/intellio"
              element={<AiAssistance theme={theme}/>}
            />
            <Route
              path="/github-suggestion/:id"
              element={<AiGithubPushEventSuggestion theme={theme}/>}
            />
            <Route
              path="/create-project"
              element={<ProjectCreationForm theme={theme}/>}
            />
            
          </Route>
        </Route>
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
