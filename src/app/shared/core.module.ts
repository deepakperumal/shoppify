import{ NgModule } from '@angular/core'

// Core Services

import { ToastrModule } from 'ngx-toastr';

// Custom Services
import { StorageService } from 'core/services/storage.service'
import { AuthGuard } from 'core/guards/auth-guard'
import { RestApiService } from 'core/services/rest-api.service'
import { CustomvalidationService } from 'core/services/custom-validation.service'

@NgModule({
    imports:[
        ToastrModule.forRoot()
    ],
    providers:[
        AuthGuard,
        StorageService,
        RestApiService
    ]
})

export class CoreModule
{

    static forRoot()
    {
        return {
            ngModule:CoreModule
        }
    }

}