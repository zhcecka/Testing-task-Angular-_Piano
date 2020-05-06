import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { switchMap, map, catchError } from 'rxjs/operators';
import { SearchService } from '../services/search-page.service';
import { Observable, of } from 'rxjs';
import * as searchPageActions from '../actions/search-page.action';
import { Router } from '@angular/router';
import { SearchResponse, Item } from '../../models/search-page.modes';

@Injectable()
export class SearchPageEffect {

  constructor(
    private actions: Actions,
    private searchService: SearchService,
    private router: Router,
  ) {
  }

  @Effect() public searchQuestions$: Observable<Action> = this.actions.pipe(
    ofType<searchPageActions.SearchQuestions>(searchPageActions.SEARCH_QUESTIONS),
    switchMap((action) => {
        return this.searchService.searchQuestions(action.payload).pipe(
          map((items: SearchResponse) => {
              this.router.navigate(['/result']);
              return new searchPageActions.SearchQuestionsSuccess(items.items as Item[]);
            }),
          catchError((error) => {
            return of(new searchPageActions.SearchQuestionsReject(error.message));
          }),
        );
      }),
    );


}
