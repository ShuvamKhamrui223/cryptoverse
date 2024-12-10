import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { PropsWithChildren, useEffect } from "react";

const ProtectedRoutes = ({ children }:PropsWithChildren) => {
  const user = useAuthContext();
  const navigate = useNavigate();
  console.log(user);
  useEffect(() => {
    if (user === false) navigate("/auth");
  }, [user, navigate]);

  return children;
};

export default ProtectedRoutes;
