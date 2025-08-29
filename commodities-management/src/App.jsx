import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";

function PrivateRoute({ element, allowedRoles }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/" replace />;
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Access Denied 🚫</h2>
        <p>You are not authorized to view this page.</p>
      </div>
    );
  }
  return element;
}

export default function App() {
  return (
    <Router>
      <AuthProvider>
        {}
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={<PrivateRoute element={<Dashboard />} allowedRoles={["Manager"]} />}
          />
          <Route
            path="/products"
            element={<PrivateRoute element={<Products />} allowedRoles={["Manager", "StoreKeeper"]} />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}
