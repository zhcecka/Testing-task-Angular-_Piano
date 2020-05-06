import { Component } from '@angular/core';
import { Validators, AbstractControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from '../../../reducers';
import { getLoginStatus } from '../../selectors/login-page.selector';
import { Subscription } from 'rxjs';
import { LoginService } from '../../services/login-page.service';
import { Router } from '@angular/router';
import { PASSWORD_PATTERN, TOKEN_KEY } from '../../../../constants/other-constants';

@Component({
  selector: 'app-popup-component',
  templateUrl: './popup-component.component.html',
  styleUrls: ['./popup-component.component.scss']
})
export class PopupComponentComponent {

  public userForm = this.fb.group({
    name: ['', [Validators.required]],
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern(PASSWORD_PATTERN)]],
  });

  public isLogin$: Subscription;
  public isLogin: boolean;

  constructor(
    private fb: FormBuilder,
    private store: Store<State>,
    private loginService: LoginService,
    private router: Router,

  ) {
    this.isLogin$ = this.store.select(getLoginStatus()).subscribe((data) => {
      if (data){
        this.name.disable();
        this.userForm.reset();
      } else {
        this.name.enable();
        this.userForm.reset();
      }
      this.isLogin = data;
    });
  }

  onSubmit() {
    if (this.isLogin){
      this.loginService.sendUser(this.userForm.value).subscribe(
        (data: string) => {
          localStorage.setItem(TOKEN_KEY, data);
          this.router.navigate(['/search']);
        },
        (error) => alert(error.error),
      );
    } else {
      this.loginService.addUser(this.userForm.value).subscribe(
        (data: string) => {
          localStorage.setItem(TOKEN_KEY, data);
          this.router.navigate(['/search']);
        },
        (error) => alert(error.error),
      );
    }
  }

  get name() {
    return this.userForm.get('name');
  }

  get username() {
    return this.userForm.get('username');
  }

  get password() {
    return this.userForm.get('password');
  }

  public forgotPassword(){
    if (this.userForm.value.username){
      this.loginService.forgotPassword(this.userForm.value.username).subscribe(
        () => {
          alert('Password has been sent to your mail');
        },
        (error) => alert(error.error),
        );
    } else {
      alert('Please fill "EMAIL" field');
    }
  }

  public isShowValidation(field: AbstractControl) {
    return field.invalid && field.touched && field.dirty && !this.isLogin;
  }
}
