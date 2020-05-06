import { Action } from '@ngrx/store';
import { Item } from '../../models/search-page.modes';

export const SEARCH_QUESTIONS = 'SEARCH_QUESTIONS';
export const SEARCH_QUESTIONS_SUCCESS = 'SEARCH_QUESTIONS_SUCCESS';
export const SEARCH_QUESTIONS_REJECT = 'SEARCH_QUESTIONS_REJECT';

export const CLEAN_ERROR_STATE = 'CLEAN_ERROR_STATE';

export class SearchQuestions implements Action {
    public readonly type = SEARCH_QUESTIONS;
    constructor(
        public payload: string,
        ) {}
}

export class SearchQuestionsSuccess implements Action {
    public readonly type = SEARCH_QUESTIONS_SUCCESS;
    constructor(
        public payload: Item[],
        ) {}
}

export class SearchQuestionsReject implements Action {
    public readonly type = SEARCH_QUESTIONS_REJECT;
    constructor(
        public payload: string,
        ) {}
}

export class CleanErrorState implements Action {
    public readonly type = CLEAN_ERROR_STATE;

}

export type Actions = SearchQuestions | SearchQuestionsSuccess | SearchQuestionsReject | CleanErrorState;
