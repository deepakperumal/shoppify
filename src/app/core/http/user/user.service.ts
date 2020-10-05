import { Injectable } from '@angular/core'
import { HttpClient  } from '@angular/common/http'

@Injectable()

export class UserService
{

    constructor(private http:HttpClient)
    {

    }
    
    register()
    {
        this.http.get('http://localhost:3000').subscribe(function(data){

            console.log(data)

        })
    }


}