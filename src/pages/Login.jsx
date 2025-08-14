import { useContext, useState } from "react";
import { AuthContext } from "../context/auth";
import { Link, Navigate } from "react-router-dom";
import BottomLogin from "../components/BottomLogin";
import Spinner from "../components/spinner/Spinner";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, user, loading } = useContext(AuthContext);

  if (loading) return <Spinner />;
  if (user) return <Navigate to="/dashboard" replace />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const success = await signIn(email, password);
      if (success) {
        window.location.reload();
      } else {
        alert("Email ou senha inválidos.");
      }
    } catch (error) {
      alert("Ocorreu um erro ao tentar fazer login.");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>

      <BottomLogin page="login" />
    </div>
  );
}

export default Login;
