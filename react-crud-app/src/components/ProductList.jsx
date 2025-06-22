import { Link } from "react-router-dom";
import { useState } from "react";


function ProductList({ products, setProducts }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = id => {
    if (window.confirm("Are you sure you want to delete the product?")) {
      setProducts(prev => prev.filter(p => p.id !== id));
    }
  };

  const filteredProducts = products.filter(p =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Product list</h2>

      <input
        type="text"
        placeholder="Search by name or description..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        style={{ padding: "8px", width: "100%", marginBottom: "15px" }}
      />

      <Link to="/create">
        <button>➕ New Product</button>
      </Link>

      {filteredProducts.length === 0 ? (
        <p>❌ No products found.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {filteredProducts.map(product => (
            <li
              key={product.id}
              className="product"
            >
              <strong>{product.title}</strong> {product.description}
              <div className="product-actions">
                <Link to={`/edit/${product.id}`}>
                  <button>✏️ Edit</button>
                </Link>
                <button
                  onClick={() => handleDelete(product.id)}
                  style={{ color: "red" }}
                >
                  🗑️ Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductList;
