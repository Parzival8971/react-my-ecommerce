import React from 'react';
import ProductCard from './ProductCard';

const ProductsList = ({ data }) => {
  return (
    <>
      {data?.map((item, idx) => (
        <ProductCard key={idx} item={item} />
      ))}
    </>
  );
};

export default ProductsList;
