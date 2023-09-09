import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ShowImage from './ShowImage';
import moment from 'moment';
import { addItem, updateItem, removeItem } from './cartHelpers';

const Card = ({
  product,
  showViewProductButton = true,
  showAddToCartButton = true,
  cartUpdate = false,
  showRemoveProductButton = false,
  setRun = f => f,
  run = undefined
  // changeCartSize
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);

  const showViewButton = showViewProductButton => {
    return (
      showViewProductButton && (
        <Link to={`/product/${product._id}`} className="mr-2">
          <button className="btn btn-outline-primary mt-2 mb-2 card-btn-1">View Product</button>
        </Link>
      )
    );
  };
  const addToCart = () => {
    // console.log('added');
    addItem(product, setRedirect(true));
  };

  const shouldRedirect = redirect => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const showAddToCartBtn = showAddToCartButton => {
    return (
      showAddToCartButton && (
        <button onClick={addToCart} className="btn btn-outline-warning mt-2 mb-2 card-btn-1  ">
          Add to cart
        </button>
      )
    );
  };

  const showStock = quantity => {
    return quantity > 0 ? (
      <span className="badge badge-primary badge-pill">In Stock </span>
    ) : (
      <span className="badge badge-primary badge-pill">Out of Stock </span>
    );
  };

  const handleChange = productId => event => {
    setRun(!run); // run useEffect in parent Cart
    setCount(event.target.value < 1 ? 1 : event.target.value);
    if (event.target.value >= 1) {
      updateItem(productId, event.target.value);
    }
  };

  const showCartUpdateOptions = cartUpdate => {
    return (
      cartUpdate && (
        <div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Adjust Quantity</span>
            </div>
            <input type="number" className="form-control" value={count} onChange={handleChange(product._id)} />
          </div>
        </div>
      )
    );
  };
  const showRemoveButton = showRemoveProductButton => {
    return (
      showRemoveProductButton && (
        <button
          onClick={() => {
            removeItem(product._id);
            setRun(!run); // run useEffect in parent Cart
          }}
          className="btn btn-outline-danger mt-2 mb-2"
        >
          Remove Product
        </button>
      )
    );
  };
  return (
    // <div className="card ">
    //   <div className="card-header card-header-1 ">{product.name}</div>
    //   <div className="card-body">
    //     {shouldRedirect(redirect)}
    //     <ShowImage item={product} url="product" />
    //     <p className="card-p  mt-2">{product.description.substring(0, 100)} </p>
    //     <p className="card-p black-10">$ {product.price}</p>
    //     <p className="black-9">Category: {product.category && product.category.name}</p>
    //     <p className="black-8">Added on {moment(product.createdAt).fromNow()}</p>
    //     {showStock(product.quantity)}
    //     <br />

    //     {showViewButton(showViewProductButton)}

    //     {showAddToCartBtn(showAddToCartButton)}

    //     {showRemoveButton(showRemoveProductButton)}

    //     {showCartUpdateOptions(cartUpdate)}
    //   </div>
    // </div>

    <div className="card border-0 shadow-lg">
  <div className="d-flex align-items-center" style={{ background: 'linear-gradient(to right, #4CAF50, #8BC34A, #E0E0E0, #B0B0B0)' }}>
    <div className="p-4">
      <ShowImage item={product} url="product" />
    </div>
    <div className="flex-grow-1">
      <div className="card-header bg-transparent text-dark font-weight-bold">{product.name}</div>
      <div className="card-body">
        {shouldRedirect(redirect)}
        <p className="card-text text-primary font-weight-bold">{product.description.substring(0, 100)}</p>
        <p className="card-text text-success font-weight-bold">$ {product.price}</p>
        <p className="text-muted font-weight-bold">Category: <span className="text-primary">{product.category && product.category.name}</span></p>
        <p className="text-muted font-weight-bold">Added {moment(product.createdAt).fromNow()}</p>
        {showStock(product.quantity)}
        <br />

        <div className="btn-group" role="group">
          {showViewButton(showViewProductButton)}
          {showAddToCartBtn(showAddToCartButton)}
          {showRemoveButton(showRemoveProductButton)}
          {showCartUpdateOptions(cartUpdate)}
        </div>
      </div>
    </div>
  </div>
</div>


  );
};

export default Card;
