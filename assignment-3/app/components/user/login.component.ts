import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { UserService } from '../../services/user.service'
import { NgModule } from '@angular/core'
import {FormsModule} from '@angular/forms'

@Component({
    templateUrl: 'app/components/user/login.component.html'
})

export class LoginComponent {
    errorMessage:any
    constructor(private userService: UserService, private route: Router) {
    }
    login(userForm) {
        this.errorMessage=""
        console.log(userForm);
        let user = this.userService.findUserByCredentials(userForm.userName, userForm.password);
        if(user) {

            //redirect to /user/user.id
            this.route.navigate(['/user', user.id])
        }
        else {
            //show error message
            this.errorMessage="user not found."
        }
    }
}