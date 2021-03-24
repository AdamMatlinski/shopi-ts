import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../../atoms/button/Button';
import { selectBooks, removeBook } from '../bookList/bookListSlice';
import {
  StyledBookList,
  StyledBookItem,
  StyledBookImg,
  StyledBookIndex,
  StyledWrapper,
  StyledBookDesc,
  StyledImgContainer,
  StyledButtonWrapper,
  StyledBookInfoBox,
  StyledPriceBox,
  StyledStockNumber,
} from './AdminPanelBookList.styles';

type BookValues = {
  bookAuthor: string;
  bookId: string;
  bookImage: string;
  bookPrice: number;
  bookStockAmount: number;
  bookTitle: string;
};

const AdminPanelBookList = () => {
  const books = useSelector(selectBooks);
  const dispatch = useDispatch();

  return (
    <StyledBookList>
      {books.map(
        (
          { bookImage, bookId, bookTitle, bookAuthor, bookPrice, bookStockAmount }: BookValues,
          index: number,
        ) => (
          <StyledBookItem key={bookId}>
            <StyledBookInfoBox>
              <StyledImgContainer>
                <StyledBookIndex>
                  <span>{++index}.</span>
                </StyledBookIndex>
                <StyledBookImg>
                  <img src={`../../../../src/assets/images/${bookImage}`} alt={bookTitle} />
                </StyledBookImg>
              </StyledImgContainer>
              <StyledBookDesc>
                <StyledWrapper>
                  <h5>{bookTitle}</h5>
                  <span>{bookAuthor}</span>
                </StyledWrapper>
                <StyledWrapper>
                  <StyledPriceBox>
                    <span>{bookPrice}</span>
                    <span>zł</span>
                  </StyledPriceBox>
                  <div>
                    <span>in stock:</span>
                    {bookStockAmount === 0 ? (
                      <StyledStockNumber outOfStock>{`${bookStockAmount}!`}</StyledStockNumber>
                    ) : (
                      <StyledStockNumber>{bookStockAmount}</StyledStockNumber>
                    )}
                  </div>
                </StyledWrapper>
              </StyledBookDesc>
            </StyledBookInfoBox>
            <StyledButtonWrapper>
              <Button styleType="remove" onClick={() => dispatch(removeBook(bookId))}>
                remove book
              </Button>
            </StyledButtonWrapper>
          </StyledBookItem>
        ),
      )}
    </StyledBookList>
  );
};

export default AdminPanelBookList;
