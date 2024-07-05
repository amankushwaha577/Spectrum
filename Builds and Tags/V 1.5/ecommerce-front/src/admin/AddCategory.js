import React, { useState } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { createCategory } from "./apiAdmin";

const AddCategory = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  // destructure user and token from localstorage
  const { user, token } = isAuthenticated();

  const handleChange = (e) => {
    setError("");
    setName(e.target.value);
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    // make request to api to create category
    createCategory(user._id, token, { name }).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setError("");
        setSuccess(true);
      }
    });
  };

  const newCategoryFom = () => (
    // <form onSubmit={clickSubmit}>
    //     <div className="form-group">
    //         <label className="text-muted">Name</label>
    //         <input
    //             type="text"
    //             className="form-control"
    //             onChange={handleChange}
    //             value={name}
    //             autoFocus
    //             required
    //         />
    //     </div>
    //     <button className="btn btn-outline-primary">Create Category</button>
    // </form>
    <form
      onSubmit={clickSubmit}
      className="needs-validation"
      noValidate
      style={{
        backgroundColor: "#34495E",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="form-group">
        <label
          htmlFor="categoryName"
          style={{ color: "#ECF0F1", fontSize: "1.2rem" }}
        >
          Category Name
        </label>
        <input
          type="text"
          id="categoryName"
          className="form-control form-control-lg"
          onChange={handleChange}
          value={name}
          autoFocus
          required
          style={{ backgroundColor: "#2C3E50", color: "white" }}
        />
        <div className="invalid-feedback" style={{ color: "red" }}>
          Please provide a category name.
        </div>
      </div>
      <button
        className="btn btn-primary btn-lg btn-block"
        style={{ backgroundColor: "#3498DB", border: "none" }}
      >
        Create Category
      </button>
    </form>
  );

  const showSuccess = () => {
    if (success) {
      return <h3 className="text-success">{name} is created</h3>;
    }
  };

  const showError = () => {
    if (error) {
      return <h3 className="text-danger">Category should be unique</h3>;
    }
  };

  const goBack = () => (
    // <div className="mt-5">
    //   <Link to="/admin/dashboard" className="text-warning">
    //     Back to Dashboard
    //   </Link>
    // </div>
    <div className="mt-5 text-center">
      <Link to="/admin/dashboard" className="btn btn-warning btn-lg">
        Back to Dashboard
      </Link>
    </div>
  );

  return (
    <Layout
      title="Add a new category"
      description={`G'day ${user.name}, ready to add a new category?`}
    >
      <div className="row">
        <div className="col-md-8 offset-md-2">
          {showSuccess()}
          {showError()}
          {newCategoryFom()}
          {goBack()}
        </div>
      </div>
    </Layout>
  );
};

export default AddCategory;
