import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { CartIconWrapper, Counter } from './CartIcon.styles';
import shoppingCart from '../../../assets/icons/shoppingCart.svg';
import { selectCartBookList } from '../../templates/cartView/cartViewSlice';

const CartIcon = () => {
  const cartBookList = useSelector(selectCartBookList);
  const [cartCounter, setCartCounter] = useState(0);

  useEffect(() => {
    let counter = 0;

    cartBookList.forEach((book) => {
      counter += book.quantity;
    });

    setCartCounter(counter);
  }, [cartBookList]);

  return (
    <CartIconWrapper>
      <NavLink to="/cart-view">
        <img src={shoppingCart} alt="shopping cart" />
        <Counter>{cartCounter}</Counter>
      </NavLink>
    </CartIconWrapper>
  );
};

export default CartIcon;
