import { isFilterSelected } from "../util";
export const inititalState = {
  sortOption: null,
  filter: {
    size: [],
    idealFor: [],
    brand: [],
  },
};

export const sortFilterReducer = (state, action) => {
  switch (action.type) {
    case "SORT":
      return {
        ...state,
        sortOption: action.payload,
      };

    case "FILTER":
      return {
        ...state,
        filter: {
          ...state.filter,
          [action.payload.type]: isFilterSelected(
            state.filter[action.payload.type],
            action.payload.value
          )
            ? state.filter[action.payload.type].filter((item) => {
                return item !== action.payload.value;
              })
            : state.filter[action.payload.type].concat(action.payload.value),
        },
      };

    case "CLEAR_FILTER":
      return inititalState;
    default:
      return state;
  }
};
