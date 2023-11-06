import React from "react";
import style from "./Page.module.scss";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.paginationContainer}>
        <button
          className={style.paginationButton}
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous Page
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`${style.paginationButton} ${
              currentPage === index + 1 ? style.activePage : ""
            }`}
            onClick={() => onPageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className={style.paginationButton}
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next Page
        </button>
      </div>
    </div>

  );
};

export default Pagination;