import { createContext, useContext, useState } from 'react';

interface Props {
  cartOpen: boolean;
  ToggleCart: () => void;
  CloseCart: () => void;
  OpenCart: () => void;
}

const defaultValue: Props = {
  cartOpen: false,
  ToggleCart: () => null,
  CloseCart: () => null,
  OpenCart: () => null,
};
// 1-step : Create Context
const cartContext = createContext<Props>(defaultValue);
// 2-step : initialize Provider
const { Provider } = cartContext;

const CartStateProvider: React.FC = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(defaultValue.cartOpen);
  const ToggleCart = () => setCartOpen(!cartOpen);
  const CloseCart = () => setCartOpen(false);
  const OpenCart = () => setCartOpen(true);

  return (
    <Provider value={{ cartOpen, ToggleCart, CloseCart, OpenCart }}>
      {children}
    </Provider>
  );
};

// 4-step : expose hook to use in any component
const useCart = () => {
  const cart = useContext(cartContext);
  return cart;
};

export { CartStateProvider, useCart };

// ref => https://dev.to/alexander7161/react-context-api-with-typescript-example-j7a
