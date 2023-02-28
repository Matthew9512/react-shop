import React, { useEffect, useState } from 'react';
import '../App.css';
import Cart from '../components/Cart/Cart';
import DisplayProducts from '../components/DisplayProducts/DisplayProducts';
import Navbar from '../components/Navbar/Navbar';
import { getLS } from '../helper';

function Home() {
  //

  const [products, setProducts] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [cartVisibility, setCartVisibility] = useState(false);

  useEffect(() => {
    getProducts();
    const lsArr = getLS();
    console.log(lsArr);
    setCartItem(lsArr);
  }, []);

  const getProducts = async function () {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    console.log(data);
    setProducts(data);
  };

  return (
    <>
      <Cart cartItem={cartItem} setCartVisibility={setCartVisibility} cartVisibility={cartVisibility} />
      <main className='container'>
        <Navbar setCartVisibility={setCartVisibility} cartVisibility={cartVisibility} />
        <h1 className='container__header'>Home</h1>
        {/* <DisplayProducts products={products} onCart={(item) => setCartItem((prev) => [...prev, item])} /> */}
        <DisplayProducts products={products} onCart={(item) => setCartItem(item)} />
      </main>
    </>
  );
}

export default Home;
