export const Filter = ({ state, dispatch }) => {
  return (
    <div className="w-2/5 h-full pl-12">
      <div
        className="text-right pr-7 text-blue-700 font-semibold text-sm cursor-pointer"
        onClick={() => dispatch({ type: "CLEAR_FILTER" })}
      >
        CLEAR
      </div>
      <div className="flex flex-col mb-4">
        <div className="font-bold mb-4">Size</div>
        <div className="flex">
          <label>
            <input
              type="checkbox"
              className="mr-2"
              checked={state.filter.size.INCLUDE_XS_SIZE}
              onChange={() =>
                dispatch({ type: "SELECT_SIZE", payload: "INCLUDE_XS_SIZE" })
              }
            />
            XS
          </label>
        </div>
        <div className="flex justify-items-center">
          <label>
            <input
              type="checkbox"
              className="mr-2"
              checked={state.filter.size.INCLUDE_S_SIZE}
              onChange={() =>
                dispatch({ type: "SELECT_SIZE", payload: "INCLUDE_S_SIZE" })
              }
            />
            S
          </label>
        </div>
        <div className="flex">
          <label>
            <input
              type="checkbox"
              className="mr-2"
              checked={state.filter.size.INCLUDE_M_SIZE}
              onChange={() =>
                dispatch({ type: "SELECT_SIZE", payload: "INCLUDE_M_SIZE" })
              }
            />
            M
          </label>
        </div>
        <div className="flex">
          <label>
            <input
              type="checkbox"
              className="mr-2"
              checked={state.filter.size.INCLUDE_L_SIZE}
              onChange={() =>
                dispatch({ type: "SELECT_SIZE", payload: "INCLUDE_L_SIZE" })
              }
            />
            L
          </label>
        </div>
        <div className="flex">
          <label>
            <input
              type="checkbox"
              className="mr-2"
              checked={state.filter.size.INCLUDE_XL_SIZE}
              onChange={() =>
                dispatch({ type: "SELECT_SIZE", payload: "INCLUDE_XL_SIZE" })
              }
            />
            XL
          </label>
        </div>
        <div className="flex">
          <label>
            <input
              type="checkbox"
              className="mr-2"
              checked={state.filter.size.INCLUDE_XXL_SIZE}
              onChange={() =>
                dispatch({ type: "SELECT_SIZE", payload: "INCLUDE_XXL_SIZE" })
              }
            />
            XXL
          </label>
        </div>
      </div>
      <div className="font-bold mb-4">Ideal for</div>
      <div className="flex">
        <label>
          <input
            type="checkbox"
            className="mr-2"
            checked={state.filter.idealFor.INCLUDE_IDEAL_FOR_MEN}
            onChange={() =>
              dispatch({
                type: "SELECT_IDEAL_FOR",
                payload: "INCLUDE_IDEAL_FOR_MEN",
              })
            }
          />
          Men
        </label>
      </div>
      <div className="flex mb-4">
        <label>
          <input
            type="checkbox"
            className="mr-2"
            checked={state.filter.idealFor.INCLUDE_IDEAL_FOR_WOMEN}
            onChange={() =>
              dispatch({
                type: "SELECT_IDEAL_FOR",
                payload: "INCLUDE_IDEAL_FOR_WOMEN",
              })
            }
          />
          Women
        </label>
      </div>
      <div className="font-bold mb-4">Brand</div>
      <div className="flex">
        <label>
          <input
            type="checkbox"
            className="mr-2"
            checked={state.filter.brand.INCLUDE_METRONAUT}
            onChange={() =>
              dispatch({
                type: "SELECT_BRAND",
                payload: "INCLUDE_METRONAUT",
              })
            }
          />
          METRONAUT
        </label>
      </div>
      <div className="flex">
        <label>
          <input
            type="checkbox"
            className="mr-2"
            checked={state.filter.brand.INCLUDE_US_POLO}
            onChange={() =>
              dispatch({
                type: "SELECT_BRAND",
                payload: "INCLUDE_US_POLO",
              })
            }
          />
          U.S. POLO ASSN
        </label>
      </div>
      <div className="flex">
        <label>
          <input
            type="checkbox"
            className="mr-2"
            checked={state.filter.brand.INCLUDE_PUMA}
            onChange={() =>
              dispatch({
                type: "SELECT_BRAND",
                payload: "INCLUDE_PUMA",
              })
            }
          />
          PUMA
        </label>
      </div>
      <div className="flex">
        <label>
          <input
            type="checkbox"
            className="mr-2"
            checked={state.filter.brand.INCLUDE_SCOTT_INTERNATIONAL}
            onChange={() =>
              dispatch({
                type: "SELECT_BRAND",
                payload: "INCLUDE_SCOTT_INTERNATIONAL",
              })
            }
          />
          SCOTT INTERNATIONAL
        </label>
      </div>
      <div className="flex">
        <label>
          <input
            type="checkbox"
            className="mr-2"
            checked={state.filter.brand.INCLUDE_LIBAS}
            onChange={() =>
              dispatch({
                type: "SELECT_BRAND",
                payload: "INCLUDE_LIBAS",
              })
            }
          />
          LIBAS
        </label>
      </div>
      <div className="flex">
        <label>
          <input
            type="checkbox"
            className="mr-2"
            checked={state.filter.brand.INCLUDE_SEVEN_ROCKS}
            onChange={() =>
              dispatch({
                type: "SELECT_BRAND",
                payload: "INCLUDE_SEVEN_ROCKS",
              })
            }
          />
          SEVEN_ROCKS
        </label>
      </div>
    </div>
  );
};
