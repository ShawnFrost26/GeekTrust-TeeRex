export const reducerFun = (state, action) => {
  switch (action.type) {
    case "COLOR":
      return {
        ...state,
        color: action.payload.check
          ? [...state.color, action.payload.option]
          : state.color.filter((colorValue) => colorValue !== action.payload.option),
      };

    case "GENDER":
      return {
        ...state,
        gender: action.payload,
      };

      case "TYPE":
        return{
          ...state,
          type: action.payload.check
          ? [...state.type, action.payload.option]
          : state.type.filter((typeValue) => typeValue !== action.payload.option),

        }

        case "PRICE":
          return{
            ...state,
            price: action.payload.check
              ? [...state.price, action.payload.option]
              : state.price.filter((priceValue) => priceValue !== action.payload.option),
          }

    case "CLEAR_ALL":
      return {
        gender: "",
        color: [],
        type: [],
        price: [],
      };

    default:
      return state;
  }
};
