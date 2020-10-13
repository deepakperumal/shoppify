import { Injectable } from '@angular/core'
import { URL } from 'config/config'
import { restUrl } from 'config/rest-api'
import { RestApiService } from 'core/services/rest-api.service'

 
@Injectable()

export class UserService
{

    constructor(private rest:RestApiService)
    {

    }
    
    register(payload)
    {
        return this.rest.post(`${URL}/${restUrl.register}`,payload)
    }
    login(payload)
    {
        return this.rest.post(`${URL}/${restUrl.login}`,payload)
    }

}