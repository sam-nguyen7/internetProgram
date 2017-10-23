import { Component,OnInit } from '@angular/core'
import { UserService } from '../../services/user.service'
import { ActivatedRoute } from '@angular/router'
import { IUser } from './user.model';
import { FormsModule }   from '@angular/forms';

@Component({
    templateUrl: 'app/components/user/profile.component.html'
})

export class ProfileComponent implements OnInit{

    user:IUser
    constructor(private userService: UserService, private route: ActivatedRoute ) {
        
    }

    ngOnInit() {
        this.user = this.userService.findUserById(this.route.snapshot.params['uid'])
    }

    delete()
    {
        
        this.userService.deleteUser(this.userService.findUserById(this.user.id))
    }
}