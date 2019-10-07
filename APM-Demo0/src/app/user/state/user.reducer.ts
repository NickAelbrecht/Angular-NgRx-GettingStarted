import { MASK_USER_CREDENTIALS } from './user.constants';
import { User } from '../../../../../APM-Demo4/src/app/user/user';
import { createFeatureSelector, createSelector } from '@ngrx/store';


export interface UserState {
  maskCredentials: boolean;
  currentUser: User;
}

const initialState: UserState = {
  maskCredentials: true,
  currentUser: null,
};

const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getMaskCredentials = createSelector(
  getUserFeatureState,
  state => state.maskCredentials
);
export const getCurrentProduct = createSelector(
  getUserFeatureState,
  state => state.currentUser
);

export const userReducer = (state = initialState, action): UserState => {
  switch (action.type) {
    case MASK_USER_CREDENTIALS:
      return {
        ...state,
        maskCredentials: action.payload
      };
    default:
      return state;
  }
};
