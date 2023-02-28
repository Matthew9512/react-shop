import './SingleProduct.css';
import React, { useEffect, useState } from 'react';

import { Link, useParams } from 'react-router-dom';

function SingleProduct() {
  //
  const { id } = useParams();

  const [product, setProduct] = useState();

  useEffect(() => {
    getSingleProduct();
  }, []);

  const getSingleProduct = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    console.log(data);
    setProduct(data);
  };

  if (!product) return;

  return (
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
  );
}

export default SingleProduct;
