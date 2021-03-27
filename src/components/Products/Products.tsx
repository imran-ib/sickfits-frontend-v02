/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import { useAllProductQuery } from '@/generated/graphql';
import styled from 'styled-components';
import SingleProductCard from './SingleProductCard';

const ProductStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

const Products = () => {
  const { data, loading, error } = useAllProductQuery();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  if (!data?.allProducts) return <p>No Items Found</p>;
  return (
    <div>
      <ProductStyles>
        {data!.allProducts!.map((product) => (
          <SingleProductCard key={product!.id} Product={product!} />
        ))}
      </ProductStyles>
    </div>
  );
};

export default Products;
