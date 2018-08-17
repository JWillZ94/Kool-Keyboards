import React from 'react';
import './Keyboards.css';
// import myCart from '../cart/myCart';
import SortMenu from '../../containers/SortMenu';
// // import Condition from './Condition';
// // import Feature from './Feature';
// // import Type from './Type';
// // import KbInterface from './KbInterface';
// // import Brand from './Brand';
import Items from './Items';
// import Modal from './Modal';

// <Modal />


function Keyboards() {
  return (
    <div>
      <p className="section-title">Keyboards</p>
      <div className="items-menu">
        <SortMenu />
      </div>
      <Items />
    </div>
  );
}

export default Keyboards;
