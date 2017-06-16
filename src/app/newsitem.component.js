/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var NewsItem = (function () {
    function NewsItem() {
    }
    return NewsItem;
}());
NewsItem = __decorate([
    core_1.Component({
        selector: 'newsitem',
        template: "\n    <p class=\"news-text\"></p>\n    <input type=\"button\" value=\"Edit\" />\n    <input type=\"button\" value=\"Delete\" />\n  ",
    })
], NewsItem);
exports.NewsItem = NewsItem;
//# sourceMappingURL=newsitem.component.js.map