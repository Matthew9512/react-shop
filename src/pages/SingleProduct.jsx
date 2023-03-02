import React, { useEffect, useState } from 'react';

import { Link, useParams } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import Navbar from '../components/Navbar/Navbar';
import { getLS } from '../helper';
import Cart from '../components/Cart/Cart';

function SingleProduct() {
  //
  const { id } = useParams();
  const lsArr = getLS();
  const length = lsArr.length === 0 ? 0 : lsArr.map((value) => value.amount).reduce((prev, value) => prev + value);

  const [product, setProduct] = useState();
  const [cartItem, setCartItem] = useState([]);
  const [cartVisibility, setCartVisibility] = useState(false);

  useEffect(() => {
    getSingleProduct();
    setCartItem(lsArr);
  }, []);

  const getSingleProduct = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();

    setProduct(data);
  };

  if (!product) return <Loader loader={''} />;

  return (
    <>
      <Cart cartItem={cartItem} setCartItem={setCartItem} setCartVisibility={setCartVisibility} cartVisibility={cartVisibility} />
      <main className='container'>
        <Navbar setCartVisibility={setCartVisibility} cartVisibility={cartVisibility} length={length} />
        <section className='single'>
          <div key={product.id} className='single__item'>
            <img src={product.image} className='single__item-img' alt='' />
            <div className='single__item-details'>
              <p className='products__item-title'>{product.title}</p>
              <p className='single__item-details-price'>{product.price}</p>
              <p className='single__item-details-category'>{product.category}</p>
              <p className='single__item-details-description'>{product.description}</p>
              <Link to={'/'} className='button btn-back'>
                Go back
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default SingleProduct;
