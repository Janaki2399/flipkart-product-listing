export const Product = ({ product }) => {
  return (
    <div className="flex flex-col space-between ">
      <div>
        <img src={product.image} alt="product" />
      </div>
      <div className="pt-3 flex-grow">
        <div className="font-bold text-gray-500 text-sm">{product.brand}</div>
        <div className="flex justify-items-center">
          <div className="mr-9 font-semibold">Rs {product.price}</div>
          <div className="text-green-500 font-bold">
            {product.discount}% off
          </div>
        </div>
        <div className="flex">
          <div className="mr-3 text-gray-500">Size</div>
          {product.size.map((size) => {
            return <div className="mr-3">{size}</div>;
          })}
        </div>
      </div>
    </div>
  );
};
