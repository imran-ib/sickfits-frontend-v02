import Layout from '@/components/layout/layout';
import React from 'react';
import ReqReset from '@/components/Account/ReqReset';
import ResetPassword from '@/components/Account/ResetPassword';

const reset = (props: { query: { token: string } }) => {
  const { query } = props;
  const { token } = query;
  if (!token)
    return (
      <Layout>
        <p>Sorry! No Token. Please Try Again</p>
        <ReqReset />
      </Layout>
    );
  return (
    <Layout>
      <ResetPassword token={token} />
    </Layout>
  );
};

export default reset;
