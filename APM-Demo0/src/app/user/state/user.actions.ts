import { Action } from '@ngrx/store';
import { MASK_USER_CREDENTIALS } from './user.constants';

export class MaskUserCredentials implements Action {
  readonly type = MASK_USER_CREDENTIALS;
  constructor(public payload: boolean) { }
}

export type UserActions = MaskUserCredentials;
