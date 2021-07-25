import { Product } from "./Product";
export const ProductListing = ({ productList }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 auto-rows-max gap-10">
      {productList.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
};
