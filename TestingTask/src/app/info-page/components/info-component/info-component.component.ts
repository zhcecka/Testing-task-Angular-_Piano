import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../../reducers';
import { Observable } from 'rxjs';
import { Answer } from '../../../models/search-page.modes';
import { getAnswers } from '../../../search-result-page/selectors/search-result-page.selector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-component',
  templateUrl: './info-component.component.html',
  styleUrls: ['./info-component.component.scss']
})
export class InfoComponentComponent {

  public answers$: Observable<Answer[]>;

  constructor(
    private store: Store<State>,
    private router: Router,
  ) {
    this.answers$ = this.store.select(getAnswers());
   }

   public goBack() {
     this.router.navigate(['/result']);
   }

}
