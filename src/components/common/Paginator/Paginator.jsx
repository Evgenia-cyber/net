import React, { useState } from "react";
import s from "./Paginator.module.css";

const Paginator = ({
  totalCount,
  countItemsPerPage,
  currentPage,
  onPageChanged,
  portionSize = 15,
}) => {
  let pagesCount = Math.ceil(totalCount / countItemsPerPage);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize);

  const [portionNumber, setPortionNumber] = useState(1);
  const leftPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPageNumber = portionNumber * portionSize;

  return (
    <div className={s.pagination}>
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          PREV
        </button>
      )}
      {pages
        .filter((p) => {
          return p >= leftPageNumber && p <= rightPageNumber;
        })
        .map((p) => {
          return (
            <button
              onClick={() => {
                onPageChanged(p);
              }}
              key={p}
              className={currentPage === p ? s.selected : undefined}
            >
              {p}
            </button>
          );
        })}
      {portionNumber < portionCount && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          NEXT
        </button>
      )}
    </div>
  );
};
export default Paginator;
