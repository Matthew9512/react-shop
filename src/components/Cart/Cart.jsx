import './Cart.css';
import React from 'react';

function Cart({ cartItem, cartVisibility, setCartVisibility }) {
  //
  const handleCartToggle = () => {
    !cartVisibility ? setCartVisibility(true) : setCartVisibility(false);
  };

  console.log(cartItem);
  return (
    <aside className={`cart ${!cartVisibility ? 'hide' : 'show'}`}>
      <button onClick={handleCartToggle} className='button btn-close'>
        X
      </button>
      <h2 className='cart__header '>Your cart</h2>
      {cartItem.map((value) => {
        return (
          <div key={value.id} className='cart__item'>
            <img src={value.image} className='cart__item-img' alt='asd' />
            <div className='cart__item-details'>
              <p className='cart__item-title'>{value.title}</p>
              <p className='cart__item-price'>{value.price}</p>
            </div>
          </div>
        );
      })}
    </aside>
  );
}

export default Cart;
