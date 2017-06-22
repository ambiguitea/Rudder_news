"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var NEWSITEMS = [
    { id: 1, state: 1, date: new Date(2017, 5, 31), text: "This is an item of news" },
    { id: 2, state: 1, date: new Date(2017, 6, 5), text: "This is another item of news" },
    { id: 3, state: 1, date: new Date(2017, 6, 12), text: "More news goes here" },
    { id: 4, state: 1, date: new Date(2017, 6, 17), text: "Some more exciting news." }
];
var NewsItemComponent = (function () {
    function NewsItemComponent() {
        this.newsitems = NEWSITEMS;
    }
    return NewsItemComponent;
}());
NewsItemComponent = __decorate([
    core_1.Component({
        selector: 'ex-newsitem',
        template: "\n  <ul>\n    <li *ngFor=\"let newsItem of newsitems\">\n    <p>ID: {{newsItem.id}}</p>\n    <p>Date: {{newsItem.date}}</p>\n    <p>{{newsItem.text}}</p>\n    <input type=\"button\" value=\"Edit\" />\n    <input type=\"button\" value=\"Delete\" />\n    </li>\n  </ul>\n  "
    })
], NewsItemComponent);
exports.NewsItemComponent = NewsItemComponent;
//# sourceMappingURL=newsitem.component.js.map