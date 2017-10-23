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
var user_service_1 = require("../../services/user.service");
var router_1 = require("@angular/router");
var RegisterComponent = (function () {
    function RegisterComponent(userService, route) {
        this.userService = userService;
        this.route = route;
    }
    RegisterComponent.prototype.register = function (registerForm) {
        if (registerForm.password == registerForm.password2 && registerForm.password != null && registerForm.userName != null && registerForm.firstName != null && registerForm.lastName != null) {
            var user = {
                userName: '',
                firstName: '',
                lastName: '',
                password: '',
            };
            user.userName = registerForm.username;
            user.firstName = registerForm.firstname;
            user.lastName = registerForm.lastname;
            user.password = registerForm.password;
            this.userService.createUser(user);
            this.route.navigate(['/user', user.id]);
        }
        else {
            this.errorMessage = "Password is not right";
        }
    };
    RegisterComponent.prototype.update = function (userForm) {
        var user = {
            userName: '',
            firstName: '',
            lastName: '',
            password: '',
        };
        this.user = this.userService.findUserByUsername(userForm.username);
        console.log(this.user);
        user.userName = userForm.username;
        user.firstName = userForm.firstname;
        user.lastName = userForm.lastname;
        user.password = userForm.password;
        user.id = this.user.id;
        this.userService.updateUser(this.user.id, userForm);
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/components/user/register.component.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map