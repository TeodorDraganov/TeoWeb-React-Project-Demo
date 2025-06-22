
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div style={{ padding: "20px", backgroundColor: "#1e1e1e", minHeight: "100vh", color: "#f0f0f0" }}>
      <h1 style={{ color: "#f0f0f0", marginBottom: "10px" }}>TeoWeb | React JS Product Management Demo (For Educational and Testing Purposes)</h1>

      <div style={{ 
        backgroundColor: "#2a2a2a", 
        border: "1px solid #a855f7", 
        borderRadius: "8px", 
        padding: "16px", 
        marginBottom: "24px" 
      }}>
        <h3 style={{ color: "#a855f7", marginTop: 0 }}>⚠️ Warning</h3>
        <p style={{ margin: 0 }}>
          This project is for <strong>educational purposes</strong> only.<br />
          It uses a mock API from{" "}
          <a href="https://dummyjson.com" target="_blank" rel="noopener noreferrer" style={{ color: "#a855f7" }}>
            DummyJSON
          </a>. Data is <strong>not stored permanently and all product data is temporary and not persisted.
                Do not treat any of the displayed content as real or commercially available.</strong>
        </p>
      </div>

      <Outlet /> 
    </div>
  );
}

export default Layout;
