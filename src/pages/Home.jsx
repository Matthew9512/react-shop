import React, { useEffect, useState } from 'react';
import '../App.css';
import Cart from '../components/Cart/Cart';
import DisplayProducts from '../components/DisplayProducts/DisplayProducts';
import Loader from '../components/Loader/Loader';
import Navbar from '../components/Navbar/Navbar';
import { getLS } from '../helper';

function Home() {
  //
  const lsArr = getLS();
  const length = lsArr.length === 0 ? 0 : lsArr.map((value) => value.amount).reduce((prev, value) => prev + value);

  const [products, setProducts] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [cartVisibility, setCartVisibility] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    getProducts();
    setCartItem(lsArr);

    return () => setLoader(false);
  }, []);

  const getProducts = async function () {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();

    setProducts(data);
    setLoader(true);
  };

  return (
    <>
      <Loader loader={loader} />
      <Cart cartItem={cartItem} setCartItem={setCartItem} setCartVisibility={setCartVisibility} cartVisibility={cartVisibility} />
      <main className='container'>
        <Navbar setCartVisibility={setCartVisibility} cartVisibility={cartVisibility} length={length} />
        <h1 className='container__header'>Home</h1>
        <DisplayProducts products={products} onCart={(item) => setCartItem(item)} />
      </main>
    </>
  );
}

export default Home;
