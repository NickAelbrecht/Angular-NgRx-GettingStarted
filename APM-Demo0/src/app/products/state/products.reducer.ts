import { TOGGLE_PRODUCT_CODE } from './products.constants';
export const productsReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_PRODUCT_CODE:
      return {
        ...state,
        showProductCode: action.payload
      };
    default:
      return state;
  }
};
