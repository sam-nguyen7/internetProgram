import { Component } from '@angular/core'
import { UserService } from '../../services/user.service'
import {Router} from '@angular/router'
import { Component } from '@angular/core'
import {Router, ActivatedRoute} from '@angular/router'
import {NgForm} from '@angular/forms'
import {AuthService} from './auth.service'
import { IUser } from './user.model'

@Component({
    templateUrl: 'app/components/user/register.component.html'
})

export class RegisterComponent {
    constructor(private auth: AuthService, private userService: UserService, private route: Router) { }

     registerUser(regUser){
        if(regUser.password === regUser.verifyPassword){
            let User = this.userService.createUser(regUser);
            this.router.navigate(['/user',User.id]);
        }
        else{
			console.log("something");
        }
    } 

    
}