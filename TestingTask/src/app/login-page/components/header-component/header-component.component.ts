import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChangeStartPage } from '../../actions/login-page.action';
import { State } from '../../../reducers';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { TOKEN_KEY } from '../../../../constants/other-constants';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent {

  constructor(
    private store: Store<State>,
    private location: Location,
    private router: Router,
    ) { }

  public isLoginRoute(){
    return this.location.path() === '/login';
  }

  public onClick(action: string){
    if (action === 'logout'){
      localStorage.removeItem(TOKEN_KEY);
      this.router.navigate(['/login']);
    } else {
      this.store.dispatch(new ChangeStartPage(action === 'login'));
    }
  }

  public onClickLogo() {
    this.router.navigate(['/search']);
  }
}
