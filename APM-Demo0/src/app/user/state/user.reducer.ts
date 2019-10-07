import { MASK_USER_CREDENTIALS } from './user.constants';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserActions } from './user.actions';
import { User } from '../user';


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

export const userReducer = (state = initialState, action: UserActions): UserState => {
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
