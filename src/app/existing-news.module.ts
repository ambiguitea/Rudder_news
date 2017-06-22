import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NewsItemComponent }  from './newsitem.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ NewsItemComponent ],
  bootstrap:    [ NewsItemComponent ]
})
export class ExistingNewsModule { }
