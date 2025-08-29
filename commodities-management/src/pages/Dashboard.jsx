import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (user?.role !== "Manager") {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Access Denied 🚫</h2>
        <p>You are not authorized to view this page.</p>
        <button
          style={{
            marginTop: "10px",
            padding: "10px 15px",
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Manager Dashboard</h1>
      <p style={{ textAlign: "center" }}>Welcome, {user?.email}</p>

      <div
        style={{
          marginTop: "30px",
          display: "flex",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            borderRadius: "8px",
            width: "150px",
            textAlign: "center",
            background: "#f9f9f9",
          }}
        >
          <h3>Total Products</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>120</p>
        </div>
        <div
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            borderRadius: "8px",
            width: "150px",
            textAlign: "center",
            background: "#f9f9f9",
          }}
        >
          <h3>Active Storekeepers</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>15</p>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <button
          style={{
            padding: "10px 20px",
            background: "#ff4d4d",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
          onClick={() => {
            logout();
            navigate("/");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
