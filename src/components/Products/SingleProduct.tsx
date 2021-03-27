import { useProductQuery } from '@/generated/graphql';
import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

interface Props {
  id: string;
}

const ProductStyles = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  max-width: var(--maxWidth);
  justify-content: center;
  align-items: top;
  gap: 2rem;
  img {
    width: 100%;
    object-fit: contain;
  }
`;
const SingleProduct: React.FC<Props> = ({ id }) => {
  const { data, loading, error } = useProductQuery({
    variables: {
      id,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  if (!data?.Product) return <p>No Items Found</p>;
  const { Product } = data;

  return (
    <ProductStyles>
      <Head>
        <title>Sick Fits | {Product.name}</title>
      </Head>
      <img
        src={Product.photo?.image?.publicUrlTransformed || ``}
        alt={Product.photo?.altText || ``}
      />
      <div className="details">
        <h2>{Product.name}</h2>
        <p>{Product.description}</p>
      </div>
    </ProductStyles>
  );
};

export default SingleProduct;
