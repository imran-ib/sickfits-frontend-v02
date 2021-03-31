import Signin from '@/components/Account/Signin';
import Signup from '@/components/Account/Signup';
import ReqReset from '@/components/Account/ReqReset';
import Layout from '@/components/layout/layout';
import React from 'react';
import styled from 'styled-components';

const AccountStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 2rem;
`;

const signin = () => (
  <Layout>
    <AccountStyles>
      <Signin />
      <Signup />
      <ReqReset />
    </AccountStyles>
  </Layout>
);
export default signin;
