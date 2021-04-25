import React, { useState, ChangeEvent } from 'react';
import { useSelector } from 'react-redux';

import { BookListWrapper } from './BookList.styles';
import { selectBooks } from './bookListSlice';
import { addToCartList } from '../../templates/cartView/cartViewSlice';
import BookItem from '../../molecules/bookItem/BookItem';
import EmptyListInfo from '../../atoms/emptyListInfo/EmptyListInfo';
import SearchBar from '../../molecules/searchBar/SearchBar';

const BookList = () => {
  const books = useSelector(selectBooks);
  const [searchInputContent, setInputContent] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputContent(e.target.value);
  };

  return (
    <div>
      <SearchBar searchInputContent={searchInputContent} handleInputChange={handleInputChange} />
      <BookListWrapper>
        {books.length === 0 ? (
          <EmptyListInfo>Oops, we have some problems...</EmptyListInfo>
        ) : (
          books
            .filter((book) =>
              book.bookTitle.toLowerCase().includes(searchInputContent.toLowerCase()),
            )
            .map(
              ({
                bookImage,
                bookId,
                bookTitle,
                bookAuthor,
                bookGenre,
                bookPrice,
                bookStockAmount,
                quantity,
              }) => (
                <BookItem
                  key={bookId}
                  id={bookId}
                  image={bookImage}
                  title={bookTitle}
                  author={bookAuthor}
                  genre={bookGenre}
                  price={bookPrice}
                  bookStockAmount={bookStockAmount}
                  addToCartList={addToCartList}
                  quantity={quantity}
                />
              ),
            )
        )}
      </BookListWrapper>
    </div>
  );
};

export default BookList;
