import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import RegisterPage from "./pages/RegisterPage";
import SignInPage from "./pages/SignInPage";
import TaskPage from "./pages/TaskPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TaskPage />} />
          <Route path="tasks" element={<TaskPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="/auth/">
          <Route path="login" element={<SignInPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
