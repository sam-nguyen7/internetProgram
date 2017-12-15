import { UserService } from '../../services/user.service'
import { Component } from '@angular/core'
import {Router, ActivatedRoute} from '@angular/router'
import {NgForm} from '@angular/forms'
import { IUser } from './user.model'

@Component({
    templateUrl: 'app/components/user/register.component.html'
})

export class RegisterComponent {
    constructor(private userService: UserService, private route: Router) { }

     registerUser(regUser){
        if(regUser.password === regUser.password2){
            console.log(regUser)
            let User = this.userService.createUser(regUser);
            this.route.navigate(['/user',User.id]);
            console.log("success")
        }
        else{
			console.log("wrong password");
        }
    } 

    
}