export const inititalState = {
  sortOption: null,
  filter: {
    size: {
      INCLUDE_XS_SIZE: false,
      INCLUDE_S_SIZE: false,
      INCLUDE_M_SIZE: false,
      INCLUDE_L_SIZE: false,
      INCLUDE_XL_SIZE: false,
      INCLUDE_XXL_SIZE: false,
    },
    idealFor: {
      INCLUDE_IDEAL_FOR_MEN: false,
      INCLUDE_IDEAL_FOR_WOMEN: false,
    },
    brand: {
      INCLUDE_METRONAUT: false,
      INCLUDE_US_POLO: false,
      INCLUDE_PUMA: false,
      INCLUDE_SCOTT_INTERNATIONAL: false,
      INCLUDE_LIBAS: false,
      INCLUDE_SEVEN_ROCKS: false,
    },
  },
};

export const sortFilterReducer = (state, action) => {
  switch (action.type) {
    case "SORT":
      return {
        ...state,
        sortOption: action.payload,
      };

    case "SELECT_SIZE":
      return {
        ...state,
        filter: {
          ...state.filter,
          size: {
            ...state.filter.size,
            [action.payload]: !state.filter.size[action.payload],
          },
        },
      };

    case "SELECT_IDEAL_FOR":
      return {
        ...state,
        filter: {
          ...state.filter,
          idealFor: {
            ...state.filter.idealFor,
            [action.payload]: !state.filter.idealFor[action.payload],
          },
        },
      };
    case "SELECT_BRAND":
      return {
        ...state,
        filter: {
          ...state.filter,
          brand: {
            ...state.filter.brand,
            [action.payload]: !state.filter.brand[action.payload],
          },
        },
      };
    case "CLEAR_FILTER":
      return inititalState;
    default:
      return state;
  }
};
