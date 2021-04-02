import formatMoney from '@/lib/formatMoney';
import calcTotalPrice from '@/lib/calcTotalPrice';
import styled from 'styled-components';
import CartStyles from '../styles/CartStyles';
import CloseButton from '../styles/CloseButton';
import Supreme from '../styles/Supreme';
import { useUser } from '../User/User';
import { useCart } from '../State/Cart/CartContext';

const CartItemStyles = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid var(--lightGrey);
  display: grid;
  grid-template-columns: auto 1fr auto;
  img {
    margin-right: 1rem;
  }
  h3,
  p {
    margin: 0;
  }
`;

function CartItem({ cartItem }: any) {
  const { product } = cartItem;
  if (!product) return null;
  return (
    <CartItemStyles>
      <img
        width="100"
        src={product.photo.image.publicUrlTransformed}
        alt={product.name}
      />
      <div>
        <h3>{product.name}</h3>
        <p>
          {formatMoney(product.price * cartItem.quantity)}-
          <em>
            {cartItem.quantity} &times; {formatMoney(product.price)} each
          </em>
        </p>
      </div>
      {/* <RemoveFromCart id={cartItem.id} /> */}
    </CartItemStyles>
  );
}

const Cart = () => {
  const user = useUser();
  const { cartOpen, CloseCart } = useCart();
  if (!user) return <p>No Items in Cart</p>;
  return (
    <CartStyles open={cartOpen}>
      <header>
        <Supreme>{user.name} Cart</Supreme>
        <CloseButton onClick={CloseCart}>&times;</CloseButton>
      </header>
      <ul>
        {user.cart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </ul>
      <footer>
        <p>{formatMoney(calcTotalPrice(user.cart))}</p>
        {/* <Checkout /> */}
      </footer>
    </CartStyles>
  );
};

export default Cart;
