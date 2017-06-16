import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NewsItem }  from './newsitem.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, NewsItem ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
