import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getLS, removeLS, saveLS } from '../../helper';
import './DisplayProducts.css';

function DisplayProducts({ products, onCart }) {
  //

  const handleCart = (e) => {
    const click = e.target;
    const targetID = click.closest('.products__item').dataset.id;
    const target = products.find((value) => value.id === +targetID);

    if (click.textContent === 'Add to cart') {
      click.textContent = 'Remove from card';
      const updatedLS = saveLS(target);

      onCart(updatedLS);
    } else {
      click.textContent = 'Add to cart';
      const updatedLS = removeLS(targetID);

      onCart(updatedLS);
    }
  };

  return (
    <section className='products'>
      {products.map((value) => {
        return (
          <div key={value.id} data-id={value.id} className='products__item'>
            <Link to={`/products/${value.id}`}>
              <div>
                <img src={value.image} alt='' className='products__item-img' />
                <div>
                  <p className='products__item-title'>{value.title}</p>
                  <p className='products__item-price'>{value.price}</p>
                  <p className='products__item-category'>{value.category}</p>
                </div>
              </div>
            </Link>
            <button onClick={handleCart} className='button'>
              Add to cart
            </button>
          </div>
        );
      })}
    </section>
  );
}
export default DisplayProducts;
