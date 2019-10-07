import { TOGGLE_PRODUCT_CODE, SET_CURRENT_PRODUCT, CLEAR_CURRENT_PRODUCT, INITIALIZE_CURRENT_PRODUCT } from './products.constants';
import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductActions } from './products.actions';
import { Product } from '../product';
export interface ProductState {
  showProductCode: boolean;
  currentProduct: Product;
  products: Product[];
}

const initialState: ProductState = {
  showProductCode: true,
  currentProduct: null,
  products: []
};

const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getShowProductCode = createSelector(
  getProductFeatureState,
  state => state.showProductCode
);
export const getCurrentProduct = createSelector(
  getProductFeatureState,
  state => state.currentProduct
);
export const getProducts = createSelector(
  getProductFeatureState,
  state => state.products
);



export const productsReducer = (state = initialState, action: ProductActions): ProductState => {
  switch (action.type) {
    case TOGGLE_PRODUCT_CODE:
      return {
        ...state,
        showProductCode: action.payload
      };

    case SET_CURRENT_PRODUCT:
      return {
        ...state,
        currentProduct: { ...action.payload }
      };

    case CLEAR_CURRENT_PRODUCT:
      return {
        ...state,
        currentProduct: null
      };

    case INITIALIZE_CURRENT_PRODUCT:
      return {
        ...state,
        currentProduct: {
          id: 0,
          productName: '',
          productCode: 'XXX-000',
          description: '',
          starRating: 0
        }
      };
    default:
      return state;
  }
};




export interface State extends fromRoot.State {
  products: ProductState;
}
