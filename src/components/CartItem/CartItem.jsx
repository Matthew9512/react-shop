import React from 'react';
import { getLS } from '../../helper';

function CartItem({ cartItem, setCartItem }) {
  const lsArr = getLS();

  if (lsArr.length === 0) return <p className='cart__sum'>Total cost: 0$</p>;

  const totalPrice = lsArr.map((value) => value.price * value.amount).reduce((prev, value) => prev + value);

  console.log(totalPrice);

  const increaseAmount = (e) => {
    const targetID = e.target.parentElement.dataset.id;
    const clickedItem = lsArr.find((value) => value.id === +targetID);

    clickedItem.amount = clickedItem.amount + 1;

    localStorage.setItem('products', JSON.stringify(lsArr));
    setCartItem(lsArr);
  };

  const decreaseAmount = (e) => {
    const targetID = e.target.parentElement.dataset.id;
    const clickedItem = lsArr.find((value) => value.id === +targetID);

    if (clickedItem.amount === 1) return;

    clickedItem.amount = clickedItem.amount - 1;

    localStorage.setItem('products', JSON.stringify(lsArr));
    setCartItem(lsArr);
  };

  return (
    <section className='cart__wrapper'>
      {cartItem.map((value) => {
        return (
          <div key={value.id} className='cart__item'>
            <img src={value.image} className='cart__item-img' alt='asd' />
            <div className='cart__item-details'>
              <p className='cart__item-title'>{value.title}</p>
              <p className='cart__item-price'>{parseFloat(value.price * value.amount).toFixed(2)}$</p>
            </div>
            <div data-id={value.id} className='cart__product-add'>
              <i onClick={increaseAmount} className='fas fa-chevron-up'></i>
              <p className='item-amount'>{value.amount}</p>
              <i onClick={decreaseAmount} className='fas fa-chevron-down'></i>
            </div>
          </div>
        );
      })}
      <p className='cart__sum'>Total cost: {parseFloat(totalPrice).toFixed(2)}$</p>
    </section>
  );
}

export default CartItem;
