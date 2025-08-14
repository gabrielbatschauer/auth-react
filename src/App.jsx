import { Route, Routes } from "react-router-dom";
import "./styles.css";
import Dashboard from "./pages/dashboard/Dashboard";
import NavDashboard from "./pages/dashboard/NavDashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<NavDashboard />}>
        <Route index element={<Dashboard />} />
      </Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  );
}

export default App;
