import React, { useState } from "react";
import { Pagination } from "react-bootstrap";

const PaginationBox = (props: { totalPost: number,postPerPage: number, onClick:(arg:number)=>void}): JSX.Element => {
  const { totalPost, postPerPage,onClick } = props;
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Pagination className="justify-content-center">
      {pageNumbers.map((num) => (
        <Pagination.Item onClick={()=>onClick(num)} key={num}>{num}</Pagination.Item>
      ))}
    </Pagination>
  );
};

export default PaginationBox;
