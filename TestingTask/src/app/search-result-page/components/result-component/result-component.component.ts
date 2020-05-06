import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../../reducers';
import { Item } from 'src/app/models/search-page.modes';
import { getItems } from '../../../search-page/selectors/search-page.selector';
import { Observable, Subscription } from 'rxjs';
import { getQuickViewItems, getQuickViewLoadingStatus, getAnswerLoadingStatus, getErrorMessage } from '../../selectors/search-result-page.selector';
import { CleanQuickViewItem, CleanErrorState } from '../../actions/search-result-page.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result-component',
  templateUrl: './result-component.component.html',
  styleUrls: ['./result-component.component.scss']
})
export class ResultComponentComponent implements OnDestroy {

  public items$: Observable<Item[]>;
  public itemsQuickView$: Observable<Item[]>;
  public isLoading$: Observable<boolean>;
  public isLoadingAnswer$: Observable<boolean>;
  public errorMessageSubscribtion$: Subscription;

  constructor(
    private store: Store<State>,
    private router: Router,
  ) {
    this.items$ = this.store.select(getItems());
    this.itemsQuickView$ = this.store.select(getQuickViewItems());
    this.isLoading$ = this.store.select(getQuickViewLoadingStatus());
    this.isLoadingAnswer$ = this.store.select(getAnswerLoadingStatus());

    this.errorMessageSubscribtion$ = this.store.select(getErrorMessage()).subscribe(message => {
      if (message) {
        alert(message);
        this.store.dispatch(new CleanErrorState());
      }
    });
  }

  public onCloseQuickView(){
    this.store.dispatch(new CleanQuickViewItem());
  }

  public goBack() {
    this.router.navigate(['/search']);
  }

  public ngOnDestroy() {
    this.errorMessageSubscribtion$.unsubscribe();
  }
}
