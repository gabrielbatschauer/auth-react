import { createContext, useState, useEffect } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [access_token, setAccess_token] = useState(
    localStorage.getItem("access_token") || ""
  );
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const validateTokenAndFetchUser = async () => {
      if (access_token) {
        try {
          const response = await api.get("/auth/validate");
          setUser(response.data.user);
        } catch (error) {
          console.warn("Token inválido ou expirado, faça login novamente.");
          signOut();
        }
      }
      setLoading(false);
    };

    validateTokenAndFetchUser();
  }, []);

  const signIn = async (email, password) => {
    try {
      const response = await api.post("/login", { email, password });
      const { access_token, user } = response.data;

      setAccess_token(access_token);
      setUser(user);
      console.log(user);
      localStorage.setItem("access_token", access_token);

      navigate("/dashboard");

      return true;
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      return false;
    }
  };

  const signOut = () => {
    setUser(null);
    setAccess_token("");
    localStorage.removeItem("access_token");
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, access_token, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
