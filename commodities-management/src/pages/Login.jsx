import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css";

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Manager");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    const ok = login(email, password, role); // pass all 3 params
    if (!ok) {
      alert("Invalid credentials!");
      return;
    }

    // Redirect based on role
    if (role === "Manager") navigate("/dashboard");
    else navigate("/products");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <select value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="Manager">Manager</option>
            <option value="StoreKeeper">Store Keeper</option>
          </select>
          <button type="submit">Login</button>

          <div style={{ marginTop: 12, fontSize: 12, opacity: 0.7 }}>
            Test creds → Manager: <b>manager@gmail.com / 1234</b> | Keeper: <b>keeper@gmail.com / 1234</b>
          </div>
        </form>
      </div>
    </div>
  );
}
