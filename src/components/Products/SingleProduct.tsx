import React from 'react';
import Link from 'next/link';
import { Product as ProductProps } from '@/generated/graphql';
import formatMoney from '@/lib/formatMoney';
import ItemStyles from '../styles/ItemStyles';
import Title from '../styles/Title';
import PriceTag from '../styles/PriceTag';

interface Props {
  Product?: ProductProps;
}

const SingleProduct: React.FC<Props> = ({ Product }) => (
  <ItemStyles>
    <img
      src={Product?.photo?.image?.publicUrlTransformed || ``}
      alt={Product?.name || `Sickfits Item`}
    />
    <Title>
      <Link href={`/product/${Product?.id}`}>{Product?.name}</Link>
    </Title>
    <PriceTag>{formatMoney(Product!.price!)}</PriceTag>
    <p>{Product?.description}</p>
    {/* TODO: add buttons */}
  </ItemStyles>
);

export default SingleProduct;
