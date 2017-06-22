import { Component } from '@angular/core';
import { News } from './news';

var NEWSITEMS: News[] = [
    {id: 1, state: 1, date: new Date(2017, 5, 31), text: "This is an item of news"},
    {id: 2, state: 1, date: new Date(2017, 6, 5), text: "This is another item of news"},
    {id: 3, state: 1, date: new Date(2017, 6, 12), text: "More news goes here"},
    {id: 4, state: 1, date: new Date(2017, 6, 17), text: "Some more exciting news."}
]

@Component({
  selector: 'ex-newsitem',
  template: `
  <ul>
    <li *ngFor="let newsItem of newsitems">
    <p>ID: {{newsItem.id}}</p>
    <p>Date: {{newsItem.date}}</p>
    <p>{{newsItem.text}}</p>
    <input type="button" value="Edit" />
    <input type="button" value="Delete" />
    </li>
  </ul>
  `
})

export class NewsItemComponent  {
    newsitems = NEWSITEMS;
    newsItem: News;
}
