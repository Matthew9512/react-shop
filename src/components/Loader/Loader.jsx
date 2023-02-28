import React from 'react';
import './Loader.css';

function Loader({ loader }) {
  return (
    <div className='loader'>
      <div className='loader__box'>
        <span className='loader__box-circle'></span>
        <span className='loader__box-circle'></span>
        <span className='loader__box-circle'></span>
        <span className='loader__box-circle'></span>
      </div>
    </div>
  );
}

export default Loader;
