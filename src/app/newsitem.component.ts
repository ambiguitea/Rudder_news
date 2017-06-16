/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import { Component } from '@angular/core';

@Component({
  selector: 'newsitem',
  template: `
    <p class="news-text"></p>
    <input type="button" value="Edit" />
    <input type="button" value="Delete" />
  `,
})

export class NewsItem  { }
