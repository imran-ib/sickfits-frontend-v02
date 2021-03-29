import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { useTotalProductsQuery } from '@/generated/graphql';
import PaginationStyles from '../styles/PaginationStyles';
import { perPage } from '../../../config';

interface Props {
  page: number;
}

export const Pagination: React.FC<Props> = ({ page }) => {
  const { data, loading, error } = useTotalProductsQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  // eslint-disable-next-line no-underscore-dangle
  if (!data?._allProductsMeta?.count) return <p>No Items Found</p>;
  // eslint-disable-next-line no-underscore-dangle
  const count = data?._allProductsMeta?.count;
  const pageCount = Math.ceil(count / perPage);

  return (
    <PaginationStyles>
      <Head>
        <title>Sick fits - page {page} of ---</title>
      </Head>
      <Link href={`/products/${page - 1}`}>
        <a aria-disabled={page <= 1}>Prev</a>
      </Link>
      <p>
        Page {page} of {pageCount}
      </p>
      <p>{count} Items Total</p>
      <Link href={`/products/${page + 1}`}>
        <a aria-disabled={page >= pageCount}> Next</a>
      </Link>
    </PaginationStyles>
  );
};
