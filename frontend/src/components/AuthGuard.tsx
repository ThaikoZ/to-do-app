import { Outlet } from "react-router-dom";
import axiosInstance from "../services/api-client";
import { useNavigate } from "react-router-dom";

const AuthGuard = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("session_token_access");
  const auth = token != null ? true : null;

  const payload = { token: token };

  axiosInstance
    .post("/auth/jwt/verify", payload)
    .then(() => console.log("success"))
    .catch(() => navigate("./auth/login"));

  // If auth == True set auth context

  return auth && <Outlet />;
};

export default AuthGuard;
