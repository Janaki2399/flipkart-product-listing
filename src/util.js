export const sortProducts = (productList, sortOption) => {
  if (sortOption === "HIGH_TO_LOW")
    return [...productList].sort((a, b) => b.price - a.price);
  if (sortOption === "LOW_TO_HIGH")
    return [...productList].sort((a, b) => a.price - b.price);

  return productList;
};

export const filterProducts = (productList, filter) => {
  let filteredProductList = productList;

  for (let filterType in filter) {
    if (filter[filterType].length > 0) {
      filteredProductList = filteredProductList.filter((property) =>
        filter[filterType].some((selectedSize) =>
          property[filterType].includes(selectedSize)
        )
      );
    }
  }

  return filteredProductList;
};

export const isFilterSelected = (filterList, filter) => {
  return filterList.includes(filter);
};
