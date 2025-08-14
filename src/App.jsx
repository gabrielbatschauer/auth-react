import { Route, Routes } from "react-router-dom";
import "./styles.css";
import IndexDashboard from "./pages/dashboard";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./components/LayoutComponents/DashBoard";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<IndexDashboard />}>
        <Route index element={<Dashboard />} />
      </Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  );
}

export default App;
