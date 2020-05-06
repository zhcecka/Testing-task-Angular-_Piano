import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopupComponentComponent } from './login-page/components/popup-component/popup-component.component';
import { HeaderComponentComponent } from './login-page/components/header-component/header-component.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { LoginService } from './login-page/services/login-page.service';
import { HttpClientModule } from '@angular/common/http';
import { InfoComponentComponent } from './info-page/components/info-component/info-component.component';
import { ResultComponentComponent } from './search-result-page/components/result-component/result-component.component';
import { SearchComponentComponent } from './search-page/components/search-component/search-component.component';
import { SearchService } from './search-page/services/search-page.service';
import { SearchPageEffect } from './search-page/effects/search-page.effect';
import { TableComponent } from './search-result-page/components/table/table.component';
import { SearchResultService } from './search-result-page/services/search-result.service';
import { SearchResultPageEffect } from './search-result-page/effects/search-result-page.effect';

@NgModule({
  declarations: [
    AppComponent,
    PopupComponentComponent,
    HeaderComponentComponent,
    InfoComponentComponent,
    ResultComponentComponent,
    SearchComponentComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    EffectsModule.forRoot([
      AppEffects,
      SearchPageEffect,
      SearchResultPageEffect,
    ]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [
    LoginService,
    SearchService,
    SearchResultService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
