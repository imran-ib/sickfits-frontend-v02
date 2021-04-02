import Signout from '@/components/Account/Signout';
import { useCart } from '@/components/State/Cart/CartContext';
import { useUser } from '@/components/User/User';
import Link from 'next/link';
import React from 'react';

import NavStyles from '../../styles/NavStyles';

const Navbar = () => {
  const user = useUser();
  const { OpenCart } = useCart();
  return (
    <NavStyles>
      <Link href="/products">Products</Link>
      {user && (
        <>
          <Link href="/sell">Sell</Link>
          <Link href="/orders">Orders</Link>
          <Link href="/account">Account</Link>
          <button type="button" onClick={() => OpenCart()}>
            Open Cart
          </button>
          <Signout />
        </>
      )}
      {!user && (
        <>
          <Link href="/signin">Sign In</Link>
        </>
      )}
    </NavStyles>
  );
};

export default Navbar;

// <NavStyles>
//   <Link href="/products"> Products </Link>
//   <Link href="/sell"> Sell </Link>
//   <Link href="/orders"> Orders </Link>
//   <Link href="/account"> Account </Link>
// </NavStyles>
