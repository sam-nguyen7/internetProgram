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

    createUser(regUser) {
        let id =(Math.random()*100).toString;
        let idNum = String(Math.floor(Math.random()*100));
        USERS.push({id: idNum, userName: regUser.userName, password: regUser.userName, firstName: regUser.userName, lastName: regUser.userName});
        return USERS.find(user => user.userName === regUser.userName); 
		
	}
    
     updateUser(userId, updateForm) {
        let updatedUser = {id: userId, userName: updateForm.userName, password: updateForm.password, firstName: updateForm.first, lastName: updateForm.last};
        let i = USERS.findIndex(user => user.id === userId);
        USERS.splice(i,1);
        USERS.push(updatedUser);
    }
    
    deleteUser(id) {
        //if id matches userID then delete
        let i = USERS.findIndex(user => user.id === id);
        USERS.splice(i,1);
    }



}

const USERS:IUser[]=
[
    {id: "123", userName: "alice", password: "alice", firstName: "Alice", lastName: "Wonder" },   
    {id: "234", userName: "bob", password: "bob", firstName: "Bob", lastName: "Marley" },  
    {id: "345", userName: "charly", password: "charly", firstName: "Charly", lastName: "Garcia" },
    {id: "456", userName: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi" }
]  
