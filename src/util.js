export const sortProducts = (productList, sortOption) => {
  if (sortOption === "HIGH_TO_LOW")
    return [...productList].sort((a, b) => b.price - a.price);
  if (sortOption === "LOW_TO_HIGH")
    return [...productList].sort((a, b) => a.price - b.price);

  return productList;
};

export const filterProducts = (productList, filter) => {
  const filteredProductList = productList
    .filter(
      ({ size }) =>
        (filter.size.INCLUDE_XS_SIZE && size.includes("XS")) ||
        (filter.size.INCLUDE_S_SIZE && size.includes("S")) ||
        (filter.size.INCLUDE_M_SIZE && size.includes("M")) ||
        (filter.size.INCLUDE_L_SIZE && size.includes("L")) ||
        (filter.size.INCLUDE_XL_SIZE && size.includes("XL")) ||
        (filter.size.INCLUDE_XXL_SIZE && size.includes("XXL")) ||
        (!filter.size.INCLUDE_XS_SIZE &&
          !filter.size.INCLUDE_S_SIZE &&
          !filter.size.INCLUDE_M_SIZE &&
          !filter.size.INCLUDE_L_SIZE &&
          !filter.size.INCLUDE_XL_SIZE &&
          !filter.size.INCLUDE_XXL_SIZE)
    )
    .filter(
      ({ idealFor }) =>
        (filter.idealFor.INCLUDE_IDEAL_FOR_MEN && idealFor === "Men") ||
        (filter.idealFor.INCLUDE_IDEAL_FOR_WOMEN && idealFor === "Women") ||
        (!filter.idealFor.INCLUDE_IDEAL_FOR_MEN &&
          !filter.idealFor.INCLUDE_IDEAL_FOR_WOMEN)
    )
    .filter(
      ({ brand }) =>
        (filter.brand.INCLUDE_METRONAUT && brand === "METRONAUT") ||
        (filter.brand.INCLUDE_US_POLO && brand === "U.S. POLO ASSN.") ||
        (filter.brand.INCLUDE_PUMA && brand === "PUMA") ||
        (filter.brand.INCLUDE_SCOTT_INTERNATIONAL &&
          brand === "SCOTT INTERNATIONAL") ||
        (filter.brand.INCLUDE_LIBAS && brand === "LIBAS") ||
        (filter.brand.INCLUDE_SEVEN_ROCKS && brand === "SEVEN ROCKS") ||
        (!filter.brand.INCLUDE_METRONAUT &&
          !filter.brand.INCLUDE_US_POLO &&
          !filter.brand.INCLUDE_PUMA &&
          !filter.brand.INCLUDE_SCOTT_INTERNATIONAL &&
          !filter.brand.INCLUDE_LIBAS &&
          !filter.brand.INCLUDE_SEVEN_ROCKS)
    );

  return filteredProductList;
};
