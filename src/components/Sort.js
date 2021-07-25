export const Sort = ({ state, dispatch }) => {
  return (
    <div className="flex">
      <div className="font-bold mb-4 flex mr-5">Sort</div>
      <div className="flex justify-items-center mr-5">
        <label>
          <input
            type="radio"
            className="mr-2"
            value="HIGH_TO_LOW"
            checked={state.sortOption === "HIGH_TO_LOW"}
            onChange={() => dispatch({ type: "SORT", payload: "HIGH_TO_LOW" })}
          />
          High to low
        </label>
      </div>
      <div className="flex justify-items-center">
        <label>
          <input
            type="radio"
            className="mr-2"
            value="HIGH_TO_LOW"
            checked={state.sortOption === "LOW_TO_HIGH"}
            onChange={() => dispatch({ type: "SORT", payload: "LOW_TO_HIGH" })}
          />
          Low to high
        </label>
      </div>
    </div>
  );
};
