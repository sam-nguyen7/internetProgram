import { Injectable } from '@angular/core'
import { IUser } from '../components/user/user.model' 

@Injectable()

export class UserService
{
    /* returns user in local users array if id matches userId*/
    findUserById(id) :IUser {
        return USERS.find(user => user.id === id)
    }
    
    /* returns user in local users array if usernam matches username*/
    findUserByUsername(username) :IUser {
        return USERS.find(user => user.userName === username)
    }

    findUserByCredentials(username, password) :IUser {
        return USERS.find(user => user.userName === username && user.password === password)
    }

    /* need add, update and remove user */


}

const USERS:IUser[]=
[
    {id: "123", userName: "alice", password: "alice", firstName: "Alice", lastName: "Wonder" },   
    {id: "234", userName: "bob", password: "bob", firstName: "Bob", lastName: "Marley" },  
    {id: "345", userName: "charly", password: "charly", firstName: "Charly", lastName: "Garcia" },
    {id: "456", userName: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi" }
]  
