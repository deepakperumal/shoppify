import { Injectable } from '@angular/core'
import { RestApiService  } from 'core/services/rest-api.service'
import { restUrl } from  'config/rest-api'
import { URL } from 'config/config'


@Injectable()

export class AuthService {

    constructor(private rest:RestApiService)
    {

    }

    getUser(id:string)
    {
        return this.rest.get(`${URL}/${restUrl.getUser}/${id}`)
    }


}