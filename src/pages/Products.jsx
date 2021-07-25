import { ProductListing } from "../components/ProductListing";
import { Filter } from "../components/Filter";
import {
  inititalState,
  sortFilterReducer,
} from "../reducers/sortFilterReducer";
import { useReducer } from "react";
import { Sort } from "../components/Sort";
import { sortProducts, filterProducts } from "../util";
import productListData from "../products.json";

export const Products = () => {
  const [sortFilterState, sortFilterDispatch] = useReducer(
    sortFilterReducer,
    inititalState
  );

  const sortedData = sortProducts(
    productListData.productList,
    sortFilterState.sortOption
  );
  const filteredData = filterProducts(sortedData, sortFilterState.filter);

  return (
    <div className="flex mt-10 ">
      <Filter state={sortFilterState} dispatch={sortFilterDispatch} />
      <div className="flex flex-col">
        <Sort state={sortFilterState} dispatch={sortFilterDispatch} />
        {filteredData.length === 0 ? (
          <div className="text-lg text-center text-gray-800 font-semibold">
            No Products
          </div>
        ) : (
          <ProductListing productList={filteredData} />
        )}
      </div>
    </div>
  );
};
