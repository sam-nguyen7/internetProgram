import { Component,OnInit } from '@angular/core'
import { UserService } from '../../services/user.service'
import { ActivatedRoute } from '@angular/router'
import { IUser } from './user.model'
import { FormsModule }   from '@angular/forms'
import { AuthService } from './auth.service'


@Component({
    templateUrl: 'app/components/user/profile.component.html'
})

export class ProfileComponent {

    user:IUser
    constructor(private auth: AuthService, private route: ActivatedRoute, private router:Router, private userService: UserService ) {
        
    }

    ngOnInit() {
        this.user = this.userService.findUserById(this.route.snapshot.params['uid'])
    }

    deleteAccount()
    {
        this.userService.deleteUser(this.user.id)
		this.router.navigate([/user/login])
    }

	update(updateForm){
		this.userService.updateUser(this.user.id, updateForm)
	}
}