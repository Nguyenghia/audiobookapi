import { useState } from "react";
import CustomPagination from "../CustomPagination";
import Book from "./Book";
import { styled } from "styled-components";
import { listBook } from "../../../utils/data";

const ListBookContainer = styled('div')`
  .block-header {
    color: #6b9876;
    border-bottom: 1px solid #eee;
    margin-bottom: 20px;
    .title {
      margin: 0;
      font-size: 24px;
      margin-bottom: 5px;
      line-height: 30px;
      text-transform: uppercase;
      font-weight: 500;
    }
  }
`

const ListBooks = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const changePageHandler = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <ListBookContainer>
      <div class="block-header">
        <h2 class="title">Mới cập nhật</h2>
      </div>
      {listBook.map((item) => (
        <Book data={item} />
      ))}
      <CustomPagination
        totalPage={5}
        currentPage={currentPage}
        changePageHandler={changePageHandler}
      />
    </ListBookContainer>
  );
};

export default ListBooks;
