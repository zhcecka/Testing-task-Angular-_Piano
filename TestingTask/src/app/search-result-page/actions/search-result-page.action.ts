import { Action } from '@ngrx/store';
import { Item, Answer } from '../../models/search-page.modes';

export const GET_POPULAR_QUESTIONS = 'GET_POPULAR_QUESTIONS';
export const GET_POPULAR_QUESTIONS_SUCCESS = 'GET_POPULAR_QUESTIONS_SUCCESS';
export const GET_POPULAR_QUESTIONS_REJECT = 'GET_POPULAR_QUESTIONS_REJECT';

export const GET_POPULAR_QUESTIONS_BY_TAG = 'GET_POPULAR_QUESTIONS_BY_TAG';
export const GET_POPULAR_QUESTIONS_BY_TAG_SUCCESS = 'GET_POPULAR_QUESTIONS_BY_TAG_SUCCESS';
export const GET_POPULAR_QUESTIONS_BY_TAG_REJECT = 'GET_POPULAR_QUESTIONS_BY_TAG_REJECT';

export const GET_ANSWERS = 'GET_ANSWERS';
export const GET_ANSWERS_SUCCESS = 'GET_ANSWERS_SUCCESS';
export const GET_ANSWERS_REJECT = 'GET_ANSWERS_REJECT';

export const CLEAN_QUICK_VIEW_ITEM = 'CLEAN_QUICK_VIEW_ITEM';
export const CLEAN_ERROR_STATE = 'CLEAN_ERROR_STATE';

export class GetPopularQuestions implements Action {
    public readonly type = GET_POPULAR_QUESTIONS;
    constructor(
        public payload: number | string,
        public tag?: string,
        ) {}
}

export class GetPopularQuestionsSuccess implements Action {
    public readonly type = GET_POPULAR_QUESTIONS_SUCCESS;
    constructor(
        public payload: Item[],
        ) {}
}

export class GetPopularQuestionsReject implements Action {
    public readonly type = GET_POPULAR_QUESTIONS_REJECT;
    constructor(
        public payload: string,
        ) {}
}

export class GetPopularQuestionsByTag implements Action {
    public readonly type = GET_POPULAR_QUESTIONS_BY_TAG;
    constructor(
        public payload: string,
        ) {}
}

export class GetPopularQuestionsByTagSuccess implements Action {
    public readonly type = GET_POPULAR_QUESTIONS_BY_TAG_SUCCESS;
    constructor(
        public payload: Item[],
        ) {}
}

export class GetPopularQuestionsByTagReject implements Action {
    public readonly type = GET_POPULAR_QUESTIONS_BY_TAG_REJECT;
    constructor(
        public payload: string,
        ) {}
}

export class GetAnswers implements Action {
    public readonly type = GET_ANSWERS;
    constructor(
        public payload: number,
        ) {}
}

export class GetAnswersSuccess implements Action {
    public readonly type = GET_ANSWERS_SUCCESS;
    constructor(
        public payload: Answer[],
        ) {}
}

export class GetAnswersReject implements Action {
    public readonly type = GET_ANSWERS_REJECT;
    constructor(
        public payload: string,
        ) {}
}

export class CleanQuickViewItem implements Action {
    public readonly type = CLEAN_QUICK_VIEW_ITEM;

}

export class CleanErrorState implements Action {
    public readonly type = CLEAN_ERROR_STATE;

}

export type Actions = GetPopularQuestions |
                      GetPopularQuestionsSuccess |
                      GetPopularQuestionsReject |
                      CleanQuickViewItem |
                      GetPopularQuestionsByTag |
                      GetPopularQuestionsByTagSuccess |
                      GetPopularQuestionsByTagReject |
                      GetAnswers |
                      GetAnswersSuccess |
                      GetAnswersReject |
                      CleanErrorState;
