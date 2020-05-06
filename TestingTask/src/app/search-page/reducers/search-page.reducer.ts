import * as searchPageActions from '../actions/search-page.action';
import { Item } from '../../models/search-page.modes';

export interface SearchPageState {
  items: Item[];
  isLoading: boolean;
  error: string;
}

export const initialState: SearchPageState = {
    items: [],
    isLoading: false,
    error: '',
};

export function searchPageReducer(
  state = initialState,
  action: searchPageActions.Actions,
): SearchPageState {
  switch (action.type) {

    case searchPageActions.SEARCH_QUESTIONS:
      return {
        ...state,
        isLoading: true,
      };

    case searchPageActions.SEARCH_QUESTIONS_SUCCESS:
      return {
          ...state,
          items: action.payload,
          isLoading: false,
      };

    case searchPageActions.SEARCH_QUESTIONS_REJECT:
      return {
          ...state,
          isLoading: false,
          error: action.payload,
      };

    case searchPageActions.CLEAN_ERROR_STATE:
      return {
          ...state,
          error: '',
      };

    default:
      return state;
  }
}
