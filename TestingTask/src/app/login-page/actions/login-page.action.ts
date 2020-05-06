import { Action } from '@ngrx/store';

export const CHANGE_START_PAGE = 'CHANGE_START_PAGE';

export class ChangeStartPage implements Action {
    public readonly type = CHANGE_START_PAGE;
    constructor(
        public payload: boolean,
        ) {}
}

export type Actions = ChangeStartPage;
