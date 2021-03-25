// import { GlobalStyles } from 'components/styles/Global';
import React from 'react';
import Meta from './Meta';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => (
  <>
    <Meta /> {children}
  </>
);

export default Layout;
