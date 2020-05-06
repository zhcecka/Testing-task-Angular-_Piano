import { Component, Input } from '@angular/core';
import { Item } from '../../../models/search-page.modes';
import { Store } from '@ngrx/store';
import { State } from '../../../reducers';
import { GetPopularQuestions, GetPopularQuestionsByTag, GetAnswers } from '../../actions/search-result-page.action';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input() items: Item[];

  constructor(
    private store: Store<State>,
  ) { }

  public onClickAuthor(id: number) {
    this.store.dispatch(new GetPopularQuestions(id));
  }

  public onGetMoreQuestionInfo(id: number) {
    this.store.dispatch(new GetAnswers(id));
  }

  public onClickTag(tag: string) {
    this.store.dispatch(new GetPopularQuestionsByTag(tag));
  }
}
