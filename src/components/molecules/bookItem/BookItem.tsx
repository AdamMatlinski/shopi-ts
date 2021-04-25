import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  BookItemContainer,
  BookItemWrapper,
  StyledBookImg,
  StyledBookTitle,
  StyledBookAuthor,
  StyledBookGenre,
  StyledBookPrice,
  StyledBookLabel,
  StyledTopLabel,
} from './BookItem.styles';
import AddToCartAlert from '../addToCartAlert/AddToCartAlert';
import Button from '../../atoms/button/Button';

interface BookProps {
  id: string;
  image: string;
  title: string;
  author: string;
  price: number;
  quantity: number;
}

interface ComponentProps extends BookProps {
  genre: string;
  bookStockAmount: number;
  addToCartList: ({ id, image, title, author, price, quantity }: BookProps) => void;
  addProductPrice: (price: number) => void;
}

const BookItem = ({
  id,
  image,
  title,
  author,
  genre,
  price,
  bookStockAmount,
  addToCartList,
  addProductPrice,
  quantity,
}: ComponentProps) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(false), 2000);
    return () => clearTimeout(timer);
  }, [open]);

  const handleOpen = () => {
    setOpen((open) => !open);
  };

  const handleAddToCart = ({ id, image, title, author, price, quantity }: BookProps) => {
    dispatch(addToCartList({ id, image, title, author, price, quantity }));
    dispatch(addProductPrice(price));
    handleOpen();
  };

  return (
    <BookItemContainer>
      <BookItemWrapper>
        <div>
          <StyledTopLabel>
            <StyledBookPrice>
              <span>{price}</span>
              <span>zł</span>
            </StyledBookPrice>
            {bookStockAmount > 0 ? (
              <StyledBookLabel inStock>
                <span>in stock</span>
                <Button
                  styleType="send"
                  onClick={() => handleAddToCart({ id, image, title, author, price, quantity })}
                >
                  add to cart
                </Button>
              </StyledBookLabel>
            ) : (
              <StyledBookLabel>
                <span>out of stock</span>
              </StyledBookLabel>
            )}
          </StyledTopLabel>
          <StyledBookImg>
            <img src={`../../../src/assets/images/${image}`} alt={title} />
          </StyledBookImg>
          <StyledBookTitle>
            <h5>{title}</h5>
          </StyledBookTitle>
          <StyledBookAuthor>
            <span>{author}</span>
          </StyledBookAuthor>
          <StyledBookGenre>
            <span>{genre}</span>
          </StyledBookGenre>
          <AddToCartAlert open={open} />
        </div>
      </BookItemWrapper>
    </BookItemContainer>
  );
};

export default BookItem;
