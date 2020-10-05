import { Component } from  '@angular/core'
import { UserService } from '../../core/http/user/user.service'


@Component({
        templateUrl:'./register.component.html'
})

export class RegisterComponent
{
        constructor(private userService:UserService)
        {
                console.log(userService.register())
        }


        
    
}