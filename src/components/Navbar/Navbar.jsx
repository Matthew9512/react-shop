import React from 'react';
import './Navbar.css';

function Navbar({ cartVisibility, setCartVisibility, length }) {
  //
  const handleCartToggle = () => {
    !cartVisibility ? setCartVisibility(true) : setCartVisibility(false);
  };

  return (
    <nav className='navbar'>
      <i className='fa-brands fa-joomla navbar__logo'></i>
      <input id='menu-toggle' type='checkbox' />
      <label className='navbar__menu-button-container' htmlFor='menu-toggle'>
        <div className='navbar__menu-button'></div>
      </label>
      <ul className='navbar__menu'>
        <li>
          <a href='#about'>
            <button className='navbar__btn'>About</button>
          </a>
        </li>
        <li>
          <a href='#contact'>
            <button className='navbar__btn'>Contact</button>
          </a>
        </li>
        <li>
          <button onClick={handleCartToggle} className='navbar__btn'>
            <i className='fa-solid fa-cart-shopping' data-amount={!length ? 0 : length}></i>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
