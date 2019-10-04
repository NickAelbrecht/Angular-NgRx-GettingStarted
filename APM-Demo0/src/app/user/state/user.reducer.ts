import { MASK_USER_CREDENTIALS } from './user.constants';
export const userReducer = (state, action) => {
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
