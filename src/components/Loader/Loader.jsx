import React from 'react';
import ReactDom from 'react-dom';
import './Loader.css';

function Loader({ loader }) {
  return ReactDom.createPortal(
    <div className={`loader ${loader ? 'hidden' : ''} `}>
      <div className='loader__box'>
        <span className='loader__box-circle'></span>
        <span className='loader__box-circle'></span>
        <span className='loader__box-circle'></span>
        <span className='loader__box-circle'></span>
      </div>
    </div>,
    document.querySelector('#loader')
  );
}

export default Loader;
