import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ allowedRoles, children }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" />;
  }

  if (!allowedRoles.includes(user.role)) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Access Denied 🚫</h2>
        <p>You do not have permission to access this page.</p>
      </div>
    );
  }

  return children;
}
