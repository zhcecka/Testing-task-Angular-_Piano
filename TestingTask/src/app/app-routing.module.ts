import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponentComponent } from './info-page/components/info-component/info-component.component';
import { PopupComponentComponent } from './login-page/components/popup-component/popup-component.component';
import { ResultComponentComponent } from './search-result-page/components/result-component/result-component.component';
import { SearchComponentComponent } from './search-page/components/search-component/search-component.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: 'login', component: PopupComponentComponent },
  { path: 'search', component: SearchComponentComponent, canActivate: [AuthGuard] },
  { path: 'result', component: ResultComponentComponent, canActivate: [AuthGuard] },
  { path: 'info', component: InfoComponentComponent, canActivate: [AuthGuard] },
  { path: '',   redirectTo: '/search', pathMatch: 'full' },
  { path: '**', component: SearchComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
