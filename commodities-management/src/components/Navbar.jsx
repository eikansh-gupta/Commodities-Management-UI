import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { applyTheme } from "../utils/theme";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 25px",
        background: theme === "light" ? "#f0f0f0" : "#222",
        color: theme === "light" ? "#000" : "#fff",
        position: "sticky",
        top: 0,
        zIndex: 10,
        borderBottom: theme === "light" ? "1px solid #ccc" : "1px solid #444",
        boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
      }}
    >
      {}
      <div style={{ display: "flex", gap: "16px", fontWeight: "bold" }}>
        <Link to="/products" style={{ textDecoration: "none", color: "inherit" }}>
          Products
        </Link>
        {user?.role === "Manager" && (
          <Link to="/dashboard" style={{ textDecoration: "none", color: "inherit" }}>
            Dashboard
          </Link>
        )}
      </div>

      {}
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          style={{
            padding: "6px 12px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
          }}
        >
          {theme === "light" ? "Dark" : "Light"} Mode
        </button>

        {user ? (
          <button
            onClick={() => {
              logout();
              navigate("/");
            }}
            style={{
              background: "crimson",
              color: "#fff",
              border: "none",
              padding: "6px 12px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
