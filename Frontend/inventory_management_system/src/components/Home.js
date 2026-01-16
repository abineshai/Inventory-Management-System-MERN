import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mt-5 text-center">
      
      <h1 className="mb-4">
        Inventory Management System
      </h1>

      <p style={{ fontSize: "18px", maxWidth: "800px", margin: "0 auto" }}>
        Welcome to the Inventory Management System. This is a full-stack MERN
        CRUD application developed to manage products efficiently. The system
        allows users to add, view, update, and delete inventory items using a
        simple and user-friendly interface.
      </p>

      <div className="mt-5">
        <h3>What You Can Do</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: "17px" }}>
          <li>✔ Add new products</li>
          <li>✔ View all inventory items</li>
          <li>✔ Update product details</li>
          <li>✔ Delete unwanted products</li>
        </ul>
      </div>

      {/* Navigation Button */}
      <div className="mt-5">
        <Link to="/products">
          <button className="btn btn-primary btn-lg">
            Go to Products Page
          </button>
        </Link>
      </div>

      <p className="mt-4 text-muted">
        Use the navigation menu or the button above to manage your inventory.
      </p>

    </div>
  );
}

export default Home;
