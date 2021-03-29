/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import { useAllProductQuery } from '@/generated/graphql';
import { perPage } from '@/../config';
import styled from 'styled-components';
import SingleProductCard from './SingleProductCard';

const ProductStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

interface Props {
  page: number;
}

const Products: React.FC<Props> = ({ page }) => {
  const { data, loading, error } = useAllProductQuery({
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  });
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
