import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import * as searchResultPageActions from '../actions/search-result-page.action';
import { Router } from '@angular/router';
import { SearchResponse, Item, Answer } from '../../models/search-page.modes';
import { SearchResultService } from '../services/search-result.service';
import { SEMICOIN_CODED } from '../../../constants/other-constants';
import { SearchQuestionsReject } from '../../search-page/actions/search-page.action';

@Injectable()
export class SearchResultPageEffect {

  constructor(
    private actions: Actions,
    private searchResultService: SearchResultService,
    private router: Router,
  ) {
  }

  @Effect() public getPopularQuestions$: Observable<Action> = this.actions.pipe(
    ofType<searchResultPageActions.GetPopularQuestions>(searchResultPageActions.GET_POPULAR_QUESTIONS),
    switchMap((action) => {
      return this.searchResultService.getPopularQuestions(action.payload).pipe(
        map((items: SearchResponse) => {
          if (action.tag) {
            let filterItems: Item[];

            filterItems = this.searchResultService.filterItems(items.items as Item[], action.tag);
            return new searchResultPageActions.GetPopularQuestionsSuccess(filterItems);
          } else {
            return new searchResultPageActions.GetPopularQuestionsSuccess(items.items as Item[]);
          }
        }),
        catchError((error) => {
          return of(new searchResultPageActions.GetPopularQuestionsReject(error.message));
        }),
      );
    }),
  );

  @Effect() public getPopularQuestionsByTag$: Observable<any> = this.actions.pipe(
    ofType<searchResultPageActions.GetPopularQuestionsByTag>(searchResultPageActions.GET_POPULAR_QUESTIONS_BY_TAG),
    switchMap((action) => {
        return this.searchResultService.getPopularQuestionsByTag(action.payload).pipe(
          map((items: SearchResponse) => {
              let ids = '';

              items.items.forEach((user) => ids = ids + `${user.user.user_id}${SEMICOIN_CODED}`);
              return new searchResultPageActions.GetPopularQuestions(ids.slice(0, -3), action.payload);
            }),
          catchError((error) => {
            return of(new searchResultPageActions.GetPopularQuestionsByTagReject(error.message));
          }),
        );
      }),
    );

  @Effect() public getAnswers$: Observable<any> = this.actions.pipe(
    ofType<searchResultPageActions.GetAnswers>(searchResultPageActions.GET_ANSWERS),
    switchMap((action) => {
      return this.searchResultService.getQuestionInfo(action.payload).pipe(
        map((items: SearchResponse) => {
            this.router.navigate(['/info']);
            return new searchResultPageActions.GetAnswersSuccess(items.items as Answer[]);
          }),
        catchError((error) => {
          return of(new searchResultPageActions.GetAnswersReject(error.message));
        }),
      );
    }),
  );


}
