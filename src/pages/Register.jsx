import { Navigate, useNavigate } from "react-router-dom";
import BottomLogin from "../components/BottomLogin";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth";
import Spinner from "../components/spinner/Spinner";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const { user, loading } = useContext(AuthContext);

  if (loading) return <Spinner />;
  if (user) return <Navigate to="/dashboard" replace />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password, nome: name };
    navigate("/login");
    try {
      const response = await api.post("/user", data);
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error.response.data.message);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
        />
        <button type="submit">Register</button>
      </form>
      <BottomLogin page="register" />
    </div>
  );
}

export default Register;
