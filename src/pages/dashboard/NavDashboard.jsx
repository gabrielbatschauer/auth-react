import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/auth";

function NavDashboard() {
  const { user, loading: isLoading, signOut } = useContext(AuthContext);

  if (isLoading) return <Spinner />;
  if (!user) return <Navigate to="/login" replace />;

  return (
    <div>
      <nav>Test to {user.email}</nav>
      <Outlet />
    </div>
  );
}

export default NavDashboard;
