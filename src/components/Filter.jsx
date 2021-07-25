import { isFilterSelected } from "../util";

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
              checked={isFilterSelected(state.filter.size, "XS")}
              value="XS"
              onChange={(e) =>
                dispatch({
                  type: "FILTER",
                  payload: { value: e.target.value, type: "size" },
                })
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
              checked={isFilterSelected(state.filter.size, "S")}
              value="S"
              onChange={(e) =>
                dispatch({
                  type: "FILTER",
                  payload: { value: e.target.value, type: "size" },
                })
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
              checked={isFilterSelected(state.filter.size, "M")}
              value="M"
              onChange={(e) =>
                dispatch({
                  type: "FILTER",
                  payload: { value: e.target.value, type: "size" },
                })
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
              checked={isFilterSelected(state.filter.size, "L")}
              value="L"
              onChange={(e) =>
                dispatch({
                  type: "FILTER",
                  payload: { value: e.target.value, type: "size" },
                })
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
              checked={isFilterSelected(state.filter.size, "XL")}
              value="XL"
              onChange={(e) =>
                dispatch({
                  type: "FILTER",
                  payload: { value: e.target.value, type: "size" },
                })
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
              checked={isFilterSelected(state.filter.size, "XXL")}
              value="XXL"
              onChange={(e) =>
                dispatch({
                  type: "FILTER",
                  payload: { value: e.target.value, type: "size" },
                })
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
            checked={isFilterSelected(state.filter.idealFor, "Men")}
            value="Men"
            onChange={(e) =>
              dispatch({
                type: "FILTER",
                payload: { value: e.target.value, type: "idealFor" },
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
            checked={isFilterSelected(state.filter.idealFor, "Women")}
            value="Women"
            onChange={(e) =>
              dispatch({
                type: "FILTER",
                payload: { value: e.target.value, type: "idealFor" },
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
            checked={isFilterSelected(state.filter.brand, "METRONAUT")}
            value="METRONAUT"
            onChange={(e) =>
              dispatch({
                type: "FILTER",
                payload: { value: e.target.value, type: "brand" },
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
            checked={isFilterSelected(state.filter.brand, "U.S. POLO ASSN.")}
            value="U.S. POLO ASSN."
            onChange={(e) =>
              dispatch({
                type: "FILTER",
                payload: { value: e.target.value, type: "brand" },
              })
            }
          />
          U.S. POLO ASSN.
        </label>
      </div>
      <div className="flex">
        <label>
          <input
            type="checkbox"
            className="mr-2"
            checked={isFilterSelected(state.filter.brand, "Puma")}
            value="PUMA"
            onChange={(e) =>
              dispatch({
                type: "FILTER",
                payload: { value: e.target.value, type: "brand" },
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
            checked={isFilterSelected(
              state.filter.brand,
              "SCOTT INTERNATIONAL"
            )}
            value="SCOTT INTERNATIONAL"
            onChange={(e) =>
              dispatch({
                type: "FILTER",
                payload: { value: e.target.value, type: "brand" },
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
            checked={isFilterSelected(state.filter.brand, "LIBAS")}
            value="LIBAS"
            onChange={(e) =>
              dispatch({
                type: "FILTER",
                payload: { value: e.target.value, type: "brand" },
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
            checked={isFilterSelected(state.filter.brand, "SEVEN ROCKS")}
            value="SEVEN ROCKS"
            onChange={(e) =>
              dispatch({
                type: "FILTER",
                payload: { value: e.target.value, type: "brand" },
              })
            }
          />
          SEVEN ROCKS
        </label>
      </div>
    </div>
  );
};
