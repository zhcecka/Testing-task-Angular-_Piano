import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from '../../../reducers';
import { SearchQuestions, CleanErrorState } from '../../actions/search-page.action';
import { Observable, Subscription } from 'rxjs';
import { getLoadingStatus, getErrorMessage } from '../../selectors/search-page.selector';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss']
})
export class SearchComponentComponent implements OnDestroy{

  public search = new FormControl('');
  public isLoading$: Observable<boolean>;
  public errorMessageSubscribtion$: Subscription;

  constructor(
    private store: Store<State>,
  ) {
    this.isLoading$ = this.store.select(getLoadingStatus());
    this.errorMessageSubscribtion$ = this.store.select(getErrorMessage()).subscribe(message => {
      if (message) {
        alert(message);
        this.store.dispatch(new CleanErrorState());
      }
    });
  }

  public onSearch() {
    this.store.dispatch(new SearchQuestions(this.search.value));
  }

  public ngOnDestroy(){
    this.errorMessageSubscribtion$.unsubscribe();
  }
}
