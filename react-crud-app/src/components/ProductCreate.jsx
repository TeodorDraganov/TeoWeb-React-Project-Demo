import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductCreate({ setProducts }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreate = e => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      title,
      description,
    };

    setProducts(prev => [newProduct, ...prev]);

    navigate("/");
  };

  return (
    <form onSubmit={handleCreate} style={{ padding: "20px" }}>
      <h2>Create Product</h2>
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
      <button type="submit">Create</button>
    </form>
  );
}

export default ProductCreate;