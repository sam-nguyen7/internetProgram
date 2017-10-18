"use strict";
var login_component_1 = require("./components/user/login.component");
var profile_component_1 = require("./components/user/profile.component");
var register_component_1 = require("./components/user/register.component");
exports.appRoutes = [
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'user/:uid', component: profile_component_1.ProfileComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'register', component: register_component_1.RegisterComponent },
];
//# sourceMappingURL=routes.js.map