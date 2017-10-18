import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { UserService } from '../../services/user.service'

@Component({
    templateUrl: 'app/user/login.component.html'
})

export class LoginComponent {
    errorMessage:any
    constructor(private userService: UserService: UserService, private router:Router) {
    }
    login(user) {
        this.errorMessage=""
        let user = UserService.findUserByCredentials(user.username, user.password);
        if(user) {
            //redirect to /user/user.id
            this.router.navigate(['/user', user.id])
        }
        else {
            //show error message
            this.errorMessage="user not found."
        }
    }
}