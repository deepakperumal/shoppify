import { Injectable } from '@angular/core'
import { CanActivate ,Router } from '@angular/router'
import { StorageService } from 'core/services/storage.service'

@Injectable()

export class AuthGuard implements CanActivate
{

    constructor(private router:Router,private storageService:StorageService)
    {

    }

    canActivate()
    {
        const token = this.storageService.getItem('token')
        if(!token)
        {
            this.router.navigate(['/auth'])
            return false; 
        }
        return true;


    }
 

}