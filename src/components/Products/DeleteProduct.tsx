/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
import React from 'react';
import {
  useDeleteProductMutation,
  AllProductDocument,
} from '@/generated/graphql';
import { ApolloCache, FetchResult } from '@apollo/client';

interface Props {
  id?: string;
  children: any;
}

const update = (cache: ApolloCache<any>, payload: FetchResult) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  cache.evict(cache.identify(payload.data.deleteProduct));
};

const DeleteProduct: React.FC<Props> = ({ id, children }) => {
  const [deleteProduct, { loading }] = useDeleteProductMutation({
    variables: { id: id! },
    update,
    refetchQueries: [{ query: AllProductDocument }],
  });
  return (
    <button
      disabled={loading}
      onClick={() => {
        if (confirm(`Are You Sure You Want To Delete This Item`)) {
          deleteProduct().catch((err) => alert(err.message));
        }
      }}
      type="button"
    >
      {children}
    </button>
  );
};

export default DeleteProduct;
