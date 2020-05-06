import { State } from '../../reducers';
import { SearchPageState } from '../reducers/search-page.reducer';
import { createSelector } from '@ngrx/store';
import { Item } from '../../models/search-page.modes';

export function getSearchPageState(state: State): SearchPageState {
    return state.searchPageReducer;
}

export const getLoadingStatus = () => createSelector(
    getSearchPageState,
    (state: SearchPageState): boolean => state.isLoading,
);

export const getItems = () => createSelector(
    getSearchPageState,
    (state: SearchPageState): Item[] => state.items,
);

export const getErrorMessage = () => createSelector(
    getSearchPageState,
    (state: SearchPageState): string => state.error,
);
