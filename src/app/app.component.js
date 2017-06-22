"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'new-newsitem',
        template: "\n    <div class=\"newNews\">\n        <label>News:</label>\n        <input id=\"news-text\" type=\"text\" />\n        <input type=\"button\" value=\"Save\" />\n        <input type=\"button\" value=\"Discard\" />\n     </div>\n  ",
        styles: ["\n    .newNews {\n        margin: 40px 2.5%;\n        width: 95%;\n    }\n  \n    #news-text, label, div {\n        width: 100%;\n    }   \n    \n    div {\n        display: flex;\n        flex-wrap: wrap;\n    }\n    \n    #news-text {\n        height: 200px;\n    }\n    \n\n  "]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map