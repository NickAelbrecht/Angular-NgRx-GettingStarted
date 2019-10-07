import { Action } from '@ngrx/store';
import {
  TOGGLE_PRODUCT_CODE,
  SET_CURRENT_PRODUCT,
  CLEAR_CURRENT_PRODUCT,
  INITIALIZE_CURRENT_PRODUCT,
  LOAD_PRODUCT,
  LOAD_PRODUCT_SUCCES,
  LOAD_PRODUCT_FAIL
} from './products.constants';
import { Product } from '../product';

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

export class LoadProduct implements Action {
  readonly type = LOAD_PRODUCT;
}
export class LoadProductSucces implements Action {
  readonly type = LOAD_PRODUCT_SUCCES;
  constructor(public payload: Product[]) { }
}
export class LoadProductFail implements Action {
  readonly type = LOAD_PRODUCT_FAIL;
  constructor(public payload: string) { }
}

export type ProductActions = ToggleProductCode
  | SetCurrentProduct
  | ClearCurrentProduct
  | InitializeCurrentProduct
  | LoadProduct
  | LoadProductSucces
  | LoadProductFail;
