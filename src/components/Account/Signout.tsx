import { useSignoutMutation, CurrentUserDocument } from '@/generated/graphql';
import React from 'react';

const Signout = () => {
  const [signoutMutation, { loading }] = useSignoutMutation({
    refetchQueries: [{ query: CurrentUserDocument }],
  });

  return (
    <button type="button" disabled={loading} onClick={() => signoutMutation()}>
      Sgin out
    </button>
  );
};

export default Signout;
