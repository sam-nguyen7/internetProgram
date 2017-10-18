import { Injectable } from '@angular/core'
import { IUser } from './components/user/user.model' 

@Injectable()

export class UserService
{
    /* returns user in local users array if id matches userId*/
    findUserById() :IUser[] {
        return USERS.find(user => user.id === id)
    }
    
    /* returns user in local users array if usernam matches username*/
    findUserByUsername() :IUser[] {
        return USERS.find(user => user.username === username)
    }

    findUserByCredentials() :IUser[] {
        return USERS.find(user.username === username && user.password === password)
    }

    /* need add, update and remove user */


}

const USERS:IUser[]=
[
    {id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder" },   
    {id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley" },  
    {id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia" },
    {id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi" }
]  
