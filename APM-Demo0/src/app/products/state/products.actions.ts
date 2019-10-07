import { Action } from '@ngrx/store';
import { TOGGLE_PRODUCT_CODE, SET_CURRENT_PRODUCT, CLEAR_CURRENT_PRODUCT, INITIALIZE_CURRENT_PRODUCT } from './products.constants';
import { Product } from '../../../../../APM-Demo4/src/app/products/product';

export class ToggleProductCode implements Action {
  readonly type = TOGGLE_PRODUCT_CODE;
  constructor(public payload: boolean) { }
}

export class SetCurrentProduct implements Action {
  readonly type = SET_CURRENT_PRODUCT;
  constructor(public payload: Product) { }
}

export class ClearCurrentProduct implements Action {
  readonly type = CLEAR_CURRENT_PRODUCT;
}

export class InitializeCurrentProduct implements Action {
  readonly type = INITIALIZE_CURRENT_PRODUCT;
}

export type ProductActions = ToggleProductCode
  | SetCurrentProduct
  | ClearCurrentProduct
  | InitializeCurrentProduct;
