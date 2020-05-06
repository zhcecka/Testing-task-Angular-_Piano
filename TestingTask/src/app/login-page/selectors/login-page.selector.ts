import { State } from '../../reducers';
import { LoginPageState } from '../reducers/login-page.reducer';
import { createSelector } from '@ngrx/store';

export function getLoginPageState(state: State): LoginPageState {
    return state.loginPageReducer;
}

export const getLoginStatus = () => createSelector(
    getLoginPageState,
    (state: LoginPageState) => state.isLogin,
  );
