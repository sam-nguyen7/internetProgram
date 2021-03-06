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
var UserService = (function () {
    function UserService() {
    }
    /* returns user in local users array if id matches userId*/
    UserService.prototype.findUserById = function (id) {
        return USERS.find(function (user) { return user.id === id; });
    };
    /* returns user in local users array if usernam matches username*/
    UserService.prototype.findUserByUsername = function (username) {
        return USERS.find(function (user) { return user.userName === username; });
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        return USERS.find(function (user) { return user.userName === username && user.password === password; });
    };
    UserService.prototype.createUser = function (regUser) {
        var id = (Math.random() * 100).toString;
        var idNum = String(Math.floor(Math.random() * 100));
        USERS.push({ id: idNum, userName: regUser.userName, password: regUser.userName, firstName: regUser.userName, lastName: regUser.userName });
        return USERS.find(function (user) { return user.userName === regUser.userName; });
    };
    UserService.prototype.updateUser = function (userId, updateForm) {
        var updatedUser = { id: userId, userName: updateForm.userName, password: updateForm.password, firstName: updateForm.first, lastName: updateForm.last };
        var i = USERS.findIndex(function (user) { return user.id === userId; });
        USERS.splice(i, 1);
        USERS.push(updatedUser);
    };
    UserService.prototype.deleteUser = function (id) {
        //if id matches userID then delete
        var i = USERS.findIndex(function (user) { return user.id === id; });
        USERS.splice(i, 1);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], UserService);
exports.UserService = UserService;
var USERS = [
    { id: "123", userName: "alice", password: "alice", firstName: "Alice", lastName: "Wonder" },
    { id: "234", userName: "bob", password: "bob", firstName: "Bob", lastName: "Marley" },
    { id: "345", userName: "charly", password: "charly", firstName: "Charly", lastName: "Garcia" },
    { id: "456", userName: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi" }
];
//# sourceMappingURL=user.service.js.map