const ProductList = ({ products, deleteProduct, updateProduct, role }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>All Products</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id} style={{ marginBottom: "8px" }}>
            {p.name} - ₹{p.price} ({p.quantity})
            {role === "Manager" && (
              <>
                <button
                  style={{ marginLeft: "10px" }}
                  onClick={() => deleteProduct(p.id)}
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
