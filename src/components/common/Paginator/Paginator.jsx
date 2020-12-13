import React from "react";
import s from "./Paginator.module.css";

const Paginator = ({totalCount,countUsersPerPage,currentPage,onPageChanged})=>{
   let pagesCount = Math.ceil(totalCount / countUsersPerPage);
   let pages = [];
   // for (let i = 0; i < pagesCount; i++) {
   for (let i = 0; i < 28; i++) {
     //т.к. слишком много пользователей
     pages[i] = i + 1;
   }
   // for (let i = 1; i <= pagesCount; i++) {
   //   pages.push(i);
   // }
   return (
       <div className={s.pagination}>
         {pages.map((p) => {
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
       </div>);
}
export default Paginator;