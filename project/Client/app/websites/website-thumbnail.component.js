"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var WebsiteThumbnailComponent = (function () {
    function WebsiteThumbnailComponent() {
        this.eventClick = new core_1.EventEmitter();
    }
    WebsiteThumbnailComponent.prototype.handleMyClick = function () {
        this.eventClick.emit(this.website.name);
    };
    return WebsiteThumbnailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], WebsiteThumbnailComponent.prototype, "website", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], WebsiteThumbnailComponent.prototype, "eventClick", void 0);
WebsiteThumbnailComponent = __decorate([
    core_1.Component({
        selector: 'website-thumbnail',
        //templateUrl: 'app/websites/website-thumbnail.component.html'
        template: "\n<div class=\"well hoverwell thumbnail\">\n    <h2>{{website.name}}</h2>\n    <div>Created Date: {{website.createdDate}}</div>\n    <div>Time: {{website.createdTime}}</div>\n    <div>Description: {{website.description}}</div>\n    <div>Fee: ${{ website.membershipFee }}</div>\n    <div>\n    <span>{{website.ownerAddress.address}}</span>\n    <span>&nbsp;</span>\n    <span>{{website.ownerAddress.city}}</span>, <span>{{website.ownerAddress.country}}</span>\n    </div>\n    \n    <button class=\"btn btn-primary\" (click)=\"handleMyClick()\">Click me!</button>\n    </div>\n"
    }),
    __metadata("design:paramtypes", [])
], WebsiteThumbnailComponent);
exports.WebsiteThumbnailComponent = WebsiteThumbnailComponent;
//# sourceMappingURL=website-thumbnail.component.js.map