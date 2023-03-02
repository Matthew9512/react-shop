import './Cart.css';
import React from 'react';
import CartItem from '../CartItem/CartItem';

function Cart({ cartItem, setCartItem, cartVisibility, setCartVisibility }) {
  //
  const handleCartToggle = () => {
    !cartVisibility ? setCartVisibility(true) : setCartVisibility(false);
  };

  return (
    <aside className={`cart ${!cartVisibility ? 'hide' : 'show'}`}>
      <button onClick={handleCartToggle} className='button btn-close'>
        X
      </button>
      <h2 className='cart__header '>Your cart</h2>
      <CartItem cartItem={cartItem} setCartItem={setCartItem} />
    </aside>
  );
}

export default Cart;
