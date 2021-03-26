import Link from 'next/link';
import React from 'react';

const Navbar = () => (
  <nav>
    <Link href="/products"> Products </Link>
    <Link href="/sell"> Sell </Link>
    <Link href="/orders"> Orders </Link>
    <Link href="/account"> Account </Link>
  </nav>
);

export default Navbar;
