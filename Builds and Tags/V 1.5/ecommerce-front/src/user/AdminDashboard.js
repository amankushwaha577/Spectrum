import React from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const {
    user: { _id, name, email, role },
  } = isAuthenticated();

  const adminLinks = () => {
    return (
      // <div className="card">
      //     <h4 className="card-header">Admin Links</h4>
      //     <ul className="list-group">
      //         <li className="list-group-item">
      //             <Link className="nav-link" to="/create/category">
      //                 Create Category
      //             </Link>
      //         </li>
      //         <li className="list-group-item">
      //             <Link className="nav-link" to="/create/product">
      //                 Create Product
      //             </Link>
      //         </li>
      //         <li className="list-group-item">
      //             <Link className="nav-link" to="/admin/orders">
      //                 View Orders
      //             </Link>
      //         </li>
      //         <li className="list-group-item">
      //             <Link className="nav-link" to="/admin/products">
      //                 Manage Products
      //             </Link>
      //         </li>
      //     </ul>
      // </div>

      <div
        style={{
          background: "black",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h4
          style={{
            background: "gray",
            padding: "10px",
            borderRadius: "5px",
            marginBottom: "15px",
            fontWeight: "bold",
            fontSize: "1.5rem",
            textAlign: "center",
            color: "white", // Set heading text to white
          }}
        >
          Admin Links
        </h4>
        <ul>
          <li
            style={{
              background: "linear-gradient(to right, #fc4a1a, #f7b733)",
              padding: "10px",
              borderRadius: "5px",
              marginBottom: "10px",
              listStyle: "none",
              color: "white", // Set list item text to white
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/create/category"
            >
              Create Category
            </Link>
          </li>
          <li
            style={{
              background: "linear-gradient(to right, #56ab2f, #a8e063)",
              padding: "10px",
              borderRadius: "5px",
              marginBottom: "10px",
              listStyle: "none",
              color: "white", // Set list item text to white
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/create/product"
            >
              Create Product
            </Link>
          </li>
          <li
            style={{
              background: "linear-gradient(to right, #ff8008, #ffc837)",
              padding: "10px",
              borderRadius: "5px",
              marginBottom: "10px",
              listStyle: "none",
              color: "white", // Set list item text to white
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/admin/orders"
            >
              View Orders
            </Link>
          </li>
          <li
            style={{
              background: "linear-gradient(to right, #f06, #9f6)",
              padding: "10px",
              borderRadius: "5px",
              marginBottom: "10px",
              listStyle: "none",
              color: "white", // Set list item text to white
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/admin/products"
            >
              Manage Products
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const adminInfo = () => {
    return (
      <div className="card mb-5 border-primary">
        <div className="card-header bg-primary text-white">
          <h3 className="card-title">User Information</h3>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="font-weight-bold">Name:</span> {name}
          </li>
          <li className="list-group-item">
            <span className="font-weight-bold">Email:</span> {email}
          </li>
          <li className="list-group-item">
            <span className="font-weight-bold">Role:</span>{" "}
            {role === 1 ? "Admin" : "Registered User"}
          </li>
        </ul>
      </div>

      // <div className="card mb-5">
      //     <h3 className="card-header">User Information</h3>
      //     <ul className="list-group">
      //         <li className="list-group-item">{name}</li>
      //         <li className="list-group-item">{email}</li>
      //         <li className="list-group-item">
      //             {role === 1 ? "Admin" : "Registered User"}
      //         </li>
      //     </ul>
      // </div>
    );
  };

  return (
    <Layout
      title="Dashboard"
      description={`G'day ${name}!`}
      className="container-fluid"
    >
      <div className="row">
        <div className="col-3">{adminLinks()}</div>
        <div className="col-9">{adminInfo()}</div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
