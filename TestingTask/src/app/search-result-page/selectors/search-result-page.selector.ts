import { State } from '../../reducers';
import { SearchResultPageState } from '../reducers/search-result-page.reducer';
import { createSelector } from '@ngrx/store';
import { Item, Answer } from '../../models/search-page.modes';

export function getSearchResultPageState(state: State): SearchResultPageState {
    return state.searchResultPageReducer;
}

export const getQuickViewLoadingStatus = () => createSelector(
    getSearchResultPageState,
    (state: SearchResultPageState): boolean => state.isLoading,
);

export const getAnswerLoadingStatus = () => createSelector(
    getSearchResultPageState,
    (state: SearchResultPageState): boolean => state.isLoadingAnswer,
);

export const getQuickViewItems = () => createSelector(
    getSearchResultPageState,
    (state: SearchResultPageState): Item[] => state.itemsQuickView,
);

export const getAnswers = () => createSelector(
    getSearchResultPageState,
    (state: SearchResultPageState): Answer[] => state.answers,
);

export const getErrorMessage = () => createSelector(
    getSearchResultPageState,
    (state: SearchResultPageState): string => state.error,
);
