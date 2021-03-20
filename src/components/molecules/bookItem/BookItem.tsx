import React, { useState } from 'react';
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
  readonly id: string;
  readonly image: string;
  readonly title: string;
  readonly author: string;
  readonly price: number;
}

interface ComponentProps extends BookProps {
  readonly genre: string;
  readonly bookStockAmount: number;
  readonly addToCartList: ({ id, image, title, author, price }: BookProps) => void;
  readonly addToCartCounter: () => void;
  readonly addProductPrice: (price: number) => void;
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
  addToCartCounter,
  addProductPrice,
}: ComponentProps) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);

    setTimeout(() => {
      setOpen(false);
    }, 2000);
  };

  const handleAddToCart = ({ id, image, title, author, price }: BookProps) => {
    dispatch(addToCartList({ id, image, title, author, price }));
    dispatch(addToCartCounter());
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
                  onClick={() => handleAddToCart({ id, image, title, author, price })}
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
