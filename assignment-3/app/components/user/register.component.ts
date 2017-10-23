import { Component } from '@angular/core'
import { UserService } from '../../services/user.service'
import {Router} from '@angular/router'
import {NgForm} from '@angular/forms'
import { IUser } from './user.model'

@Component({
    templateUrl: 'app/components/user/register.component.html'
})

export class RegisterComponent {
    errorMessage:any
    user:IUser    

    constructor(private userService: UserService, private route: Router) {
        
    }

    register(registerForm)
    {
        if(registerForm.password == registerForm.password2 && registerForm.password!=null && registerForm.userName!=null && registerForm.firstName!=null && registerForm.lastName!=null)
        {
            let user =
            {
                userName: '',
                firstName:'',
                lastName:'',
                password:'',
            } as IUser
            user.userName = registerForm.username
            user.firstName = registerForm.firstname;
            user.lastName = registerForm.lastname
            user.password = registerForm.password

            this.userService.createUser(user)
            this.route.navigate(['/user',user.id])
        }
        else
        {
            this.errorMessage="Password is not right"
        }

    }

    update(userForm)
    {
        let user =
        {
            userName: '',
            firstName:'',
            lastName:'',
            password:'',
        } as IUser
        this.user = this.userService.findUserByUsername(userForm.username)
        console.log(this.user)
        user.userName = userForm.username
        user.firstName = userForm.firstname
        user.lastName = userForm.lastname
        user.password = userForm.password
        user.id = this.user.id
        this.userService.updateUser(this.user.id,userForm)
        }
    
}