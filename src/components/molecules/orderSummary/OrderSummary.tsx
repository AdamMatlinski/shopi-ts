import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { StyledOrderSummaryContainer, StyledTotalPriceBox } from './OrderSummary.styles';
import { selectCartBookList } from '../../templates/cartView/cartViewSlice';

const OrderSummary = () => {
  const cartBookList = useSelector(selectCartBookList);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  useEffect(() => {
    let counter = 0;

    cartBookList.forEach((book) => {
      counter += book.price * book.quantity;
    });

    setCartTotalPrice(counter);
  }, [cartBookList]);

  return (
    <StyledOrderSummaryContainer>
      <span>total price:</span>
      <StyledTotalPriceBox>
        <span>{cartTotalPrice.toFixed(2)}</span>
        <span>zł</span>
      </StyledTotalPriceBox>
    </StyledOrderSummaryContainer>
  );
};

export default OrderSummary;
