import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export default function Products() {
  const { user } = useAuth();
  const [products, setProducts] = useState([
    { id: 1, name: "Rice", price: 40, qty: 100 },
    { id: 2, name: "Wheat", price: 35, qty: 70 },
    { id: 3, name: "Sugar", price: 45, qty: 50 },
  ]);

  const [form, setForm] = useState({ name: "", price: "", qty: "" });

  const onAdd = (e) => {
    e.preventDefault();
    if (!form.name || !form.price || !form.qty) return;
    const newItem = {
      id: products.length ? Math.max(...products.map((p) => p.id)) + 1 : 1,
      name: form.name,
      price: Number(form.price),
      qty: Number(form.qty),
    };
    setProducts([...products, newItem]);
    setForm({ name: "", price: "", qty: "" });
  };

  const onDelete = (id) => setProducts(products.filter((p) => p.id !== id));

  return (
    <div style={{ padding: 20 }}>
      <h1>Products</h1>

      <ul style={{ marginTop: 10 }}>
        {products.map((p) => (
          <li key={p.id} style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 8 }}>
            <span>
              {p.name} — ₹{p.price} — Qty: {p.qty}
            </span>
            {user?.role === "Manager" && (
              <button onClick={() => onDelete(p.id)} style={{ marginLeft: 8 }}>
                Delete
              </button>
            )}
          </li>
        ))}
      </ul>

      {user?.role === "Manager" && (
        <form onSubmit={onAdd} style={{ marginTop: 16, display: "flex", gap: 8 }}>
          <input
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
          />
          <input
            type="number"
            placeholder="Price"
            value={form.price}
            onChange={(e) => setForm((s) => ({ ...s, price: e.target.value }))}
          />
          <input
            type="number"
            placeholder="Qty"
            value={form.qty}
            onChange={(e) => setForm((s) => ({ ...s, qty: e.target.value }))}
          />
          <button type="submit">Add</button>
        </form>
      )}
    </div>
  );
}
