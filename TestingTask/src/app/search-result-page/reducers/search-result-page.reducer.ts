import * as searchResultPageActions from '../actions/search-result-page.action';
import { Item, Answer } from '../../models/search-page.modes';

export interface SearchResultPageState {
  itemsQuickView: Item[];
  isLoading: boolean;
  answers: Answer[];
  isLoadingAnswer: boolean;
  error: string;
}

export const initialState: SearchResultPageState = {
    itemsQuickView: [],
    isLoading: false,
    answers: [],
    isLoadingAnswer: false,
    error: '',
};

export function searchResultPageReducer(
  state = initialState,
  action: searchResultPageActions.Actions,
): SearchResultPageState {
  switch (action.type) {

    case searchResultPageActions.GET_POPULAR_QUESTIONS:
      return {
        ...state,
        isLoading: true,
      };

    case searchResultPageActions.GET_POPULAR_QUESTIONS_SUCCESS:
    return {
        ...state,
        itemsQuickView: action.payload,
        isLoading: false,
    };

    case searchResultPageActions.GET_POPULAR_QUESTIONS_REJECT:
      return {
          ...state,
          isLoading: false,
          error: action.payload,
      };

    case searchResultPageActions.CLEAN_QUICK_VIEW_ITEM:
      return {
          ...state,
          itemsQuickView: [],
      };

    case searchResultPageActions.GET_POPULAR_QUESTIONS_BY_TAG:
      return {
        ...state,
        isLoading: true,
      };

    case searchResultPageActions.GET_POPULAR_QUESTIONS_BY_TAG_REJECT:
      return {
          ...state,
          isLoading: false,
          error: action.payload,
      };

    case searchResultPageActions.GET_ANSWERS:
      return {
        ...state,
        isLoadingAnswer: true,
      };

    case searchResultPageActions.GET_ANSWERS_SUCCESS:
      return {
          ...state,
          answers: action.payload,
          isLoadingAnswer: false,
      };

    case searchResultPageActions.GET_ANSWERS_REJECT:
      return {
          ...state,
          isLoadingAnswer: false,
          error: action.payload,
      };

    case searchResultPageActions.CLEAN_ERROR_STATE:
      return {
          ...state,
          error: '',
      };

    default:
      return state;
  }
}
