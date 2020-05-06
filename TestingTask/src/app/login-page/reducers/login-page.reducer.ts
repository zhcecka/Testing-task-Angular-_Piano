import * as loginPageActions from '../actions/login-page.action';

export interface LoginPageState {
  isLogin: boolean;
}

export const initialState: LoginPageState = {
  isLogin: true,
}

export function loginPageReducer(
  state = initialState,
  action: loginPageActions.Actions,
): LoginPageState {
  switch (action.type) {
    case loginPageActions.CHANGE_START_PAGE:
      return {
        ...state,
        isLogin: action.payload,
      };

    default:
      return state;
  }
}
