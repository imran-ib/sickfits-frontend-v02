// import { GlobalStyles } from 'components/styles/Global';
import React from 'react';
import Navbar from '../Header/Navbar/Navbar';
import Meta from './Meta';

interface Props {
  children: React.ReactNode;
  pageTitle?: string;
}

const Layout: React.FC<Props> = ({ children, pageTitle }) => (
  <>
    <Meta pageTitle={pageTitle} />
    <Navbar />
    {children}
  </>
);

export default Layout;
