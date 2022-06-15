import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppTypeBusinessComponent } from './app-type-business/app-type-business.component';
import { AppHomeComponent } from './app-home/app-home.component';

@NgModule({
  declarations: [
    AppComponent,
    AppTypeBusinessComponent,
    AppHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
