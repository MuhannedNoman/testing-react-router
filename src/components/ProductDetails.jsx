import React from 'react';

const ProductDetails = (props) => {
  const handleSave = () => {
    props.history.push('/products');
  };
  return (
    <div>
      <h1>Product Details - {props.match.params.id} </h1>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default ProductDetails;
