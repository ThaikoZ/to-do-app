import AuthGuard from "./components/AuthGuard";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import RegisterPage from "./pages/RegisterPage";
import SignInPage from "./pages/SignInPage";
import TaskPage from "./pages/TaskPage";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";

function Routes() {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/" element={<AuthGuard />}>
          <Route element={<Layout />}>
            <Route index element={<TaskPage />} />
            <Route path="tasks" element={<TaskPage />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Route>
        <Route path="/auth/">
          <Route path="login" element={<SignInPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </RouterRoutes>
    </BrowserRouter>
  );
}

export default Routes;
