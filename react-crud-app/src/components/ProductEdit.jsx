import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function ProductEdit({ products, setProducts }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(p => p.id === parseInt(id));

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (product) {
      setTitle(product.title);
      setDescription(product.description);
    }
  }, [product]);

  const handleUpdate = e => {
    e.preventDefault();

    const updatedProduct = {
      ...product,
      title,
      description
    };

    setProducts(prev =>
      prev.map(p => (p.id === updatedProduct.id ? updatedProduct : p))
    );

    navigate("/");
  };

  if (!product) {
    return <p style={{ padding: "20px" }}>Product not found.</p>;
  }

  return (
    <form onSubmit={handleUpdate} style={{ padding: "20px" }}>
      <h2>Edit Product</h2>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default ProductEdit;