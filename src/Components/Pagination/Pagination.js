import Pagination from "react-bootstrap/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { addPagination, changePaginationPages } from "../Store/PizzaSlice";
import { useEffect } from "react";

const Paginationn = () => {
  // useEffect(() => {
  //   const pageWidth = document.documentElement.scrollWidth;
  //   dispatch(addPagination(pageWidth));

  //   // console.log("useEffect width screen : ", pageWidth);
  // });
  const dispatch = useDispatch();
  const statePagination = useSelector(
    (state) => state.pizzaReducer.statePagination
  );

  const pageWidth = document.documentElement.scrollWidth;

  const active = statePagination.active;
  const countPages = statePagination.countPages;
  let items = [];
  for (let number = 1; number <= countPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        index={number}
        onClick={(e) => {
          // console.log("pagin", active);
          // console.log("pagin", number);
          dispatch(
            changePaginationPages({ number: number, pageWidth: pageWidth })
          );
        }}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div>
      {/* {} */}
      <Pagination>{items}</Pagination>
    </div>
  );
};

export default Paginationn;
