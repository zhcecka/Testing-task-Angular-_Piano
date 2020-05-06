import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { loginPageReducer, LoginPageState } from '../login-page/reducers/login-page.reducer';
import { searchPageReducer, SearchPageState } from '../search-page/reducers/search-page.reducer';
import { searchResultPageReducer, SearchResultPageState } from '../search-result-page/reducers/search-result-page.reducer';


export interface State {
  loginPageReducer: LoginPageState;
  searchPageReducer: SearchPageState;
  searchResultPageReducer: SearchResultPageState;

}



export const reducers: ActionReducerMap<State> = {
  loginPageReducer,
  searchPageReducer,
  searchResultPageReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
